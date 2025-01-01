
import Image from "next/image";
import React from "react";

const molds = ({params}: {params : {molds:string, price:number }}) => {
    const moldsName = params.molds.toLowerCase()
    const imagePath = `/${moldsName}.jpg`
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{params.molds}</h1>
            <h2 className="text-xl text-gray-500">{params.price}</h2>
            <Image width={500} height={300} src={imagePath} alt={imagePath} />
        </div>
    )
}
export default molds




