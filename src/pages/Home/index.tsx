import Banner from './Banner';
import PrettySticky from './PrettySticky';
import TimeLine from './TimeLine';
import Second from './Second';
import TextFillingWithWater from './TextFillingWithWater';
import Footer from './Footer';
import CoinCardDisplay from './CoinCardDisplay';

export default function IndexPage() {
  return (
    <div>
      <Banner />
      <CoinCardDisplay />
      <Second />
      <PrettySticky />
      <TimeLine />
      {/* <TextFillingWithWater /> */}
      <Footer />
    </div>
  );
}
