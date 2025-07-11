//import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
//import { DynamoDBDocumentClient, GetCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

// Interface for the expectant contact item structure:

interface ContactRecord {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  groups: string;
  street: string;
  city: string;
  customer_state: string;
  postcode: string;
  last_order_items: string;
  pos_member_notes: string;
  wine_club_first_joined_date: string;
}

// ContactDB class to handle earching and fetching contact record:
export class ContactDB {}
