import useQueryBrands from '../../Hooks/useQueryBrands'
import './Brands.css'
import getBrands from '../../jsFunctions/Api/getBrands'
import ApiLoading from '../../Components/Api Loading/ApiLoading'
import { Link} from 'react-router-dom';

export default function Brands() {

    let { data: response, isLoading, isError, error } = useQueryBrands(getBrands);


    if (isLoading) {
        return (
            <div className=' py-5'>
                <ApiLoading></ApiLoading>
            </div>
        )
    }
    else {
        if (isError) {
            return (
                <section className='brands py-5'>
                    <div className="container">
                        {error.message}
                    </div>
                </section>
            )
        }
        else {
            return (
                <div className='brands py-5 overflow-hidden'>
                    <div className="container">
                    <h2 className='h1 text-center text-capitalize mb-5'>brands</h2>
                        <div className="row g-5">
                            {response.data.map((elem) => <div key={elem._id} className=" col-lg-4 col-md-6">
                                <Link  to={`/productsBy/brands/${elem._id}`} style={{color : 'black'}}>
                                    <div className="inner shadow rounded overflow-hidden" >
                                        <img src={elem.image} className=' w-100 object-fit-cover' alt="" />
                                        <h2 className=' text-center p-2'>{elem.name}</h2>
                                    </div>
                                </Link>
                            </div>)}

                        </div>
                    </div>
                </div>
            )
        }
    }


}
