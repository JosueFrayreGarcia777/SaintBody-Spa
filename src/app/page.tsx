import { Suspense } from "react";
import ServiceList from "./ServiceList";

export default function Home() {



  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <h1 className="mb-8 font-serif text-4xl tracking-tight text-stone-800 sm:text-5xl"> Servicios </h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ServiceList/>
      </Suspense>
      
    </div>
  );
}
