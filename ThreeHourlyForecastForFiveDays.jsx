import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";
function ThreeHourlyForecastForFiveDays({title, items , header}){

    
    const row_Header = header;
  //  console.log(row_Header);
    const col_Header =
    [
        {
            id :1,
            value :"00:00 AM"
        },
        {
            id :2,
            value :"03:00 AM"
        },
        {
            id :3,
            value :"06:00 AM"
        },
        {
            id :4,
            value :"09:00 AM"
        },
        {
            id :5,
            value :"12:00 PM"
        },
        {
            id :6,
            value :"03:00 PM"
        },
        {
            id :7,
            value :"06:00 PM"
        },
        {
            id :8,
            value :"09:00 PM"
        }
    ]
    
    return ( 
        <div>
             <div className= " flex items-center justify-start mt-6  " >         
                <p className= " text-white font-bold uppercase ">
                    {title}
                </p>
            </div>
            
            <hr className= "my-2"/>

            <div className=" grid grid-cols-9 grid-rows-7  items-center   text-white ">

                {col_Header.map((col_head) =>(

                    <div className={` row-span-1 col-start-${col_head.id+1}  `}>
                            <p className=' font-light text-md  '>
                            { col_head.value}
                            </p>
                        </div> 
                    ))
                }
            < div className=" row-start-2 row-end-2"> 
                            <div className=" grid grid-col items-center justify-center ">
                             <p className=' font-light text-md  '>
                            {row_Header[0]}
                             </p>
                            </div>                     
                        </div>
            < div className=" row-start-3 row-end-3"> 
                            <div className=" grid grid-col items-center justify-center ">
                            <p className=' font-light text-md  '>
                            {row_Header[1]}
                             </p>
                            </div>                     
             </div>
                        < div className=" row-start-4 row-end-4"> 
                            <div className=" grid grid-col items-center justify-center ">
                            <p className=' font-light text-md  '>
                            {row_Header[2]}
                             </p>
                            </div>                     
                        </div>
                        < div className=" row-start-5 row-end-5"> 
                            <div className=" grid grid-col items-center justify-center ">
                            <p className=' font-light text-md  '>
                            {row_Header[3]}
                             </p>
                            </div>                     
                        </div>
                        < div className=" row-start-6 row-end-6"> 
                            <div className=" grid grid-col items-center justify-center ">
                            <p className=' font-light text-md  '>
                            {row_Header[4]}
                             </p>
                            </div>                     
                        </div>
                        < div className=" row-start-7 row-end-7"> 
                            <div className=" grid grid-col items-center justify-center ">
                            <p className=' font-light text-md  '>
                            {row_Header[5]}
                             </p>
                            </div>                     
                        </div>

                   

            {items.map((item) =>(

                    item.col === "00" ? 
                    
                        < div className=" col-start-2 col-end-2"> 
                            <div className=" grid grid-col items-center justify-center ">
                                 <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                                <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                                <p className=' font-light text-sm '> {item.description} </p>                            
                            </div>                     
                    </div>
                                     
                    :  item.col === "03" ? < div className=" col-start-3 col-end-3 "> 
                        <div className=" grid grid-col items-center justify-center ">
                        <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                        <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                        <p className=' font-light text-sm '> {item.description} </p>
                    </div>
                    
                    </div> 
                    
                    :  item.col === "06" ? < div className=" col-start-4 col-end-4 "> 
                        <div className=" grid grid-col items-center justify-center ">
                        <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                        <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                        <p className=' font-light text-sm '> {item.description} </p>
                    </div>
                    
                    
                    </div> 
                    :  item.col === "09" ? < div className="col-start-5 col-end-5 "> 
                    
                         <div className=" grid grid-col items-center justify-center ">
                            <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                            <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                            <p className=' font-light text-sm '> {item.description} </p>
                        </div>
                    
                    
                    </div> 
                    :  item.col === "12" ? < div className=" col-start-6 col-end-6"> 
                                 <div className=" grid grid-col items-center justify-center ">
                            <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                            <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                            <p className=' font-light text-sm '> {item.description} </p>
                        </div>
                    
                        </div> 
                    :  item.col === "15" ? < div className=" col-start-7 col-end-7 "> 
                    
                    <div className=" grid grid-col items-center justify-center ">
                            <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                            <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                            <p className=' font-light text-sm '> {item.description} </p>
                        </div>
                    
                    
                        </div> 
                    :  item.col === "18" ? < div className=" col-start-8 col-end-8 "> 
                                 <div className=" grid grid-col items-center justify-center ">
                            <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                            <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                            <p className=' font-light text-sm '> {item.description} </p>
                        </div>
                    
                    
                        </div> 
                    :  item.col === "21" ? < div className=" col-start-9 col-end-9 "> 
                                 <div className=" grid grid-col items-center justify-center ">
                            <img src ={iconUrlFromCode(item.icon)} className=' w-12 my-1 ' alt="" ></img>
                            <p className=' font-light  '> {`${item.temp.toFixed()}° | `}{`${item.feels_like.toFixed()}°`} </p>
                            <p className=' font-light text-sm '> {item.description} </p>
                        </div>
                    
                        </div> 
                    :< div className=" grid grid-col-span-1 "> grid3 </div> 
                    ))}
                
                   
       
     </div>
     </div>
    );
}

export default ThreeHourlyForecastForFiveDays;