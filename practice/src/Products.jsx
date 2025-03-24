import { useState, useEffect } from "react";
export function Products() {
  let url = "https://api.freeapi.app/api/v1/public/randomproducts";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      const res = await response.json();

      setProducts(res.data.data);
      console.log(res.data.data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center relative'>
        <h1 className='absolute top-0 w-full text-center p-2 font-bold text-2xl'>
          Product page
        </h1>

        <div className='mt-8'>
          {products.length == 0 ? (
            <h1 className='text-4xl font-bold'>No products found</h1>
          ) : (
            <div className='p-4 grid grid-cols-3 gap-2'>
              {products.map((product) => {
                return (
                  <div
                    className='flex flex-col border rounded-md p-2 '
                    key={product.id}
                  >
                    <h1>Title: {product.title}</h1>
                    <h1>Brand:{product.brand}</h1>
                    <h1>Category:{product.category}</h1>
                    <p>Description:{product.description}</p>
                    <img
                      className='w-[100px] h-[100px]'
                      src={product.thumbnail}
                      alt='product pic'
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
