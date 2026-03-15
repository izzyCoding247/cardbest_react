import { useParams } from "react-router-dom";
import { TRANSACTIONDATA } from "../data/TransactionData";
import BackNav from "./components/BackNav";
import DetailsWrapper from "./components/transactionDetailsComponent/DetailsWrapper";
import { useState } from "react";
import Modal from "./components/Modal";

export default function TransactionDetails() {
  const [modalImage, setModalImage] = useState(null);

  // Open modal with specific image
  function openModal(imageUrl) {
    setModalImage(imageUrl);
  }

  function closeModal() {
    setModalImage(null);
  }


  const { tId } = useParams();
  const transaction = TRANSACTIONDATA.find((item) => item.tId === tId);

  if (!transaction) {
    return <p>Transaction not found</p>;
  }

  return (
    <div className="relative">
      <BackNav to="/transaction">Transactions Details</BackNav>

      <div className="bg-gray-50 my-6 mx-4 rounded-xl mt-21 pb-20">
        <div className="flex justify-between items-center px-4 py-3 ">
          <div className="w-13 h-13 rounded-lg bg-gray-100 flex items-center justify-center">
            <img
              src={transaction.tradeLogo}
              alt={transaction.transactionName}
              className="w-10 h-10 object-contain"
            />
          </div>
          <p className="font-semibold text-sm">{transaction.transactionName}</p>
        </div>

        <DetailsWrapper transaction={transaction} />

        {transaction.transactionType === "Sell Gift Card" && (
          <>
            <div className="text-gray-600 text-sm mt-5 px-4">
              <div className="mb-5">
                <p className="mb-2 font-medium">Attached Image</p>

                <img
                  src={transaction.attachedImg}
                  alt="Trade attachment"
                  className="w-16 cursor-pointer rounded-md"
                  onClick={() => openModal(transaction.attachedImg)}
                />
              </div>

              <div>
                <p className="mb-1 font-medium">Attached Comment</p>
                <p className="text-black font-semibold text-sm">
                  {transaction.attachedComment}
                </p>
              </div>
            </div>

            {modalImage && (
              <Modal open={!!modalImage} onClose={closeModal}>
                <img
                  src={modalImage}
                  alt="Preview"
                  className="w-full rounded-lg object-contain"
                />
              </Modal>
            )}
          </>
        )}
        {transaction.status === "Rejected" && (
          <>
            <div className="text-gray-600 text-sm mt-5 px-4">
              <div>
                <p className="mb-1 font-medium text-red-600">
                  Rejection Reason
                </p>
                <p className="text-black font-semibold text-sm">
                  {transaction.rejectReason}
                </p>
              </div>
              <div className="mt-5">
                <p className="text-red-600 font-medium">Rejection Images</p>

                <img
                  src={transaction.rejectImg}
                  alt="Rejected attachment"
                  className="w-16 cursor-pointer rounded-md mt-3"
                  onClick={() => openModal(transaction.rejectImg)}
                />
              </div>
            </div>

            {modalImage && (
              <Modal open={!!modalImage} onClose={closeModal}>
                <img
                  src={modalImage}
                  alt="Preview"
                  className="w-full rounded-lg object-contain"
                />
              </Modal>
            )}
          </>
        )}
      </div>
    </div>
  );
}
