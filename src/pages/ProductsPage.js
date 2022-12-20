import styled from 'styled-components';
import { FIlters, ProductList, Sort, PageHero } from '../components';

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper>
        <div className="section-center products">
          <FIlters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
