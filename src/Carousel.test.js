import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";


test('renders SMOKE TETS', () => {
  render(<Carousel />);
});

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("Should move to next photo when right arrow clicked", () => {

  // init render of Carousel should start on first image
  const { getByTestId, getByText, queryByTestId } = render(<Carousel />);
  expect(getByText('Image 1 of 3.')).toBeInTheDocument();

  // right arrow should initially be on the screen
  const rightArrow = getByTestId('right-arrow');
  expect(rightArrow).toBeInTheDocument()

  // clicking the right arrow should move to the next image
  fireEvent.click(rightArrow);
  expect(getByText('Image 2 of 3.')).toBeInTheDocument();

  // clicking to the last image should cause the right arrow to disapear
  // b/c their is no more pictures to move forward to
  fireEvent.click(rightArrow);
  expect(getByText('Image 3 of 3.')).toBeInTheDocument();
  expect(queryByTestId('right-arrow')).toBeNull();
})
it("Should move to previous photo when left arrow clicked", () => {

  // init Render of Carousel starts on first image
  const { getByTestId, getByText, queryByTestId } = render(<Carousel />);
  expect(getByText('Image 1 of 3.')).toBeInTheDocument()

  // left arrow should not appear if you can not go backwards anymore
  const leftArrowNull = queryByTestId('left-arrow');
  expect(leftArrowNull).toBeNull()

  // clicking the right arrow should update the image causeing the left arrow to now appear
  const rightArrow = getByTestId('right-arrow');
  fireEvent.click(rightArrow);
  expect(getByText('Image 2 of 3.')).toBeInTheDocument()
  const leftArrow = getByTestId('left-arrow');
  expect(leftArrow).toBeInTheDocument()

  // clicking left arrow should now move the image back one image causing the left arrow to disapear from the interface
  fireEvent.click(leftArrow);
  expect(getByText('Image 1 of 3.')).toBeInTheDocument()
  expect(queryByTestId('left-arrow')).toBeNull()


})