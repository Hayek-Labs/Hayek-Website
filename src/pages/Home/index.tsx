import Banner from './Banner';
import PrettySticky from './PrettySticky';
import TimeLine from './TimeLine';
import Second from './Second';
import TextFillingWithWater from './TextFillingWithWater';
import Footer from './Footer';
import CoinCardDisplay from './CoinCardDisplay';
import Intro from './stranger-things-intro';
import FlipForGsap from './FlipForGsap';
import NewSecond from './NewSecond';
import CoinNameDisplay from './CoinNameDisplay';
export default function IndexPage() {
  return (
    <div>
      <Banner />
      {/* <CoinCardDisplay /> */}
      {/* <FlipForGsap /> */}
      {/* <Intro /> */}
      {/* <NewSecond/> */}
      <CoinNameDisplay />
      <Second />
      {/* <PrettySticky /> */}
      <TimeLine />
      {/* <TextFillingWithWater /> */}
      <Footer />
    </div>
  );
}
