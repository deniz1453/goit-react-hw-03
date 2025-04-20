import { Formik, Form, Field} from "formik";
import SBCss from "./SearchBox.module.css";


const SearchBox = ({onFilter}) => {
  return (
    <Formik >
      <Form className={`${SBCss.form}`}>
        <label htmlFor="search" className={`${SBCss.lblSrch}`}>Find contacts by name</label>
        <Field id="search" name="search" className={`${SBCss.txtSrch}`} onChange={onFilter}
        
        />
        
      </Form>
    </Formik>
  );
};

export default SearchBox;
