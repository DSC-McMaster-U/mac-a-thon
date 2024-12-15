// General Info Schema Type
export interface GeneralInfo {
  _id: string;                // Unique identifier for the document
  _type: 'generalInfo';       // Document type
  title: string;              // The title of the document
  club: string;               // The club name
  description: string;        // The description of the document
  startDate: string;          // The start date of the event
  endDate: string;            // The end date of the event
  locationType: 'virtual' | 'in-person' | 'hybrid'; // The type of location
  applicationStatus: 'open' | 'closed'; // The status of the application
}

// FAQ Schema Type
export interface FAQ {
  _id: string;                // Unique identifier for the document
  _type: 'faq';               // Document type
  question: string;           // The question being asked
  answer: string;             // The answer to the question
}

// Sponsor Schema Type
export interface Sponsor {
  _id: string;                // Unique identifier for the document
  _type: 'sponsor';           // Document type
  name: string;               // The name of the sponsor
  tier: 'gold' | 'silver' | 'bronze'; // The tier of the sponsor
  logo: {
    _type: 'image';           // Image type
    asset: {
      _ref: string;           // Reference to the image asset
      _type: 'reference';     // Reference type
    };
  };  
  website: string;            // The website of the sponsor
}

// About Schema Type
export interface About {
  _id: string;                // Unique identifier for the document
  _type: 'about';             // Document type
  mission: string;            // The mission of the organization
  vision: string;             // The vision of the organization
}

// Statistic Schema Type
export interface Statistic {
  _id: string;                // Unique identifier for the document
  _type: 'statistic';         // Document type
  title: string;              // The title of the statistic
  description: string;        // The description of the statistic
  value: string;              // The value of the statistic
  image: {
    asset: {
      _ref: string;           // Reference to the image asset
    };
  }
}