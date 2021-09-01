import WorkIcon from "@material-ui/icons/Work";
import StarsIcon from "@material-ui/icons/Stars";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HelpIcon from "@material-ui/icons/Help";

function Footer() {
  return (
    <div className=" bg-indigo-900 ">
      <div className="max-w-[1600px] mx-auto py-4 px-3">
        <div className=" md:flex justify-between space-y-6 md:space-y-0">
          <div className="flex justify-between flex-grow px-5 mr-5">
            <div>
              <h3 className="text-sm uppercase text-gray-500">About</h3>
              <p className="footer-p">Contact Us</p>
              <p className="footer-p">About Us</p>
              <p className="footer-p">Careers </p>
              <p className="footer-p">Flipkart Stories</p>
              <p className="footer-p">Press</p>
              <p className="footer-p">Corporate Information</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500">Help</h3>
              <p className="footer-p">Payments</p>
              <p className="footer-p">Shipping</p>
              <p className="footer-p">Cancellation & Return</p>
              <p className="footer-p">FAQ</p>
              <p className="footer-p">Report</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500">Policy</h3>
              <p className="footer-p">Return Policy</p>
              <p className="footer-p">Terms of Use</p>
              <p className="footer-p">Security</p>
              <p className="footer-p">Privacy</p>
              <p className="footer-p">Sitemap</p>
              <p className="footer-p">EPR Compliance</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500">Social</h3>
              <p className="footer-p">Twitter</p>
              <p className="footer-p">Instagram</p>
              <p className="footer-p">Github</p>
            </div>
          </div>
          {/* div right */}
          <div className=" flex md:w-96 space-x-18">
            <div className=" md:border-l px-6 border-gray-500">
              <h4 className="text-xs text-gray-500">Mail Us</h4>
              <p className="mt-2 text-xs text-white">
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia
              </p>
            </div>

            <div>
              <h4 className="text-xs text-gray-500">Registered office</h4>
              <p className="mt-2 text-xs text-white">
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,
              </p>
            </div>
          </div>
        </div>
        {/* down */}
      </div>
      <div className="border-t border-gray-200 py-5 px-5">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <WorkIcon className="text-yellow-500" />
            <p className="text-white text-md">Sell on Flipkart</p>
          </div>
          <div className="flex items-center space-x-2">
            <StarsIcon className="text-yellow-500" />
            <p className="text-white text-md">Advertise</p>
          </div>
          <div className="flex items-center space-x-2">
            <CardGiftcardIcon className="text-yellow-500" />
            <p className="text-white text-base">Gift Cards</p>
          </div>
          <div className="flex items-center space-x-2">
            <HelpIcon className="text-yellow-500" />
            <p className="text-white text-md">Help Center</p>
          </div>
          <div>
            <p className="text-white text-md">© 2007-2021 Flipkart.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
