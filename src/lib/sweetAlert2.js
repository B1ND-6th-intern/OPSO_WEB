import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetalert2 = () => {
  return { MySwal };
};
export default sweetalert2;
