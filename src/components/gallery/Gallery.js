import './Gallery.scss';

import ProfilePhotoDefault from '../../assets/images/gallery-default.jpg'



function Gallery(props) {
   const setModalOpen = props.setModalOpen;
   return (
      <div className="page" id="gallery">
         <div className="header">
            <div className="title">
               <label className="en">Gallery</label>
               <label className="mr">गॅलरी</label>
               <label className="hn">गॅलरी</label>
            </div>
            <div className="action">
               <a onClick={() => { setModalOpen({ 'ShareModal': true }) }} className="share-all ripple-effect-1">
                  <i className="fa-light fa-share-alt"></i>
               </a>
            </div>
         </div>
         <div className="content">
            <div className="gallery-sec">
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
                  <div className="images-list">
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                     <a className="img-item" href={ProfilePhotoDefault}>
                        <img src={ProfilePhotoDefault} />
                     </a>
                  </div>
                  <div className="info-message">
                     <img className="info-ico" src="images/no-image.png" alt="" />
                     <div className="info-text">
                        <label className="en">Sorry ! We have no photos.</label>
                        <label className="mr">क्षमस्व ! छायाचित्रे नाहीत.</label>
                        <label className="hn">क्षमस्व ! कोई छायाचित्र नहीं।</label>
                     </div>
                  </div>
               </div>
            </div>
            <div className="gallery-sec">
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
                  <div className="videos-list">
                     <a href="#" className="video-item ripple-effect-2">
                        <span className="ico"><i className="fa-light fa-video"></i></span>
                        <span className="name">Video 1 </span>
                     </a>
                     <a href="#" className="video-item ripple-effect-2">
                        <span className="ico"><i className="fa-light fa-video"></i></span>
                        <span className="name">Video 2 </span>
                     </a>
                     <a href="#" className="video-item ripple-effect-2">
                        <span className="ico"><i className="fa-light fa-video"></i></span>
                        <span className="name">Video 3 </span>
                     </a>
                     <a href="#" className="video-item ripple-effect-2">
                        <span className="ico"><i className="fa-light fa-video"></i></span>
                        <span className="name">Video 4 </span>
                     </a>
                  </div>
                  <div className="info-message">
                     <img className="info-ico" src="images/no-video.png" alt="" />
                     <div className="info-text">
                        <label className="en">Sorry ! We have no videos.</label>
                        <label className="mr">क्षमस्व ! व्हिडीओ नाहीत.</label>
                        <label className="hn">क्षमस्व ! कोई विडिओ नहीं।</label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Gallery;