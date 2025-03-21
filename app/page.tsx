import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="p-2 sm:p-4 md:p-6">
      {/* Banner */}
      <div className="w-full h-32 sm:h-48 md:h-64 bg-gray-200 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center rounded-lg overflow-hidden relative">
        <Image
          src="/banner.png"
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
        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800">Hello</CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600">A little about me</CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">Im umit Akdeniz Im a passionate coder and physics enthusiast blending the worlds of software and science to explore new ideas and solve problems</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader className="p-2 sm:p-3 md:p-4">
            <CardTitle className="text-sm sm:text-base md:text-lg text-gray-800"></CardTitle>
            <CardDescription className="text-xs sm:text-sm text-gray-600"></CardDescription>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 md:p-4">
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
            <a href="/cv" className="text-blue-600 hover:underline">Curriculum Vitae</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}