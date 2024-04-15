import Footer from "@/components/Footer";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Afooter`.
 */
export type AfooterProps = SliceComponentProps<Content.AfooterSlice>;

/**
 * Component for "Afooter" Slices.
 */
const Afooter = ({ slice }: AfooterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Footer/>
    </section>
  );
};

export default Afooter;
