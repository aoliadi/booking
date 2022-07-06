import featured from "./featuredProps.module.css";

function FeaturedProps() {
  const propertyListItems = [
    {
      rating: 4.6,
      location: "Novopokrovskaya",
      name: "Clarendon",
      price: "$190.08",
      reviews: 74,
    },
    {
      rating: 4.9,
      location: "Niepos",
      name: "Porter",
      price: "$911.58",
      reviews: 372,
    },
    {
      rating: 4.8,
      location: "Murcki",
      name: "Annamark",
      price: "$544.89",
      reviews: 370,
    },
    {
      rating: 2.1,
      location: "Gumaus",
      name: "Talmadge",
      price: "$535.26",
      reviews: 205,
    },
    {
      rating: 6.1,
      location: "Haicheng",
      name: "Fisk",
      price: "$185.90",
      reviews: 101,
    },
    {
      rating: 3.9,
      location: "Enskede",
      name: "Mosinee",
      price: "$315.68",
      reviews: 369,
    },
  ];
  return (
    <section className={featured.container}>
      <ul className={featured.list__container}>
        <li className={featured.list__item}>
          <h2 className={featured.heading}>Houses guests love</h2>
        </li>
        {propertyListItems.map(
          ({ reviews, rating, location, name, price }, index) => {
            return (
              <li className={featured.list__item} key={index}>
                <figure>
                  <img
                    src=""
                    alt=""
                    className={featured.img}
                    width="100%"
                    height="150px"
                  />
                  <figcaption className={featured.caption}>
                    <h3 className={featured.name}>{name}</h3>
                    <p className={featured.location}>{location}</p>
                    <p className={featured.price}>Starting from {price}</p>
                    <div className={featured.rating}>
                      <span>{rating}</span>
                      <p>
                        {rating < 3.5
                          ? "poor"
                          : rating > 3.5 && rating < 4.5
                          ? "fair"
                          : rating > 4.5 && rating < 5.5
                          ? "good"
                          : rating > 5.5 && rating < 6.5
                          ? "wonderful"
                          : "excellent"}
                      </p>
                      <small className="">{`${reviews} reviews`}</small>
                    </div>
                  </figcaption>
                </figure>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default FeaturedProps;
