pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:20-alpine
    command: ["sleep"]
    args: ["99d"]
  - name: docker
    image: docker:24.0.5-dind
    securityContext:
      privileged: true
"""
        }
    }

    environment {
        DOCKER_IMAGE = "sergiogg06/portafolioreact"
        DOCKER_TAG = "latest"
    }

    stages {
        // Borramos el stage de Checkout manual porque Jenkins lo hace solo al inicio
        
        stage('Install & Build') {
            steps {
                container('node') {
                    // Aquí la Swap de 2GB es vital
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                container('docker') {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DUSER', passwordVariable: 'DPASS')]) {
                        sh "echo \$DPASS | docker login -u \$DUSER --password-stdin"
                        sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                        sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                }
            }
        }

        stage('Deploy to K8s') {
            steps {
                // Esto actualizará tu App en el clúster automáticamente
                sh "microk8s kubectl rollout restart deployment portafolioreact-deployment || echo 'Primer despliegue'"
            }
        }
    }
}