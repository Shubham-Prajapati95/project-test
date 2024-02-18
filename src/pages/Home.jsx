import React, { useState } from "react";
import Modal from "../components/modal/Modal";

const Home = () => {
  const [isModal, setIsModal] = useState(true);
  const [editBank, setEditBank] = useState(false);
  let user = {
    _id: "65cfad5082297e810d4a8daa",
    mobile_number: 7990176865,
    fullname: "SHUBHAM PRAJAPATI",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    zip_code: 395009,
    bank_accounts: [
      {
        user_id: "65cfad5082297e810d4a8daa",
        account_holder_name: "Dev Janakbhai Jariwala",
        account_number: "746240",
        ifsc_code: "123456",
        bank_name: "Bank of Borada",
        _id: "65cfad5082297e810d4a8dab",
        __v: 0,
      },
      {
        user_id: "65cfad5082297e810d4a8dab",
        account_holder_name: "Ved Lalu prashad",
        account_number: "2534893",
        ifsc_code: "3527394",
        bank_name: "State Bank of India",
        _id: "65cfad5082297e810d4a8dac",
        __v: 0,
      },
    ],
    invested_plans: [
      {
        user_id: "65cfad5082297e810d4a8daa",
        investment_plan: {
          plan_name: "10% plan",
          monthly_roi_percent: 10,
          _id: "65cf9b98964ab276c7c82455",
          __v: 0,
        },
        invested_amount: 500000,
        invested_date: "2024-02-13T17:08:20.000Z",
        maturity_date: "2024-02-13T17:08:20.000Z",
        bank_account: {
          user_id: "65cfad5082297e810d4a8daa",
          account_holder_name: "Dev Janakbhai Jariwala",
          account_number: "746240",
          ifsc_code: "123456",
          bank_name: "Bank of Borada",
          _id: "65cfad5082297e810d4a8dab",
          __v: 0,
        },
        payout_schedule: [],
        _id: "65cfad5082297e810d4a8dae",
        __v: 0,
      },
      {
        user_id: "65cfad5082297e810d4a8dab",
        investment_plan: {
          plan_name: "15% plan",
          monthly_roi_percent: 15,
          _id: "65cf9b98964ab276c7c82455",
          __v: 0,
        },
        invested_amount: 200000,
        invested_date: "2024-02-13T17:08:20.000Z",
        maturity_date: "2024-02-13T17:08:20.000Z",
        bank_account: {
          user_id: "65cfad5082297e810d4a8dab",
          account_holder_name: "Ved Lalu prashad",
          account_number: "2534893",
          ifsc_code: "3527394",
          bank_name: "State Bank of India",
          _id: "65cfad5082297e810d4a8dac",
          __v: 0,
        },
        payout_schedule: [],
        _id: "65cfad5082297e810d4a8dad",
        __v: 0,
      },
      {
        user_id: "65cfad5082297e810d4a8daa",
        investment_plan: {
          plan_name: "10% plan",
          monthly_roi_percent: 10,
          _id: "65cf9b98964ab276c7c82455",
          __v: 0,
        },
        invested_amount: 500000,
        invested_date: "2024-02-13T17:08:20.000Z",
        maturity_date: "2024-02-13T17:08:20.000Z",
        bank_account: {
          user_id: "65cfad5082297e810d4a8daa",
          account_holder_name: "Dev Janakbhai Jariwala",
          account_number: "746240",
          ifsc_code: "123456",
          bank_name: "Bank of Borada",
          _id: "65cfad5082297e810d4a8dab",
          __v: 0,
        },
        payout_schedule: [],
        _id: "65cfad5082297e810d4a8dae",
        __v: 0,
      },
      {
        user_id: "65cfad5082297e810d4a8dab",
        investment_plan: {
          plan_name: "15% plan",
          monthly_roi_percent: 15,
          _id: "65cf9b98964ab276c7c82455",
          __v: 0,
        },
        invested_amount: 200000,
        invested_date: "2024-02-13T17:08:20.000Z",
        maturity_date: "2024-02-13T17:08:20.000Z",
        bank_account: {
          user_id: "65cfad5082297e810d4a8dab",
          account_holder_name: "Ved Lalu prashad",
          account_number: "2534893",
          ifsc_code: "3527394",
          bank_name: "State Bank of India",
          _id: "65cfad5082297e810d4a8dac",
          __v: 0,
        },
        payout_schedule: [],
        _id: "65cfad5082297e810d4a8dad",
        __v: 0,
      },
    ],
    __v: 0,
  };
  // user = JSON.parse(user)
  return (
    <>
      {isModal && (
        <div className="">
          {" "}
          <Modal
            isOpen={isModal}
            onClose={() => setIsModal(false)}
            title={"Client Details"}
          >
            <div>
              <div className="personal text-[25px]  w-full md:w-[1000px] ">
                <div className="flex   justify-center">
                  <div className="font-title font-bold text-[40px]">
                    {" "}
                    {user.fullname}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {" "}
                    <span className="material-icons mr-2">call</span>
                    {user.mobile_number}
                  </div>{" "}
                  <div className="flex items-center">
                    <span className="material-icons mr-2">location_on</span>{" "}
                    {user.city}, {user.state}, {user.country}
                  </div>
                </div>
              </div>
              {/* bank details */}
              <div>
                <div className="flex justify-end mt-5 ">
                  <button
                    onClick={() => setEditBank((prev) => !prev)}
                    className="bg-purple-500 rounded-lg px-3 py-1 text-white text-[16px] hover:text-[20px] transistion-all duration-[600ms]"
                  >
                    {!editBank ? "Edit Bank details" : "Cancel"}
                  </button>
                </div>
                {editBank && (
                  <div>
                    <h1 className=" text-[30px]">bank details</h1>
                    {user?.bank_accounts.map((bank_account) => (
                      <div className="border mb-3 px-5 py-2 rounded-lg">
                        <div className="bank" key={bank_account._id}>
                          <span className="material-icons">edit</span>
                          <span className="material-icons">delete</span>
                          <div>
                            account holder: {bank_account.account_holder_name}
                          </div>
                          <div>
                            account number: {bank_account.account_number}
                          </div>
                          <div>ifsc code: {bank_account.ifsc_code}</div>
                          <div>bank name: {bank_account.bank_name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {!editBank && (
                <div className="plan">
                  <h1 className=" text-[30px]">plan details</h1>
                  {user.invested_plans.map((plan) => (
                    <div className=" border rounded-lg" key={plan._id}>
                      <div>plan name: {plan.investment_plan.plan_name}</div>
                      <div>
                        monthly roi: {plan.investment_plan.monthly_roi_percent}
                      </div>
                      <div>amount: {plan.invested_amount}</div>
                      <div>
                        invested date: {plan.invested_date.slice(0, 10)}
                      </div>
                      <div>
                        maturity date: {plan.maturity_date.slice(0, 10)}
                      </div>
                      <div>
                        <div>bank details</div>
                        <div>
                          account number: {plan.bank_account.account_number}
                        </div>
                        <div>
                          account holder name:{" "}
                          {plan.bank_account.account_holder_name}
                        </div>
                        <div>bank name: {plan.bank_account.bank_name}</div>
                        <div>ifsc code: {plan.bank_account.ifsc_code}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Modal>
        </div>
      )}
      <button onClick={() => setIsModal(true)}>open Modal</button>
    </>
  );
};

export default Home;
