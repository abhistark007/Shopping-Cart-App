import { useEffect, useState } from "react";
import './Home.css'
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
    }catch(e){
      console.log("error occured");
      console.log(e.message);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (

    <div className="w-[90%] mx-auto my-32 flex flex-wrap">
      {
        loading ? (
          <div className="h-96 w-full flex justify-center items-center">
            <div className="custom-loader">
    
            </div>
          </div>)
    
          : posts.length>0?
          (<div className="flex flex-wrap gap-6">
            {
              posts.map((post)=>{
                return <Product post={post} key={post.id}/>
              })
            }
          </div>):
          (<p> No data found </p>)
      }
    </div>

  );
};

export default Home;
