import {
  Input,
  InputContainer,
  Container,
  Label,
  AddButton,
} from "../../styles/commonStyles";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../store/Store";
import Nav from "../Navigation/Nav";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCards } from "../../UseQuerry/GetCards";

function AddQuestions() {
  const { id } = useParams();

  const {  data: cards, isSuccess } = useCards();
  const navigate = useNavigate();

  const addQuestionToCard = useStore((state) => state.addQuestionToCard);
  const schema = yup
    .object({
      title: yup
        .string()
        .min(6, "Must be 6 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: yup
        .string()
        .min(6, "Must be 6 characters or more")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (id&& isSuccess) {
      addQuestionToCard(id, data.title, data.description, cards[id]);
      navigate(`/questions/${id}`);
    } else {
      console.error("ID is not defined");
    }
  };

  return (
    <>
      <Nav />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <InputContainer>
            <Label htmlFor="title">Question&nbsp; <p>{errors.title?.message}</p></Label>
            <Input
               {...register("title")}
            />
            
            <Label htmlFor="description">Answer&nbsp; <p>{errors.description?.message}</p></Label>
            <Input
               {...register("description")}
            />
            <AddButton type="submit">Add new Question</AddButton>
          </InputContainer>
        </Container>
      </form>
    </>
  );
}

export default AddQuestions;
