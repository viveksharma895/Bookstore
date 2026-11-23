import React from "react";

function Cards({ item }) {
  return (
    <div className="h-full px-3 py-2">
      <div className="card bg-base-100 flex h-[420px] w-full flex-col overflow-hidden shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
        <figure className="shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body flex-1 gap-3 p-5">
          <h2 className="card-title text-base">
            {item.name}
            <div className="badge badge-secondary badge-sm">{item.category}</div>
          </h2>
          <div className="card-actions mt-auto justify-end pt-2">
            <div className="badge badge-outline h-8 w-24 border-blue-300 bg-blue-500 text-white">
              &#8377; {item.price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
