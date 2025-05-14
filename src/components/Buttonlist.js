import React from 'react'
import Button from './Button'

const Buttonlist = () => {

  const list=["All","Music","Mixes","Amitabh Bhattacharya","T-Series","Live","Kriti Sanon","Selena Gomez","Interscope Rounds","Coldplay","News"
    ,"Gulshan Kumar","Dua Lipa","Podcasts","Soul Music"
  ]

  return (
    <div>
    <div className='flex overflow-x-auto space-x-2'>
      {
        list.map((item)=>{
          return <Button name={item}/>
        })
      }
    
    </div>
    </div>
    
  )
}

export default Buttonlist