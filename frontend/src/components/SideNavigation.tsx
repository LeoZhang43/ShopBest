import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import type { CheckboxProps } from "antd";
import { TagOutlined, TruckOutlined, SyncOutlined, BankOutlined } from "@ant-design/icons";

export function SideNavigation() {
  const filterData = useSelector((state: RootState) => state.filter.filter_elements);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const getIcon = (text: string) => {
    if (text.includes("Get it today")) return <TruckOutlined />;
    if (text.includes("On sale")) return <TagOutlined />;
    if (text.includes("Used") || text.includes("Get")) return <SyncOutlined />;
    if (text.includes("Small business") || text.includes("Get")) return <BankOutlined />;
  };

  return (
    <aside>
      <form className="flex flex-col gap-2 p-4 rounded-[16px] bg-[#f3f5f6] w-48">
        {filterData.map((filterCatagory, idx) => {
          switch (filterCatagory.input_type) {
            // case "checkbox":
            //   return (
            //     <div key={idx} className= "pb-3">
            //       <p className="text-sm font-medium text-gray-700 mb-2">
            //         {filterCatagory.type}
            //       </p>
            //       <div className="flex flex-col gap-1">
            //         {filterCatagory.options.map((option, oIdx) => (
            //           <Checkbox
            //             key={oIdx}
            //             onChange={onChange}
            //             className="text-sm"
            //           >
            //             {option.text}
            //           </Checkbox>
            //         ))}
            //       </div>
            //     </div>
            //   );

            case "link_with_icon":
              return (
                <div key={idx} className="border-b border-gray-100 pb-3">
                  <p className="text-base font-medium text-gray-700 mb-2">
                    Refine Results
                  </p>
                  <div className="flex flex-col gap-1">
                    {filterCatagory.options.map((option, oIdx) => (
                      <a
                        href="#"
                        key={oIdx}
                        className="text-neutral-600 text-sm hover:text-stone-950"
                      >
                        <span className="mr-2">{getIcon(option.text)}</span>
                        {option.text}
                      </a>
                    ))}
                  </div>
                </div>
              );

            case "link":
            case "price_range":
            case "checkbox":
              return (
                <div key={idx} className="border-b border-gray-100 pb-3">
                  <p className="text-base font-medium text-gray-700 mb-2">
                    {filterCatagory.type}
                  </p>
                  <div className="flex flex-col gap-1">
                    {filterCatagory.options.map((option, oIdx) => (
                      <a
                        href="#"
                        key={oIdx}
                        className="text-neutral-500 text-sm hover:text-stone-950"
                      >
                        {option.text}
                      </a>
                    ))}
                  </div>
                </div>
              );
            case "color":
              return (
                <div key={idx} className="border-b border-gray-100 pb-3">
                  <p className="text-base font-medium text-gray-700 mb-2">
                    {filterCatagory.type}
                  </p>
                  <div className="flex flex-col gap-1">
                    {filterCatagory.options.map((option, oIdx) => (
                      <a
                        href="#"
                        key={oIdx}
                        className="flex items-center text-neutral-600 text-sm hover:text-stone-950 gap-2"
                      >
                        <span
                          className="inline-block w-4 h-4 rounded border"
                          style={{ backgroundColor: (option.text || "#ffffff").toLowerCase() }}
                        ></span>
                        {option.text}
                      </a>
                    ))}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </form>
    </aside>
  );
}
