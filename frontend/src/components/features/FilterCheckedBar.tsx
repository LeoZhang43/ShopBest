import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CloseOutlined } from "@ant-design/icons";
import { setSearchParameters, goBackToPreviousStatus } from '../../store/searchSlice';
import { resetFilter, removeLastCheckedElement } from '../../store/filterSlice';

export function FilterCheckedBar() {
  const dispatch = useDispatch();
  const checked_elements = useSelector(
    (state: RootState) => state.filter.checked_elements
  );
  const search_parameters = useSelector(
    (state: RootState) => state.search.search_parameters
  );
  if (!checked_elements || checked_elements.length === 0) return null;
  const handleClick = (element: any, idx: number) => {
    if(idx != checked_elements.length - 1){
      dispatch(setSearchParameters({
        ...search_parameters,
        device: "",
        engine: "",
        gl: "",
        google_domain: "",
        hl: "",
        shoprs: ""
      }));
      dispatch(resetFilter());
      return;
    }
    dispatch(goBackToPreviousStatus());
    dispatch(removeLastCheckedElement());
  };

  return (
    <div className="absolute top-12 left-0 flex flex-row">
        <div className="w-56 h-10"></div>
        <div className="flex flex-row flex-wrap gap-1 p-2 rounded mt-5">
            {checked_elements.map((element, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(element, idx)}
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
