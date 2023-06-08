import './_vars.scss';
import './_reset.scss';
import './_section-cart.scss';
import './_base.scss';



import Title from '../Title/Title';
import Cart from '../Cart/Cart';

function App() {

  return (
    <section className='section-cart' >
      <header className="section-cart_header" >
        <div className="container">
         <Title/>
        </div>
      </header>


      <div className='section-cart_body' >
        <div className="container">
          <Cart/>
        </div>
      </div>



    </section>
  );
}



export default App;
