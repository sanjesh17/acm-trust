import React, { useState } from "react";
import "./survey.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

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
    console.log("Form Data:", formData);
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
          <AdditionalInformation
            formData={formData}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
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
          {currentStep < 5 && (
            <button
              className="survey-form__button"
              type="button"
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {currentStep === 5 && (
            <button className="survey-form__button" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
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
      <label className="survey-form__label">Sex (பாலினம்)</label>
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
        <option value="Others">Others (மற்றவை)</option>
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
      <label className="survey-form__label">Education (கல்வி தகுதி)</label>
      <select
        className="survey-form__select"
        name="education"
        value={formData.education}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Not Literate">Not Literate</option>
        <option value="Under 10th">Under 10th</option>
        <option value="Under 12th">Under 12th</option>
        <option value="ITI">ITI</option>
        <option value="Diploma">Diploma</option>
        <option value="Graduate">Graduate</option>
        <option value="Post Graduate">Post Graduate</option>
      </select>
    </div>
  </>
);

const ContactAndLiving = ({ formData, handleChange }) => (
  <>
    <h2>Contact and Living Status</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">Mobile No (அலைபேசி எண்)</label>
      <input
        className="survey-form__input"
        type="tel"
        name="mobileNo"
        value={formData.mobileNo}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Inside or Outside village (கிராமத்திற்கு உள்ளே அல்லது வெளியே)
      </label>
      <select
        className="survey-form__select"
        name="livingStatus"
        value={formData.livingStatus}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Inside living">Inside living (உள்ளே வாழும்)</option>
        <option value="Outside living">Outside living (வெளியில் வாழும்)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Community (சமூகம்)</label>
      <select
        className="survey-form__select"
        name="community"
        value={formData.community}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="OC">OC</option>
        <option value="BC">BC</option>
        <option value="MBC">MBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="Others">Others</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Religion (மதம்)</label>
      <select
        className="survey-form__select"
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Hindu">Hindu (இந்து)</option>
        <option value="Muslim">Muslim (முஸ்லிம்)</option>
        <option value="Christian">Christian (கிறிஸ்து)</option>
        <option value="Others">Others (மற்றவை)</option>
      </select>
    </div>
  </>
);

const EconomicInformation = ({ formData, handleChange }) => (
  <>
    <h2>Economic Information</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Annual Income (ஆண்டு வருமானம்)
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
      <label className="survey-form__label">Occupations (தொழில்)</label>
      <select
        className="survey-form__select"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Farmers">Farmers</option>
        <option value="Daily Wages">Daily Wages</option>
        <option value="Gov Jobs">Gov Jobs</option>
        <option value="Private Jobs">Private Jobs</option>
        <option value="Not Working">Not Working</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Bank A/C (வங்கி கணக்கு)</label>
      <select
        className="survey-form__select"
        name="bankAccount"
        value={formData.bankAccount}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">Ration Card / குடும்ப அட்டை</label>
      <select
        className="survey-form__select"
        name="rationCard"
        value={formData.rationCard}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
  </>
);

const HousingAndFacilities = ({ formData, handleChange }) => (
  <>
    <h2>Housing and Facilities</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Own House / சொந்த வீடு உள்ளதா
      </label>
      <select
        className="survey-form__select"
        name="ownHouse"
        value={formData.ownHouse}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">House Type (வீட்டின் வகை)</label>
      <select
        className="survey-form__select"
        name="houseType"
        value={formData.houseType}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Homeless">Homeless (வீடற்றவர்)</option>
        <option value="Koorai veedu">Koorai veedu (கூறை வீடு)</option>
        <option value="Ottu vedu">Ottu vedu (ஓட்டு வீடு)</option>
        <option value="Maadi veedu">Maadi veedu (மாடி வீடு)</option>
        <option value="Rental House">Rental House (வாடகை வீடு)</option>
      </select>
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Toilet facility /கழிப்பறை வசதி உள்ளதா?
      </label>
      <select
        className="survey-form__select"
        name="toiletFacility"
        value={formData.toiletFacility}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes (ஆம்)</option>
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
        <option value="Yes">Yes (ஆம்)</option>
        <option value="No">No (இல்லை)</option>
      </select>
    </div>
  </>
);

const AdditionalInformation = ({ formData, handleChange }) => (
  <>
    <h2>Additional Information</h2>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Major Problems (முக்கிய பிரச்சினைகள்)
      </label>
      <input
        className="survey-form__input"
        type="text"
        name="majorProblems"
        value={formData.majorProblems}
        onChange={handleChange}
        required
      />
    </div>
    <div className="survey-form__field">
      <label className="survey-form__label">
        Form Filled by (படிவம் நிரப்பியவர்)
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
      <label className="survey-form__label">
        Survey Date (கணக்கெடுப்பு தேதி)
      </label>
      <input
        className="survey-form__input"
        type="date"
        name="surveyDate"
        value={formData.surveyDate}
        onChange={handleChange}
        required
      />
    </div>
  </>
);

export default withFadeInAnimation(Survey);
