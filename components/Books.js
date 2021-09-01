function Books() {
  return (
    <div className="w-full shadow-md bg-white overflow-scrollbar scrollbar-hide">
      {/* title */}
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <h2 className="text-xl font-bold">Books</h2>
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
            src="https://rukminim1.flixcart.com/image/612/612/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1 ">
            <h4 className="text-sm">The Psychology of Money</h4>
            <p className="text-green-300 text-xs">$40</p>
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
            src="https://rukminim1.flixcart.com/image/612/612/ki4w0i80-0/book/l/t/u/atomic-habits-original-imafxzkkww75tpmm.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Atomic Habits</h4>
            <p className="text-green-300 text-xs">$50</p>
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
            src="https://rukminim1.flixcart.com/image/612/612/kkyc9zk0/book/9/1/l/think-and-grow-rich-original-imagy6nj8mtt27cg.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Think and grow Rich</h4>
            <p className="text-green-300 text-xs">$35</p>
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
            src="https://rukminim1.flixcart.com/image/612/612/kskotjk0/regionalbooks/j/3/d/rich-dad-poor-dad-original-imag63rbjhcgf9r4.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Rich Dad Poor Dad</h4>
            <p className="text-green-300 text-xs">$55</p>
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
            src="https://rukminim1.flixcart.com/image/612/612/kdnf98w0/book/7/0/9/7-habits-of-highly-effective-people-original-imafugfztjvedfm4.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm text-center">
              7 Habits of Effective People
            </h4>
            <p className="text-green-300 text-xs">$76</p>
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
            src="https://rukminim1.flixcart.com/image/612/612/k6i7zww0/book/2/2/3/start-with-why-original-imaeyczzjrkmxzgs.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm">Start with Why</h4>
            <p className="text-green-400 text-xs">$60</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center cursor-pointer p-4">
          <img
            className="w-32 h-28 object-contain"
            loading="lazy"
            src="https://rukminim1.flixcart.com/image/612/612/kpsnzww0/book/f/t/x/limitless-upgrade-your-brain-learn-anything-faster-and-unlock-original-imag3y2ym9gfyugq.jpeg?q=70"
            alt=""
          />
          <div className="flex flex-col items-center justify-center mt-2 space-y-1">
            <h4 className="text-sm text-center">Limitless</h4>
            <p className="text-green-500 text-xs">$70</p>
            <button className="px-5 py-2 bg-blue-500 text-white text-xs">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
