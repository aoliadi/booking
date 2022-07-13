import featured from "./featuredProps.module.css";

function FeaturedProps({ imgUrls }) {
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
    {
      price: "$869.79",
      location: "Tongqian",
      name: "Oriole",
      rating: 2.6,
      reviews: 120,
    },
    {
      price: "$720.85",
      location: "Mali",
      name: "8th",
      rating: 9.9,
      reviews: 163,
    },
    {
      price: "$590.98",
      location: "Hanyuan",
      name: "Holmberg",
      rating: 6.4,
      reviews: 185,
    },
    {
      price: "$585.89",
      location: "Tabonoc",
      name: "3rd",
      rating: 9.6,
      reviews: 150,
    },
    {
      price: "$216.16",
      location: "Qiaogu",
      name: "American Ash",
      rating: 2.4,
      reviews: 76,
    },
    {
      price: "$438.30",
      location: "Alung",
      name: "Service",
      rating: 5.3,
      reviews: 133,
    },
    {
      price: "$923.03",
      location: "Chauk",
      name: "Carey",
      rating: 6.9,
      reviews: 205,
    },
    {
      price: "$454.50",
      location: "Mekarjaya",
      name: "Hoffman",
      rating: 4.3,
      reviews: 246,
    },
    {
      price: "$708.24",
      location: "Kabulusan",
      name: "Anzinger",
      rating: 7.9,
      reviews: 203,
    },
    {
      price: "$273.97",
      location: "Zarrīn Shahr",
      name: "Kinsman",
      rating: 2.3,
      reviews: 227,
    },
    {
      price: "$813.80",
      location: "Shar’ya",
      name: "Marcy",
      rating: 8.8,
      reviews: 89,
    },
    {
      price: "$356.72",
      location: "Dapaong",
      name: "Crownhardt",
      rating: 1.4,
      reviews: 66,
    },
    {
      price: "$326.61",
      location: "Gaoping",
      name: "Autumn Leaf",
      rating: 9.6,
      reviews: 67,
    },
    {
      price: "$206.14",
      location: "Emiliano Zapata",
      name: "Anthes",
      rating: 4.4,
      reviews: 243,
    },
    {
      price: "$647.68",
      location: "Äänekoski",
      name: "Upham",
      rating: 6.0,
      reviews: 145,
    },
    {
      price: "$802.49",
      location: "Charlotte Amalie",
      name: "Anhalt",
      rating: 1.8,
      reviews: 115,
    },
    {
      price: "$702.14",
      location: "Quebrada de Arena",
      name: "Morrow",
      rating: 3.3,
      reviews: 134,
    },
    {
      price: "$423.15",
      location: "Guaíra",
      name: "Sommers",
      rating: 3.6,
      reviews: 67,
    },
    {
      price: "$732.83",
      location: "Karvia",
      name: "Crownhardt",
      rating: 9.6,
      reviews: 150,
    },
    {
      price: "$507.16",
      location: "Bazhu",
      name: "Monument",
      rating: 7.7,
      reviews: 151,
    },
    {
      price: "$510.83",
      location: "Mingshuihe",
      name: "Burrows",
      rating: 8.8,
      reviews: 88,
    },
    {
      price: "$942.17",
      location: "Zumarraga",
      name: "Hudson",
      rating: 9.9,
      reviews: 94,
    },
    {
      price: "$264.68",
      location: "Hedong",
      name: "Vidon",
      rating: 1.2,
      reviews: 201,
    },
    {
      price: "$922.94",
      location: "Concepción de la Barranca",
      name: "Green",
      rating: 2.0,
      reviews: 80,
    },
    {
      price: "$652.53",
      location: "Ciomas",
      name: "Killdeer",
      rating: 5.8,
      reviews: 65,
    },
    {
      price: "$688.71",
      location: "Protección",
      name: "Merrick",
      rating: 1.6,
      reviews: 169,
    },
    {
      price: "$651.06",
      location: "Santa Vitória do Palmar",
      name: "Hallows",
      rating: 1.7,
      reviews: 156,
    },
    {
      price: "$744.97",
      location: "Unecha",
      name: "Novick",
      rating: 5.4,
      reviews: 63,
    },
    {
      price: "$601.67",
      location: "San Pedro",
      name: "Scofield",
      rating: 5.8,
      reviews: 155,
    },
    {
      price: "$623.72",
      location: "Kai",
      name: "Park Meadow",
      rating: 3.3,
      reviews: 234,
    },
    {
      price: "$575.82",
      location: "Gemuruh",
      name: "Mcguire",
      rating: 4.0,
      reviews: 239,
    },
    {
      price: "$860.07",
      location: "Pantian",
      name: "Service",
      rating: 6.3,
      reviews: 196,
    },
    {
      price: "$317.64",
      location: "Maba",
      name: "Glendale",
      rating: 8.2,
      reviews: 77,
    },
    {
      price: "$456.32",
      location: "Liufeng",
      name: "Hanson",
      rating: 1.8,
      reviews: 92,
    },
    {
      price: "$157.46",
      location: "Pýli",
      name: "Pennsylvania",
      rating: 9.6,
      reviews: 241,
    },
    {
      price: "$924.09",
      location: "Agua Fría",
      name: "David",
      rating: 4.5,
      reviews: 157,
    },
    {
      price: "$249.48",
      location: "Binitinan",
      name: "Elmside",
      rating: 4.4,
      reviews: 138,
    },
    {
      price: "$158.46",
      location: "Volksrust",
      name: "Knutson",
      rating: 6.7,
      reviews: 123,
    },
    {
      price: "$730.21",
      location: "Sedayu",
      name: "Mallory",
      rating: 6.5,
      reviews: 235,
    },
    {
      price: "$282.11",
      location: "Semënov",
      name: "Melrose",
      rating: 5.0,
      reviews: 177,
    },
    {
      price: "$976.23",
      location: "San Bautista",
      name: "Clemons",
      rating: 9.8,
      reviews: 72,
    },
    {
      price: "$833.66",
      location: "Alma",
      name: "Briar Crest",
      rating: 4.3,
      reviews: 159,
    },
    {
      price: "$675.03",
      location: "Soledar",
      name: "Monterey",
      rating: 1.6,
      reviews: 229,
    },
    {
      price: "$424.48",
      location: "Kedungbulu",
      name: "Cambridge",
      rating: 1.1,
      reviews: 155,
    },
    {
      price: "$212.22",
      location: "Kiukasen",
      name: "Warner",
      rating: 6.9,
      reviews: 196,
    },
    {
      price: "$612.08",
      location: "Las Vegas",
      name: "Brentwood",
      rating: 9.8,
      reviews: 155,
    },
    {
      price: "$922.87",
      location: "Kobarid",
      name: "Bultman",
      rating: 9.8,
      reviews: 67,
    },
    {
      price: "$732.29",
      location: "Stockholm",
      name: "Arkansas",
      rating: 6.0,
      reviews: 188,
    },
    {
      price: "$460.00",
      location: "Santa Lucía Cotzumalguapa",
      name: "Gateway",
      rating: 9.6,
      reviews: 160,
    },
    {
      price: "$252.51",
      location: "Sumberrejo",
      name: "Eastlawn",
      rating: 6.6,
      reviews: 228,
    },
  ];
  return (
    <section className={featured.container}>
      <ul className={featured.list__container}>
        <li className={featured.list__item}>
          <h2 className={featured.heading}>Houses guests love</h2>
        </li>
        {propertyListItems
          .filter(
            (item) =>
              item.rating > 5.5 && item.reviews > 150 && item.price < "$500"
          )
          .map(({ reviews, rating, location, name, price }, index) => {
            return (
              <li className={featured.list__item} key={index}>
                <figure>
                  <img
                    src={
                      imgUrls[index] ||
                      "https://via.placeholder.com/300x150.webp/000/fff?Text=placeholder"
                    }
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
                      <span>{rating.toFixed(1)}</span>
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
          })}
      </ul>
    </section>
  );
}

export default FeaturedProps;
