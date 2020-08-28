import React, { Component, Fragment } from 'react'
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';



import DesktopSideNav from './TheDesktopNav/DesktopSideNav';

// IMPORTING ICONS
import { IoMdTrash } from 'react-icons/io';


export default class Table extends Component {


  constructor(props) {
    super(props)

    this.state = {
      products: [],
      category: []
    }
  }

  componentDidMount() {

    var config = {
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/https://tradex.itskillscenter.com/api/categories/GROCERIES',
      headers: {}
    };

    axios(config)
      .then((response) => {
        this.setState({
          products: response.data.data.subcategory
        })
        console.log(response.data.data.subcategory);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state
    console.log(products)
    return (
      <Fragment>
        <DesktopSideNav />
        <div className="card shadow">
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <p style={{ fontSize: '14px' }} className='font-weight-bold text-secondary'>All Groceries</p>
              <button style={{ background: '#853FA2', borderRadius: '19px', fontSize: '14px' }} className='btn text-white'>Add New Grocery</button>
            </div>
            <hr />

            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>#</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Name</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Category</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Bar Code</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Actions</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Price</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Expiry Date</th>
                    <th scope="col" style={{ background: '#F5F5F5', fontSize: '14px' }} className='text-secondary'>Created</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    products.map((product) =>
                      <tr key={product.id} >
                        <th style={{ fontSize: '14px' }} scope="row">1</th>
                        <td width='30%' className='text-secondary'>
                          <img className='img-fluid' src={product.img} style={{ width: '50%' }} alt="product" />
                          <p style={{ fontSize: '14px' }}> {product.name} </p>
                        </td>
                        <td width='15%' style={{ fontSize: '14px' }} className='text-secondary'>Personal & Beauty Care</td>
                        <td width='12%' style={{ fontSize: '14px' }} className='text-secondary'>M5010477353115</td>
                        <td width='13%' className='text-secondary'>
                          <div className="mx-auto text-center">
                            <button style={{ background: '#853FA2', borderRadius: '19px', fontSize: '14px' }} className='btn text-white'>Edit </button>
                          </div>
                        </td>
                        <td style={{ fontSize: '14px' }} className='text-secondary'>
                          Cost: 100.00 Selling: 100.00
                        </td>
                        <td className='text-secondary'></td>
                        <td style={{ fontSize: '14px' }} className='text-secondary bd-highlight'> 2020-06-23 17:54:32 </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
