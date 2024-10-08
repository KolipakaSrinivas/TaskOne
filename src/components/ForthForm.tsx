import { IoIosPeople } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FormData, ErrorState } from "../Type";

interface ForthFormProps {
  formData: FormData;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  errorState?: ErrorState;
}

const ForthForm = ({
  formData,
  handleInputChange,
  errorState
}: ForthFormProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 flex-col">
        <h1 className="self-center text-2xl font-semibold">
          Who can manage projects<span className={`${errorState?.manageproject ? "text-red-600 font-bold" : "text-red-300"}`}>
            *
          </span>
        </h1>
        <p className="font-medium text-xs leading-4 text-gray-500 ">
          Don't panic - You can also customize this type in settings
        </p>
      </div>
      <div className="flex flex-col h-[290px] gap-3 mx-2 my-3">
        {/* Everyone Option */}
        <div>
          <input
            type="radio"
            name="manageproject" // Corrected to use formData's manageproject
            id="Everyone"
            value="Everyone"
            className="peer hidden"
            checked={formData.manageproject === "Everyone"} // Updated to use manageproject
            onChange={handleInputChange}
          />
          <label
            htmlFor="Everyone"
            className="block cursor-pointer mx-1 select-none rounded-lg p-1 border-2 border-gray-300 peer-checked:border-blue-600 peer-checked:text-black"
          >
            <div className="h-[65px] py-5 flex items-center gap-5 mx-2 ">
              <IoIosPeople size={40} />
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-gray-800">Everyone</h3>
                <p className="leading-4 text-xs text-gray-600">
                  All users can see it, but guests cannot access the projects.
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* Only Admin Option */}
        <div>
          <input
            type="radio"
            name="manageproject"
            id="OnlyAdmin"
            value="OnlyAdmin"
            className="peer hidden"
            checked={formData.manageproject === "OnlyAdmin"} // Updated to use manageproject
            onChange={handleInputChange}
          />
          <label
            htmlFor="OnlyAdmin"
            className="block cursor-pointer mx-1 select-none rounded-lg p-1 border-2 border-gray-300 peer-checked:border-blue-600 peer-checked:text-black"
          >
            <div className="h-[65px] py-5 flex items-center gap-5 ">
              <CgProfile size={25} />
              <div className="flex flex-col justify-center gap-1 mx-2">
                <h3 className="text-gray-800">Only Admins</h3>
                <p className="leading-4 text-xs text-gray-600">
                  Only admins can manage everything.
                </p>
              </div>
            </div>
          </label>
        </div>

        {/* Specific People Option */}
        <div>
          <input
            type="radio"
            name="manageproject"
            id="Specificpeople"
            value="Specificpeople"
            className="peer hidden"
            checked={formData.manageproject === "Specificpeople"} // Updated to use manageproject
            onChange={handleInputChange}
          />
          <label
            htmlFor="Specificpeople"
            className="block cursor-pointer mx-1 select-none rounded-lg p-1 border-2 border-gray-300 peer-checked:border-blue-600 peer-checked:text-black"
          >
            <div className="h-[65px] py-5 flex items-center gap-5 mx-2 ">
              <SlPeople size={25} />
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-gray-800">Only Specific People</h3>
                <p className="leading-4 text-xs text-gray-600">
                  Only some specific people can see it.
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ForthForm;
