import ProjectsList from '@/components/www/proyectos/ProjectsList'
import React from 'react'

export const Proyecto = () => {
  return (
    <section className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-foreground mb-4">
          Mis <span className="text-primary">Proyectos</span>
        </h1>
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          Explora los trabajos más recientes en los que he aplicado mis conocimientos de desarrollo web y redes.
        </p>
        <ProjectsList />
      </div>
    </section>
  )
}