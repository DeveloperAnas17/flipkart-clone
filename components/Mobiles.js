function Mobiles() {
  return (
    <div className="w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Mobiles</h2>
        <button className="add-to-card">View All</button>
      </div>
      {/* trending items */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
        {/* item 1 */}
        <div className="py-2 flex flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="categ-title">REDMI 9 Prime 4GB</h4>
            <p className="item-price">$170</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item2 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">realme C21 (cross black)</h4>
            <p className="item-price">$230</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/j/5/7/galaxy-f22-sm-e225flbdins-samsung-original-imag4z99fp4qdfby.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">SAMSUNG Galaxy F22 </h4>
            <p className="item-price">$321</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/416/416/k3ncakw0pkrrdj/mobile/p/h/y/huawei-y9-prime-2019-stk-l22-original-imafgf3hqgzwadyq.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Huawei Y9 Prime</h4>
            <p className="item-price">$399</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 5 */}
        <div className="hidden lg:flex  flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/416/416/jpvihzk0/mobile/n/y/a/honor-9n-lld-al20-original-imafcysuqxfgvknv.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Honor 9N (Midnight Black)</h4>
            <p className="item-price">$280</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 6 */}
        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">APPLE iPhone 11 Pro</h4>
            <p className="text-green-400 text-xs">$2300</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer p-4">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/416/416/j8lxyfk0/mobile/p/z/j/panasonic-eluga-ray-700-eb-90s55er7n-original-imaeyheyybbcvapu.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title text-center">Panasonic Eluga</h4>
            <p className="text-green-500 text-xs">$224</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobiles;
