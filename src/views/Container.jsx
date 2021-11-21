import React from 'react'
import logo from '../assets/logo.svg';
import Bill from "../components/Bill"
import TipPercentage from '../components/TipPercentage'
import NumberOfPeople from '../components/NumberOfPeople'
import TipAmount from '../components/TipAmount'
import Total from '../components/Total'
import Button from '../components/Button'

import { DataTip } from '../data';

function Container() {
  return (
    <>
      <img
        className="img__logo"
        loading="lazy"
        width="25%"
        height="auto"
        src={logo}
        alt="Foto de logotipo"
      />
      <section className="calculator">
        <section>
          <Bill />
          <label className="label">Select Tip %</label>
          <section className="select__tip">
            {DataTip?.map((item) => (
              <TipPercentage
                key={item.id.toString()}
                valuePercentage={item.percentage}
              />
            ))}
          </section>
          <NumberOfPeople />
        </section>
        <section className="totals__wrapper">
          <div>
            <TipAmount />
            <Total />
          </div>
          <Button />
        </section>
      </section>
    </>
  )
}

export default Container
