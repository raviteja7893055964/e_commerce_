import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
function KitchenPage() {
    const [SelecetedProduct, setSelecetedProduct] = useState([])

    const companyHandler = (brand) => {
        console.log(brand);

        if (SelecetedProduct.includes(brand)) {
            setSelecetedProduct(SelecetedProduct.filter(item => {
                item != brand
            }
            )
            )
        }
        else {
            setSelecetedProduct([brand])
        }
    }
    const filteredPrducts = SelecetedProduct.length === 0 ?
        kitchenData : kitchenData.filter((eachMob) =>
            SelecetedProduct.includes(eachMob.brand)
        )

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {kitchenData.map((watch) => {
                        return (
                            <div className='pro-input'>
                                <label htmlFor="" >
                                    <input type="checkbox"
                                        checked={SelecetedProduct.includes(watch.brand)}
                                        onChange={() => {
                                            companyHandler(watch.brand)
                                        }}
                                    />
                                </label>
                                {watch.brand}
                            </div>
                        )
                    })}
                </div>

                <div className="pageSection">
                    {
                        filteredPrducts.map((item) => {
                            return (
                                <div>
                                    <Link to={`/kitchen/${item.id}`}>
                                        <div className="pageImg">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </Link>

                                    <div className="proModel">
                                        {
                                            item.brand
                                        },
                                        {
                                            item.model
                                        }
                                    </div>
                                </div>


                            )
                        })
                    }
                </div>
            </div>
        </>


    )
}

export default KitchenPage