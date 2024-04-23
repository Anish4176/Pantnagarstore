import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Faq from "@/components/Faq";
import Slider from "@/components/Slider";
import Stats from "@/components/Stats";
import WorkFlow from "@/components/WorkFlow";


export default function Home() {
  
  return(
    <>
    <div>  
    <Slider/>
    <Cards/>
    <WorkFlow/>
    <Faq/>
    <Stats/>
    <Banner/>
    </div>
    </>
  )
}
