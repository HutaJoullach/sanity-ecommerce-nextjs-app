import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

interface HeroBanner {
  smallText: string;
  midText: string;
  largeText1: string;
  image: any;
  product: string;
  buttonText: string;
  heroBanner: string;
  desc: string;
}

type HeroBannerProps = {
  heroBanner?: HeroBanner | undefined;
};

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className="hero-banner-container">
      {/* {console.log(heroBanner)} */}
      <div>
        <p className="beats-solo">{heroBanner?.smallText}</p>
        <h3>{heroBanner?.midText}</h3>
        <h1>{heroBanner?.largeText1}</h1>
        <img
          src={urlFor(heroBanner?.image).url()}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner?.product}`}>
            <button type="button">{heroBanner?.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
