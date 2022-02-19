import Banner from './Banner';
import CardHover from './CardHover';
import PrettySticky from './PrettySticky';
import TimeLine from './TimeLine';
import Second from './Second';
import TextFillingWithWater from './TextFillingWithWater';
import Footer from './Footer';
import { ButtonDebug } from './Button';

export default function IndexPage() {
  return (
    <div>
      <Banner />
      <CardHover />
      <Second />
      <PrettySticky />
      <TimeLine />
      {/* <TextFillingWithWater /> */}
      <Footer />
      <ButtonDebug />
    </div>
  );
}
