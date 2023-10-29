import React, { useState } from 'react';
import './Creations.scss';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const Creations: React.FC = () => {
  const [index, setIndex] = useState(2);

  return (
    <section className='creations'>
      <div className="creations__wrapper">
        <h2 className="creations__title">Try Our Signature Creations!</h2>

        <div className='creations__container'>
          <NavigateBeforeIcon
            sx={{
              fontSize: "40px",
              marginRight: "16px",
              cursor: "pointer",
              color: "#A9D1EA"
            }}
            onClick={() => index > 0 ? setIndex(index - 1) : setIndex(0)}
          />

          <div
            className={`creation ${index === 0 ? 'creation--show' : 'creation--hide'}`}
          >
            <div className='creation__text'>
              <p className='creation__text-title'>Golden Caramel Crunch:</p>

              <p>
                A delightful blend of rich custard with swirls of homemade caramel and crunchy praline pieces.
              </p>
            </div>

            <img
              src={`${process.env.PUBLIC_URL}/images/caramel.jpg`}
              alt="caramel crunch frozen custard"
              className='creation__image'
            />
          </div>

          <div
            className={`creation ${index === 1 ? 'creation--show' : 'creation--hide'}`}
          >
            <div className='creation__text'>
              <p className='creation__text-title'>
                Tropical Passionfruit Bliss:
              </p>

              <p>
                Dive into summer any time of the year with our exotic passionfruit custard dotted with fresh mango chunks.
              </p>
            </div>

            <img
              src={`${process.env.PUBLIC_URL}/images/tropical.jpg`}
              alt="tropical passionfruit frozen custard"
              className='creation__image'
            />
          </div>

          <div
            className={`creation ${index === 2 ? 'creation--show' : 'creation--hide'}`}
          >
            <div className='creation__text'>
              <p className='creation__text-title'>
                Velvety Chocolate Truffle:
              </p>

              <p>
                For the ultimate chocolate lover, dive into deep, dark chocolate custard with soft truffle bites.
              </p>
            </div>

            <img
              src={`${process.env.PUBLIC_URL}/images/velvet.jpg`}
              alt="chocolate truffle frozen custard"
              className='creation__image'
            />
          </div>

          <NavigateNextIcon
            sx={{
              fontSize: "40px",
              marginLeft: "16px",
              cursor: "pointer",
              color: "#A9D1EA" 
            }}
            onClick={() => index < 2 ? setIndex(index + 1) : setIndex(2)}
          />
        </div>

        <div className='creations__text'>
          <p className='creations__text-title'>Special Offers:</p>
          
          <p>
            Join our Frosty Club and enjoy exclusive deals, early access to new flavors, and a free scoop on your birthday!
          </p>
        </div>
      </div>
    </section>
  )
}