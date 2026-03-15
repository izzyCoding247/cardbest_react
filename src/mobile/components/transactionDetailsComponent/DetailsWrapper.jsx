import Details from "./Details";
import DetailsLabel from "./DetailsLabel";


export default function DetailsWrapper({ transaction }) {
  return (
    <div className="flex gap-15 leading-loose text-sm p-5">
      <DetailsLabel transaction={transaction} />

      <Details transaction={transaction}/>
    </div>
  );
}
