
import './modal.scss';
function ChatModal() {
   return (
      <div id="modal-chat" className="modal">
         <div className="modal-header">
            <div className="ico"><i className="fa-light fa-comments-alt"></i></div>
            <div className="title">
               <label className="en">Chat</label>
               <label className="mr">संवाद</label>
               <label className="hn">संवाद</label>
            </div>
         </div>
         <div className="modal-body">
            <div className="item-list">
               <a href="https://wa.me/911234567890" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Individual WhatsApp</label>
                     <label className="mr">वैयक्तिक WhatsApp</label>
                     <label className="hn">व्यक्तिगत WhatsApp</label>
                  </span>
                  <span className="val">1234567890</span>
               </a>
               <a href="https://t.me/surajpatil89" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Individual Telegram</label>
                     <label className="mr">वैयक्तिक Telegram</label>
                     <label className="hn">व्यक्तिगत Telegram</label>
                  </span>
                  <span className="val">@your_telegram_id</span>
               </a>
               <a href="https://wa.me/919876543210" className="item-row ripple-effect-2">
                  <span className="lbl">
                     <label className="en">Business WhatsApp</label>
                     <label className="mr">व्यवसाय WhatsApp</label>
                     <label className="hn">व्यवसाय WhatsApp</label>
                  </span>
                  <span className="val">9876543210</span>
               </a>
            </div>
         </div>
      </div>
   );
}
export default ChatModal()