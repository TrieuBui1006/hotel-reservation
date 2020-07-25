import React, { useState } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

import Title from './Title'

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: 'Free cocktails',
      info:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      icon: <FaHiking />,
      title: 'Endless Hiking',
      info:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free shuttle',
      info:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      icon: <FaBeer />,
      title: 'Strongest Beer',
      info:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
  ])

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article className="service" key={index}>
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
