import {
  Input,
  InputContainer,
  Container,
  Label,
  AddButton,
  SelectContainer,
  SelectLabel,
  Select,
  Option,
} from "../../styles/commonStyles";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";
import { useFormik } from "formik";
import * as Yup from "yup";
function AddCard() {
  const navigate = useNavigate();
  const idLoggedUser = useStore((state) => state.idLoggedUser);

  const addNewCard = useStore((state) => state.addNewCard);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(50, "Must be 15 characters or less")
        .required("Required"),
      category: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      addNewCard(
        values.title,
        values.description,
        idLoggedUser,
        values.category
      );
      navigate("/");
    },
  });
  return (
    <>
      <Nav />

      <form onSubmit={formik.handleSubmit}>
        <Container>
          <InputContainer>
            <Label htmlFor="title">
              Title&nbsp;
              {formik.touched.title && formik.errors.title ? (
                <p>{formik.errors.title}</p>
              ) : null}
            </Label>
            <Input id="title" {...formik.getFieldProps("title")} />

            <Label htmlFor="description">
              Description&nbsp;
              {formik.touched.description && formik.errors.description ? (
                <p>{formik.errors.description}</p>
              ) : null}
            </Label>
            <Input id="description" {...formik.getFieldProps("description")} />

            <SelectContainer>
              <SelectLabel htmlFor="category">
                Category&nbsp;
                {formik.touched.category && formik.errors.category ? (
                  <p>{formik.errors.category}</p>
                ) : null}
              </SelectLabel>
              <Select id="category" {...formik.getFieldProps("category")}>
                <Option value="" disabled hidden>
                  --Select a category--
                </Option>
                <Option value="Sport">Sport</Option>
                <Option value="History">History</Option>
                <Option value="Science">Science</Option>
                <Option value="Chemistry">Chemistry</Option>
                <Option value="Physics">Physics</Option>
                <Option value="Others">Others</Option>
              </Select>
            </SelectContainer>
            <AddButton type="submit">Add Card</AddButton>
          </InputContainer>
        </Container>
      </form>
    </>
  );
}

export default AddCard;
