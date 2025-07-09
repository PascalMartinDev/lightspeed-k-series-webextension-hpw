export class Customer{
  firstname?: string;
  lastname?:string;
  email?: string;
  phone?: string
  group?: string;
  street?: string;
  city?: string;
  state?: string;
  postcode?: string;
  isVipMember?: string;
  posLastVisitDate?: string;
  wineClubFirstJoinedDate?: string;
  lastOrderItems?: string;
  memberPromotion?: string;

  // RESTART HERE!! Constructure may or may not be setup correctly!!
  constructor(data: Consumer | null) {
	this.lastname = data?.lastname || "";
	this.city = data?.city || "";
	this.firstname = data?.firstname || "";
	this.addressLine1 = data?.addressLine1 || "";
	this.email = data?.email || "";
	this.identifier = data?.identifier || "";
	this.phoneNumber1 = data?.phoneNumber1 || "";
	this.consumer = data?.consumer || "";
	this.zipCode = data?.zipCode || "";
	this.addressLine2 = data?.addressLine2 || "";
  }

}