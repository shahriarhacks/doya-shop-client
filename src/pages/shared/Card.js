import React from "react";
import { HiShieldExclamation } from "react-icons/hi";

const Card = ({ data }) => {
  const {
    image,
    phoneName,
    resalePrice,
    originalPrice,
    usedTime,
    sellerName,
    condition,
    sellerPhone,
    sellerLocation,
    time,
    description,
    sellerStatus,
  } = data;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-100 text-gray-900">
      <>
        <div>
          <h3 className="text-lg font-bold">Seller Information</h3>
          <div className="flex justify-between my-1">
            <div>
              <div className="flex gap-1">
                <p className="text-sm font-semibold">{sellerName}</p>
                {sellerStatus && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                )}
              </div>
              <h4 className="text-xs text-gray-400">{time}</h4>
            </div>
            <div>
              <h3 className="text-xs text-gray-900">{sellerPhone}</h3>
              <h3 className="text-xs text-gray-900">{sellerLocation}</h3>
            </div>
          </div>
        </div>
      </>
      <div>
        <img
          src={image}
          alt={phoneName}
          className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded"
        />
        <h2 className="mb-1 text-xl font-semibold">{phoneName}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div>
        <div className="flex justify-between">
          <p>
            <small>
              Used Time: <i>{usedTime}</i>
            </small>
          </p>
          <p>
            <small>
              Resale Price: <strong>{resalePrice}</strong>
            </small>
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <small>
              Condition: <i>{condition}</i>
            </small>
          </p>
          <p>
            <small>
              Original Price: <strong>{originalPrice}</strong>
            </small>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            title="Report this post"
            aria-label="Report this post"
            type="button"
            className="p-2 text-center"
          >
            <HiShieldExclamation className="w-4 h-4 fill-current text-gray-800" />
          </button>
          <button
            title="Add to Wishlist"
            aria-label="Add Wishlist this post"
            type="button"
            className="p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current text-gray-800"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>
        <div className="flex space-x-2 text-sm text-gray-400">
          <button className="btn btn-sm btn-outline border-0 hover:rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
