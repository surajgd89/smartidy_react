import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg'
import './Home.scss';

function Home(props) {
   console.log(props)
   let { setVisitModal } = props.modal;

   //console.log(setVisitModal)

   return (

      <>
         <div className="page active" id="home">
            <div className="profile">
               <div className="top">
                  <a href="#" data-target="#business" className="ripple-effect-1 ">
                     <i className="fa-light fa-building"></i>
                     <span>
                        <label className="en">Business</label>
                        <label className="mr">व्यवसाय</label>
                        <label className="hn">व्यवसाय</label>
                     </span>
                  </a>
                  <a href="#" data-target="#individual" className="ripple-effect-1 active">
                     <i className="fa-light fa-user-tie"></i>
                     <span>
                        <label className="en">Individual</label>
                        <label className="mr">वैयक्तिक</label>
                        <label className="hn">व्यक्तिगत</label>
                     </span>
                  </a>
               </div>
               <div className="middle circle">
                  <div id="individual" className="profile-item active">
                     <a className="image" href="#">
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <div className=" head" id="individualName">
                        <label className="en">Good Name</label>
                        <label className="mr">शुभ नाव</label>
                        <label className="hn">शुभ नाम</label>
                     </div>
                     <div className="subhead">
                        <span id="individualExperties">
                           <label className="en">Experties</label>
                           <label className="mr">विशेष कौशल्य</label>
                           <label className="hn">विशेष कौशल्य</label>
                        </span>
                     </div>
                  </div>
                  <div id="business" className="profile-item ">
                     <a className="image" href="#">
                        <img src="./images/business-logo-default.jpg" />
                     </a>
                     <div className="head" id="businessName">
                        <label className="en">Business Name</label>
                        <label className="mr">व्यवसायाचे नाव</label>
                        <label className="hn">व्यवसाय का नाम</label>
                     </div>
                     <div className="subhead">
                        <label className="en">Established in</label>
                        <label className="mr">स्थापना</label>
                        <label className="hn">स्थापना</label>
                        &nbsp;<span id="estYr" data-est-date="01-01-2021"></span>&nbsp;&nbsp;
                        <span className="year-month">(<span id="passedYears"></span>&nbsp;
                           <label className="en">years</label>
                           <label className="mr">वर्षे</label>
                           <label className="hn">वर्षे</label>
                           &nbsp;
                           <span id="passedMonths"></span>&nbsp;
                           <label className="en">months</label>
                           <label className="mr">महिने</label>
                           <label className="hn">महिने</label>)
                        </span>
                     </div>
                  </div>
               </div>

               <div className="bottom">
                  <a onClick={() => { setVisitModal(true) }} className="visit-us ripple-effect-1">
                     <div className="ico"><i className="fa-light fa-external-link-square"></i></div>
                     <div className="name">
                        <label className="en">Links</label>
                        <label className="mr">लिंक्स</label>
                        <label className="hn">लिंक्स</label>
                     </div>
                  </a>
                  <a onClick={() => { setForwardModal(true) }} className="share-one ripple-effect-1">
                     <div className="ico"><i className="fa-light fa-share"></i></div>
                     <div className="name">
                        <label className="en">Forward</label>
                        <label className="mr">फॉरवर्ड</label>
                        <label className="hn">फॉरवर्ड</label>
                     </div>
                  </a>
                  <a onClick={() => { setShareModal(true) }} className="share-all ripple-effect-1">
                     <div className="ico"><i className="fa-light fa-share-alt"></i></div>
                     <div className="name">
                        <label className="en">Share</label>
                        <label className="mr">शेअर</label>
                        <label className="hn">शेअर</label>
                     </div>
                  </a>
                  <a href="#" className="install-app ripple-effect-1">
                     <div className="ico"><i className="fa-light fa-arrow-to-bottom"></i></div>
                     <div className="name">
                        <label className="en">Install</label>
                        <label className="mr">इन्स्टॉल</label>
                        <label className="hn">इन्स्टॉल</label>
                     </div>
                  </a>
               </div>
            </div>

            <div className="home-actions">
               <a onClick={() => { setCallModal(true) }} className="ripple-effect-1">
                  <span>
                     <i className="fa-light fa-phone"></i>
                     <span>
                        <label className="en">Call</label>
                        <label className="mr">कॉल</label>
                        <label className="hn">कॉल</label>
                     </span>
                  </span>
               </a>
               <a onClick={() => { setEmailModal(true) }} className="ripple-effect-1">
                  <span>
                     <i className="fa-light fa-envelope"></i>
                     <span>
                        <label className="en">Email</label>
                        <label className="mr">ई-मेल</label>
                        <label className="hn">ई-मेल</label>
                     </span>
                  </span>
               </a>
               <a onClick={() => { setChatModal(true) }} className="ripple-effect-1">
                  <span>
                     <i className="fa-light fa-comments-alt"></i>
                     <span>
                        <label className="en">Chat</label>
                        <label className="mr">संवाद</label>
                        <label className="hn">संवाद</label>
                     </span>
                  </span>
               </a>
               <a onClick={() => { setSmsModal(true) }} className="ripple-effect-1">
                  <span>
                     <i className="fa-light fa-comment-alt-lines"></i>
                     <span>
                        <label className="en">SMS</label>
                        <label className="mr">मेसेज</label>
                        <label className="hn">मेसेज</label>
                     </span>
                  </span>
               </a>
               <a className="add-to-contact ripple-effect-1">
                  <span>
                     <i className="fa-light fa-book"></i>
                     <span>
                        <label className="en">Save</label>
                        <label className="mr">जतन</label>
                        <label className="hn">जतन</label>
                     </span>
                  </span>
               </a>
               <a className="google-map ripple-effect-1">
                  <span>
                     <i className="fa-light fa-map-marked-alt"></i>
                     <span>
                        <label className="en">Map</label>
                        <label className="mr">नकाशा</label>
                        <label className="hn">नक्शा</label>
                     </span>
                  </span>
               </a>
            </div>

            <div className="social">
               <a href="https://www.facebook.com/enter_your_id" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                  <span>Facebook</span>
               </a>
               <a href="https://twitter.com/enter_your_id" className="twitter">
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
               </a>
               <a href="https://www.linkedin.com/in/enter_your_id/" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                  <span>Linkedin</span>
               </a>
               <a href="https://www.instagram.com/enter_your_id/" className="instagram">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
               </a>
               <a href="https://www.youtube.com/channel/enter_your_id/" className="youtube">
                  <i className="fab fa-youtube"></i>
                  <span>YouTube</span>
               </a>
               <a href="https://wa.me/c/911234567890" className="whatsapp">
                  <i className="fab fa-whatsapp"></i>
                  <span>Catalogue</span>
               </a>
            </div>
         </div>
      </>
   )
}
export default Home;




