import { notFound } from 'next/navigation';
import Link from 'next/link';
import prisma from '../../../lib/prisma'
import Image from 'next/image'

interface Props{
    params : Promise<{id:string}>
}


export default async function Page({params} : Props) {

    const {id : idParam} = await params;
    const id = Number(idParam);
    if(isNaN(id) || id < 0 || !Number.isInteger(id)){
        notFound()
    }
    
    const producto = await prisma.service.findUnique({
        where: { id : id }
    })

    return (
        <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
            <nav aria-label="Navegación del servicio" className="mb-8 flex items-center justify-between gap-4 border-b border-stone-200 pb-6">
                <Link href="/" className="font-serif text-xl tracking-wide text-[#465438] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#465438]">
                    SaintBody <span className="font-sans text-xs tracking-widest">SPA</span>
                </Link>
                <Link href="/" className="rounded-full px-3 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#465438]">
                    <span aria-hidden="true">← </span>Volver a servicios
                </Link>
            </nav>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
                <section aria-labelledby="service-title" className="min-w-0">
                    
                    <div className="flex aspect-4/3 items-center justify-center rounded-3xl border border-stone-200 bg-[#e9eade] sm:aspect-3/2">
                        <Image src={producto?.img ?? "servicio no encontrado"} alt='Imagen de servicio'/>
                    </div>

                    <div className="pt-8 sm:pt-10">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#59634c]">Tu momento de bienestar</p>
                        <h1 id="service-title" className="font-serif text-4xl leading-tight tracking-tight text-stone-800 sm:text-5xl">
                            {producto?.name ?? "Servicio no encontrado"}
                        </h1>
                        
                        <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">{producto?.description ?? "Servicio no encontrado"}</p>
                    </div>
                </section>

                <aside aria-labelledby="booking-title" className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#59634c]">Reserva tu experiencia</p>
                    <h2 id="booking-title" className="font-serif text-3xl text-stone-800">Un espacio para ti</h2>
                    <p className="mt-3 text-sm leading-6 text-stone-600">Elige el momento ideal para tu visita a SaintBody.</p>

                    <div className="my-6 border-y border-stone-200 py-5">
                        <p className="text-sm text-stone-500">Precio del servicio</p>
                        
                        <p className="mt-2 text-3xl font-semibold tracking-tight text-[#465438]">{producto?.price.toFixed(2)}</p>
                    </div>

                    {/* Aquí irá el selector de fecha y horario que construirás después. */}
                    <div className="rounded-2xl border border-dashed border-[#cbd1c1] bg-[#f6f7f2] p-5">
                        <h3 className="text-sm font-medium text-[#465438]">Fecha y horario</h3>
                        <p className="mt-2 text-sm leading-6 text-stone-600">La selección de horarios estará disponible próximamente.</p>
                    </div>
                </aside>
            </div>
        </main>
    );
}
