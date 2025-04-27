import ProjectsList from '@/components/www/proyectos/ProjectsList'
import React from 'react'

export const Proyecto = () => {
  return (
    <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Mis Proyectos</h1>
      <p className="text-lg text-gray-600 mb-12">
        Mira los proyectos en los que estoy trabajando como desarrollador web
      </p>
      <ProjectsList />
    </div>
  </section>
  )
}
