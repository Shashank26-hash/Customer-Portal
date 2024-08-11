import React from 'react';
import { Customer } from '../types';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <h3>{customer.title}</h3>
      <p>{customer.address}</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
