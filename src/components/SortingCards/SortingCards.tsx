import { SortingCardsProps } from "../../types/types";
import { Container, FiltrButton } from "./SortingCardStyle";
import { Card } from "../../types/types";
import {
  SelectContainer,
  SelectLabel,
  Select,
  Option,
} from "../../styles/commonStyles";
import { useFormik } from "formik";
import { useStore } from "../../store/Store";
function SortingCards({ cards }: SortingCardsProps) {
  const setFilteredCards = useStore((state) => state.setFilteredCards);
  const setIsCardFiltered = useStore((state) => state.setIsCardFiltered);
  const formik = useFormik({
    initialValues: {
      category: "",
    },

    onSubmit: (values) => {
      if (values.category === "All Cards") {
        setIsCardFiltered(false);
        setFilteredCards({});
      } else if (cards !== undefined) {
        const filteredCards: Record<string, Card> = {};
        Object.keys(cards).forEach((key) => {
          if (cards[key].category === values.category) {
            filteredCards[key] = cards[key];
          }
          setFilteredCards(filteredCards);
          setIsCardFiltered(true);
        });
      }
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
              <Option id="">--Select a category--</Option>
              <Option id="Sport">Sport</Option>
              <Option id="History">History</Option>
              <Option id="Science">Science</Option>
              <Option id="Chemistry">Chemistry</Option>
              <Option id="Physics">Physics</Option>
              <Option id="Physics">Others</Option>
              <Option id="Physics">All Cards</Option>
            </Select>
          </SelectContainer>
          <FiltrButton type="submit">Filter</FiltrButton>
        </form>
      </Container>
    </>
  );
}

export default SortingCards;
