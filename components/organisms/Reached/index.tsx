import HorizontalLine from "../../atoms/HorizontalLine";
import VerticalLine from "../../atoms/VerticalLine";
import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem amount={"290M+"} desc={"Players Top Up"} />
          <VerticalLine />
          <HorizontalLine />
          <ReachedItem amount={"12.500"} desc={"Games Available"} />
          <VerticalLine />
          <HorizontalLine />
          <ReachedItem amount={"99,9%"} desc={"Happy Players"} />
          <VerticalLine />
          <HorizontalLine />
          <ReachedItem amount={"4.7"} desc={"Rating Worldwide"} />
        </div>
      </div>
    </section>
  );
}
