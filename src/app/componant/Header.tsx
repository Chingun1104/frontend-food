import { Button } from "@/components/ui/button";
import { HandPlatter, MapPin, MapPinIcon } from "lucide-react";

export default function Header() {
    return (
        <div>
            <div className="bg-black h-[68px] w-full">
                <div className="justify-between flex p-2">
                    <div className=" flex gap-2 flex-row">
                        <HandPlatter className="text-red-600 w-[43px] h-[43px] ml-[80px] mt-[3px]" />
                        <div className="">
                            <h1 className=" font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent text-[20px]">
                               NomNom
                            </h1>
                            <p className="text-white text-[12px] ">Swift delivery</p>
                        </div>
                    </div>
                    <div className="p-[7px] flex gap-2 ">
                        <div>
                            <Button className="bg-white rounded-3xl h-[36px] "> <MapPin className="text-black" />  <span className="text-red-700">Delivery address:</span> <span className="text-black">Add Location</span></Button>
                        </div>

                        <div><Button className="bg-white text-black rounded-3xl h-[36px]">Sign up</Button></div>
                        <div>
                            <Button className="bg-red-600 rounded-3xl  h-[36px] ">Log in</Button>

                        </div>




                    </div>

                </div>

            </div>
        </div>
    )
}