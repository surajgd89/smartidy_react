import { useGlobalContext } from '../../context';
import { useState } from "react";
import GalleryModal from "../../layout/modals/GalleryModal";
import './Gallery.scss';
import noImageIcon from '../../assets/images/no-image.png';
import noVideoIcon from '../../assets/images/no-video.png';
import GalleryImageDefault from '../../assets/images/gallery-default.jpg';


function Gallery({ modal }) {
   const setModalOpen = modal;
   const { Data } = useGlobalContext();
   const userData = Data.userData;
   const gallery = userData.business.gallery;
   const videos = userData.business.videos;

   const [clickedImg, setClickedImg] = useState(null);
   const [currentIndex, setCurrentIndex] = useState(null);

   const handleClick = (element, index) => {
      setCurrentIndex(index);
      setClickedImg(element.src);
   };

   const handelRotationRight = () => {
      const totalLength = gallery.length;
      if (currentIndex + 1 >= totalLength) {
         setCurrentIndex(0);
         const newUrl = gallery[0].src;
         setClickedImg(newUrl);
         return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = gallery.filter((item) => {
         return gallery.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].src;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
   };

   const handelRotationLeft = () => {
      const totalLength = gallery.length;
      if (currentIndex === 0) {
         setCurrentIndex(totalLength - 1);
         const newUrl = gallery[totalLength - 1].src;
         setClickedImg(newUrl);
         return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = gallery.filter((item) => {
         return gallery.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].src;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
   };

   return (
      <>
         <div className="page gallery">
            <div className="header">
               <div className="title">
                  <label className="en">Gallery</label>
                  <label className="mr">गॅलरी</label>
                  <label className="hn">गॅलरी</label>
               </div>
               <div className="action">
                  <a onClick={() => { setModalOpen({ 'ShareModal': true }) }} className="share-all ">
                     <i className="fa-light fa-share-alt"></i>
                  </a>
               </div>
            </div>
            <div className="content">

               <div className={`gallery-sec ${gallery != null ? '' : 'not-configured'}`}>
                  <div className="title">
                     <label className="en">Photos</label>
                     <label className="mr">छायाचित्रे</label>
                     <label className="hn">छायाचित्र</label>
                  </div>
                  <div className="desc">
                     <label className="en">Few photos about business</label>
                     <label className="mr">व्यवसायाबद्दलची मोजकी छायाचित्रे</label>
                     <label className="hn">कुछ व्यावसायिक छायाचित्र</label>
                  </div>
                  <div className="images-area ">

                     {gallery != null ?
                        <div className="images-list">

                           {gallery.map((element, index) => {
                              return (
                                 <div className="img-item" key={index} onClick={() => handleClick(element, index)}>
                                    <img src={element.src} />
                                 </div>
                              )
                           })}

                        </div>
                        : <div className="info-message">
                           <img className="info-ico" src={noImageIcon} alt="" />
                           <div className="info-text">
                              <label className="en">Sorry ! We have no photos.</label>
                              <label className="mr">क्षमस्व ! छायाचित्रे नाहीत.</label>
                              <label className="hn">क्षमस्व ! कोई छायाचित्र नहीं।</label>
                           </div>
                        </div>
                     }
                  </div>
               </div>



               <div className={`gallery-sec ${videos != null ? '' : 'not-configured'}`}>
                  <div className="title">
                     <label className="en">Videos</label>
                     <label className="mr">व्हिडीओ</label>
                     <label className="hn">विडिओ</label>
                  </div>
                  <div className="desc">
                     <label className="en">Few videos about business</label>
                     <label className="mr">व्यवसायाबद्दलच्या मोजक्या व्हिडीओ</label>
                     <label className="hn">कुछ व्यावसायिक विडिओ</label>
                  </div>
                  <div className="videos-area">
                     {videos != null ?
                        <div className="videos-list">
                           <a href="#" className="video-item">
                              <span className="ico"><i className="fa-light fa-video"></i></span>
                              <span className="name">Video 1 </span>
                           </a>
                           <a href="#" className="video-item">
                              <span className="ico"><i className="fa-light fa-video"></i></span>
                              <span className="name">Video 2 </span>
                           </a>
                           <a href="#" className="video-item">
                              <span className="ico"><i className="fa-light fa-video"></i></span>
                              <span className="name">Video 3 </span>
                           </a>
                           <a href="#" className="video-item">
                              <span className="ico"><i className="fa-light fa-video"></i></span>
                              <span className="name">Video 4 </span>
                           </a>
                        </div>
                        : <div className="info-message">
                           <img className="info-ico" src={noVideoIcon} alt="" />
                           <div className="info-text">
                              <label className="en">Sorry ! We have no videos.</label>
                              <label className="mr">क्षमस्व ! व्हिडीओ नाहीत.</label>
                              <label className="hn">क्षमस्व ! कोई विडिओ नहीं।</label>
                           </div>
                        </div>}

                  </div>
               </div>

            </div>
         </div>

         {clickedImg && (
            <GalleryModal
               clickedImg={clickedImg}
               handelRotationRight={handelRotationRight}
               setClickedImg={setClickedImg}
               handelRotationLeft={handelRotationLeft}
            />
         )}
      </>

   )
}


export default Gallery;