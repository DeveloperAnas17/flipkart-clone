function Electronics() {
  return (
    <div className="w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Electronics</h2>
        <button className="bg-blue-500 border-0 outline-none px-6 py-2 text-white font-bold">
          View All
        </button>
      </div>
      {/* trending items */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
        {/* item 1 */}
        <div className="py-2 flex flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/jqwny4w0/mousepad/h/g/j/eagletail-india-pubg-mp64-original-imafcszferfg8fa9.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item2 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/k6mibgw0/datacard/r/h/g/jiofi-jmr-541-original-imafpfhandhkptwc.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/headphone/dynamic/z/j/h/jbl-c150siublk-original-imafeyby52kxehz2.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 5 */}
        <div className="hidden lg:flex  flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 6 */}
        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/k2f1n680/headphone/9/g/s/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/150/150/j226avk0/keyboard-skin/9/a/b/laptop-ad-kb14-6-adnet-original-imaedq9hgbn7yy7z.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Men's Shirt and Trouser F...</h4>
            <p className="item-price">Top Offers</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
