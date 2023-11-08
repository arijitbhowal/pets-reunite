import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Tag from "./Tag";
// import "./ReportCardModal.css"; // Import the CSS file for styling
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function ReportCardModal({ show, modalData, onHide }) {
  const [emailShow, setEmailShow] = useState(false);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal__header">
          {modalData.status} Pet Report
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__report">
          <div>
            <div className="modal__first-line">
              <h4 className="modal__name">
                <strong>"{modalData.name}" </strong>
                <small>
                  {modalData.sex} {modalData.type}
                </small>
              </h4>
              <Tag text={modalData.status} />
            </div>
            <p>
              <strong>{modalData.status} Date :</strong> {modalData.date}
            </p>
            <p>
              <strong>Last Seen Address :</strong> {modalData.address}
            </p>
            <p>
              <strong>Description :</strong> {modalData.description}
            </p>
          </div>
          <img src={modalData.image} alt="pet" className="modal__image" />
        </div>
        {emailShow && (
          <form className="form">
            <p className="contact-form__header">
              Please leave your message here
            </p>
            <textarea
              className="contact-form__textarea"
              placeholder="Please leave your message here, we will send out the email to contact the pet-owner for you."
            ></textarea>
            <div className="contact-form__button">
              <button
                className="alternate-button"
                onClick={() => setEmailShow(false)}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <div className="modal__button">
          <button
            className="alternate-button"
            onClick={() => setEmailShow(!emailShow)}
          >
            Contact
          </button>
        </div>
        <div className="modal__share-buttons">
          <FacebookShareButton
            url="https://paws-reunite.web.app/"
            quote="Please help this pet to find its family!"
            hashtag="#lostpets"
          >
            <FacebookIcon size={36} className="share-button" />
          </FacebookShareButton>
          <TwitterShareButton
            title="Paws Reunite"
            url="https://paws-reunite.web.app/"
          >
            <TwitterIcon size={36} className="share-button" />
          </TwitterShareButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ReportCardModal;
