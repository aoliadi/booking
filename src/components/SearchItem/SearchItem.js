import item from "./searchitem.module.css";

function SearchItem() {
  let uri =
    "https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg";
  return (
    <article className={item.container}>
      <img src={uri} alt="" className={item.img} width={200} height={200} />
      <div className={item.desc}>
        <h2 className={item.heading}>tower street apartments</h2>
        <p className={item.distance}>500m from center</p>
        <p className={item.taxi}>Free airport taxi</p>
        <p className={item.subheading}>
          Studio apartment with air conditioning
        </p>
        <p className={item.features}>
          Entire studio &#8901; 1 bathroom &#8901; 21m 1 full bed
        </p>
        <p className={item.cancel_option}>Free cancellation</p>
        <p className={item.cancel_sub}>
          You can cancel later, so lock in this great price today!
        </p>
      </div>
      <div className={item.details}>
        <div className={item.rating}>
          <p className="">Excellent</p>
          <span className="">8.9</span>
        </div>
        <div className={item.detailsText}>
          <span className={item.price}>$123</span>
          <span className={item.tax}>includes taxes and fees</span>
          <button className={item.btn}>See availability</button>
        </div>
      </div>
    </article>
  );
}

export default SearchItem;
