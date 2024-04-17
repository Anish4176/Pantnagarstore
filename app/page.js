import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Category from "@/components/Category";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
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
    {/* <Category/> */}
    <Faq/>
    <Stats/>
    {/* <Gallery/> */}
    <Banner/>
    </div>
    </>
  )
}
