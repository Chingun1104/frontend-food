import { Facebook, HandPlatter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-black w-screen h-[755px] absolute" >
            <div className="bg-red-500 text-white  text-center flex gap-2 text-[10px] w-screen  justify-between mt-11  p-5">
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
            </div>
            <div className=" flex justify-between p-14 " >
                <div className=" flex gap-2 flex-row ">
                    <HandPlatter className="text-red-600 w-[43px] h-[43px]  mt-[3px]" />
                    <div className="">
                        <h1 className=" font-bold bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent text-[20px]">
                            NomNom
                        </h1>
                        <p className="text-white text-[12px] ">Swift delivery</p>
                    </div>
                </div>

                <div>
                    <h1 className=" text-gray-500">
                        NOMNOM
                    </h1>
                    <div className="text-white text-[13px]">
                        <p>Home</p>
                        <p>Contact Us</p>
                        <p>Delivery Zone</p>


                    </div>
                </div>
                <div>
                    <h1 className=" text-gray-500">
                        MENU
                    </h1>
                    <div className="text-white text-[13px]">
                        <div className="flex gap-12">
                            <div>
                                <p>Appetizers</p>
                                <p>Salads</p>
                                <p>Pizzas</p>
                                <p>Lunch favorites</p>
                                <p>Main dishes</p>
                            </div>
                            <div>
                                <p>Side dish</p>
                                <p>Brunch</p>
                                <p>Desserts</p>
                                <p>Beverages</p>
                                <p>Fish & Sea foods</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div>
               <h1 className=" text-gray-500">
                       FOLLOW US
                    </h1>
                
               <div className="flex gap-8">
               <Facebook color="#ffffff" />
               <Instagram color="#ffffff" />

               </div>

               </div>

            </div>
        </div>
    )
}