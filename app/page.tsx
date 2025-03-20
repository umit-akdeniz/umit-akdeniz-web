import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="p-6">
      {/* Banner */}
      <div className="w-full h-80 bg-gray-200 mb-10 flex items-center justify-center rounded-lg overflow-hidden relative">
        <img
          src="C:\Users\umita\Desktop\wallpapersden.com_abstract-wave-grey-duotone_wxl.jpg" // Kendi banner görselini ekle
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute text-white text-4xl font-bold drop-shadow-lg">Welcome to My World</div>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Hello!</CardTitle>
            <CardDescription className="text-gray-600">A little about me.</CardDescription>
          </CardHeader>
          <CardContent>
            <img src="https://via.placeholder.com/300x200" alt="Profile" className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-gray-700">I’m [Your Name], a [your profession/hobby].</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Featured Writing</CardTitle>
            <CardDescription className="text-gray-600">Watch a quick intro.</CardDescription>
          </CardHeader>
          <CardContent>
            <iframe className="w-full h-48 rounded-md mb-4" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Featured Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <p className="text-gray-700">
              A sample post. <a href="/writing/sample" className="text-blue-600 hover:underline">Read more</a>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Latest Project</CardTitle>
            <CardDescription className="text-gray-600">A presentation overview.</CardDescription>
          </CardHeader>
          <CardContent>
            <iframe className="w-full h-48 rounded-md mb-4" src="https://docs.google.com/presentation/d/e/2PACX-1vQe8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8/pub?start=false&loop=false&delayms=3000" title="Project Presentation" allowFullScreen />
            <p className="text-gray-700">Check out my latest work.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Connect with Me</CardTitle>
            <CardDescription className="text-gray-600">Find me online.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Twitter</a></li>
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
            </ul>
          </CardContent>
        </Card>

        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
      </div>
    </div>
  );
}