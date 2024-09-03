import React, { useState } from "react";
import "./survey.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import axios from "axios";

const Survey = () => {
  const [formData, setFormData] = useState({
    state: "Tamil Nadu",
    district: "Kancheepuram",
    block: "Uthiramerur",
    gramPanchayat: "Kaliyampoondi",
    habitations: "",
    wardNo: "",
    streetName: "",
    doorNo: "",
    name: "",
    sex: "",
    dob: "",
    education: "",
    occupation: "",
    mnregaJobCardNo: "",
    aadhaarCardNo: "",
    voterIdNo: "",
    maritalStatus: "",
    bloodGroup: "",
    bankAccount: "",
    postOfficeAccount: "",
    annualIncome: "",
    livingStatus: "",
    mobileNo: "",
    community: "",
    caste: "",
    religion: "",
    livestockGoat: "",
    livestockCow: "",
    livestockChicken: "",
    livestockOthers: "",
    disabled: "",
    widow: "",
    diseased: "",
    toiletFacility: "",
    interestInToilet: "",
    ownHouse: "",
    houseType: "",
    houseFundingType: "",
    interestInBuildingHouse: "",
    agriculturalLand: "",
    farmerCard: "",
    medicalInsurance: "",
    medicalInsuranceType: "",
    pensionHolder: "",
    sewageWaterFacility: "",
    garbageCollection: "",
    drinkingWater: "",
    waterConnectionNo: "",
    ownWell: "",
    borewell: "",
    gasConnection: "",
    electricalFacility: "",
    rationCard: "",
    rationCardNo: "",
    womensGroup: "",
    streetlightFacility: "",
    majorProblems: "",
    formFilledBy: "",
    surveyDate: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://acmback.onrender.com/forms/add", formData)
      .then(console.log("Form Submitted Successfully"))
      .catch((error) => {
        console.error(error);
      });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInformation
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <ContactAndLiving formData={formData} handleChange={handleChange} />
        );
      case 3:
        return (
          <EconomicInformation
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <HousingAndFacilities
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 5:
        return (
          <SpecialConditions formData={formData} handleChange={handleChange} />
        );
      case 6:
        return (
          <AdditionalInformation
            formData={formData}
            handleChange={handleChange}
          />
        );
      case 7:
        return <FinalDetails formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="survey-page-container">
      <div className="survey-header-container">
        <h1>Survey Form</h1>
        <svg
          width="300"
          height="35"
          viewBox="0 0 462 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 20C260.2 -5.6 415.667 4.66667 461 13M55 32C314.2 6.4 388.667 4.66667 434 13"
            stroke="#FFDE91"
            strokeWidth="6"
          />
        </svg>
      </div>
      <div className="survey-form-container">
        <form className="survey-form" onSubmit={handleSubmit}>
          {renderStep()}
          <div className="survey-form__navigation">
            {currentStep > 1 && (
              <button
                className="survey-form__button"
                type="button"
                onClick={prevStep}
              >
                Previous
              </button>
            )}
            {currentStep < 7 && (
              <button
                className="survey-form__button"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            )}
            {currentStep === 7 && (
              <button className="survey-form__button" type="submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const PersonalInformation = ({ formData, handleChange }) => (
  <>
    <h2>Personal Information</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">Name (பெயர்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Sex (லிங்கம்)</label>
      <select
        className="survey-form__select"
        name="sex"
        value={formData.sex}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Male">Male (ஆண்)</option>
        <option value="Female">Female (பெண்)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Date of Birth (பிறந்த தேதி)</label>
      <input
        className="survey-form__input"
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Community (சமூகத்தொகுப்பு)</label>
      <input
        className="survey-form__input"
        type="text"
        name="community"
        value={formData.community}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Caste (குலம்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="caste"
        value={formData.caste}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Religion (மதம்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Education (கல்வி)</label>
      <input
        className="survey-form__input"
        type="text"
        name="education"
        value={formData.education}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Occupation (வேலை)</label>
      <input
        className="survey-form__input"
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

const ContactAndLiving = ({ formData, handleChange }) => (
  <>
    <h2>Contact and Living Status</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">Ward No (வர்டு எண்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="wardNo"
        value={formData.wardNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Street Name (வீதி பெயர்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="streetName"
        value={formData.streetName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Door No (வசதியின் எண்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="doorNo"
        value={formData.doorNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Habitations (குடியிருப்புகள்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="habitations"
        value={formData.habitations}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Mobile No (மொபைல் எண்)</label>
      <input
        className="survey-form__input"
        type="text"
        name="mobileNo"
        value={formData.mobileNo}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

const EconomicInformation = ({ formData, handleChange }) => (
  <>
    <h2>Economic Information</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        MNERGA Job Card No (எம்எனரெஜா வேலை அட்டை எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="mnregaJobCardNo"
        value={formData.mnregaJobCardNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Aadhaar Card No (ஆதார் அட்டை எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="aadhaarCardNo"
        value={formData.aadhaarCardNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Voter ID No (வாக்காளர் அடையாள எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="voterIdNo"
        value={formData.voterIdNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Bank Account No (வங்கிக்கணக்கு எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="bankAccount"
        value={formData.bankAccount}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Post Office Account No (பருவ கால கணக்கு எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="postOfficeAccount"
        value={formData.postOfficeAccount}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Annual Income (முதன்மை வருமானம்)
      </label>
      <input
        className="survey-form__input"
        type="number"
        name="annualIncome"
        value={formData.annualIncome}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Livestock (Goat) (மாடுபொறி - ஆடு)
      </label>
      <input
        className="survey-form__input"
        type="number"
        name="livestockGoat"
        value={formData.livestockGoat}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Livestock (Cow) (மாடுபொறி - மாடு)
      </label>
      <input
        className="survey-form__input"
        type="number"
        name="livestockCow"
        value={formData.livestockCow}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Livestock (Chicken) (மாடுபொறி - கோழி)
      </label>
      <input
        className="survey-form__input"
        type="number"
        name="livestockChicken"
        value={formData.livestockChicken}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Livestock (Others) (மாடுபொறி - பிற)
      </label>
      <input
        className="survey-form__input"
        type="number"
        name="livestockOthers"
        value={formData.livestockOthers}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

const HousingAndFacilities = ({ formData, handleChange }) => (
  <>
    <h2>Housing and Facilities</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">Own House (செல்ல சொந்த வீடு)</label>
      <select
        className="survey-form__select"
        name="ownHouse"
        value={formData.ownHouse}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">House Type (வீட்டு வகை)</label>
      <input
        className="survey-form__input"
        type="text"
        name="houseType"
        value={formData.houseType}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        House Funding Type (வீட்டு நிதியுதவி வகை)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="houseFundingType"
        value={formData.houseFundingType}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Interest in Building House (வீடு கட்டுவதில் ஆர்வம்)
      </label>
      <select
        className="survey-form__select"
        name="interestInBuildingHouse"
        value={formData.interestInBuildingHouse}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Agricultural Land (விவசாய நிலம்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="agriculturalLand"
        value={formData.agriculturalLand}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Farmer Card (விவசாயி அட்டை)</label>
      <input
        className="survey-form__input"
        type="text"
        name="farmerCard"
        value={formData.farmerCard}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

const AdditionalInformation = ({ formData, handleChange }) => (
  <>
    <h2>Additional Information</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Medical Insurance (சிகிச்சை காப்பீடு)
      </label>
      <select
        className="survey-form__select"
        name="medicalInsurance"
        value={formData.medicalInsurance}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Medical Insurance Type (சிகிச்சை காப்பீடு வகை)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="medicalInsuranceType"
        value={formData.medicalInsuranceType}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Pension Holder (பென்ஷன் பெறுபவர்)
      </label>
      <select
        className="survey-form__select"
        name="pensionHolder"
        value={formData.pensionHolder}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Sewage Water Facility (மாசு நீர் வசதி)
      </label>
      <select
        className="survey-form__select"
        name="sewageWaterFacility"
        value={formData.sewageWaterFacility}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Garbage Collection (மணக்கு சேகரிப்பு)
      </label>
      <select
        className="survey-form__select"
        name="garbageCollection"
        value={formData.garbageCollection}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Drinking Water (குடிநீர்)</label>
      <select
        className="survey-form__select"
        name="drinkingWater"
        value={formData.drinkingWater}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Water Connection No (நீர் இணைப்பு எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="waterConnectionNo"
        value={formData.waterConnectionNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Own Well (சொந்த கிணறு)</label>
      <select
        className="survey-form__select"
        name="ownWell"
        value={formData.ownWell}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Borewell (போற்வெல்)</label>
      <select
        className="survey-form__select"
        name="borewell"
        value={formData.borewell}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Gas Connection (வாயு இணைப்பு)
      </label>
      <select
        className="survey-form__select"
        name="gasConnection"
        value={formData.gasConnection}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Electrical Facility (மின் வசதி)
      </label>
      <select
        className="survey-form__select"
        name="electricalFacility"
        value={formData.electricalFacility}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Ration Card (விகித அட்டை)</label>
      <select
        className="survey-form__select"
        name="rationCard"
        value={formData.rationCard}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Ration Card No (விகித அட்டை எண்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="rationCardNo"
        value={formData.rationCardNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Women's Group (பெண்கள் குழு)</label>
      <select
        className="survey-form__select"
        name="womensGroup"
        value={formData.womensGroup}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Streetlight Facility (தெருவிளக்கு வசதி)
      </label>
      <select
        className="survey-form__select"
        name="streetlightFacility"
        value={formData.streetlightFacility}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
  </>
);

const SpecialConditions = ({ formData, handleChange }) => (
  <>
    <h2>Special Conditions</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">Disabled (முனைவோர்)</label>
      <select
        className="survey-form__select"
        name="disabled"
        value={formData.disabled}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Widow (அதிர்ஷ்டம்)</label>
      <select
        className="survey-form__select"
        name="widow"
        value={formData.widow}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Diseased (நோயாளி)</label>
      <select
        className="survey-form__select"
        name="diseased"
        value={formData.diseased}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆமாம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
  </>
);

const FinalDetails = ({ formData, handleChange }) => (
  <>
    <h2>Final Details</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Form Filled By (படிவம் பூர்த்தி செய்தவர்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="formFilledBy"
        value={formData.formFilledBy}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Survey Date (சர்வே தேதி)</label>
      <input
        className="survey-form__input"
        type="date"
        name="surveyDate"
        value={formData.surveyDate}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Major Problems (முக்கிய சிக்கல்கள்)
      </label>
      <textarea
        className="survey-form__input"
        name="majorProblems"
        value={formData.majorProblems}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

export default withFadeInAnimation(Survey);
