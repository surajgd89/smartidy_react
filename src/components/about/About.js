import { useEffect } from 'react';
import './About.scss';
import $ from "jquery";
function About() {


   useEffect(() => {


      //About Page Lbl
      function aboutPgLbl() {
         if ($(window).width() < 575.98) {
            $('#about .data-row').each(function () {
               var lbl = $(this).find('.lbl').remove();
               $(this).find('.ico').append(lbl);
            });
         } else {
            $('#about .data-row').each(function () {
               var lbl = $(this).find('.lbl').remove();
               $(this).find('.data').prepend(lbl);
            });
         }
      }

      $(window).on('resize', function () {
         aboutPgLbl()
      });

      //Business Hours active
      const day = new Date();
      let currentDay = day.getDay();
      $('.buss-hrs-tbl').find('tr[data-day="' + currentDay + '"]').addClass('active');
   })

   return (
      <div className="page" id="about">
         <div className="header">
            <div className="title">
               <label className="en">About Us</label>
               <label className="mr">माहिती</label>
               <label className="hn">जानकारी</label>
            </div>
            <div className="action">
               <a href="#modal-share" className="share-all ripple-effect-1">
                  <i className="fa-light fa-share-alt"></i>
               </a>
            </div>
         </div>
         <div className="content">
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-building"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Business Name</label>
                     <label className="mr">व्यवसायाचे नाव</label>
                     <label className="hn">व्यवसाय का नाम</label>
                  </div>
                  <div className="val business-name">ABC Ltd</div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-user-tie"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Designation</label>
                     <label className="mr">पद</label>
                     <label className="hn">पद</label>
                  </div>
                  <div className="val">Founder</div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-briefcase"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">About Business</label>
                     <label className="mr">व्यवसायाबद्दल</label>
                     <label className="hn">व्यवसाय के बारे में</label>
                  </div>
                  <div className="val">
                     <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quaerat soluta
                        corporis dolores explicabo sed hic aperiam voluptatem assumenda in.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate quasi est,
                        recusandae rem voluptatum! Eveniet numquam totam quasi autem molestias amet et
                        commodi? Sunt vel soluta consectetur tempora doloribus.</p>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-paper-plane"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Services</label>
                     <label className="mr">सेवा</label>
                     <label className="hn">सेवाएँ</label>
                  </div>
                  <div className="val">
                     <ul className="service-list">
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                        <li>Service 4</li>
                        <li>Service 5</li>
                        <li>Service 6</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-file-download"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">E-Files</label>
                     <label className="mr">इ-फाईल</label>
                     <label className="hn">इ-फाईल</label>
                  </div>
                  <div className="val">
                     <div className="efiles-sec">
                        <a href="#" className="e-file ripple-effect-2" download>
                           <span className="file-ico"><i className="fa-light fa-file-pdf"></i></span>
                           <span className="file-name">File 1.pdf</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file ripple-effect-2" download>
                           <span className="file-ico"><i className="fa-light fa-file-excel"></i></span>
                           <span className="file-name">File 2.xls</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file ripple-effect-2" download>
                           <span className="file-ico"><i className="fa-light fa-file-powerpoint"></i></span>
                           <span className="file-name">File 3.ppt</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file ripple-effect-2" download>
                           <span className="file-ico"><i className="fa-light fa-file-word"></i></span>
                           <span className="file-name">File 4.doc</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-map-marked-alt"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Address</label>
                     <label className="mr">पत्ता</label>
                     <label className="hn">पता</label>
                  </div>
                  <div className="val">Flat No. 100, Building No. A-10, 3rd Floor, Sector 10, <br /> Fort,
                     Navi Mumbai - 400 001</div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-file-certificate"></i>
               </div>
               <div className="data">
                  <div className="lbl">GSTIN</div>
                  <div className="val"><span id="business-gstin">123456789ABCDEFG</span> <i
                     className="fa-light fa-clone copy-to-clipboard" data-clipboard-target="#business-gstin"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-file-certificate"></i>
               </div>
               <div className="data">
                  <div className="lbl">MSME</div>
                  <div className="val"><span id="business-msme">123456789ABCDEFG</span> <i
                     className="fa-light fa-clone copy-to-clipboard" data-clipboard-target="#business-msme"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-envelope"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Email</label>
                     <label className="mr">ई-मेल</label>
                     <label className="hn">ई-मेल</label>
                  </div>
                  <div className="val"><a href="mailto:business@gmail.com" id="copy-business-email"
                     className="link">business@gmail.com</a><i className="fa-light fa-clone copy-to-clipboard"
                        data-clipboard-target="#copy-business-email"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-phone-alt"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Call</label>
                     <label className="mr">कॉल</label>
                     <label className="hn">कॉल</label>
                  </div>
                  <div className="val"><span id="copy-business-number">+91 9876543210</span><i
                     className="fa-light fa-clone copy-to-clipboard"
                     data-clipboard-target="#copy-business-number"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-globe"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Website</label>
                     <label className="mr">संकेतस्थळ</label>
                     <label className="hn">वेबसाइट</label>
                  </div>
                  <div className="val"><a href="https://www.websitename.com/" target="_blank"
                     id="copy-business-website" className="link">www.websiteName.com</a><i
                        className="fa-light fa-clone copy-to-clipboard"
                        data-clipboard-target="#copy-business-website"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-link"></i>
               </div>
               <div className="data">
                  <div className="lbl">SmartIDy URL</div>
                  <div className="val">
                     <a href="#" target="_blank" id="copy-smartidy-url"
                        className="link smartidy-url"></a><i className="fa-light fa-clone copy-to-clipboard"
                           data-clipboard-target="#copy-smartidy-url"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="ico">
                  <i className="fa-light fa-clock"></i>
               </div>
               <div className="data">
                  <div className="lbl">
                     <label className="en">Business Hours</label>
                     <label className="mr">व्यवसायाची वेळ</label>
                     <label className="hn">व्यवसाय का समय</label>
                  </div>
                  <div className="val">
                     <table className="buss-hrs-tbl">
                        <tbody>
                           <tr data-day="1">
                              <td>
                                 <label className="en">Monday</label>
                                 <label className="mr">सोमवार</label>
                                 <label className="hn">सोमवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="2">
                              <td>
                                 <label className="en">Tuesday</label>
                                 <label className="mr">मंगळवार</label>
                                 <label className="hn">मंगलवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="3">
                              <td>
                                 <label className="en">Wednesday</label>
                                 <label className="mr">बुधवार</label>
                                 <label className="hn">बुधवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="4">
                              <td>
                                 <label className="en">Thursday</label>
                                 <label className="mr">गुरुवार</label>
                                 <label className="hn">गुरुवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="5">
                              <td>
                                 <label className="en">Friday</label>
                                 <label className="mr">शुक्रवार</label>
                                 <label className="hn">शुक्रवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="6">
                              <td>
                                 <label className="en">Saturday</label>
                                 <label className="mr">शनिवार</label>
                                 <label className="hn">शनिवार</label>
                              </td>
                              <td className="text-right" width="90">
                                 <div>10:00&nbsp;AM</div>
                                 <div>6:00&nbsp;PM</div>
                              </td>
                           </tr>
                           <tr data-day="0">
                              <td>
                                 <label className="en">Sunday</label>
                                 <label className="mr">रविवार</label>
                                 <label className="hn">रविवार</label>
                              </td>
                              <td colspan="2" className="text-right">Closed</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default About;