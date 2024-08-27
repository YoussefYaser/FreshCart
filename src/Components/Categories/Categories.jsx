import './Categories.css'
import ApiLoading from '../Api Loading/ApiLoading'
import { getCategories } from '../../jsFunctions/Api/getCategories';
import useQueryCategories from '../../Hooks/useQueryCategories';
import { Link } from 'react-router-dom';

export default function Categories() {


    let { data : response, isLoading, isError, error } = useQueryCategories(getCategories);


    if (isLoading) {
        return (
            <>
                <ApiLoading></ApiLoading>
            </>
        )
    }
    else {
        if (isError) {
            return (
                <>
                    <section className='categories py-5'>
                        <div className="container">
                            {error.message}
                        </div>
                    </section>
                </>
            )
        }
        else {
            return (
                <>
                    <section className='categories py-5 px-2 px-sm-0 overflow-hidden'>
                        <div className="container">
                            <h2 className='h1 text-center text-capitalize mb-5'>categories</h2>
                            <div className="row g-5">
                                {response.data.map((elem) => <div key={elem._id} className=" col-lg-4 col-md-6">
                                    <Link to={`/productsBy/categories/${elem._id}`} style={{color : 'black'}}>
                                        <div className="inner shadow rounded overflow-hidden" >
                                            <img src={elem.image} className=' w-100 object-fit-cover' alt="" />
                                            <h2 className=' text-center p-2'>{elem.name}</h2>
                                        </div>
                                    </Link>
                                </div>)}

                            </div>
                        </div>
                    </section>
                </>
            )

        }
    }
}
