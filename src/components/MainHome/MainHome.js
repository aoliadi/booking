import main from "./mainhome.module.css";
import Featured from "../Featured/Featured";
import PropertyList from "../Properties/PropertyList";
import FeaturedProps from "../FeaturedProps/FeaturedProps";
import { useEffect, useState } from "react";

function MainHome() {
  const uri =
    "https://api.unsplash.com/search/photos?client_id=cwT-MrEkKfoRECZfLM7dBzfLOJY134zTlg9Uf3wh5TA&per_page=10&page=5&query=apartment";
  const [loading, setLoading] = useState(true);
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setImgUrls(data.results.map((img) => img.urls.small));
        setLoading(false);
      });
  }, [uri]);

  return (
    <div className="">
      <main className={main.container}>
        {loading || <Featured imgUrls={imgUrls} />}
        {loading || <PropertyList imgUrls={imgUrls} />}
        {loading || <FeaturedProps imgUrls={imgUrls} />}
      </main>
    </div>
  );
}

export default MainHome;
