import React, { useState } from 'react';
import { MapPin, Twitter, Linkedin, ExternalLink, Award } from 'lucide-react';

/**
 * Speakers Component
 * 
 * Features:
 * - Speaker profiles with photos (placeholders), bios, and session info
 * - Interactive speaker cards with hover effects
 * - Social media links integration
 * - Featured speakers highlighting
 * - Responsive grid layout
 * - Accessibility features for speaker information
 */
const Speakers = () => {
  // Sample speakers data - in production, this would come from an API or CMS
  const speakers = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Principal Engineer',
      company: 'Google',
      bio: 'Sarah is a web platform expert with over 12 years of experience building large-scale applications. She contributes to Chrome DevTools and is passionate about developer experience and web performance.',
      session: 'The Future of Web Development',
      sessionTime: '9:00 AM',
      location: 'San Francisco, CA',
      featured: true,
      expertise: ['Web Platform', 'Performance', 'DevTools'],
      social: {
        twitter: '@sarahchen_dev',
        linkedin: 'sarah-chen-google'
      },
      // Placeholder image - in production, use real speaker photos
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'React Core Team Member',
      company: 'Meta',
      bio: 'Mike has been instrumental in shaping React\'s architecture and developer experience. He specializes in component design patterns and state management solutions for enterprise applications.',
      session: 'Building Scalable React Applications',
      sessionTime: '10:15 AM',
      location: 'Seattle, WA',
      featured: true,
      expertise: ['React', 'JavaScript', 'Architecture'],
      social: {
        twitter: '@mikerodriguez',
        linkedin: 'mike-rodriguez-react'
      },
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format'
    },
    {
      id: 3,
      name: 'Dr. Lisa Wang',
      title: 'ML Research Lead',
      company: 'OpenAI',
      bio: 'Dr. Wang leads research on AI-powered developer tools at OpenAI. She has a PhD in Computer Science from Stanford and has published extensively on machine learning applications in software engineering.',
      session: 'AI-Powered Development Tools',
      sessionTime: '11:15 AM',
      location: 'San Francisco, CA',
      featured: true,
      expertise: ['Machine Learning', 'AI', 'Developer Tools'],
      social: {
        twitter: '@drlisawang',
        linkedin: 'lisa-wang-openai'
      },
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format'
    },
    {
      id: 4,
      name: 'Alex Thompson',
      title: 'DevOps Architect',
      company: 'Microsoft',
      bio: 'Alex specializes in cloud-native architectures and container orchestration. He has helped numerous Fortune 500 companies migrate to Kubernetes and implement CI/CD best practices.',
      session: 'Cloud-Native Development with Kubernetes',
      sessionTime: '10:15 AM',
      location: 'Redmond, WA',
      featured: false,
      expertise: ['Kubernetes', 'DevOps', 'Cloud Architecture'],
      social: {
        twitter: '@alexthompson_k8s',
        linkedin: 'alex-thompson-microsoft'
      },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format'
    },
    {
      id: 5,
      name: 'Emma Davis',
      title: 'Performance Engineer',
      company: 'Netflix',
      bio: 'Emma focuses on web performance optimization and user experience metrics. She has improved load times for millions of Netflix users and is a contributor to several open-source performance tools.',
      session: 'Web Performance Optimization',
      sessionTime: '2:30 PM',
      location: 'Los Angeles, CA',
      featured: false,
      expertise: ['Performance', 'Web Vitals', 'Optimization'],
      social: {
        twitter: '@emmadavis_perf',
        linkedin: 'emma-davis-netflix'
      },
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format'
    },
    {
      id: 6,
      name: 'Jordan Martinez',
      title: 'VP of Engineering',
      company: 'Slack',
      bio: 'Jordan leads engineering teams at Slack and is a strong advocate for inclusive tech communities. They have over 15 years of experience building collaborative software and scaling engineering organizations.',
      session: 'Building Inclusive Tech Communities',
      sessionTime: '3:45 PM',
      location: 'San Francisco, CA',
      featured: true,
      expertise: ['Leadership', 'Diversity & Inclusion', 'Team Building'],
      social: {
        twitter: '@jordanmartinez',
        linkedin: 'jordan-martinez-slack'
      },
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format'
    }
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Filter featured speakers
  const featuredSpeakers = speakers.filter(speaker => speaker.featured);
  const regularSpeakers = speakers.filter(speaker => !speaker.featured);

  const SpeakerCard = ({ speaker, featured = false }) => (
    <div 
      className={`card p-6 cursor-pointer transition-all duration-300 ${
        featured 
          ? 'bg-gradient-to-br from-white to-red-50 ring-2 ring-denver-red/20' 
          : 'hover:shadow-xl'
      }`}
      onClick={() => setSelectedSpeaker(speaker)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedSpeaker(speaker);
        }
      }}
      aria-label={`View details for ${speaker.name}, ${speaker.title} at ${speaker.company}`}
    >
      {/* Speaker Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <img 
            src={speaker.image} 
            alt={`Portrait of ${speaker.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-denver-red to-red-600 items-center justify-center text-white font-bold text-2xl">
            {speaker.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        {featured && (
          <div className="absolute -top-2 -right-2 bg-denver-red text-white p-2 rounded-full">
            <Award className="w-4 h-4" aria-label="Featured speaker" />
          </div>
        )}
      </div>

      {/* Speaker Info */}
      <div className="text-center">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
          {speaker.name}
        </h3>
        <p className="text-denver-red font-semibold mb-1">{speaker.title}</p>
        <p className="text-gray-600 mb-4">{speaker.company}</p>

        {/* Session Info */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="font-semibold text-sm text-gray-900 mb-1">{speaker.session}</p>
          <p className="text-xs text-gray-600">{speaker.sessionTime}</p>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {speaker.expertise.slice(0, 2).map((skill) => (
            <span 
              key={skill}
              className="bg-colorado-blue/10 text-colorado-blue text-xs px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
          {speaker.expertise.length > 2 && (
            <span className="text-xs text-gray-500">+{speaker.expertise.length - 2} more</span>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {speaker.social.twitter && (
            <a
              href={`https://twitter.com/${speaker.social.twitter.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={`Follow ${speaker.name} on Twitter`}
              onClick={(e) => e.stopPropagation()}
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {speaker.social.linkedin && (
            <a
              href={`https://linkedin.com/in/${speaker.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label={`Connect with ${speaker.name} on LinkedIn`}
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Featured Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry leaders and experts who are shaping the future of technology. 
            Our speakers bring years of experience from leading tech companies.
          </p>
        </div>

        {/* Featured Speakers */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
            Keynote Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <div 
                key={speaker.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <SpeakerCard speaker={speaker} featured={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Regular Speakers */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-8">
            Session Speakers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularSpeakers.map((speaker, index) => (
              <div 
                key={speaker.id}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + featuredSpeakers.length) * 0.1}s` }}
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Speaker Detail Modal */}
        {selectedSpeaker && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedSpeaker(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-modal-title"
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                  aria-label="Close speaker details"
                >
                  <ExternalLink className="w-6 h-6 rotate-45" />
                </button>

                {/* Speaker Details */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mb-6">
                    <img 
                      src={selectedSpeaker.image} 
                      alt={`Portrait of ${selectedSpeaker.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 id="speaker-modal-title" className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    {selectedSpeaker.name}
                  </h2>
                  <p className="text-xl text-denver-red font-semibold mb-1">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-lg text-gray-600 mb-2">{selectedSpeaker.company}</p>
                  
                  <div className="flex items-center text-gray-500 mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{selectedSpeaker.location}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-xl">
                    {selectedSpeaker.bio}
                  </p>

                  {/* Session Info */}
                  <div className="bg-gray-50 rounded-xl p-6 w-full mb-6">
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">
                      Speaking Session
                    </h3>
                    <p className="text-denver-red font-semibold mb-1">{selectedSpeaker.session}</p>
                    <p className="text-gray-600">{selectedSpeaker.sessionTime}</p>
                  </div>

                  {/* Expertise */}
                  <div className="w-full mb-6">
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {selectedSpeaker.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="bg-colorado-blue text-white px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {selectedSpeaker.social.twitter && (
                      <a
                        href={`https://twitter.com/${selectedSpeaker.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        aria-label={`Follow ${selectedSpeaker.name} on Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </a>
                    )}
                    {selectedSpeaker.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${selectedSpeaker.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        aria-label={`Connect with ${selectedSpeaker.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Speakers;
