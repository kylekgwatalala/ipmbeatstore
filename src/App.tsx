import React from 'react';
import { Music, Mail, Instagram, Download, Crown, Zap, Infinity, MessageCircle } from 'lucide-react';

function App() {
  const licenses = [
    {
      name: 'BASIC',
      price: '$29.99',
      description: 'MP3 Format',
      features: ['MP3 Download', 'Non-exclusive rights', 'Personal use'],
      icon: <Download className="w-6 h-6" />,
      popular: false
    },
    {
      name: 'PREMIUM',
      price: '$59.99',
      description: 'MP3 + WAV Format',
      features: ['MP3 & WAV Download', 'Higher quality audio', 'Commercial use'],
      icon: <Zap className="w-6 h-6" />,
      popular: true
    },
    {
      name: 'UNLIMITED',
      price: '$99.99',
      description: 'MP3 + WAV + Stems',
      features: ['All audio formats', 'Trackout stems', 'Unlimited streams'],
      icon: <Infinity className="w-6 h-6" />,
      popular: false
    },
    {
      name: 'EXCLUSIVE',
      price: '$149.99',
      description: 'Full Ownership',
      features: ['100% ownership', 'All formats + stems', 'Complete rights'],
      icon: <Crown className="w-6 h-6" />,
      popular: false
    }
  ];

  // Featured beats from BeatStars
  const beats = [
    {
      id: 1,
      name: "DARK NIGHTS",
      bpm: 140,
      key: "F# Minor",
      tags: ["Dark", "Atmospheric", "Trap"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder - replace with actual preview URLs
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    },
    {
      id: 2,
      name: "SHADOW REALM",
      bpm: 135,
      key: "A Minor",
      tags: ["Opium", "Dark", "Underground"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    },
    {
      id: 3,
      name: "MIDNIGHT DRIVE",
      bpm: 145,
      key: "C# Minor",
      tags: ["Dark", "Melodic", "Trap"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    },
    {
      id: 4,
      name: "VOID WALKER",
      bpm: 138,
      key: "D Minor",
      tags: ["Atmospheric", "Dark", "Experimental"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    },
    {
      id: 5,
      name: "NEON DECAY",
      bpm: 142,
      key: "G Minor",
      tags: ["Dark", "Synth", "Underground"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    },
    {
      id: 6,
      name: "PHANTOM ZONE",
      bpm: 136,
      key: "B Minor",
      tags: ["Opium", "Dark", "Melodic"],
      preview: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      beatstarsUrl: "https://beatstars.com/ipmbaby"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-lime-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Music className="w-8 h-8 text-lime-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-lime-400 to-green-300 bg-clip-text text-transparent">
                IPM BEATSTORE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beats" className="text-gray-300 hover:text-lime-400 transition-colors">BEATS</a>
              <a href="#pricing" className="text-gray-300 hover:text-lime-400 transition-colors">PRICING</a>
              <a href="#custom" className="text-gray-300 hover:text-lime-400 transition-colors">CUSTOM</a>
              <a href="#contact" className="text-gray-300 hover:text-lime-400 transition-colors">CONTACT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(lime_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-lime-400 via-green-300 to-lime-500 bg-clip-text text-transparent">
              IPM
            </h2>
            <div className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wider">
              BEATSTORE
            </div>
            <div className="w-32 h-1 bg-lime-400 mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            DARK MELODIES • HARD BEATS • UNDERGROUND SOUND
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://beatstars.com/ipmbaby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/25"
            >
              <span className="flex items-center justify-center gap-2">
                BROWSE BEATS
                <Music className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-lime-400 text-lime-400 font-bold text-lg rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              VIEW PRICING
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-lime-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Beats Section */}
      <section id="beats" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              DARK <span className="text-lime-400">COLLECTION</span>
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore haunting melodies and hard-hitting beats crafted for the underground scene
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beats.map((beat) => (
              <div key={beat.id} className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-lime-400/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex items-center justify-center relative">
                  <Music className="w-16 h-16 text-lime-400 group-hover:scale-110 transition-transform" />
                  
                  {/* Audio Preview */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <audio 
                      controls 
                      className="w-full h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        filter: 'invert(1) hue-rotate(90deg)',
                        background: 'transparent'
                      }}
                    >
                      <source src={beat.preview} type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{beat.name}</h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {beat.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-lime-400/20 text-lime-400 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4">{beat.bpm} BPM • {beat.key}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lime-400 font-bold">From $29.99</span>
                    <a 
                      href={beat.beatstarsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-lime-400 text-black font-bold rounded hover:bg-lime-300 transition-colors"
                    >
                      BUY NOW
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://beatstars.com/ipmbaby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-lime-400 font-bold rounded-lg border border-lime-400/50 hover:bg-lime-400 hover:text-black transition-all duration-300"
            >
              VIEW ALL BEATS ON BEATSTARS
              <Music className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Custom Beats Section */}
      <section id="custom" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              CUSTOM <span className="text-lime-400">BEATS</span>
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-8"></div>
            
            <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-800">
              <div className="mb-8">
                <MessageCircle className="w-16 h-16 text-lime-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">NEED SOMETHING UNIQUE?</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Looking for a custom beat tailored specifically to your vision? IPM creates personalized dark, atmospheric beats that match your exact style and requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Music className="w-6 h-6 text-lime-400" />
                  </div>
                  <h5 className="text-white font-bold mb-2">PERSONALIZED</h5>
                  <p className="text-gray-400 text-sm">Beats crafted to your specifications</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-6 h-6 text-lime-400" />
                  </div>
                  <h5 className="text-white font-bold mb-2">EXCLUSIVE</h5>
                  <p className="text-gray-400 text-sm">100% ownership guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-lime-400" />
                  </div>
                  <h5 className="text-white font-bold mb-2">FAST DELIVERY</h5>
                  <p className="text-gray-400 text-sm">Quick turnaround times</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h5 className="text-lime-400 font-bold mb-3">CUSTOM BEAT PROCESS:</h5>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                    Send reference tracks and describe your vision
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                    Discuss pricing and timeline
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                    Receive your custom beat with stems
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://instagram.com/thobo.moyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 text-black font-bold text-lg rounded-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-6 h-6" />
                DM @THOBO.MOYO FOR CUSTOM BEATS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              LICENSE <span className="text-lime-400">PRICING</span>
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect license for your needs. All payments processed securely through BeatStars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {licenses.map((license, index) => (
              <div 
                key={license.name} 
                className={`relative bg-gray-900 rounded-lg p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  license.popular 
                    ? 'border-lime-400 shadow-lg shadow-lime-400/25' 
                    : 'border-gray-700 hover:border-lime-400/50'
                }`}
              >
                {license.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-400/20 rounded-full mb-4">
                    <div className="text-lime-400">
                      {license.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{license.name}</h4>
                  <div className="text-3xl font-black text-lime-400 mb-2">{license.price}</div>
                  <p className="text-gray-400">{license.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {license.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://beatstars.com/ipmbaby" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center font-bold rounded-lg transition-all duration-300 ${
                    license.popular
                      ? 'bg-lime-400 text-black hover:bg-lime-300'
                      : 'border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black'
                  }`}
                >
                  GET LICENSE
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">All prices in USD • Secure payment via BeatStars</p>
            <a 
              href="https://beatstars.com/ipmbaby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors underline"
            >
              Visit our BeatStars store →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              GET IN <span className="text-lime-400">TOUCH</span>
            </h3>
            <div className="w-24 h-1 bg-lime-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to work together? Let's create something dark and powerful.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h4 className="text-2xl font-bold text-white mb-6">CONNECT WITH IPM</h4>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                    <Mail className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a 
                      href="mailto:kingipm300@gmail.com" 
                      className="text-white hover:text-lime-400 transition-colors text-lg"
                    >
                      kingipm300@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-lime-400/20 rounded-lg flex items-center justify-center group-hover:bg-lime-400/30 transition-colors">
                    <Instagram className="w-6 h-6 text-lime-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Instagram</p>
                    <a 
                      href="https://instagram.com/thobo.moyo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-lime-400 transition-colors text-lg"
                    >
                      @thobo.moyo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-6">QUICK MESSAGE</h4>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:outline-none transition-colors"
                  />
                  <textarea 
                    rows={4} 
                    placeholder="Your message..." 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <a 
                    href="mailto:kingipm300@gmail.com" 
                    className="block w-full py-3 bg-lime-400 text-black font-bold text-center rounded-lg hover:bg-lime-300 transition-colors"
                  >
                    SEND MESSAGE
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Music className="w-6 h-6 text-lime-400" />
              <span className="text-xl font-bold text-white">IPM BEATSTORE</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="mailto:kingipm300@gmail.com" 
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/thobo.moyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://beatstars.com/ipmbaby" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 IPM BEATSTORE. All rights reserved. | Payments via 
              <a 
                href="https://beatstars.com/ipmbaby" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lime-400 hover:text-lime-300 transition-colors ml-1"
              >
                BeatStars
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;