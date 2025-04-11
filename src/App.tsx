import React, { useEffect, useState } from 'react';
import { Heart, Star, Gift, Calendar, MessageCircle, Music, Camera, Sparkles } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const memories = [
    {
      date: "May 13, 2022",
      title: "Our First Connection",
      description: "The day we found each other on Instagram, stayed up talking for hours, and instantly became friends — it still feels so special.",
      image: "/memory1.png", // Using your personal PNG image
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-pink-400 to-purple-400"
    },
    {
      date: "July 24, 2022",
      title: "First Meeting",
      description: "I still remember the day we met — my first time going out with a girl, and it became one of the most unforgettable days. The time we spent and the memories we made will always stay close to my heart.",
      image: "/memory2.png", // Using your personal PNG image
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      date: "April 12, 2024",
      title: "Special Moments",
      description: "It’s crazy to think that around this time last year, we weren’t even speaking. We’ve moved past our arguments and are now living our best lives. Just a reminder — the past isn’t permanent.Also, I’m really sorry if I’ve ever been annoying along the way. It was never intentional — you’ve always meant more to me than I could ever explain.",
      image: "/memory3.png", // Using your third personal PNG image
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-400 to-purple-400"
    },
    {
      date: "April 12, 2025",
      title: "Future Happiness",
      description: "I’m excited for a future filled with laughter, unforgettable memories, and endless adventures with you. With every passing day, you mean even more to me, and I’m so lucky to have you in my life.",
      image: "/memory4.png", // Using your fourth personal PNG image
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 overflow-x-hidden">
      {/* Opening Animation */}
      {!showContent ? (
        <div className="h-screen flex items-center justify-center">
          <div className="text-8xl animate-bounce">🎂</div>
        </div>
      ) : (
        <>
          {/* Floating Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(60)].map((_, i) => {
              const size = 0.8 + Math.random() * 1.5;
              const emoji = ['🎈', '✨', '🎉', '💝', '🌸', '🎀', '🎊', '🌟', '💫', '💕'][Math.floor(Math.random() * 10)];
              const animationType = i % 5 === 0 ? 'animate-sparkle' : 'animate-float';
              
              return (
                <div
                  key={i}
                  className={`absolute ${animationType}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${size}rem`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${4 + Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    zIndex: Math.floor(Math.random() * 10)
                  }}
                >
                  {emoji}
                </div>
              );
            })}
          </div>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center">
            <div className="text-center space-y-8 z-10">
              <div className="space-y-4 animate-slide-in">
                <div className="relative">
                  <Sparkles className="w-16 h-16 text-pink-500 animate-sparkle mx-auto" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-40">
                    <Sparkles className="w-20 h-20 text-purple-400 animate-sparkle mx-auto" style={{ animationDelay: '0.7s' }} />
                  </div>
                </div>
                
                <div className="animate-rotate3D">
                  <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-glow">
                    Happy Birthday
                  </h1>
                </div>
                
                <div className="animate-pulse">
                  <h2 className="text-4xl md:text-6xl font-bold text-pink-500 text-shadow-pink">
                    Navya! 🎉
                  </h2>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                {['💖', '🎂', '🎁', '🎈', '✨'].map((emoji, i) => {
                  const rotation = (i % 2 === 0) ? 'animate-float' : 'animate-bounce';
                  return (
                    <span
                      key={i}
                      className={`text-4xl ${rotation}`}
                      style={{ 
                        animationDelay: `${i * 0.2}s`,
                        fontSize: `${1.5 + (i % 3) * 0.2}em`,
                        filter: `hue-rotate(${i * 30}deg)`
                      }}
                    >
                      {emoji}
                    </span>
                  );
                })}
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="animate-fade-in glass-effect px-8 py-4 rounded-full inline-block" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-pink-500 animate-sparkle" />
                    <span className="text-2xl font-bold gradient-text animate-glow">April 12</span>
                    <Star className="w-8 h-8 text-yellow-400 animate-sparkle" />
                  </div>
                </div>
                <div className="w-64 h-2 mx-auto rounded-full bg-gradient-to-r from-pink-300 to-purple-300 animate-shimmer"></div>
              </div>
            </div>
          </section>

          {/* Memory Timeline */}
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto space-y-32">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="relative animate-slide-in"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <div className="glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] hover:rotate-1">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div 
                        className={`bg-gradient-to-r ${memory.color} p-4 rounded-full shadow-lg animate-heartbeat`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {memory.icon}
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center space-y-4">
                      <div 
                        className="flex items-center justify-center gap-4 animate-fade-in" 
                        style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                      >
                        <Calendar className="w-6 h-6 text-pink-500 animate-sparkle" style={{ animationDelay: '0.2s' }} />
                        <h3 className="text-2xl font-bold text-pink-600">{memory.date}</h3>
                      </div>
                      <h4 
                        className="text-3xl font-bold text-purple-600 animate-fade-in" 
                        style={{ animationDelay: `${0.7 + index * 0.2}s` }}
                      >
                        {memory.title}
                      </h4>
                      <p 
                        className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto animate-fade-in" 
                        style={{ animationDelay: `${0.9 + index * 0.2}s` }}
                      >
                        {memory.description}
                      </p>
                    </div>
                    
                    <div 
                      className="mt-8 rounded-2xl overflow-hidden shadow-xl animate-fade-in relative group" 
                      style={{ animationDelay: `${1.1 + index * 0.2}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-contain object-center transform group-hover:scale-110 transition-all duration-1000 group-hover:rotate-1 filter group-hover:brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 text-center">
                        <span className="inline-block bg-pink-500/80 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                          {memory.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Final Message */}
              <div className="glass-effect rounded-3xl p-12 text-center space-y-8 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                <div className="relative">
                  <Star className="w-16 h-16 text-yellow-400 animate-sparkle mx-auto" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-50">
                    <Star className="w-20 h-20 text-pink-300 animate-sparkle mx-auto" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold gradient-text animate-glow">Special Birthday Wish</h2>
                
                <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
                  Dearest Navya, thank you for being an amazing friend. May your special day be filled with endless joy, 
                  sweet surprises, and magical moments! Here's to many more years of friendship! 💖
                </p>
                
                <div className="flex justify-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                  {['🎉', '🎈', '🎊', '💝', '✨'].map((emoji, i) => {
                    const size = 1 + (i % 3) * 0.2;
                    return (
                      <span
                        key={i}
                        className="text-4xl animate-bounce"
                        style={{ 
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + i * 0.3}s`,
                          fontSize: `${size}em`,
                          transform: `rotate(${(i * 10) - 20}deg)`
                        }}
                      >
                        {emoji}
                      </span>
                    );
                  })}
                </div>
                
                <div className="mt-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                  <button 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-xl font-bold
                    hover:from-purple-500 hover:to-pink-500 transition-all duration-500 transform hover:scale-105 animate-glow"
                    style={{ animationDelay: '0.3s' }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Celebrate Again! 🎂
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;