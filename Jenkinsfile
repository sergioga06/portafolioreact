pipeline {
  agent {
    kubernetes {
      yaml """
  apiVersion: v1
  kind: Pod
  spec:
    containers:
    - name: kaniko
      image: gcr.io/kaniko-project/executor:debug
      command:
        - /busybox/cat
      tty: true
      volumeMounts:
        - name: docker-config
          mountPath: /kaniko/.docker

    volumes:
      - name: docker-config
        secret:
          secretName: dockerhub-secret
  """
    }
  }

  environment {
    // Aquí defines tu imagen real de Docker Hub
    IMAGE = "sergiogg06/portafolioreact" 
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build & Push Image') {
      steps {
        container('kaniko') {
          // Usamos Kaniko para construir y subir la imagen directamente a Docker Hub
          sh """
          /kaniko/executor \
            --context `pwd` \
            --dockerfile deploy/Dockerfile \
            --destination ${IMAGE}:${GIT_COMMIT} \
            --destination ${IMAGE}:latest \
            --snapshot-mode=redo \
            --single-snapshot
          """
        }
      }
    }
  }
} 