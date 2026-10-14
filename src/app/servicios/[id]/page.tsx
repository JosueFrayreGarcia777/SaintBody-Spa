import { Suspense } from "react";
import ServicesDetails from "../ServicesDetails";

interface Props {
    params : Promise<{id : string}>
}


export default function Page({params} : Props) {


    return (

        <Suspense fallback={<p>Loading feed...</p>}>
            <ServicesDetails params={params}/>
        </Suspense>
       
    );
}
