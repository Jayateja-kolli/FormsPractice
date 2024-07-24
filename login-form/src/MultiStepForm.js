import React, { useState } from 'react';

const StepOne = ({ formData, setFormData }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Step One</h2>
    <input
      type="text"
      placeholder="Username"
      value={formData.username}
      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      className="border p-2 w-full mb-4"
    />
  </div>
);

const StepTwo = ({ formData, setFormData }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Step Two</h2>
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      className="border p-2 w-full mb-4"
    />
  </div>
);

const StepThree = ({ formData, setFormData }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Step Three</h2>
    <input
      type="password"
      placeholder="Password"
      value={formData.password}
      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      className="border p-2 w-full mb-4"
    />
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {step === 1 && <StepOne formData={formData} setFormData={setFormData} />}
        {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
        {step === 3 && <StepThree formData={formData} setFormData={setFormData} />}

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
