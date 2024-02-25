import { Fragment } from "react";
import { store } from "../../store";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";

export default function Category() {
  const categoryId = useLoaderData();
  console.log('hello');
  return (
    <Fragment>
      <div className="products">
        {store.korzinka
          .filter((a) => a.type === categoryId)
          .map((details, index) => (
            <Product details={details} key={index} />
          ))}
      </div>
    </Fragment>
  );
}

export const CategoryDataLoader = ({ params }) => {
  const { id } = params;

  return id;
};
