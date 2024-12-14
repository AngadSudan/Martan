import React from 'react';

const Card = ({ image, title, content }) => {
  return (
    <div className="bg-white mx-3 shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          New Blog
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;