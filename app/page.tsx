import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Define TypeScript interface for SocialLinks props
interface SocialLinksProps {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

// Profile Image Component
function ProfileImage() {
  return (
    <div className="flex justify-center">
      <Image
        src="/profile-placeholder.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full border-4 border-white shadow-sm object-cover"
      />
    </div>
  );
}

// Social Links Component with typed props
function SocialLinks({ email, github, linkedin, twitter }: SocialLinksProps) {
  return (
    <div className="space-y-4">
      <p className="text-gray-600 text-base">
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      </p>
      <div className="flex flex-wrap gap-4 text-base">
        <a href={github} className="text-gray-600 hover:text-blue-500 transition-colors">
          GitHub
        </a>
        <a href={linkedin} className="text-gray-600 hover:text-blue-500 transition-colors">
          LinkedIn
        </a>
        <a href={twitter} className="text-gray-600 hover:text-blue-500 transition-colors">
          Twitter
        </a>
      </div>
    </div>
  );
}

// Interest Card Component
function InterestCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm text-center hover:scale-105 transition-transform duration-200">
      <span className="text-2xl block mb-2">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}

export default function Home() {
  const interests = [
    { name: 'Chess', icon: '♟️' },
    { name: 'Guitar', icon: '🎸' },
    { name: 'Languages', icon: '🌍' },
    { name: 'Coding', icon: '💻' },
    { name: 'Books', icon: '📚' },
    { name: 'Physics', icon: '⚛️' },
    { name: 'Math', icon: '➗' },
  ];

  const socialLinks = {
    email: 'umitakdenizjob@gmail.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-300 to-indigo-300 flex items-center justify-center overflow-hidden">
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-3xl font-semibold mb-2 tracking-tight">Ümit Akdeniz</h1>
          <p className="text-base max-w-sm mx-auto opacity-90">
            Physics | Software | Learning
          </p>
          <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-50 text-sm px-6 py-2 rounded-full shadow-sm transition-colors">
            Contact
          </Button>
        </div>
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Profile Image Section */}
        <div className="mb-8">
          <ProfileImage />
        </div>

        {/* About Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-sm rounded-xl mb-8">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-medium text-gray-800">About</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-600 text-base leading-relaxed">
              I’m passionate about exploring physics, crafting software, and embracing lifelong learning. You’ll often find me strumming a guitar or strategizing over a chessboard.
            </p>
          </CardContent>
        </Card>

        {/* Interests Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Interests</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <InterestCard key={index} name={interest.name} icon={interest.icon} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-sm rounded-xl">
          <CardHeader className="p-6">
            <CardTitle className="text-xl font-medium text-gray-800">Connect</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <SocialLinks {...socialLinks} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}