import { 
  FiYoutube, 
  FiMusic, 
  FiPenTool, 
  FiTwitter, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram,
  FiArrowRight 
} from 'react-icons/fi';

export default function Links() {
  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@umitakdeniz', icon: <FiYoutube className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-red-600', hoverColor: 'hover:bg-red-700' },
    { name: 'SoundCloud', url: 'https://soundcloud.com/umit-akdeniz', icon: <FiMusic className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-orange-500', hoverColor: 'hover:bg-orange-600' },
    { name: 'Tumblr', url: 'https://umitakdeniz.tumblr.com', icon: <FiPenTool className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-blue-900', hoverColor: 'hover:bg-blue-950' },
    { name: 'Twitter', url: 'https://twitter.com/umitakdeniz', icon: <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-sky-500', hoverColor: 'hover:bg-sky-600' },
    { name: 'GitHub', url: 'https://github.com/umit-akdeniz', icon: <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-gray-800', hoverColor: 'hover:bg-gray-900' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/umitakdeniz', icon: <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-blue-700', hoverColor: 'hover:bg-blue-800' },
    { name: 'Instagram', url: 'https://instagram.com/umitakdeniz', icon: <FiInstagram className="w-5 h-5 sm:w-6 sm:h-6" />, bgColor: 'bg-pink-600', hoverColor: 'hover:bg-pink-700' },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">Links</h1>
      <div className="space-y-3 sm:space-y-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-3 sm:p-4 rounded-lg ${link.bgColor} ${link.hoverColor} text-white shadow-sm hover:shadow-md transition-all duration-200`}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              {link.icon}
              <span className="text-sm sm:text-base font-medium">{link.name}</span>
            </div>
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}