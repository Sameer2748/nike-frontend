import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
      </div>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>

        <h2 className=' font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
          <span className='text-coral-red '>Special </span> 
          Offer 
        </h2>
        <p className='mt-4 lg:max-w-lg info-text  '>
          Ensuring premium comfort ans style, our meticulously crafted footwear is designed to elevate your experience , providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
        <Button label="Shop Now" />
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>

        </div>
    </section>
  )
}

export default SpecialOffer