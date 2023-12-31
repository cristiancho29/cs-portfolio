'use client'
import Image from 'next/image'
import classNames from 'classnames'
import bcPhoto from '@/assets/images/bc.png'
import capacityLandingPhoto from '@/assets/images/capacity-landing.png'
import capacityPhoto from '@/assets/images/capacity.png'
import edgeWebsitePhoto from '@/assets/images/edge_website.png'
import { useIntersectionObserverState } from '@/hooks/useIntersectionObserver'

const projects = [
  {
    title: 'Edge Capacity',
    image: capacityPhoto,
    description:
      'Site for Edge Carriers related to the Logistics Industry, letting them to bid or book any new order to be generated',
  },
  {
    title: 'Edge Logistics Website',
    image: edgeWebsitePhoto,
    description:
      'Website with all the information related to Edge Logistics Products, Services and Important information',
  },
  {
    title: 'Edge Capacity Landing Page',
    image: capacityLandingPhoto,
    description: 'Static Website to give a brief summary of how Edga Capacity works and looks',
  },
  {
    title: 'Building Connected',
    image: bcPhoto,
    description:
      'A Platform user for various companies to create projects related an specific topic, shareable with your team and add bid to that project proposal',
  },
]

const Projects = () => {
  const { cbRef, hidden } = useIntersectionObserverState({ threshold: 0.1 })

  return (
    <section
      id="projects"
      ref={cbRef}
      className={classNames('bg-slate-700 pt-6 w-full not-mobile:px-11 px-5', {
        invisible: hidden,
      })}
    >
      <h1
        className={classNames('text-slate-400 font-bold text-4xl', {
          'slide-in-title': !hidden,
        })}
      >
        Featured Projects
      </h1>
      <div
        className={classNames(
          'grid grid-cols-1 not-mobile:grid-cols-2 justify-items-center gap-y-4 gap-x-8 pt-8',
          { 'slide-in-content': !hidden }
        )}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className="not-mobile:w-[100%] not-mobile:h-[100%] bg-slate-400 rounded-lg text-slate-800"
          >
            <Image alt="project_photo" src={project.image} className="rounded-t-lg max-h-[210px]" />
            <h2 className="font-medium px-2 pt-2">{project.title}</h2>
            <p className="px-2 mt-2 text-sm text-slate-700">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
