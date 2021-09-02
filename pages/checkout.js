const { default: Header } = require("../components/Header");

function Checkout() {
  return (
    <div className="checkout">
      <Header />

      <div className="max-w-[1300px] my-7 mx-auto space-y-4 md:space-x-4 md:flex justify-between">
        {/* checkout Product */}
        <div className="bg-white flex-1">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center space-x-2">
              <h2>My Cart</h2>
              <span>(2)</span>
            </div>

            <div className="flex items-center space-x-2 border-b border-blue-500 text-gray-700 font-semibold">
              <input
                placeholder="Enter Delivery Code"
                className="border-0 outline-none"
                type="text"
                autocomplete="off"
                maxlength="6"
              />
              <p>Check</p>
            </div>
          </div>
          {/* products */}
          <div className="p-4 flex space-x-4 md:space-x-10">
            {/* img */}
            <div>
              <img
                className="h-32 w-32 object-contain"
                loading="lazy"
                src="https://rukminim1.flixcart.com/image/224/224/kbwjvrk0/projector/3/v/z/mini-projector-yg300-portable-full-color-led-lcd-video-projector-original-imaft5gzkcxvjgrz.jpeg?q=90"
                alt=""
              />
              <div className="space-x-2 flex items-center">
                <button className="rounded-full h-3 w-3 border border-gray-300 flex items-center justify-center p-4 font-semibold">
                  -
                </button>
                <button className="px-6 py-1 font-semibold border  border-gray-300">
                  1
                </button>
                <button className="rounded-full h-3 w-3 border border-gray-300 flex items-center justify-center p-4  font-semibold">
                  +
                </button>
              </div>
            </div>

            {/* description */}
            <div className="space-y-2">
              <h1>Rbmh fdio Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit.</p>

              <div className="flex space-x-2">
                <p>Price:</p>
                <p className="text-green-800">$24244</p>
              </div>
              <button className=" border-2 border-blue-600 py-2 px-6">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* subtotal */}
        <div className="bg-white">
          <div className="border-b border-gray-300 p-3">
            <h1 className="font-semibold text-lg text-gray-700">
              Price Detail
            </h1>
          </div>

          <div className="space-y-3 p-5 border-b border-gray-300">
            <div className="flex items-center justify-between">
              <p>Price (2 items)</p>
              <p>$2424</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Price (2 items)</p>
              <p>$2424</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Price (2 items)</p>
              <p>$2424</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-5 space-x-4">
            <h1 className="font-semibold text-xl ">Total Amount</h1>
            <h4>$4243</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
