import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from './../actions';
import ProductList from './ProductList';


const Home = () => {
 
    const mydata = useSelector(state=>state.StoreData.products);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(fetchProducts());
    },[]);

    return (
        <>

         

            <div className="container">
                <div className="row">
                    
                       
                       {
                        mydata.map((item)=>{

                          return  <ProductList prditem={item} key={item.id} />
                          

                        })
                    }
                    
                        
                </div>
             </div>   

        
        </>
    );
}

export default Home;