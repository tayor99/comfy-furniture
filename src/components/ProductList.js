import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.lenght < 1) {
    <h5 style={{ textTransfrom: "none" }}>
      Sorry, no products matched your search ......
    </h5>;
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
