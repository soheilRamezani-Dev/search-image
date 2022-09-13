import "./SearchForm.css";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const SearchForm = ({setImages}) => {


  const formik = useFormik({
    initialValues: {
        search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().min(2).required(),
    }),
    onSubmit: async (values) => {
        const Access_Key = "RA-bhLdyT-UE8NUBrShCC83KnEEZjmBZjWyrVD-B62M";
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=20&page=2&query=${values.search}&client_id=${Access_Key}`
      );
      setImages(response.data.results)
    },
  });

  return (
    <section className="search-form d-flex justify-content-center p-4">
      <form className="form-inline" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label> Search image from Unsplash : </label>
          <input
          id="search"
            name="search"
            type="text"
            className="form-input"
            placeholder="search image"
            onChange={formik.handleChange}
            value={formik.values.search}
            onBlur={formik.hadleBlur}
          />
          {formik.touched.search && formik.errors.search ? (
            <div>{formik.errors.search}</div>
          ) : null}

          <input type="submit" className="btn btn-success ms-2" value="Search" />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
