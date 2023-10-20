import { TitleComponent } from './Title/Title';
import { Component } from 'react';
import { Product } from './Product/Product';
import { productsData } from 'Data/productsData';
import css from './App.module.css';
import Section from './Section/Section';

export class App extends Component {
  state = {
    counterValue: 0,
    products: productsData,
  };

  handleIncrement = () => {
    // this.setState(state => {
    //   return {
    //     counterValue: state.counterValue + 1,
    //   };
    // });

    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      return alert('Counter = 0');
    }

    this.setState({ counterValue: this.state.counterValue - 1 });
  };

  hendleDeleteProduct = productId => {
    console.log('productId:', productId);
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    const sortedProducts = [...this.state.products].sort(
      (a, b) => a.price - b.price
    );
    return (
      <div>
        <Section>
          <TitleComponent />
          <TitleComponent />
          <button onClick={this.handleDecrement}>Decrement - </button>
          <b> counterValue: {this.state.counterValue} </b>
          <button onClick={this.handleIncrement}> Increment +</button>
          {this.state.counterValue >= 5 && (
            <div>Congrats! You won the discount 20% OFF - #R3DW1E3</div>
          )}
        </Section>

        <Section title="Product List">
          <div className={css.productList}>
            {sortedProducts.map(({ id, title, price, discount }) => {
              return (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  discount={discount}
                  hendleDeleteProduct={this.hendleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </div>
    );
  }
}
