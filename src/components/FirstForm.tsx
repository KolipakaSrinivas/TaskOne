import React from "react";
import { FormData, ErrorState } from "../Type";

interface FirstFormProps {
  formData: FormData;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  errorState?: ErrorState;
}

function FirstForm({ formData, handleInputChange, errorState }: FirstFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="self-center text-2xl font-semibold">Create a project</h1>
      <div className="flex flex-col gap-1">
        {/* Project Name */}
        <label htmlFor="ProjectName" className="text-[1rem] font-medium">
          Project name{" "}
          <span className={`${errorState?.name ? "text-red-600 font-bold" : "text-red-300"}`}>
            *
          </span>
        </label>
        <input
          placeholder="Enter Project Name here"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`py-1 ${errorState?.name ? "border-red-400 " : "border-gray-300 "} rounded-md indent-2 outline-none border-2 hover:border-blue-500
          }`}
        />

        {/* Client */}
        <label htmlFor="Client" className="text-[1rem] font-medium">
          Client  <span className={`${errorState?.client ? "text-red-600 font-bold" : "text-red-300"}`}>
            *
          </span>
        </label>
        <div className="flex flex-col md:flex-row gap-2">
          <select
            name="client"
            id="client"
            onChange={handleInputChange}
            value={formData.client}
            className={` ${errorState?.client ? "border-red-400 " : "border-gray-300 "}  py-1 md:w-[60%] border-gray-300 rounded-md indent-2 outline-none border-2 hover:border-blue-500`}
          >
            <option value="" disabled>
              Select a client
            </option>
            <option value="client 1">Client 1</option>
            <option value="client 2">Client 2</option>
            <option value="client 3">Client 3</option>
            <option value="client 4">Client 4</option>
          </select>

          <span className="self-center text-gray-500">Or</span>
          <input
            value={formData.client}
            onChange={handleInputChange}
            name="client"
            type="text"
            placeholder=" + New Client"
            className="py-1 md:w-[40%] border-gray-300 rounded-md indent-2 outline-none border-2 hover:border-blue-500"
          />
        </div>

        {/* Dates */}
        <label htmlFor="dates" className="text-[1rem] font-medium">
          Dates  <span className={`${errorState?.date ? "text-red-600 font-bold" : "text-red-300"}`}>
            *
          </span>
        </label>
        <div className="flex gap-2 items-center">
          <input
            onChange={handleInputChange}
            value={formData.date.start}
            name="start"
            type="date"
            className={` ${errorState?.date ? "border-red-400 " : "border-gray-300 "}  py-1  rounded-md indent-2 outline-none border-2 hover:border-blue-500
            }`}
          />
          <span className="text-xl font-bold">-</span>
          <input
            onChange={handleInputChange}
            value={formData.date.end}
            name="end"
            type="date"
            className={`py-1 ${errorState?.date ? "border-red-400 " : "border-gray-300 "}  rounded-md indent-2 outline-none border-2 hover:border-blue-500
            }`}
          />
        </div>

        {/* Notes */}
        <label htmlFor="notes" className="text-[1rem] font-medium">
          Notes
        </label>
        <textarea
          onChange={handleInputChange}
          value={formData.notes}
          name="notes"
          placeholder={"Optional"}
          required={true}
          rows={3}
          className={`"border-gray-300"} py-2 resize-none  rounded-md indent-2 hover:border-blue-500 outline-none border-2`}
        />
      </div>
    </div>
  );
}

export default FirstForm;
