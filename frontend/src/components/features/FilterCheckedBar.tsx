import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

export function FilterCheckedBar() {
  const dispatch = useDispatch();
  const checked_elements = useSelector(
    (state: RootState) => state.filter.checked_elements
  );
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});
  if (!checked_elements || checked_elements.length === 0) return null;
  const handleClick = (element: any) => {};

  return (
    <div className="flex flex-row">
        <div className="w-56 h-10"></div>
        <div className="flex flex-row flex-wrap gap-1 p-2 rounded mt-5">
            {checked_elements.map((element, idx) => (
                <button
                key={idx}
                onClick={() => handleClick(element)}
                className={`flex align-item px-4 py-3 rounded-xl text-xs font-medium transition-colors duration-200 hover:bg-neutral-300 bg-[rgb(31,31,31)] text-white`}
                >
                <span className="mr-2"><CloseOutlined /></span>
                {element.text}
                </button>
            ))}
        </div>
    </div>
  );
}
