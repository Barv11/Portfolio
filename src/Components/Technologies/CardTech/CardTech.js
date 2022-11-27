import React from 'react'
import s from "./CardTech.module.css"

export default function CardTech({tech}) {

    const {img, name} = tech
  return (
    <div className={s.container}>
        <div className={s.contimg}><img src={img} alt={name} /></div>
        <span>{name}</span>
    </div>
  )
}
