import React from "react";
import ModalImage from "react-modal-image";

import B1 from "../data/b1.png";
import B2 from "../data/b2.png";
import B3 from "../data/b3.png";
import B4 from "../data/b4.png";

import C1 from "../data/c1.png";
import C2 from "../data/c2.png";
import C3 from "../data/c3.png";
import C4 from "../data/c4.png";

import D1 from "../data/d1.png";
import D2 from "../data/d2.png";
import D3 from "../data/d3.png";

import E1 from "../data/e1.png";
import E2 from "../data/e2.png";
import E3 from "../data/e3.png";

import F1 from "../data/f1.png";
import F2 from "../data/f2.png";
import F3 from "../data/f3.png";
import F4 from "../data/f4.png";
import F5 from "../data/f5.png";

import G1 from "../data/g1.png";
import G2 from "../data/g2.png";

export default function Works() {
  const works = [
    {
      title: "Etiquette Pharmaceuticals Limited",
      images: [G1, G2],
      website: "https://etiquettepharmaceuticals.com/",
      github1: "",
      github2: "",
    },
    {
      title: "Investment Site",
      images: [F1, F2, F3, F4, F5],
      website: "https://britishfx.vercel.app/",
      github1: "https://github.com/wilsonXeem/Britishfx",
      github2: "https://github.com/wilsonXeem/britishfx-server",
    },
    {
      title: "Beach Resort Site",
      images: [B1, B2, B3, B4],
      website: "https://beach-resort-one.vercel.app/",
      github1: "https://github.com/wilsonXeem/Beach-Resort",
      github2: "",
    },
    {
      title: "Computer Based Test site",
      images: [C1, C2, C3, C4],
      website: "https://student-test-app.vercel.app/",
      github1: "https://github.com/wilsonXeem/Pharm-Test-App.git",
      github2: "",
    },
    {
      title: "Shop Transaction Sheet",
      images: [D1, D2, D3],
      website: "https://shop-automation.vercel.app/",
      github1: "https://github.com/wilsonXeem/shop-automation-ui",
      github2: "https://github.com/wilsonXeem/shop-automation-server",
    },
    {
      title: "To Do App",
      images: [E1, E2, E3],
      website: "https://vercel.com/wilsonxeem/todolist",
      github1: "https://github.com/wilsonXeem/todo-ui",
      github2: "https://github.com/wilsonXeem/todo-server",
    },
  ];

  return (
    <div className="works" id="works">
      <h1 className="work_title">My Works</h1>
      <div className="work_hr">
        <hr />
      </div>
      <div className="imgs">
        {works.map((work, i) => {
          return (
            <div className="work">
              <h3>{work.title}</h3>
              <div className="images">
                {work.images.map((img, i) => (
                  <ModalImage
                    small={img}
                    large={img}
                    alt="img"
                    key={i}
                  />
                ))}
              </div>
              <div className="img_button">
                <a href={work.website}>
                  <button>Website</button>
                </a>

                {work.github1 !== "" ? (
                  <a href={work.github1}>
                    <button>GitHub(UI)</button>
                  </a>
                ) : (
                  ""
                )}
                {work.github2 !== "" ? (
                  <a href={work.github2}>
                    <button>GitHub(Server)</button>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
