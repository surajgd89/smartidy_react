import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import $ from "jquery";
import ClipboardJS from 'clipboard';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import PayUs from './components/payus/PayUs';
import Tabs from './layout/tabs/Tabs';


//Loader
setTimeout(function () {
  $(".loader").fadeOut('slow');
}, 1000);

$(window).on('resize', function () {
  homeBOxHt()
});

$(window).on('scroll', function () {
  homeBOxHt()
});


//Copy Text
var clipboard = new ClipboardJS('.copy-to-clipboard');
clipboard.on('success', function (e) {
  setTimeout(function () {
    e.clearSelection();
  }, 2000);
});

//Copy to Clipboard
tippy('.copy-to-clipboard', {
  content: 'Copy to Clipboard',
  animation: 'scale',
  trigger: 'click',
  touch: ['hold', 500],
  placement: 'top',
  onShow(instance) {
    setTimeout(function () {
      instance.hide();
    }, 1500);
  }
});

//ripple Effect
// var primaryColor = $('.download-qr').css('background-color');
// $('.ripple-effect-2').attr('data-color', primaryColor);
// $.ripple(".ripple-effect-1, .ripple-effect-2", {
//   debug: false,
//   on: 'click',
//   opacity: 0.1,
//   color: "#ffffff",
//   duration: 0.7,
//   multi: true,
//   easing: 'linear'
// });



//Color Luminance lum (-1 negative number mean darker, 1 positive lighter)
function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;
  // convert to decimal and change luminosity
  var rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

export function homeBOxHt() {
  var profileHT = $('.profile').outerHeight();
  var tabsHT = $('.tabs').outerHeight();
  var socialHT = $('.social').outerHeight();
  if (socialHT == undefined) {
    socialHT = 0;
  }
  let calcHeight = profileHT + tabsHT + socialHT;
  $('.home-actions').css('min-height', 'calc(100vh - ' + calcHeight + 'px)');
}

export default function App() {

  return (
    <div className="wrapper">
      <div className="inner-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tabs />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="payus" element={<PayUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <div className="page-loader"></div>
      </div>
    </div>
  );
}



