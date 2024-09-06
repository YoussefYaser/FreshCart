import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CatSlider from '../Slider/Slider'
import './Home.css'


export default function Home() {

    function resetScroll(){
        window.scrollTo(0, 0);
    }

    return (
        <section className='home px-sm-0 px-3 overflow-hidden'>
            <div className="container py-5 ">
                <div className=' py-4 mb-5'>
                    <CatSlider></CatSlider>
                </div>
                <FeaturedProducts></FeaturedProducts>
            </div>

            <div className='reset-scroll bg-danger position-fixed d-flex xy-center bg-black text-white rounded-circle' onClick={resetScroll}>
                <i className="fa-solid fa-up-long" />
            </div>
        </section>
    )
}
