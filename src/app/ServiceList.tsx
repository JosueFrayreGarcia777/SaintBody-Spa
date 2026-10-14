import prisma from '../lib/prisma'
import ServiceCard from './_components/ServiceCard'


export default async function ServiceList() {

    const services = await prisma.service.findMany({
        where: { isActive: true }
    })
    return (
        <>
            {
                <div className="grid gap-6 lg:grid-cols-2">
                    {services.map((service) => (
                        <ServiceCard key={service.id} id={service.id} name={service.name} description={service.description} price={service.price} img={service.img} />
                    ))}
                </div>
            }
        </>
    )
}
