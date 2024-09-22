import React from "react";
import ServiceCards from "./ServiceCards";

export default function Services() {
  return (
    <div style={{ background: "#151515", margin: "5%", padding: "3% 3%" }}>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <ul style={{ paddingLeft: "10%" }}>
              <li style={{ color: "white", textAlign: "left" }}>
                Our Services
              </li>
            </ul>
          </div>
          <div class="col">
            <h5 style={{ color: "white", textAlign: "left" }}>
              We are a close-knit team of experts <br />
              dedicated to crafting memorable and <br />
              <span style={{ color: "grey" }}>
                {" "}
                emotionally engaging websites, digital
                <br /> experiences, and native apps.
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row mb-3">

      <ServiceCards/>
      <ServiceCards/>
      <ServiceCards/>
      </div>
    </div>
  );
}
