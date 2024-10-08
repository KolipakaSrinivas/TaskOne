import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import ForthForm from "./components/ForthForm";
import { FormData, ErrorState } from "./Type";

import { useState } from "react";

function MainForm() {
  const initialFormData: FormData = {
    name: "",
    client: "",
    date: { start: "", end: "" },
    notes: "",
    projectType: "",
    hourly: { type: "", amount: 25000 },
    budget: {
      type: "",
      budgetResetsEveryMonth: false,
      sendEmailAlerts: { sendEmail: false, threshold: 25 }
    },
    selectaview: "",
    manageproject: ""
  };

  const initialErrorState: ErrorState = {
    name: false,
    client: false,
    date: false,
    projectType: false,
    hourly: false,
    budget: false,
    selectaview: false,
    manageproject: false
  };

  const [formNumber, setFormNumber] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errorState, setErrorState] = useState<ErrorState>(initialErrorState);

  function handleError(step: number): boolean {
    const errorObj: ErrorState = { ...initialErrorState };

    if (step === 1) {
      errorObj.name = !formData.name;
      errorObj.client = !formData.client;
      errorObj.date = !formData.date.start || !formData.date.end;
    }

    if (step === 2) {
      errorObj.projectType = !formData.projectType;
      errorObj.hourly = !formData.hourly.type || !formData.hourly.amount;
      errorObj.budget = !formData.budget.type;
    }

    if (step === 3) {
      errorObj.selectaview = !formData.selectaview;
    }

    if (step === 4) {
      errorObj.manageproject = !formData.manageproject;
    }

    setErrorState(errorObj);
    return Object.values(errorObj).every(value => !value); // Ensure no errors
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target;
      if (name.startsWith("budget.")) {
        const field = name.split(".")[1];
        if (field) {
          setFormData(prev => ({
            ...prev,
            budget: {
              ...prev.budget,
              [field]: checked
            }
          }));
        }
      } else if (name.startsWith("hourly.")) {
        const field = name.split(".")[1];
        if (field) {
          setFormData(prev => ({
            ...prev,
            hourly: {
              ...prev.hourly,
              [field]: checked
            }
          }));
        }
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === "radio") {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else if (name === "start" || name === "end") {
      setFormData(prev => ({
        ...prev,
        date: { ...prev.date, [name]: value }
      }));
    } else if (name.startsWith("hourly.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        hourly: {
          ...prev.hourly,
          [field]: value
        }
      }));
    } else if (name.startsWith("budget.")) {
      const field = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        budget: {
          ...prev.budget,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  function handleNext() {
    const currentStep = formNumber; // Only validate the current step
    if (handleError(currentStep)) {
      setFormNumber(prev => prev + 1);
    } else {
      alert("Please fill out all required fields.");
    }
  }

  function handleBack() {
    setFormNumber(prev => prev - 1);
  }

  // localStorage
  function setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault(); // Prevent default form submission behavior

    if (handleError(4)) {
      setItem("formDataTaskOne", formData);
      // All forms are valid, handle form submission logic here
      alert(
        "Form submitted successfully! Your form data is stored in localStorage with key 'formDataTaskOne'."
      );
      setFormData(initialFormData);
      setFormNumber(1);
      localStorage.setItem("formDatatack1", JSON.stringify(formData));
    } else {
      alert("Please fill out all required fields.");
    }
  }

  // localStorage
  // function getItem<T>(key: string): T | null {
  //   const item = localStorage.getItem(key);
  //   return item ? JSON.parse(item) as T : null;
  // }

  // console.log("formData", getItem("formDataTaskOne"));

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[350px] items-center min-[500px]:w-[400px] mx-auto flex-col my-5 px-5 py-2 rounded-lg c-shadow bg-white"
    >
      <button className="self-end px-4">X</button>
      {formNumber === 1 &&
        <FirstForm
          formData={formData}
          handleInputChange={handleInputChange}
          errorState={errorState}
        />}
      {formNumber === 2 &&
        <SecondForm
          errorState={errorState}
          formData={formData}
          handleInputChange={handleInputChange}
        />}
      {formNumber === 3 &&
        <ThirdForm
          errorState={errorState}
          formData={formData}
          handleInputChange={handleInputChange}
        />}
      {formNumber === 4 &&
        <ForthForm
          errorState={errorState}
          formData={formData}
          handleInputChange={handleInputChange}
        />}

      <div className="flex gap-2 flex-col w-full p-2 px-3 items-center">
        <div className="flex w-full justify-between items-center">
          {formNumber > 1 &&
            <button
              className="pl-2 text-gray-400"
              onClick={handleBack}
              type="button"
            >
              {" "} &lt; Back
            </button>}
        </div>
        <div className="flex w-full justify-center">
          {formNumber > 3
            ? <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md text-sm"
                type="submit"
              >
                Submit
              </button>
            : <button
                onClick={handleNext}
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md text-sm"
              >
                Next
              </button>}
        </div>
        <div className="flex gap-2 mt-2">
          {[1, 2, 3, 4].map(step =>
            <span
              key={step}
              className={`transition-all duration-300 ease-in-out ${formNumber ===
              step
                ? "bg-gray-400 px-[12px] scale-110" // Active step animation
                : "bg-gray-200 px-[4px] scale-100" // Inactive step animation
              } py-[4px] rounded-full`}
            />
          )}
        </div>
      </div>
    </form>
  );
}

export default MainForm;
