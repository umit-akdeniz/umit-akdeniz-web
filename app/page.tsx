import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="p-2 sm:p-4 md:p-6">
      {/* Banner */}
      <div className="w-full h-32 sm:h-48 md:h-64 bg-gray-200 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center rounded-lg overflow-hidden relative">
        <Image
          src="https://via.placeholder.com/1200x300"
          alt="Banner"
          width={1200}
          height={300}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute text-white text-lg sm:text-2xl md:text-3xl font-bold drop-shadow-lg">Welcome to My World</div>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Hello!</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">A little about me.</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
            <Image
              src="https://via.placeholder.com/250x150"
              alt="Profile"
              width={250}
              height={150}
              className="w-full h-16 sm:h-24 md:h-32 object-cover rounded-md mb-2 sm:mb-4"
            />
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">Im Ümits Akdeniz, a [your profession/hobby].</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Featured Essay</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">Read my latest thoughts.</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              A sample essay. <a href="/essays/sample" className="text-blue-600 hover:underline">Read more</a>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Latest Project</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">A presentation overview.</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
            <iframe
              className="w-full h-16 sm:h-24 md:h-32 rounded-md mb-2 sm:mb-4"
              src="https://docs.google.com/presentation/d/e/2PACX-1vQe8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8/pub?start=false&loop=false&delayms=3000"
              title="Project Presentation"
              allowFullScreen
            />
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">Check out my latest work.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}