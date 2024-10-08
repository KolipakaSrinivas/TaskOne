import { FormData, ErrorState } from "../Type";

function SecondForm({
  formData,
  handleInputChange,
  errorState
}: {
  formData: FormData;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  errorState?: ErrorState;
}) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-5 flex-col">
        <h1 className="self-center text-2xl font-semibold">Project type</h1>
        <p className="leading-5 font-medium text-xs text-gray-500 ">
          Don't panic - You can also customize these types in settings
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className={`flex border-2 ${errorState?.projectType ? "border-red-600" : ""} w-full rounded-md`}>
          {/* First Radio Button */}
          <div>
            <input
              onChange={handleInputChange}
              type="radio"
              id="time_materials"
              name="projectType"
              className="peer hidden"
              checked={formData.projectType === "Time & Materials"}
              value="Time & Materials"
            />
            <label
              htmlFor="time_materials"
              className="block text-xs md:text-sm cursor-pointer select-none border-r-2 text-center peer-checked:bg-blue-500 px-1 py-2 peer-checked:text-white rounded-s-sm"
            >
              Time & Materials
            </label>
          </div>

          {/* Second Radio Button */}
          <div className="flex-1">
            <input
              onChange={handleInputChange}
              checked={formData.projectType === "Fixed Fees"}
              type="radio"
              name="projectType"
              id="fixed_fees"
              value="Fixed Fees"
              className="peer hidden"
            />
            <label
              htmlFor="fixed_fees"
              className="block text-xs md:text-sm  cursor-pointer select-none border-r-2 text-center peer-checked:bg-blue-500 px-1  py-2 peer-checked:text-white"
            >
              Fixed Fees
            </label>
          </div>

          {/* Third Radio Button */}
          <div className="flex-1">
            <input
              type="radio"
              name="projectType"
              id="non_billable"
              value="Non-Billable"
              className="peer hidden"
              checked={formData.projectType === "Non-Billable"}
              onChange={handleInputChange}
            />
            <label
              htmlFor="non_billable"
              className="block text-xs md:text-sm  cursor-pointer select-none  text-center peer-checked:bg-blue-500 px-1 py-2 peer-checked:text-white rounded-e-sm"
            >
              Non-Billable
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-[1rem] font-medium ">
            Hourly <span className={`${errorState?.hourly ? "text-red-600 font-bold" : "text-red-300"}`}>*</span>
          </label>
          <p className="leading-5  text-xs text-gray-700 ">
            We need hourly rates to track your project's billable amount.
          </p>
        </div>
        <div className="flex gap-2 max-[500px]:flex-col">
          <select
            name="hourly.type"
            value={formData.hourly.type}
            onChange={handleInputChange}
            id=""
            className={`py-1 ${errorState?.hourly ? "border-red-600" : "border-gray-300"} rounded-md indent-2 hover:border-blue-500 outline-none border-2`}
          >
            <option value="" disabled selected>Select your rate</option>
            <option value="Hourly Rate">Hourly Rate</option>
            <option value="Weekly Contract">Weekly Contract</option>
            <option value="Monthly Contract">Monthly Contract</option>
            <option value="Fixed-Term Project">Fixed-Term Project</option>
            <option value="Ongoing Project">Ongoing Project</option>

          </select>
          <input
            onChange={handleInputChange}
            name="hourly.amount"
            value={formData.hourly.amount}
            type="number"
            min={1}
            className={`py-1 ${errorState?.hourly ? "border-red-600" : "border-gray-300"}  rounded-md indent-2 hover:border-blue-500 outline-none border-2`}
            placeholder="12,678.00"
          />
        </div>
        <div>
          <label htmlFor="" className="text-[1rem] font-medium ">
            Budget <span className={`${errorState?.budget ? "text-red-600 font-bold" : "text-red-300"}`}>*</span>
          </label>
          <p className="leading-5  text-xs text-gray-700 ">
            We need hourly rates to track your project's billable amount.
          </p>
        </div>
        <select
          name="budget.type"
          value={formData.budget.type}
          onChange={handleInputChange}
          className={`py-1 md:w-[60%] ${errorState?.budget ? "border-red-600" : "border-gray-300"} rounded-md indent-2 hover:border-blue-500 outline-none border-2`}
        >
          <option value="" disabled selected>Select your budget</option>
          <option value="Work Hours per Person">Work Hours per Person</option>
          <option value="Work Days per Person">Work Days per Person</option>
          <option value="Deliverables per Person">Deliverables per Person</option>
          <option value="Projects per Person">Projects per Person</option>
          <option value="Assignments per Person">Assignments per Person</option>
          <option value="Shifts per Person">Shifts per Person</option>

        </select>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="budget.budgetResetsEveryMonth"
            checked={formData.budget.budgetResetsEveryMonth}
            onChange={handleInputChange}
          />
          <span className="text-gray-600 ml-1 text-xs">Budget resets every month</span>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="budget.sendEmailAlerts.sendEmail"
            checked={formData.budget.sendEmailAlerts.sendEmail}
            onChange={handleInputChange}
          />
          <span className="text-gray-600 ml-1 text-xs">
            Send email alerts if project exceeds{" "}
            <input
              type="number"
              name="budget.sendEmailAlerts.threshold"
              value={formData.budget.sendEmailAlerts.threshold }
              onChange={handleInputChange}
              placeholder="80%"
              min={20}
              max={100}
              className="py-1 w-[45px] border-gray-300 rounded-md indent-1 text-xs hover:border-blue-500 outline-none border-2"
            />{" "}
            % of budget
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondForm;
