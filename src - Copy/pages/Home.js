import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { allPost } from './../actions';
import ProductList from './ProductList';


const Home = () => {
 
    const mydata = useSelector(state=>state.StoreData.AllPosts);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(allPost());
    },[]);

    return (
        <>

         

            <div className="container">
                <div className="row">
                    
                       
                       {
                        mydata.map((item)=>{

                          return  <ProductList prditem={item} key={item.productId} />
                          

                        })
                    }
                    
                        
                </div>
             </div>   

        
        </>
    );
}

export default Home;