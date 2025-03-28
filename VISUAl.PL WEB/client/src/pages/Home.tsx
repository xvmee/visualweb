import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const discordLink = "https://discord.gg/9gtYJfq3cx";
  const botInviteLink = "https://discord.com/oauth2/authorize?client_id=1330596128084983889&permissions=8&integration_type=0&scope=bot";
  
  const features = [
    {
      title: "Lightning Fast",
      description: "Responsive commands with minimal latency for the best user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Customizable",
      description: "Tailor the bot's behavior to perfectly match your server's unique needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always available to help with any issues or questions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[Inter]" style={{
      backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255, 77, 255, 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 70%, rgba(255, 143, 255, 0.05) 0%, transparent 25%)"
    }}>
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="w-12 h-12 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img 
              src="https://i.imgur.com/xSE1E6E.png" 
              alt="Visual Bot Logo" 
              className="w-full h-full object-contain" 
              style={{ filter: "drop-shadow(0 0 8px rgba(255, 77, 255, 0.8))" }}
            />
          </motion.div>
          <Button
            asChild
            className="bg-primary hover:bg-secondary text-black font-bold transition-all duration-300 font-[Poppins]"
          >
            <a href={discordLink} target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 pb-20 md:pt-16 md:pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-[Poppins]">
              <span className="text-white">Visual</span>{" "}
              <span className="text-primary">Bot</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              Enhance your Discord server with the most visually stunning bot experience available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                className="bg-primary hover:bg-secondary text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-[Poppins] text-lg"
              >
                <a href={botInviteLink} target="_blank" rel="noopener noreferrer">
                  Add to Server
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-primary hover:border-secondary text-primary hover:text-secondary font-bold py-3 px-8 rounded-full transition-all duration-300 font-[Poppins] text-lg"
              >
                <a href={discordLink} target="_blank" rel="noopener noreferrer">
                  Join Community
                </a>
              </Button>
            </div>
          </div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl transform rotate-3 scale-105" 
                   style={{ background: "linear-gradient(45deg, rgba(255, 77, 255, 0.15), rgba(255, 143, 255, 0.05))" }}></div>
              <div className="bg-dark p-3 rounded-3xl border border-primary/30 relative z-10">
                <img 
                  src="https://i.imgur.com/vMcyPu7.png" 
                  alt="Visual Bot Banner" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-[Poppins]">
          <span className="text-primary">Features</span> You'll Love
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:translate-y-[-5px]"
              style={{ background: "linear-gradient(45deg, rgba(255, 77, 255, 0.15), rgba(255, 143, 255, 0.05))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 font-[Poppins]">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          className="rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/30"
          style={{ background: "linear-gradient(45deg, rgba(255, 77, 255, 0.15), rgba(255, 143, 255, 0.05))" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[Poppins]">
            Ready to <span className="text-primary">Enhance</span> Your Server?
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
            Join thousands of servers already enjoying Visual Bot's powerful features. It only takes a few seconds to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-secondary text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 font-[Poppins] text-lg"
            >
              <a href={botInviteLink} target="_blank" rel="noopener noreferrer">
                Add Visual Bot
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-black/50 hover:bg-black/80 border border-primary/40 hover:border-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 font-[Poppins] text-lg"
            >
              <a href={discordLink} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-primary/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://i.imgur.com/xSE1E6E.png" alt="Visual Bot Logo" className="w-8 h-8 mr-2" />
            <span className="text-primary font-semibold font-[Poppins]">Visual Bot</span>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Visual Bot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
