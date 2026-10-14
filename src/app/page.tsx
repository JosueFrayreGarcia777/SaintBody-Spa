import  prisma  from '../lib/prisma'
import ServiceCard from './_components/ServiceCard';

export default async function Home() {

  const servicios = await prisma.service.findMany({where : {isActive : true}});

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="mb-8 font-serif text-4xl tracking-tight text-stone-800 sm:text-5xl"> Servicios </h1>

      {
        <div className="grid gap-6 lg:grid-cols-2">{servicios.map((servicio)=>(
          <ServiceCard key={servicio.id} id={servicio.id} name={servicio.name} description={servicio.description} price={servicio.price} img={servicio.img} />
        ))}</div>
      }
    </div>
  );
}
