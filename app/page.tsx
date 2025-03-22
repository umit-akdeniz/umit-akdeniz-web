import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="p-2 sm:p-4 md:p-6">
      {/* Banner */}
      <div className="w-full bg-gray-200 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center rounded-lg overflow-hidden relative">
        <Image
          src="/banner.png"
          alt="Banner"
          width={1200}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
        <div className="absolute text-white text-lg sm:text-2xl md:text-3xl font-bold drop-shadow-lg">Welcome to My World</div>
      </div>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Hello!</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">A little about me.</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
          
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">I’m learning physics and working on software.</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Passions and Pursuits</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">My Personal Interests</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
          #Chess

#Guitar

#LanguageLearning

#SoftwareDevelopment

#Books

#Psychology

#Economics

#Physics

#Mathematics

#StrongPersonalities
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Feel Free to Reach Out!</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">Don't hesitate to get in touch</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
          Email me at umitakdenizjob@gmail.com
          </CardContent>
        </Card>
      </div>
    </div>
  );
}