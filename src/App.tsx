import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { Customer } from './types';
import { faker } from '@faker-js/faker';

const customersData: Customer[] = Array.from({ length: 1000 }).map(() => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  title: faker.person.jobTitle(),
  address: faker.location.streetAddress(),
}));

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(customersData[0].id);

  const selectedCustomer = customersData.find(customer => customer.id === selectedCustomerId) || customersData[0];

  return (
    <div className="app">
      <div className="CustomerListContainer">

        <CustomerList
          customers={customersData}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />

      </div>

      <div className="CustomerDetailContainer">

        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}

      </div>

        
    </div>
  );
};

export default App;
