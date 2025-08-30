"use client";
import ConfettiBlast from "./ConfettiBlast";
export default function Result() {
  return (
    <div className="min-h-screen backdrop-blur-lg flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-12 text-center">
        🎉 Results – Circuit Looms 🎉
      </h1>
      <div className="flex items-end justify-center gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 sm:w-32 w-24 h-40 rounded-t-xl flex flex-col items-center justify-center shadow-md text-center">
            <span className="text-2xl font-bold text-gray-700">🥈</span>
            <span className="mt-2 font-semibold text-lg text-gray-800">
              Team Beta
            </span>
          </div>
          <div className="bg-gray-300 sm:w-32 w-24 h-8 rounded-b-xl text-center font-semibold text-gray-700">
            2nd Place
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-yellow-300 sm:w-36 w-24 h-56 rounded-t-xl flex flex-col items-center justify-center shadow-lg text-center">
            <span className="text-3xl font-bold text-yellow-900">🥇</span>
            <span className="mt-2 font-semibold text-xl text-yellow-900">
              Team Alpha
            </span>
          </div>
          <div className="bg-yellow-400 sm:w-36 w-24 h-8 rounded-b-xl text-center font-bold text-yellow-900">
            1st Place
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-orange-200 sm:w-32 w-24 h-32 rounded-t-xl flex flex-col items-center justify-center shadow-md text-center">
            <span className="text-2xl font-bold text-orange-800">🥉</span>
            <span className="mt-2 font-semibold text-lg text-orange-900">
              Team Gamma
            </span>
          </div>
          <div className="bg-orange-300 sm:w-32 w-24 h-8 rounded-b-xl text-center font-semibold text-orange-900">
            3rd Place
          </div>
        </div>
      </div>

      <p className="mt-12 text-lg text-white font-semibold">
        Congratulations to all the winners & participants 🎊
      </p>
      {/* <p className="text-4xl font-bold text-white">Coming Soon...</p> */}
      <ConfettiBlast/>
    </div>
  );
}
