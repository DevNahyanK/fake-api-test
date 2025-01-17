import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Fruits from "@/components/Fruits";
// import Fruits from "@/components/fruits";



export default function Home() {
    return(
        <div>
            <Header />
            <Fruits />

    <img   src="https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress" alt="bg img"  width="400"></img>
    
</div>


    )
 
}
