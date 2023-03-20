import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.scss';

import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import PayUs from './components/payus/PayUs';
import Tabs from './layout/tabs/Tabs';

import VisitModal from './layout/modals/VisitModal';
import ForwardModal from './layout/modals/ForwardModal';
import ShareModal from './layout/modals/ShareModal';

import CallModal from './layout/modals/CallModal';
import EmailModal from './layout/modals/EmailModal';
import ChatModal from './layout/modals/ChatModal';
import SmsModal from './layout/modals/SmsModal';

import UpiPaymentModal from './layout/modals/UpiPaymentModal';


export default function App() {


  // let [modalOpen, setModalOpen] = useState({
  //   'VisitModal': false,
  //   'ForwardModal': false,
  //   'ShareModal': false,
  //   'CallModal': false,
  //   'EmailModal': false,
  //   'ChatModal': false,
  //   'SmsModal': false,
  //   'UpiPaymentModal': false,
  // });

  let [VisitModal, setVisitModal] = useState(false);
  let [ForwardModal, setForwardModal] = useState(false);
  let [ShareModal, setShareModal] = useState(false);
  let [CallModal, setCallModal] = useState(false);
  let [EmailModal, setEmailModal] = useState(false);
  let [ChatModal, setChatModal] = useState(false);
  let [SmsModal, setSmsModal] = useState(false);
  let [UpiPaymentModal, setUpiPaymentModal] = useState(false);

  // useEffect(() => {
  //   console.log(modalOpen.VisitModal)
  // },[]);


  return (
    <>
      <div className="wrapper" data-lang="en">
        <div className="inner-body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Tabs />}>
                <Route index element={<Home modal={{
                  setVisitModal, setForwardModal, setShareModal,
                  setCallModal, setEmailModal, setChatModal, setSmsModal
                }} />} />
                <Route path="about" element={<About modal={setShareModal} />} />
                <Route path="gallery" element={<Gallery modal={setShareModal} />} />
                <Route path="payus" element={<PayUs modal={{ setShareModal, setUpiPaymentModal }} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>

        {VisitModal && <VisitModal modal={setVisitModal} />}
        {ForwardModal && <ForwardModal modal={setForwardModal} />}
        {ShareModal && <ShareModal modal={setShareModal} />}
        {CallModal && <CallModal modal={setCallModal} />}
        {EmailModal && <EmailModal modal={setEmailModal} />}
        {ChatModal && <ChatModal modal={setChatModal} />}
        {SmsModal && <SmsModal modal={setSmsModal} />}
        {UpiPaymentModal && <UpiPaymentModal modal={setUpiPaymentModal} />}

        <div className="page-loader"></div>

      </div>
    </>
  );
}



