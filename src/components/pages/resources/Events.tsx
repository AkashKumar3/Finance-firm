import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Investment Strategy Summit 2024',
    date: 'April 15, 2024',
    location: 'Grand Hotel, New York',
    attendees: '200+',
    description: 'Join us for a comprehensive discussion on investment strategies for the coming year.',
    category: 'Conference'
  },
  {
    title: 'Wealth Management Workshop',
    date: 'April 20, 2024',
    location: 'Financial Center, Chicago',
    attendees: '50+',
    description: 'Learn about effective wealth management strategies from industry experts.',
    category: 'Workshop'
  },
  {
    title: 'Market Outlook Seminar',
    date: 'April 25, 2024',
    location: 'Business Hub, San Francisco',
    attendees: '100+',
    description: 'Get insights on market trends and investment opportunities.',
    category: 'Seminar'
  }
];

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <span className="text-sm font-semibold text-blue-600">{event.category}</span>
                <h2 className="text-2xl font-bold mt-1">{event.title}</h2>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;