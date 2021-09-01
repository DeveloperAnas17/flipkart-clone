function Trending() {
  return (
    <div className=" w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Trending Offers</h2>
        <button className="bg-blue-500 border-0 outline-none px-6 py-2 text-white font-bold">
          View All
        </button>
      </div>
      {/* trending items */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
        {/* item 1 */}
        <div className="py-2 flex flex-col items-center justify-center cursor-pointer ">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/612/612/kdga1zk0/camera-microphone/8/k/n/3-5mm-clip-microphone-for-youtube-collar-mike-for-voice-original-imafuc79gkuwzwbu.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="text-sm">Fast Charging Powerbank</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/k0vbgy80pkrrdj/power-bank-refurbished/z/v/r/power-bank-b-ib-10000lp-iball-original-imafkzf6gcnr5ftc.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Fast Charging Powerbank</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Apple MacBook Air</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/hair-dryer/x/k/z/philips-hp8643-46-hair-straightener-original-imaemxk7nxkmdw4v.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Women Beuty Devices</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        {/* item 5 */}
        <div className="hidden lg:flex  flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/kn97te80/vacuum-cleaner/c/g/8/robot-vacuum-mop-p-stytj02ym-mi-original-imagfyw8gqthjfss.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Robotic Vaccum Cleaner</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        {/* item 6 */}
        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/kmgn0cw0/pendrive/pendrive/8/z/j/sdcz50-032g-sdcz50-032g-i35-sandisk-original-imagfc7rdywypccr.jpeg?q=70"
            alt=""
          />
          <div className="flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Sandisc Mobile Pandrive</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/kpa39u80/fabric/k/1/h/no-unstitched-cotton-polyester-blend-shirt-febric-unstich-opina-original-imag3jpwgt3zhrkx.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Men's Shirt and Trouser F...</h4>
            <p className="text-green-300 text-xs">Top Offers</p>
            <p className="text-gray-600 text-xs">Great Saving!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
