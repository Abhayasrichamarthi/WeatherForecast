import React from 'react'

function TopButtons({setQuery}) {

    const cities =[
        {
            id:1,
            title: 'Berlin'
        },
        {
            id:2,
            title: 'Paris'
        },
        {
            id:3,
            title: 'Tokyo'
        },
        {
            id:4,
            title: 'Toronto'
        },
        {
            id:5,
            title: 'Sydney'
        }

    ]

    return <div className="flex items-center justify-around my-6">
        {cities.map((city)=> (
           <button key={city.id} className=" text-white text-lg font-medium"
            onClick={()=>setQuery({q:city.title})   }
           
           > {city.title}
            </button>

        ))

        }


    </div>

}

export default TopButtons