import React from 'react';
import { ExternalLink, Book, Building2, FileText, Scale } from 'lucide-react';

const links = [
  {
    category: 'Regulatory Bodies',
    items: [
      { title: 'Securities and Exchange Board of India (SEBI)', url: 'https://www.sebi.gov.in' },
      { title: 'Reserve Bank of India (RBI)', url: 'https://www.rbi.org.in' },
      { title: 'Insurance Regulatory and Development Authority (IRDA)', url: 'https://www.irdai.gov.in' }
    ],
    icon: <Scale className="h-6 w-6 text-blue-600" />
  },
  {
    category: 'Market Infrastructure',
    items: [
      { title: 'National Stock Exchange (NSE)', url: 'https://www.nseindia.com' },
      { title: 'Bombay Stock Exchange (BSE)', url: 'https://www.bseindia.com' },
      { title: 'Central Depository Services Limited (CDSL)', url: 'https://www.cdslindia.com' }
    ],
    icon: <Building2 className="h-6 w-6 text-green-600" />
  },
  {
    category: 'Industry Associations',
    items: [
      { title: 'Association of Mutual Funds in India (AMFI)', url: 'https://www.amfiindia.com' },
      { title: 'Financial Planning Standards Board India', url: 'https://www.fpsb.co.in' }
    ],
    icon: <Book className="h-6 w-6 text-purple-600" />
  },
  {
    category: 'Research & News',
    items: [
      { title: 'Economic Times Markets', url: 'https://economictimes.indiatimes.com/markets' },
      { title: 'Moneycontrol', url: 'https://www.moneycontrol.com' },
      { title: 'Value Research', url: 'https://www.valueresearch.com' }
    ],
    icon: <FileText className="h-6 w-6 text-orange-600" />
  }
];

const ImportantLinks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Important Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {links.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              {section.icon}
              <h2 className="text-xl font-bold ml-2">{section.category}</h2>
            </div>
            <ul className="space-y-3">
              {section.items.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantLinks;