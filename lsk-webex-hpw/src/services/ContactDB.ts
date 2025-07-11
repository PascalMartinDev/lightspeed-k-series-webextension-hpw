import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";


// Interface for the expectant contact item structure:

interface ContactRecord {
 contactData : {
        first_name?: string;
        last_name?: string;
        email?: string;
        phone?: string;
        groups?: string;
        street?: string;
        city?: string;
        customer_state?: string;
        postcode?: string;
        last_order_items?: string;
        pos_member_notes?: string;
        wine_club_first_joined_date?: string;
      } | null;
  message: string;
}

// ContactDB class to handle fetching database contact record:
export class ContactDB {
  private static instance: ContactDB;
  private docClient: DynamoDBDocumentClient;
  private tableName: string;
  private region: string;

  constructor(){
    this.region = import.meta.env.VITE_AWS_REGION || 'us-east-1'; // Default region if not set
    const client = new DynamoDBClient({ 
      region: this.region 
    });
    this.docClient = DynamoDBDocumentClient.from(client);
    this.tableName = import.meta.env.VITE_DYNAMODB_CONTACT_PROFILE_TABLE;
  }

  // Singleton Pattern to ensure only one instance of ContactDB is created:
  public static getDynamoDBClient(){
    if (!ContactDB.instance) {
      ContactDB.instance = new ContactDB();
    }
    return ContactDB.instance;
  }

  //Method to search DyamoDB for a contact by email:
  async getContactByEmail(email: string): Promise<ContactRecord> {
    const input = {
        Key: { email: email },
        TableName: this.tableName
      };
    
    try {
      const command = new GetCommand(input);
      const response = await this.docClient.send(command);
      if (response.Item) {
        return {
          contactData: response.Item,
          message: "Success"
        };
      } else {
        return {
          contactData: null,
          message: "No Contact found!"
        };
      }

    } catch (error) {
      return {
        contactData: null,
        message: "500 Error: Please try again and if problem persists contact support!"
      };
    }
  }
}
            
// Method to call AWS DynamoDB to get contact by email for applications hosted on AWS Amplify
// The IAM role attached to your Amplify instance should have the following DynamoDB permissions:
// {
//   "Version": "2012-10-17",
//   "Statement": [
//     {
//       "Effect": "Allow",
//       "Action": [
//         "dynamodb:GetItem",
//         "dynamodb:Query",
//         "dynamodb:Scan"
//       ],
//       "Resource": "arn:aws:dynamodb:REGION:ACCOUNT:table/YOUR_TABLE_NAME"
//     }
//   ]
// }


// For Amplify environment variables, set these in your Amplify console:
// - VITE_AWS_REGION: Your DynamoDB region
// - VITE_DYNAMODB_CONTACT_PROFILE_TABLE
// - Any other environment-specific variables you may need
