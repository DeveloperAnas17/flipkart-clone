function Laptops() {
  return (
    <div className="w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Laptops</h2>
        <button className="add-to-card">View All</button>
      </div>
      {/* trending items */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-7">
        {/* item 1 */}
        <div className="py-2 flex flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/ko382a80/computer/b/v/u/na-gaming-laptop-asus-original-imag2mrvrxgsaahh.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="categ-title">ASUS ROG Strix G15 (2021)</h4>
            <p className="item-price">$1120</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item2 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/knm2s280/computer/m/p/g/inspiron-3501-notebook-dell-original-imag29azafkdgysg.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">DELL Inspiron Core i5</h4>
            <p className="item-price">$880</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer ">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/c/q/t/lenovo-na-thin-and-light-laptop-original-imafuzt873zgp9xe.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">Lenovo IdeaPad Core i3</h4>
            <p className="item-price">$759</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 4 */}
        <div className="flex py-2 flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/kq8dua80/computer/s/2/v/na-gaming-laptop-hp-original-imag4agxntky6zuv.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">HP 15-ec1105AX Ryzen 5</h4>
            <p className="item-price">$999</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 5 */}
        <div className="hidden lg:flex  flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/jy3anbk0/computer/y/x/z/hp-na-gaming-laptop-original-imafgeyrwj6uhk6p.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">HP Omen X 2S Core i9</h4>
            <p className="item-price">$2590</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        {/* item 6 */}
        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/kqv8vww0/computer/z/p/x/na-notebook-msi-original-imag4sh2kz85kbhd.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title">MSI GE76 Core i7</h4>
            <p className="text-green-400 text-xs">$2340</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer p-4">
          <img
            className="item-img"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/312/312/ke0a7ww0/computer/t/3/j/hp-original-imafushcajardghe.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="categ-title text-center">HP Spectre x360 </h4>
            <p className="text-green-500 text-xs">$2000</p>
            <button className="add-to-card">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptops;
