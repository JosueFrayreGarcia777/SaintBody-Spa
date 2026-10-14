import { Decimal } from "@prisma/client/runtime/index-browser";
import Image from 'next/image'
import Link from "next/link";


interface Props {
    id : number;
    name: string;
    description: string;
    price: Decimal;
    img: string;
}


export default function ServiceCard({ name, description, price, img , id}: Props) {
    return (
        <>

            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <Image className="h-56 w-full object-cover" src={img ?? null} alt={name} width={640} height={400}/>
                    <div className="flex flex-1 flex-col p-6 leading-normal">
                        <h5 className="mb-3 font-serif text-2xl tracking-tight text-stone-800">{name}</h5>
                        <p className="mb-5 text-sm leading-7 text-stone-600">{description}</p>
                        <p className="mb-6 text-lg font-semibold text-[#465438]"> ${price.toFixed(2)}</p>
                        <div className="mt-auto">
                            <Link href={`/servicios/${id}`} className="inline-flex items-center gap-2 rounded-full bg-[#465438] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#35402b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#465438]">
                                Reservar
                                <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                            </Link>
                        </div>
                    </div>
            </div>

        </>
    );
}
