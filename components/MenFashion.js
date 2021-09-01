function MenFashion() {
  return (
    <div className="w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Men's Fashion</h2>
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
            src="https://rukminim1.flixcart.com/image/800/960/klicfww0/shirt/6/0/n/s-st2-vebnor-original-imagymhyterasskh.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="text-sm">Men Slim Fit</h4>
            <p className="text-green-300 text-xs">$80</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        {/* item2 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/800/960/k3lwuq80/shoe/z/v/h/mrj1324-6-aadi-black-original-imafmzfcjcjytgcf.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Running Shoes</h4>
            <p className="text-green-300 text-xs">$230</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/495/594/kr0ynbk0/kids-t-shirt/p/e/w/15-16-years-mvt-singham-original-imag4wfsv7w2qrku.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Full Sleeve</h4>
            <p className="text-green-300 text-xs">$328</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/495/594/kjom6q80-0/t-shirt/z/v/g/m-t350hs-tb-seven-rocks-original-imafz7dycg58kcyf.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Half Tshirt</h4>
            <p className="text-green-300 text-xs">$299</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        {/* item 5 */}
        <div className="hidden lg:flex  flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/495/594/kruyw7k0/blazer/g/6/x/44-black-darbar-in-original-imag5k2hgzytcc9t.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Black Single Blazer</h4>
            <p className="text-green-300 text-xs">$1080</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        {/* item 6 */}
        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/495/594/kj8wccw0-0/jean/o/a/c/30-bepldrj01-30-darkblue-dais-original-imafyv3u4kay94jz.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Men Dark Blue Jeans</h4>
            <p className="text-green-400 text-xs">$2300</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer p-4">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/495/594/kdeum4w0/short/y/d/a/xl-ic-2044-indiclub-original-imafubw5tpvycg4b.jpeg?q=50"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm text-center">Black Sports Shorts</h4>
            <p className="text-green-500 text-xs">$44</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenFashion;
