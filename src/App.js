import React, { useState } from 'react';
import { MessageCircle, Home, Bug, Bot, User, ArrowLeft, Send, Camera, Thermometer, Droplets, Wind, Sun, Leaf, Sprout, Shield, BarChart3, Users, Settings } from 'lucide-react';
import './App.css';

// Welcome Screen Component
const WelcomeScreen = ({ onNext }) => {
  return (
    <div className="welcome-container flex flex-col items-center justify-center h-full text-white p-8">
      <div className="logo-container text-center">
        <div className="text-6xl mb-4">🌾</div>
        <h1 className="logo-text">FICCA</h1>
        <h2 className="text-2xl font-semibold mb-3 text-green-100">The AgriTech</h2>
        <p className="logo-subtitle max-w-md">
          Empowering farmers with smart agricultural solutions and AI-powered insights
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-8 max-w-sm w-full">
        <div className="feature-card text-center">
          <div className="feature-icon mb-3">
            <Leaf className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-sm font-medium">Smart Farming</p>
        </div>
        <div className="feature-card text-center">
          <div className="feature-icon mb-3">
            <Shield className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-sm font-medium">Pest Detection</p>
        </div>
        <div className="feature-card text-center">
          <div className="feature-icon mb-3">
            <Bot className="w-8 h-8 mx-auto" />
          </div>
          <p className="text-sm font-medium">AI Assistant</p>
        </div>
      </div>
      
      <button
        onClick={() => onNext('auth')}
        className="btn-welcome"
      >
        Get Started
      </button>
    </div>
  );
};

