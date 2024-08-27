import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ApiLoading from "../Api Loading/ApiLoading";
import { useParams } from "react-router-dom";
import ProductsItem from "../ProductsItem/ProductsItem";

export default function ProductsBy() {

    let {id, by} = useParams();

    
    function getProductBy(endPoint, id){
        endPoint = (endPoint == 'categories')? 'category[in]' : 'brand';
        
        return  axios.get(`https://ecommerce.routemisr.com/api/v1/products?${endPoint}=${id}`);
    }

    const {data:response, isLoading, isError, error} = useQuery({
        queryKey : ['productsBy', by, id], 
        queryFn : ({queryKey})=>{

            return getProductBy(queryKey[1], queryKey[2]);
        }, 
        select : (data)=>data.data
    })
    

    if(isLoading){
        return(
            <ApiLoading></ApiLoading>
        )
    }
    else{
        if(isError){
            return (
                <section className="productsBy py-5">
                    <div className="container">
                        {error.message}
                    </div>
                </section>
            )
        }
        else{
            return (
                <section className="productsBy py-5">
                    <div className="container">
                        <div className="row g-4">
                            {/* {isFetching?<ApiLoading grayed={{width : '100%' , height : '100%', backgroundColor : '#808080b8', position : 'absolute' }} ></ApiLoading>
                                :''
                            } */}
                            
                            {!response.data.length?<p className=" text-center">No product found</p> : response.data.map((elem)=>{
                                return <ProductsItem key={elem._id} prodItem={elem}></ProductsItem>
                            })}
                        </div>
                    </div>
                </section>
            )
        }
    }

}
