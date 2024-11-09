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
  logo: {
    _type: 'image';           // Image type
    asset: {
      _ref: string;           // Reference to the image asset
      _type: 'reference';     // Reference type
    };
  };  
  website: string;            // The website of the sponsor
}

// Statistic Schema Type
export interface Statistic {
  _id: string;                // Unique identifier for the document
  _type: 'statistic';         // Document type
  title: string;              // The title of the statistic
  value: number;              // Numerical value for the statistic
  category?: 'performance' | 'participation' | 'general'; // Optional category
  description?: string;       // Optional description of the statistic
}

// Events Schema Type
export interface Event {
  _id: string;
  _type: 'Event';
  title: string;
  dateTimeRange: {
    start: string;
    end: string;
  }
  location: string;
  description: string;
  picture: {
    _type: 'image';
  };
  winners: string[];
}