// Auth Screen Component
const AuthScreen = ({ onNext }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext('dashboard');
  };

  return (
    <div className="auth-container flex flex-col items-center justify-center h-full p-8">
      <div className="auth-card w-full max-w-md">
        <div className="auth-header">
          <div className="text-4xl mb-2">🌾</div>
          <h2 className="text-2xl font-bold">
            {isLogin ? 'SIGN IN TO FICCA' : 'JOIN FICCA'}
          </h2>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  FULL NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                PASSWORD
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="form-input"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="btn-auth mt-6"
            >
              {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">OR LOGIN WITH</p>
            <div className="space-y-3">
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
                <span className="mr-2">G</span> GOOGLE
              </button>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <span className="mr-2">🍎</span> APPLE
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              {isLogin ? "Don't have an account? SIGN UP" : "Already have an account? SIGN IN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Screen Component
const DashboardScreen = ({ onNavigate }) => {
  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    condition: 'Sunny day!'
  };

  return (
    <div className="dashboard-container h-full">
      {/* Header */}
      <div className="dashboard-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Hello, Ravi</h1>
            <p className="text-green-100 text-sm">It's a sunny day!</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="relative">
              <div className="w-6 h-6 bg-green-200 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </button>
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-green-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 overflow-y-auto">
        {/* Weather Status */}
        <div className="weather-card">
          <div className="weather-content">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">Weather Status</h2>
                <p className="text-green-100 text-sm">{weatherData.condition}</p>
              </div>
              <div className="weather-icon-container">
                <Sun className="w-8 h-8 text-yellow-300" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <Thermometer className="w-5 h-5 mx-auto mb-1" />
                <p className="font-semibold">{weatherData.temperature}°C</p>
                <p className="text-green-100 text-xs">Temperature</p>
              </div>
              <div className="text-center">
                <Droplets className="w-5 h-5 mx-auto mb-1" />
                <p className="font-semibold">{weatherData.humidity}%</p>
                <p className="text-green-100 text-xs">Humidity</p>
              </div>
              <div className="text-center">
                <Wind className="w-5 h-5 mx-auto mb-1" />
                <p className="font-semibold">{weatherData.windSpeed} km/h</p>
                <p className="text-green-100 text-xs">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnosis Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Diagnosis issues with crop</h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-green-100 rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-medium text-green-800">Healthy Crop</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-medium text-yellow-800">Growth Stage</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-medium text-blue-800">Analytics</p>
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-800 mb-3">Gallery</h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-green-200 rounded-lg h-16 flex items-center justify-center">
              <Camera className="w-6 h-6 text-green-700" />
            </div>
            <div className="bg-yellow-200 rounded-lg h-16 flex items-center justify-center">
              <Camera className="w-6 h-6 text-yellow-700" />
            </div>
            <div className="bg-blue-200 rounded-lg h-16 flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-700" />
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 mb-3">Trending Diseases</h3>
          <div className="bg-red-50 rounded-lg p-3 mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Bug className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-red-800">Africana mole Cricket</p>
                <p className="text-xs text-red-600">Recent outbreak detected</p>
              </div>
              <button className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Alert
              </button>
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 mb-3">Yielding crops</h3>
          <div className="text-sm text-gray-600">Monitor your crop yields and optimize harvest timing</div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('pest')}
            className="action-card text-center"
          >
            <div className="action-icon mb-3">
              <Shield className="w-8 h-8 text-red-500 mx-auto" />
            </div>
            <h3 className="font-bold text-gray-800">Pest Attack</h3>
            <h4 className="font-bold text-gray-800">prevention</h4>
            <p className="text-xs text-gray-600 mt-1">Identify & prevent pest attacks</p>
          </button>
          
          <div className="space-y-3">
            <button
              onClick={() => onNavigate('chatbot')}
              className="action-card w-full text-center py-3"
            >
              <h3 className="font-bold text-gray-800 text-sm">sustainable farming</h3>
              <h4 className="font-bold text-gray-800 text-sm">methodologies</h4>
            </button>
            
            <button className="action-card w-full text-center py-3">
              <h3 className="font-bold text-gray-800 text-sm">weather</h3>
              <h4 className="font-bold text-gray-800 text-sm">forecasting</h4>
            </button>
            
            <button className="bg-green-600 text-white rounded-2xl p-4 text-center transition-all hover:bg-green-700 hover:scale-105">
              <h3 className="font-bold">Seed Quality</h3>
              <h4 className="font-bold">check</h4>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around items-center bg-white rounded-2xl py-4 px-6 shadow-lg">
          <button className="flex flex-col items-center space-y-1">
            <Home className="w-6 h-6 text-green-600" />
            <span className="text-xs font-medium text-green-600">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('chat')}
            className="flex flex-col items-center space-y-1"
          >
            <Users className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Community</span>
          </button>
          <button className="flex flex-col items-center space-y-1">
            <BarChart3 className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Analytics</span>
          </button>
          <button className="flex flex-col items-center space-y-1">
            <Settings className="w-6 h-6 text-gray-400" />
            <span className="text-xs font-medium text-gray-400">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Chat Screen Component
const ChatScreen = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Rajesh Kumar', message: 'Good morning everyone! How are your crops doing today?', time: '09:15 AM', avatar: '👨‍🌾' },
    { id: 2, user: 'Priya Sharma', message: 'My tomatoes are showing signs of blight. Any organic treatment suggestions?', time: '09:22 AM', avatar: '👩‍🌾' },
    { id: 3, user: 'Amit Singh', message: 'Try neem oil spray mixed with copper fungicide. It worked wonders for my crop last season.', time: '09:28 AM', avatar: '👨‍🌾' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '🧑‍🌾'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container h-full flex flex-col">
      {/* Header */}
      <div className="chat-header p-4 flex items-center space-x-3">
        <button onClick={onBack} className="p-2 hover:bg-green-700 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="font-bold text-lg">Farmer Community</h1>
          <p className="text-green-100 text-sm">127 farmers online</p>
        </div>
        <div className="w-8 h-8 bg-green-200 rounded-full"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex space-x-3">
            <div className="text-2xl">{msg.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-sm text-gray-800">{msg.user}</span>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <div className="chat-message">
                <p className="text-gray-800">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white p-4 border-t border-green-200">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input flex-1"
          />
          <button
            type="submit"
            className="chat-send-btn"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Pest Screen Component
const PestScreen = ({ onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setScanResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = () => {
    if (!selectedImage) return;

    setIsScanning(true);
    // Simulate API call
    setTimeout(() => {
      setScanResult({
        pest: 'Aphids',
        confidence: 87,
        severity: 'Moderate',
        recommendations: [
          'Apply neem oil spray every 3-4 days',
          'Introduce beneficial insects like ladybugs',
          'Remove heavily infested leaves',
          'Monitor plant health daily'
        ]
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="chat-container h-full flex flex-col">
      {/* Header */}
      <div className="chat-header p-4 flex items-center space-x-3">
        <button onClick={onBack} className="p-2 hover:bg-green-700 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-bold text-lg">Pest Detection</h1>
          <p className="text-green-100 text-sm">AI-powered pest identification</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2 text-green-600" />
            Upload Plant Image
          </h2>
          
          <div className="upload-area p-8 text-center">
            {selectedImage ? (
              <div className="space-y-4">
                <img src={selectedImage} alt="Selected" className="max-w-full h-48 object-cover rounded-lg mx-auto" />
                <p className="text-sm text-green-600 font-medium">Image uploaded successfully</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Camera className="w-16 h-16 mx-auto text-gray-400" />
                <div>
                  <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-green-700 transition-colors font-semibold"
            >
              Choose Image
            </label>
          </div>

          {selectedImage && (
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="w-full mt-4 bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isScanning ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="loading-spinner"></div>
                  <span>Scanning...</span>
                </div>
              ) : (
                'SCAN FOR PESTS'
              )}
            </button>
          )}
        </div>

        {/* Results Section */}
        {scanResult && (
          <div className="scan-result-card">
            <div className="result-header p-4">
              <h2 className="text-lg font-bold text-red-800 flex items-center">
                <Bug className="w-5 h-5 mr-2" />
                Detection Results
              </h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                <div>
                  <h3 className="font-bold text-red-800">Detected: {scanResult.pest}</h3>
                  <p className="text-sm text-red-600">Confidence: {scanResult.confidence}%</p>
                </div>
                <div className="severity-badge">
                  {scanResult.severity}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Recommended Actions:</h4>
                <ul className="space-y-3">
                  {scanResult.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="activity-dot green w-3 h-3 rounded-full mt-1"></div>
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Chatbot Screen Component
const ChatbotScreen = ({ onBack }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hello! I'm your AI farming assistant. How can I help you with your agricultural needs today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = {
    'pest': "For pest control, I recommend integrated pest management. Start with neem oil spray for organic control, introduce beneficial insects, and maintain proper crop rotation. What specific pest are you dealing with?",
    'weather': "Weather plays a crucial role in farming. Make sure to check daily forecasts, plan irrigation based on rainfall predictions, and protect crops during extreme weather events. Do you need help with weather-specific farming strategies?",
    'soil': "Healthy soil is the foundation of good farming. Test your soil pH regularly, add organic matter like compost, and practice crop rotation. Would you like specific advice about soil improvement?",
    'crop': "Crop selection depends on your climate, soil type, and market demand. Consider disease-resistant varieties and sustainable farming practices. What crops are you planning to grow?",
    'default': "I'd be happy to help you with farming advice! You can ask me about pest control, weather planning, soil health, crop selection, irrigation, or any other farming topic."
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    if (message.includes('pest') || message.includes('insect') || message.includes('bug')) {
      return botResponses.pest;
    } else if (message.includes('weather') || message.includes('rain') || message.includes('climate')) {
      return botResponses.weather;
    } else if (message.includes('soil') || message.includes('fertilizer') || message.includes('compost')) {
      return botResponses.soil;
    } else if (message.includes('crop') || message.includes('plant') || message.includes('grow')) {
      return botResponses.crop;
    }
    return botResponses.default;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          type: 'bot',
          message: getBotResponse(newMessage),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  return (
    <div className="chat-container h-full flex flex-col">
      {/* Header */}
      <div className="chat-header p-4 flex items-center space-x-3">
        <button onClick={onBack} className="p-2 hover:bg-green-700 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <h1 className="font-bold text-lg">AI Farming Assistant</h1>
            <p className="text-green-100 text-sm">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              msg.type === 'user' 
                ? 'bg-green-600 text-white' 
                : 'chat-message'
            }`}>
              <p>{msg.message}</p>
              <p className={`text-xs mt-2 ${msg.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="chat-message max-w-xs">
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-white border-t border-green-200">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-3 font-medium">Frequently asked questions:</p>
          <div className="flex flex-wrap gap-2">
            {['How to control pests?', 'Soil health tips', 'Best crops for monsoon'].map((question) => (
              <button
                key={question}
                onClick={() => setNewMessage(question)}
                className="quick-pill"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your questions here or tap to add a picture and get answered in less than 30 minutes"
            className="chat-input flex-1"
          />
          <button
            type="submit"
            className="chat-send-btn"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

// Main App Component
export default function FICCAAgriTechApp() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const navigateToScreen = (screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen('dashboard');
  };

  return (
    <div className="w-full h-screen">
      {currentScreen === 'welcome' && <WelcomeScreen onNext={navigateToScreen} />}
      {currentScreen === 'auth' && <AuthScreen onNext={navigateToScreen} />}
      {currentScreen === 'dashboard' && <DashboardScreen onNavigate={navigateToScreen} />}
      {currentScreen === 'chat' && <ChatScreen onBack={goBack} />}
      {currentScreen === 'pest' && <PestScreen onBack={goBack} />}
      {currentScreen === 'chatbot' && <ChatbotScreen onBack={goBack} />}
    </div>
  );
}