import React from "react";
import ReadData from "./ReadData";

function Home({ datas }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-2">
        <div className="row gx-4 gx-lg-5 row-cols-1 justify-content-center">
          <h3 className="text-center">Users</h3>
          {datas.map((data) => (
            <ReadData key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
