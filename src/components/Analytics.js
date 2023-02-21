import React from "react";
import Laptop from "../assets/laptop.jpeg";
function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet,
            consetetur Lorem ipsum dolor sit amet, conseteturLorem ipsum dolor
            sit amet, consetetur
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 mx-auto bg-black md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
