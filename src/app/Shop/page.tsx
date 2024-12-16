import MainBreadcum from '@/components/Breadcum/MainBreadcum'
import Products from '@/components/Products/products'
import Sidebar from '@/components/Sidebar/Sidebar'


const Shop = () => {

  return (
    <>
    <MainBreadcum name='Our Shop' pageName='Our Shop'/>
    <div className="w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%]">   
        <Products/>
        <Sidebar/>
      </div>
    </>  
  )
}

export default Shop
