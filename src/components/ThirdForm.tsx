import { TfiLayoutListThumb } from "react-icons/tfi";
import { MdOutlineDashboard } from "react-icons/md";
import { FormData, ErrorState } from "../Type";

interface ThirdFormProps {
  formData: FormData;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
  errorState?: ErrorState;
}

const ThirdForm = ({
  formData,
  handleInputChange,
  errorState
}: ThirdFormProps) => {

  const views = [
    {
      id: "list",
      value: "list",
      label: "List",
      icon: <TfiLayoutListThumb className="text-gray-300 w-10 h-20" />
    },
    {
      id: "board",
      value: "board",
      label: "Board",
      icon: <MdOutlineDashboard className="text-gray-300 w-10 h-20" />
    }
  ];

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1 flex-col">
        <h1 className="self-center text-2xl font-semibold">Select a view <span className={`${errorState?.selectaview ? "text-red-600 font-bold" : "text-red-300"}`}>
            *
          </span></h1>
        <p className="font-medium text-xs leading-4 text-gray-500 ">
          Don't panic - You can also customize these types in settings 
        </p>
      </div>
      <div className="flex justify-center h-[290px] gap-2 mt-5 ">
        {views.map(view =>
          <div key={view.id}>
            <input
              type="radio"
              name="selectaview"
              id={view.id}
              value={view.value}
              className="peer hidden"
              checked={formData.selectaview === view.value}
              onChange={handleInputChange}
            />
            <label
              htmlFor={view.id}
              className="block cursor-pointer select-none h-[170px] w-[160px] rounded-lg p-2 border-2 border-gray-300 peer-checked:border-blue-600"
            >
              <div className="border-gray-300 m-5 h-20 border-2 flex justify-center items-center">
                {view.icon}
              </div>
            </label>
            <h3 className="text-center font-semibold mt-1 text-[1rem]">
              {view.label}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdForm;
