import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  useState } from 'react';
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


  let [modalOpen, setModalOpen] = useState({
    VisitModal: false,
    ForwardModal: false,
    ShareModal: false,
    CallModal: false,
    EmailModal: false,
    ChatModal: false,
    SmsModal: false,
    UpiPaymentModal: false,
  });

  const [DataLang, setDataLang] = useState({
    English: 'en',
    Marathi: 'mr',
    Hindi: 'hn'
  })



  return (
    <>
      <div className="wrapper" data-lang={DataLang.English}>
        <div className="inner-body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Tabs />}>
                <Route index path="/" element={<Home modal={setModalOpen} />} />
                <Route path="about" element={<About modal={setModalOpen} />} />
                <Route path="gallery" element={<Gallery modal={setModalOpen} />} />
                <Route path="payus" element={<PayUs modal={setModalOpen} />} />
              </Route>
            </Routes>
          </BrowserRouter>
          {/* <div className="page-loader"></div> */}
        </div>
        {modalOpen.VisitModal && <VisitModal modal={setModalOpen} />}
        {modalOpen.ForwardModal && <ForwardModal modal={setModalOpen} />}
        {modalOpen.ShareModal && <ShareModal modal={setModalOpen} />}
        {modalOpen.CallModal && <CallModal modal={setModalOpen} />}
        {modalOpen.EmailModal && <EmailModal modal={setModalOpen} />}
        {modalOpen.ChatModal && <ChatModal modal={setModalOpen} />}
        {modalOpen.SmsModal && <SmsModal modal={setModalOpen} />}
        {modalOpen.UpiPaymentModal && <UpiPaymentModal modal={setModalOpen} />}
      </div>
    </>
  );
}



