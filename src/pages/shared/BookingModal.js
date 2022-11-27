import { format } from "date-fns";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ phone }) => {
  const { phoneName, resalePrice } = phone;
  const date = format(new Date(), "PP");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      bookingDate: date,
      name: name,
      price: resalePrice,
      phoneName,
      email,
      location,
      phone,
    };

    console.log(booking);
    fetch(`${process.env.REACT_APP_API_URl}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${phoneName} is Booking Confirmed`);
          navigate("/dashboard/history");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{phoneName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={phoneName}
              className="input w-full input-bordered "
            />

            <input
              name="name"
              defaultValue={user?.displayName}
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              placeholder="Product Price"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
              required
            />

            <input
              className="btn btn-accent my-1 w-full hover:rounded-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
