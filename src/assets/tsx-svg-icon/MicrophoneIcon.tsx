export function MicrophoneIcon({ size = 6 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${size} w-${size} text-gray-500 m-2`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}
