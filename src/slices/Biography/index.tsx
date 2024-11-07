import React from "react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */

// Function to replace '\n' with new lines
const addNewLines = (text: string): JSX.Element[] => {
  // Split the text at '\n' and map through the resulting array
  return text.split("\n").map((line, index) => (
    // Render each line followed by a <br> element
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const Biography = ({ slice }: BiographyProps): JSX.Element => {
  // Convert the rich text field array into a string with '\n' separators
  const descriptionString = slice.primary.description
    .map((item) => {
      if (item.type === "paragraph") {
        return item.text;
      } else if (item.type === "image") {
        // Handle image nodes if needed
        return ""; // Return empty string for now
      } else {
        return ""; // Handle other types of nodes if needed
      }
    })
    .join("\n");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Header />
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl text-xl text-teal-300 prose-invert col-start-1">
          {/* Call the function to add new lines */}
          {addNewLines(descriptionString)}
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;