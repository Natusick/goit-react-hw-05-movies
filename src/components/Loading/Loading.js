import {BarsSpinner} from "react-spinners-kit";
import s from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={s.loader}>
      <BarsSpinner size={50}  />
    </div>
  );
};

export default Loading;