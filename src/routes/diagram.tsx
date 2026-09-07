import digImg from "@/assets/digImg.png"

export function Diagram(){
    return(
        <div>
            <img
               src={digImg}
               alt=""
               width={1600}
               height={1024}
               className="h-full w-full object-cover opacity-40"
            />
        </div>
    )
}