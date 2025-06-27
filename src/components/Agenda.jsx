import React, { useState } from 'react';
import { Clock, Users, MapPin, Star } from 'lucide-react';

/**
 * Agenda Component
 * 
 * Features:
 * - Interactive schedule with time-based layout
 * - Session filtering and categorization
 * - Speaker information integration
 * - Responsive grid layout
 * - Accessibility features for screen readers
 * - Professional conference agenda design
 */
const Agenda = () => {
  // Sample agenda data - in production, this would come from an API
  const sessions = [
    {
      id: 1,
      time: '8:00 AM',
      title: 'Registration & Breakfast',
      type: 'break',
      description: 'Check-in, networking, and continental breakfast',
      duration: '60 min',
      location: 'Main Lobby',
      featured: false
    },
    {
      id: 2,
      time: '9:00 AM',
      title: 'Opening Keynote: The Future of Web Development',
      speaker: 'Sarah Chen',
      speakerTitle: 'Senior Principal Engineer, Google',
      type: 'keynote',
      description: 'Exploring the next generation of web technologies, performance optimization, and developer experience improvements.',
      duration: '45 min',
      location: 'Main Auditorium',
      featured: true,
      track: 'General'
    },
    {
      id: 3,
      time: '10:00 AM',
      title: 'Coffee Break & Networking',
      type: 'break',
      description: 'Sponsored by Kahua - Connect with fellow developers over coffee',
      duration: '15 min',
      location: 'Exhibition Hall',
      featured: false
    },
    {
      id: 4,
      time: '10:15 AM',
      title: 'Building Scalable React Applications',
      speaker: 'Mike Rodriguez',
      speakerTitle: 'React Core Team Member',
      type: 'technical',
      description: 'Advanced patterns and architectural decisions for large-scale React applications.',
      duration: '45 min',
      location: 'Room A',
      featured: true,
      track: 'Frontend'
    },
    {
      id: 5,
      time: '10:15 AM',
      title: 'Cloud-Native Development with Kubernetes',
      speaker: 'Alex Thompson',
      speakerTitle: 'DevOps Architect, Microsoft',
      type: 'technical',
      description: 'Container orchestration strategies and best practices for modern cloud applications.',
      duration: '45 min',
      location: 'Room B',
      featured: false,
      track: 'Backend'
    },
    {
      id: 6,
      time: '11:15 AM',
      title: 'AI-Powered Development Tools',
      speaker: 'Dr. Lisa Wang',
      speakerTitle: 'ML Research Lead, OpenAI',
      type: 'technical',
      description: 'How artificial intelligence is revolutionizing the software development lifecycle.',
      duration: '45 min',
      location: 'Room A',
      featured: true,
      track: 'AI/ML'
    },
    {
      id: 7,
      time: '11:15 AM',
      title: 'Mobile Development with Flutter',
      speaker: 'James Park',
      speakerTitle: 'Mobile Lead, Uber',
      type: 'technical',
      description: 'Cross-platform mobile development strategies and performance optimization.',
      duration: '45 min',
      location: 'Room B',
      featured: false,
      track: 'Mobile'
    },
    {
      id: 8,
      time: '12:15 PM',
      title: 'Lunch & Sponsor Showcase',
      type: 'break',
      description: 'Catered lunch featuring local Denver favorites and sponsor exhibitions from Kahua, Uno Platform, TEKsystems, and 40AU',
      duration: '75 min',
      location: 'Exhibition Hall',
      featured: false
    },
    {
      id: 9,
      time: '1:30 PM',
      title: 'Panel: The Future of Remote Work in Tech',
      speaker: 'Industry Leaders Panel',
      speakerTitle: 'CTOs from leading tech companies',
      type: 'panel',
      description: 'Discussion on remote work trends, team collaboration, and company culture.',
      duration: '45 min',
      location: 'Main Auditorium',
      featured: true,
      track: 'Leadership'
    },
    {
      id: 10,
      time: '2:30 PM',
      title: 'Web Performance Optimization',
      speaker: 'Emma Davis',
      speakerTitle: 'Performance Engineer, Netflix',
      type: 'technical',
      description: 'Advanced techniques for optimizing web application performance and user experience.',
      duration: '45 min',
      location: 'Room A',
      featured: false,
      track: 'Frontend'
    },
    {
      id: 11,
      time: '2:30 PM',
      title: 'Database Design for Modern Applications',
      speaker: 'Robert Kim',
      speakerTitle: 'Database Architect, MongoDB',
      type: 'technical',
      description: 'NoSQL vs SQL considerations and database architecture patterns.',
      duration: '45 min',
      location: 'Room B',
      featured: false,
      track: 'Backend'
    },
    {
      id: 12,
      time: '3:30 PM',
      title: 'Afternoon Break',
      type: 'break',
      description: 'Refreshments and networking',
      duration: '15 min',
      location: 'Exhibition Hall',
      featured: false
    },
    {
      id: 13,
      time: '3:45 PM',
      title: 'Closing Keynote: Building Inclusive Tech Communities',
      speaker: 'Jordan Martinez',
      speakerTitle: 'VP of Engineering, Slack',
      type: 'keynote',
      description: 'Creating diverse and inclusive technology teams and communities.',
      duration: '45 min',
      location: 'Main Auditorium',
      featured: true,
      track: 'General'
    },
    {
      id: 14,
      time: '4:45 PM',
      title: 'Closing Reception & Awards',
      type: 'break',
      description: 'Networking reception with local craft beer and community awards',
      duration: '75 min',
      location: 'Rooftop Terrace',
      featured: false
    }
  ];

  // Filter state
  const [selectedTrack, setSelectedTrack] = useState('all');
  
  // Get unique tracks for filtering
  const tracks = ['all', ...new Set(sessions.filter(s => s.track).map(s => s.track))];

  // Filter sessions based on selected track
  const filteredSessions = selectedTrack === 'all' 
    ? sessions 
    : sessions.filter(session => session.track === selectedTrack || !session.track);

  // Get session type styling
  const getSessionTypeStyle = (type) => {
    switch (type) {
      case 'keynote':
        return 'bg-gradient-to-r from-denver-red to-red-600 text-white';
      case 'technical':
        return 'bg-gradient-to-r from-colorado-blue to-blue-600 text-white';
      case 'panel':
        return 'bg-gradient-to-r from-forest-green to-green-600 text-white';
      case 'break':
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
      default:
        return 'bg-gradient-to-r from-slate-blue to-blue-500 text-white';
    }
  };

  const getSessionIcon = (type) => {
    switch (type) {
      case 'keynote':
      case 'panel':
        return <Users className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Conference Agenda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A full day of inspiring talks, hands-on workshops, and networking opportunities 
            with Colorado's vibrant tech community.
          </p>
        </div>

        {/* Track Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTrack === track
                  ? 'bg-denver-red text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              aria-label={`Filter sessions by ${track === 'all' ? 'all tracks' : track}`}
            >
              {track === 'all' ? 'All Sessions' : track}
            </button>
          ))}
        </div>

        {/* Sessions Timeline */}
        <div className="space-y-6">
          {filteredSessions.map((session, index) => (
            <div 
              key={session.id}
              className={`card p-6 lg:p-8 animate-slide-up ${
                session.featured ? 'ring-2 ring-denver-red/20 bg-gradient-to-r from-white to-red-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                
                {/* Time and Session Type */}
                <div className="lg:w-48 flex-shrink-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getSessionTypeStyle(session.type)}`}>
                      {getSessionIcon(session.type)}
                      <span className="capitalize">{session.type}</span>
                    </div>
                    {session.featured && (
                      <Star className="w-5 h-5 text-denver-gold fill-current" aria-label="Featured session" />
                    )}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{session.time}</p>
                  <p className="text-sm text-gray-500">{session.duration}</p>
                </div>

                {/* Session Details */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-3">
                    {session.title}
                  </h3>
                  
                  {session.speaker && (
                    <div className="mb-3">
                      <p className="text-lg font-semibold text-denver-red">{session.speaker}</p>
                      <p className="text-gray-600">{session.speakerTitle}</p>
                    </div>
                  )}

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {session.description}
                  </p>

                  {/* Session Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{session.location}</span>
                    </div>
                    {session.track && (
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                        {session.track}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-colorado-blue to-slate-blue rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Reserve your spot at Denver's most anticipated developer conference.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="btn-secondary"
              aria-label="Register for the conference"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
