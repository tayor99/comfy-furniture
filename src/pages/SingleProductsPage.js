import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { single_product_url as url } from '../utils/Constants';
import { useProductsContext } from '../context/product_context';
import {
  Loading,
  Error,
  PageHero,
  ProductImages,
  Star,
  AddToCart,
} from '../components';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { ADD_TO_CART } from '../utils/action';

const SingleProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loadimg,
    single_product_error: error,
    single_product: product,
    fetchSingleProducts,
  } = useProductsContext();
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  useEffect(() => {
    fetchSingleProducts(url + id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  });

  if (loadimg) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          {/* {newImg.map((newI) => {
            return <img src={newI.url} alt="lol" />;
          })} */}
          <section className="content">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Avaliable :</span>
              {stock > 0 ? 'in stock' : 'Out of stock'}
            </p>
            <p className="info">
              <span>Sku :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProducts;
