import { AiFillRightCircle } from 'react-icons/ai'
export default function Shop() {
    return (
        <>
            <div
                className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-y-5 lg:min-h-[800px] flex flex-col items-start text-white"
                style={{backgroundColor:'#f77f00', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '95%', height: '100%', borderRadius: 24 }}
            >
                <h1 className='text-5xl text-center w-full mb-20 font-extrabold dark-blue-text '>Shop</h1>
                
      <div className=' w-full h-max justify-between flex flex-row flex-wrap'>
        <div className='w-1/4  h-1/4 flex flex-col items-center justify-center'>
        <div className=' w-full h-[400px]  rounded-lg flex  items-center justify-center'>
                <div class="max-w-sm rounded-xl bg-white overflow-hidden shadow-lg">
  <img class="w-full h-[40%] rounded-md" src="https://images.unsplash.com/photo-1571873735645-1ae72b963024?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <h1 class="text-blue-400  text-5xl  ">
        $ 20
    </h1>
    <div class="font-bold text-3xl text-black mb-2">Dog Food</div>

    <p class="text-gray-700 text-base ">
    The Dog Food Advisor comprises researchers, editors, veterinarians and pet nutritionists. </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add to Cart
    </button>
 </div>
</div>
                    </div>
      
      </div>
        <div className='w-1/3 h-1/4 flex flex-col items-center justify-center'>
        <div className=' w-full h-[400px]  rounded-lg flex  items-center justify-center'>
                <div class="max-w-sm rounded-xl bg-white overflow-hidden shadow-lg">
  <img class="w-full h-[40%] rounded-md" src="https://images.unsplash.com/photo-1571873735645-1ae72b963024?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <h1 class="text-blue-400  text-5xl  ">
        $ 20
    </h1>
    <div class="font-bold text-3xl text-black mb-2">Dog Food</div>

    <p class="text-gray-700 text-base ">
    The Dog Food Advisor comprises researchers, editors, veterinarians and pet nutritionists. </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add to Cart
    </button>
 </div>
</div>
                    </div>
      
      </div>
        <div className='w-1/4 h-1/4 flex flex-col items-center justify-center'>
        <div className=' w-full h-[400px]  rounded-lg flex  items-center justify-center'>
                <div class="max-w-sm rounded-xl bg-white overflow-hidden shadow-lg">
  <img class="w-full h-[40%] rounded-md" src="https://images.unsplash.com/photo-1571873735645-1ae72b963024?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <h1 class="text-blue-400  text-5xl  ">
        $ 20
    </h1>
    <div class="font-bold text-3xl text-black mb-2">Dog Food</div>

    <p class="text-gray-700 text-base ">
    The Dog Food Advisor comprises researchers, editors, veterinarians and pet nutritionists. </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Add to Cart
    </button>
 </div>
</div>




                    </div>
                    
                    
      
      </div>
      <div className='cursor-pointer hover:blur-sm w-max h-max rounded-full bg-white p-3 absolute right-0 mt-[25vh] mr-10'>
<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/long-arrow-right.png" alt="long-arrow-right"/>

</div>
<div className='w-max hover:blur-sm cursor-pointer h-max rounded-full bg-white p-3 absolute left-0 mt-[25vh] ml-10'>
<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left"/>
</div>  
        </div>          

            </div>
        </>
    )
}