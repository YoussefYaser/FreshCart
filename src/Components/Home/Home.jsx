import { useDispatch } from 'react-redux';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CatSlider from '../Slider/Slider'
import './Home.css'
import { useQuery } from '@tanstack/react-query';
import getWishlist from '../../jsFunctions/Api/getWishlist';
import { useEffect } from 'react';
import { setWishlistItems } from '../../libs/slices/wishlistSlice';


export default function Home() {

    const dispatch = useDispatch();

    let { data: response, isSuccess } = useQuery({
        queryKey: ['wishlist'],
        queryFn: getWishlist,
        select: (data) => data.data
    });

    useEffect(() => {
        if (isSuccess) {
            dispatch(setWishlistItems(response.data.map((elem) => elem.id)));
        }
    }, [isSuccess]);

    return (
        <section className='home px-sm-0 px-3 overflow-hidden'>
            <div className="container py-5 ">
                <div className=' py-4 mb-5'>
                    <CatSlider></CatSlider>
                </div>
                <FeaturedProducts></FeaturedProducts>
            </div>
        </section>
    )
}
