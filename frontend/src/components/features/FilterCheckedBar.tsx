import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CloseOutlined } from "@ant-design/icons";
import { setSearchParameters, goBackToPreviousStatus, setSearchParameterChangeLocally, setPushToPreviousSearchStatus } from '../../store/searchSlice';
import { removeCheckedByIndex } from '../../store/filterSlice';

export function FilterCheckedBar() {
  const dispatch = useDispatch();
  const checked_elements = useSelector(
    (state: RootState) => state.filter.checked_elements
  );
  const search_parameters = useSelector(
    (state: RootState) => state.search.search_parameters
  );
  const local_query = useSelector(
    (state: RootState) => state.search.local_query
  );
  if (!checked_elements || checked_elements.length === 0) return null;
  const handleClick = (element: any, idx: number) => {
    dispatch(setSearchParameterChangeLocally(true));
    dispatch(setPushToPreviousSearchStatus(false));
    dispatch(removeCheckedByIndex(idx));
    const checkedElements = checked_elements.filter((_, i) => i !== idx).map(el => el.text).join(" ");
    if(idx != checked_elements.length - 1){
      dispatch(setSearchParameters({
        q: local_query + " " + checkedElements,
        device: "",
        engine: "",
        gl: "",
        google_domain: "",
        hl: "",
        shoprs: ""
      }));
    }else {
      dispatch(goBackToPreviousStatus());
    }
  };

  return (
    <div className="flex">
        <div className="flex flex-row flex-wrap gap-1 p-2 rounded">
            {checked_elements.map((element, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClick(element, idx)}
                  className={`flex item-center px-4 py-3 rounded-xl text-xs font-medium transition-colors duration-200 hover:bg-neutral-300 bg-[rgb(31,31,31)] text-white`}
                >
                <span className="mr-2"><CloseOutlined /></span>
                {element.text}
                </button>
            ))}
        </div>
    </div>
  );
}
