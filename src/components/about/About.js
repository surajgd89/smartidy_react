import { useState, useEffect } from "react";
//import copy from "copy-to-clipboard";
import moment from 'moment/moment';
import './About.scss';


function About({ modal, refElement }) {
   const setModalOpen = modal;
   const { gstin_no } = refElement;

   const [Day, setDay] = useState('');
   const [Copied, setCopied] = useState(false);

   const copyToClipboard = (data) => {
      navigator.clipboard.writeText(data)
      setCopied(true);

      setTimeout(() => {
         setCopied(false);
      }, 1500)
   }

   useEffect(() => {
      setDay(moment().isoWeekday())
   }, [])


   return (
      <div className="page about" >
         <div className='header'>
            <div className="title">
               <label className="en">About Us</label>
               <label className="mr">माहिती</label>
               <label className="hn">जानकारी</label>
            </div>
            <div className="action">
               <a onClick={() => { setModalOpen({ 'ShareModal': true }) }} className="share-all ">
                  <i className="fa-light fa-share-alt"></i>
               </a>
            </div>
         </div>
         <div className="content">
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-building"></i>
                  <div className="lbl" >
                     <label className="en">Business Name</label>
                     <label className="mr">व्यवसायाचे नाव</label>
                     <label className="hn">व्यवसाय का नाम</label>
                  </div>
               </div>
               <div className="data">
                  <div className="val business-name">ABC Ltd</div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-user-tie"></i>
                  <div className="lbl" >
                     <label className="en">Designation</label>
                     <label className="mr">पद</label>
                     <label className="hn">पद</label>
                  </div>
               </div>
               <div className="data">

                  <div className="val">Founder</div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-briefcase"></i>
                  <div className="lbl">
                     <label className="en">About Business</label>
                     <label className="mr">व्यवसायाबद्दल</label>
                     <label className="hn">व्यवसाय के बारे में</label>
                  </div>
               </div>
               <div className="data">

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
               <div className="title">
                  <i className="fa-light fa-paper-plane"></i>
                  <div className="lbl">
                     <label className="en">Services</label>
                     <label className="mr">सेवा</label>
                     <label className="hn">सेवाएँ</label>
                  </div>
               </div>
               <div className="data">
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
               <div className="title">
                  <i className="fa-light fa-file-download"></i>
                  <div className="lbl">
                     <label className="en">E-Files</label>
                     <label className="mr">इ-फाईल</label>
                     <label className="hn">इ-फाईल</label>
                  </div>


               </div>
               <div className="data">

                  <div className="val">
                     <div className="efiles-sec">
                        <a href="#" className="e-file " download>
                           <span className="file-ico"><i className="fa-light fa-file-pdf"></i></span>
                           <span className="file-name">File 1.pdf</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file " download>
                           <span className="file-ico"><i className="fa-light fa-file-excel"></i></span>
                           <span className="file-name">File 2.xls</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file " download>
                           <span className="file-ico"><i className="fa-light fa-file-powerpoint"></i></span>
                           <span className="file-name">File 3.ppt</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                        <a href="#" className="e-file " download>
                           <span className="file-ico"><i className="fa-light fa-file-word"></i></span>
                           <span className="file-name">File 4.doc</span>
                           <span className="file-act-ico"><i className="fad fa-download"></i></span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-map-marked-alt"></i>

                  <div className="lbl">
                     <label className="en">Address</label>
                     <label className="mr">पत्ता</label>
                     <label className="hn">पता</label>
                  </div>

               </div>
               <div className="data">
                  <div className="val">Flat No. 100, Building No. A-10, 3rd Floor, Sector 10,  Fort,
                     Navi Mumbai - 400 001</div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-file-certificate"></i>
                  <div className="lbl">GSTIN</div>
               </div>
               <div className="data">
                  <div className="val">
                     <span ref={gstin_no}>123456789ABCDEFG</span>
                     <i className={`fa-light fa-clone copy-to-clipboard ${Copied ? 'copied' : ''}`} onClick={(e) => { copyToClipboard(gstin_no.current.innerText) }}>
                        <span className="tooltip-text">Copied</span>
                     </i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-file-certificate"></i>
                  <div className="lbl">MSME</div>
               </div>
               <div className="data">
                  <div className="val"><span id="business-msme">123456789ABCDEFG</span> <i
                     className="fa-light fa-clone copy-to-clipboard" data-clipboard-target="#business-msme"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-envelope"></i>

                  <div className="lbl">
                     <label className="en">Email</label>
                     <label className="mr">ई-मेल</label>
                     <label className="hn">ई-मेल</label>
                  </div>

               </div>
               <div className="data">

                  <div className="val"><a href="mailto:business@gmail.com" id="copy-business-email"
                     className="link">business@gmail.com</a><i className="fa-light fa-clone copy-to-clipboard"
                        data-clipboard-target="#copy-business-email"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-phone"></i>
                  <div className="lbl">
                     <label className="en">Call</label>
                     <label className="mr">कॉल</label>
                     <label className="hn">कॉल</label>
                  </div>
               </div>
               <div className="data">


                  <div className="val"><span id="copy-business-number">+91 9876543210</span><i
                     className="fa-light fa-clone copy-to-clipboard"
                     data-clipboard-target="#copy-business-number"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-globe"></i>


                  <div className="lbl">
                     <label className="en">Website</label>
                     <label className="mr">संकेतस्थळ</label>
                     <label className="hn">वेबसाइट</label>
                  </div>

               </div>
               <div className="data">


                  <div className="val"><a href="https://www.websitename.com/"
                     id="copy-business-website" className="link">www.websiteName.com</a><i
                        className="fa-light fa-clone copy-to-clipboard"
                        data-clipboard-target="#copy-business-website"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-link"></i>
                  <div className="lbl">SmartIDy URL</div>

               </div>
               <div className="data">


                  <div className="val">
                     <a href="#" id="copy-smartidy-url"
                        className="link smartidy-url"></a><i className="fa-light fa-clone copy-to-clipboard"
                           data-clipboard-target="#copy-smartidy-url"></i>
                  </div>
               </div>
            </div>
            <div className="data-row">
               <div className="title">
                  <i className="fa-light fa-clock"></i>
                  <div className="lbl">
                     <label className="en">Business Hours</label>
                     <label className="mr">व्यवसायाची वेळ</label>
                     <label className="hn">व्यवसाय का समय</label>
                  </div>
               </div>
               <div className="data">


                  <div className="val">

                     <ul className="buss-hrs-sec">
                        <li className={Day == 1 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Monday</label>
                              <label className="mr">सोमवार</label>
                              <label className="hn">सोमवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>
                        <li className={Day === 2 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Tuesday</label>
                              <label className="mr">मंगळवार</label>
                              <label className="hn">मंगलवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>

                        <li className={Day === 3 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Wednesday</label>
                              <label className="mr">बुधवार</label>
                              <label className="hn">बुधवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>

                        <li className={Day === 4 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Thursday</label>
                              <label className="mr">गुरुवार</label>
                              <label className="hn">गुरुवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>

                        <li className={Day === 5 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Friday</label>
                              <label className="mr">शुक्रवार</label>
                              <label className="hn">शुक्रवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>

                        <li className={Day === 6 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Saturday</label>
                              <label className="mr">शनिवार</label>
                              <label className="hn">शनिवार</label>
                           </div>
                           <div className="time">
                              <span>10:00&nbsp;AM</span>
                              <span>6:00&nbsp;PM</span>
                           </div>
                        </li>

                        <li className={Day === 7 ? 'active' : ''}>
                           <div className="day">
                              <label className="en">Sunday</label>
                              <label className="mr">रविवार</label>
                              <label className="hn">रविवार</label>
                           </div>
                           <div className="time">
                              <span>Closed</span>
                           </div>
                        </li>

                     </ul>

                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}
export default About;