import React, { useState } from 'react';
import { Brain, Zap, MessageCircle, Star, Shield, Clock, Users, TrendingUp, ChevronRight, Download } from 'lucide-react';

const AIModelProfileCard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  const specs = [
    { label: 'Parameters', value: '175B', icon: Brain },
    { label: 'Training Data', value: '2023', icon: Clock },
    { label: 'Languages', value: '95+', icon: MessageCircle },
    { label: 'Accuracy', value: '94.2%', icon: TrendingUp }
  ];

  const capabilities = [
    'Natural Language Understanding',
    'Code Generation & Debugging',
    'Creative Writing & Storytelling',
    'Mathematical Reasoning',
    'Multi-language Translation',
    'Data Analysis & Visualization'
  ];

  const usageStats = [
    { label: 'Active Users', value: '2.1M', trend: '+15%' },
    { label: 'Conversations', value: '45M', trend: '+28%' },
    { label: 'Success Rate', value: '96.8%', trend: '+2.1%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-8 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Claude Sonnet 4</h1>
                  <p className="text-xl text-white/80 mb-2">Advanced AI Assistant</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Shield className="w-4 h-4" />
                      <span>Verified</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>4.9/5</span>
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                      Latest Version
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isLiked 
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/25' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Star className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Try Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-700">
          <div className="flex space-x-8 px-8">
            {['overview', 'capabilities', 'performance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium text-sm transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'text-purple-400 border-purple-400'
                    : 'text-gray-400 border-transparent hover:text-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Specifications Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {specs.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:bg-gray-800/70 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                        <span className="text-2xl font-bold text-white">{spec.value}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{spec.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">About This Model</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Claude Sonnet 4 is a state-of-the-art AI assistant designed for complex reasoning, creative tasks, and intelligent conversation. 
                  Built with advanced safety measures and trained on diverse, high-quality data, it delivers reliable and helpful responses 
                  across a wide range of domains.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Enterprise Ready</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>Privacy Focused</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Zap className="w-4 h-4" />
                    <span>Fast Response</span>
                  </span>
                </div>
              </div>

              {/* Usage Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {usageStats.map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'capabilities' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:bg-gray-800/70 transition-colors">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-purple-700/30">
                <h4 className="text-lg font-semibold text-white mb-3">Key Strengths</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Context-aware responses</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Multi-step reasoning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Creative problem solving</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Ethical AI principles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Continuous learning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Adaptive communication</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-6">Performance Metrics</h3>
              
              {/* Performance Bars */}
              <div className="space-y-6">
                {[
                  { metric: 'Response Accuracy', score: 94, color: 'bg-green-500' },
                  { metric: 'Context Understanding', score: 96, color: 'bg-blue-500' },
                  { metric: 'Creative Tasks', score: 91, color: 'bg-purple-500' },
                  { metric: 'Code Generation', score: 88, color: 'bg-yellow-500' },
                  { metric: 'Safety & Ethics', score: 98, color: 'bg-emerald-500' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{item.metric}</span>
                      <span className="text-white font-bold">{item.score}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benchmark Comparison */}
              <div className="mt-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Benchmark Comparison</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex justify-between">
                    <span>MMLU (Massive Multitask Language Understanding)</span>
                    <span className="text-green-400 font-medium">87.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HumanEval (Code Generation)</span>
                    <span className="text-green-400 font-medium">84.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GSM8K (Mathematical Reasoning)</span>
                    <span className="text-green-400 font-medium">92.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HellaSwag (Commonsense Reasoning)</span>
                    <span className="text-green-400 font-medium">89.7%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIModelProfileCard;
