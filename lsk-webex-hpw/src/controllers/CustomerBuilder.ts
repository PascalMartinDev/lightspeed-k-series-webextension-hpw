import { Customer } from '../models/Customer';

export class CustomerBuilder {
  private customer = new Customer();

  setFirstName(firstname: string): this {
    this.customer.firstname = firstname;
    return this;
  }

  setLastName(lastname: string): this {
    this.customer.lastname = lastname;
    return this;
  }

  setEmail(email: string): this {
    this.customer.email = email;
    return this;
  } 

  setPhone(phone: string): this {
    this.customer.phone = phone;
    return this;
  } 

  setGroup(group: string): this {
    this.customer.group = group;
    return this;
  }

  setStreet(street: string): this {
    this.customer.street = street;
    return this;
  }

  setCity(city: string): this {
    this.customer.city = city;
    return this;
  } 

  setState(state: string): this {
    this.customer.state = state;
    return this;
  }

  setPostalCode(postcode: string): this {
    this.customer.postcode = postcode;
    return this;
  }

  setIsVipMember(isVipMember: string): this {
    this.customer.isVipMember = isVipMember;
    return this;
  }

  setPosLastVisitDate(posLastVisitDate: string): this {
    this.customer.posLastVisitDate = posLastVisitDate;
    return this;
  } 

  setWineClubFirstJoinedDate(wineClubFirstJoinedDate: string): this {
    this.customer.wineClubFirstJoinedDate = wineClubFirstJoinedDate;
    return this;
  }

  setLastOrderItems(lastOrderItems: string): this {
    this.customer.lastOrderItems = lastOrderItems;
    return this;
  }

  setMemberPromotion(memberPromotion: string): this {
    this.customer.memberPromotion = memberPromotion;
    return this;
  }

  build(): Customer {
    return this.customer;
  }
}

/* 
Builder Pattern - Customer Builder class facilites the building of the Customer model from different data sources. 
*/
