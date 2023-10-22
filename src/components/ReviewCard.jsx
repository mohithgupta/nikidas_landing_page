import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h3 className=' font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
      <img
        src={imgURL}
        alt='customer'
        className='mt-3 rounded-full object-cover w-[120px] h-[120px]'
      />
      <div className='mt-6 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <p className='mt-3 max-w-sm text-center info-text'>{feedback}</p>
    </div>
  );
};

export default ReviewCard;
