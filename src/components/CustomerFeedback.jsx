import { FaStar } from 'react-icons/fa';

const CustomerFeedback = ({ rating, feedback, name, title }) => {
  return (
    <div className="bg-white mx-4 shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-500">
          {[...Array(Math.round(rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <span className="ml-2 font-medium">{rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-700">{feedback}</p>
      <div className="flex items-center mt-4">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;