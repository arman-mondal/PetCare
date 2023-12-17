import React from "react";


const shop =()=>{
    const products = [
        {
          id: 1,
          name: 'Product 1',
          price: '$19.99',
          image: 'https://via.placeholder.com/150',
          description: 'Description of Product 1...',
        },
        {
          id: 2,
          name: 'Product 2',
          price: '$29.99',
          image: 'https://via.placeholder.com/150',
          description: 'Description of Product 2...',
        },
        {

            id: 3,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },
        {

            id: 4,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 5,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 6,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 7,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 8,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 9,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 10,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 11,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 12,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 13,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },{

            id: 14,
            name: 'Product 2',
            price: '$29.99',
            image: 'https://via.placeholder.com/150',
            description: 'Description of Product 2...',
        },
        // Add more dummy products as needed
      ];
      
    return(
        <>
        
        <div className="container mx-auto my-8">
      <h1 className="text-3xl text-center font-bold mb-4">Shop</h1>
      <div className="w-full  mt-5 mb-5 ml-5">
        <button className="bg-blue-300 pt-1 pb-1 pr-4 pl-4 rounded-xl ">Filter <span ></span></button>
        <select className=" ml-5">
            <option selected disabled >Sort By</option>
            <option >Low to High</option>
            <option>High to Low</option>
            <option>Popular</option>
            <option>Relavant</option>
            
        </select>
        
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-4 shadow-md">
            <img src={product.image} alt={product.name} className="mb-4 rounded-xl" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <p className="text-sm text-gray-500 mb-4">{product.description}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
        
        </>
    )
}

export default shop;