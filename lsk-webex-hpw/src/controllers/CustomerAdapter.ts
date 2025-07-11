import { CustomerBuilder } from './CustomerBuilder';

// CustomerAdapter interface defines a contract for adapting customer data
export interface CustomerAdapter {
  applyToCustomerBuider(builder: CustomerBuilder): void;
}


// Concrete Implementation of different CustomerAdapter types



