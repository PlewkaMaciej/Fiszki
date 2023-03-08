import { Container, FiltrButton } from "./SortingCardStyle";
import {
  SelectContainer,
  SelectLabel,
  Select,
  Option,
} from "../../styles/commonStyles";
import { useFormik } from "formik";
import { useStore } from "../../store/Store";
import { useFilteredCards } from "../../UseQuerry/GetFilteredCards";

function SortingCards() {
  const filterCardsCategory = useStore((state) => state.filterCardsCategory);
  const setFilteredCards = useStore((state) => state.setFilteredCards);
  const setIsCardFiltered = useStore((state) => state.setIsCardFiltered);
    const { refetch } = useFilteredCards(filterCardsCategory);
  const formik = useFormik({
    initialValues: {
      category: "",
    },

    onSubmit: (values) => {
      refetch()
      setIsCardFiltered(true);
      setFilteredCards(values.category);

    },
  });
  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <SelectContainer>
            <SelectLabel htmlFor="category">
              Filter cards by category
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
              <Option value="">All Cards</Option>
            </Select>
          </SelectContainer>
          <FiltrButton type="submit">Filter</FiltrButton>
        </form>
      </Container>
    </>
  );
}

export default SortingCards;
