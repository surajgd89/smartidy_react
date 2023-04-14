import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useGlobalContext } from '../../context';

import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg';
import BusinessLogoDefault from '../../assets/images/business-logo-default.jpg';

import './Home.scss';


function Home({ modal, refElement }) {
   const { Data } = useGlobalContext();
   const userData = Data.userData;

   let setModalOpen = modal;
   let { profile, social, tabs } = refElement;


   const [Profile, setProfile] = useState({ business: false, individual: true });
   const [EstObject, setEstObject] = useState();
   const [HomeActionStyle, setHomeActionStyle] = useState();

   const HomeActionsCalc = () => {
      let profileHT = profile.current.offsetHeight;
      let socialHT = social.current.offsetHeight;
      let tabsHT = tabs.current.offsetHeight;
      if (socialHT == undefined) { socialHT = 0; }
      return { minHeight: `calc(100vh - ${profileHT + tabsHT + socialHT}px)` }
   }

   const ServiceYrCalc = () => {
      let EstDate = userData.business.estDate;
      let Now = moment(new Date());
      let EstYear = moment(EstDate).format('yyyy');
      let RemYears = Now.diff(EstDate, 'years');
      let RemMonths = Now.diff(EstDate, 'months') % 12;
      return { EstYear, RemYears, RemMonths }
   }

   const handleClick = (e) => {
      e.preventDefault();
      setHomeActionStyle(HomeActionsCalc)
   }

   useEffect(() => {
      setHomeActionStyle(HomeActionsCalc);
      setEstObject(ServiceYrCalc);
   }, [Profile])


   const BusinessProfile = () => {

      return (
         <div id="business" className="profile-item">
            <a className="image" href="#" onClick={(e) => { e.preventDefault(); }}>
               <img src={userData.business.logo} />
            </a>
            <div className="head" id="businessName">
               <label className="en">{userData.business.name}</label>
               <label className="mr">व्यवसायाचे नाव</label>
               <label className="hn">व्यवसाय का नाम</label>
            </div>
            <div className="subhead">
               <label className="en">Established in</label>
               <label className="mr">स्थापना</label>
               <label className="hn">स्थापना</label>
               &nbsp;<span id="estYr">{EstObject.EstYear}</span>&nbsp;&nbsp;
               <span className="year-month">(<span id="passedYears">{EstObject.RemYears}</span>&nbsp;
                  <label className="en">years</label>
                  <label className="mr">वर्षे</label>
                  <label className="hn">वर्षे</label>
                  &nbsp;
                  <span id="passedMonths">{EstObject.RemMonths}</span>&nbsp;
                  <label className="en">months</label>
                  <label className="mr">महिने</label>
                  <label className="hn">महिने</label>)
               </span>
            </div>
         </div>
      )
   }
   const IndividualProfile = () => {

      return (
         <div id="individual" className="profile-item">
            <a className="image" href="#" onClick={(e) => { e.preventDefault(); }}>
               <img src={userData.individual.profilePic} />
            </a>
            <div className=" head" id="individualName">
               <label>{userData.individual.name}</label>
            </div>
            <div className="subhead">
               <span id="individualExperties">
                  <label>{userData.individual.experties}</label>
               </span>
            </div>
         </div>
      )
   }



   return (
      <div className="page home">
         <div className="profile" ref={profile}>
            <div className="top">
               <a href="#" onClick={(e) => { setProfile({ business: true }); handleClick(e) }} className={`${Profile.business ? 'active' : ''}`}>
                  <i className="fa-light fa-building"></i>
                  <span>
                     <label className="en">Business</label>
                     <label className="mr">व्यवसाय</label>
                     <label className="hn">व्यवसाय</label>
                  </span>
               </a>
               <a href="#" onClick={(e) => { setProfile({ individual: true }); handleClick(e) }} className={`${Profile.individual ? 'active' : ''}`}>
                  <i className="fa-light fa-user-tie"></i>
                  <span>
                     <label className="en">Individual</label>
                     <label className="mr">वैयक्तिक</label>
                     <label className="hn">व्यक्तिगत</label>
                  </span>
               </a>
            </div>
            <div className={`middle circle`}>
               {Profile.individual ? <IndividualProfile /> : <BusinessProfile />}
            </div>
            <div className="bottom">
               <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ VisitModal: true }) }} className="visit-us ">
                  <div className="ico"><i className="fa-light fa-external-link-square"></i></div>
                  <div className="name">
                     <label className="en">Links</label>
                     <label className="mr">लिंक्स</label>
                     <label className="hn">लिंक्स</label>
                  </div>
               </a>
               <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ ForwardModal: true }) }} className="share-one ">
                  <div className="ico"><i className="fa-light fa-share"></i></div>
                  <div className="name">
                     <label className="en">Forward</label>
                     <label className="mr">फॉरवर्ड</label>
                     <label className="hn">फॉरवर्ड</label>
                  </div>
               </a>
               <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ ShareModal: true }) }} className="share-all ">
                  <div className="ico"><i className="fa-light fa-share-alt"></i></div>
                  <div className="name">
                     <label className="en">Share</label>
                     <label className="mr">शेअर</label>
                     <label className="hn">शेअर</label>
                  </div>
               </a>
               <a href="#" onClick={(e) => { e.preventDefault(); }} className="install-app ">
                  <div className="ico"><i className="fa-light fa-arrow-to-bottom"></i></div>
                  <div className="name">
                     <label className="en">Install</label>
                     <label className="mr">इन्स्टॉल</label>
                     <label className="hn">इन्स्टॉल</label>
                  </div>
               </a>
            </div>
         </div>
         <div className="home-actions" style={HomeActionStyle}>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ CallModal: true }) }} className="">
               <span>
                  <i className="fa-light fa-phone"></i>
                  <span>
                     <label className="en">Call</label>
                     <label className="mr">कॉल</label>
                     <label className="hn">कॉल</label>
                  </span>
               </span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ EmailModal: true }) }} className="">
               <span>
                  <i className="fa-light fa-envelope"></i>
                  <span>
                     <label className="en">Email</label>
                     <label className="mr">ई-मेल</label>
                     <label className="hn">ई-मेल</label>
                  </span>
               </span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ ChatModal: true }) }} className="">
               <span>
                  <i className="fa-light fa-comments-alt"></i>
                  <span>
                     <label className="en">Chat</label>
                     <label className="mr">संवाद</label>
                     <label className="hn">संवाद</label>
                  </span>
               </span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setModalOpen({ SmsModal: true }) }} className="">
               <span>
                  <i className="fa-light fa-comment-alt-lines"></i>
                  <span>
                     <label className="en">SMS</label>
                     <label className="mr">मेसेज</label>
                     <label className="hn">मेसेज</label>
                  </span>
               </span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault() }} className="add-to-contact ">
               <span>
                  <i className="fa-light fa-book"></i>
                  <span>
                     <label className="en">Save</label>
                     <label className="mr">जतन</label>
                     <label className="hn">जतन</label>
                  </span>
               </span>
            </a>
            <a href={userData.business.mapUrl} target='_blank' className="google-map ">
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

         {userData.social &&
            <div className="social" ref={social}>
               {userData.social.facebook &&
                  <a href={userData.social.facebook} className="facebook" target="_blank">
                     <i className="fab fa-facebook-f"></i>
                     <span>Facebook</span>
                  </a>
               }
               {userData.social.twitter &&
                  <a href={userData.social.twitter} className="twitter" target="_blank">
                     <i className="fab fa-twitter"></i>
                     <span>Twitter</span>
                  </a>
               }
               {userData.social.linkedin &&
                  <a href={userData.social.linkedin} className="linkedin" target="_blank">
                     <i className="fab fa-linkedin-in"></i>
                     <span>Linkedin</span>
                  </a>
               }
               {userData.social.instagram &&
                  <a href={userData.social.instagram} className="instagram" target="_blank">
                     <i className="fab fa-instagram"></i>
                     <span>Instagram</span>
                  </a>
               }
               {userData.social.youtube &&
                  <a href={userData.social.youtube} className="youtube" target="_blank">
                     <i className="fab fa-youtube"></i>
                     <span>YouTube</span>
                  </a>
               }
               {userData.social.catalogue &&
                  <a href={userData.social.catalogue} className="whatsapp" target="_blank">
                     <i className="fab fa-whatsapp"></i>
                     <span>Catalogue</span>
                  </a>
               }
               {userData.social.telegram &&
                  <a href={userData.social.telegram} className="telegram" target="_blank">
                     <i className="fab fa-telegram"></i>
                     <span>Telegram</span>
                  </a>
               }
            </div>
         }
      </div >
   )

}
export default Home;




