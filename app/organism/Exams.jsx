import React, { useEffect, useState } from "react";

export default function CodeWithCopy() {
  const [code, setCode] = useState("Loading...");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/exam.txt")
      .then((res) => res.text())
      .then((text) => setCode(text))
      .catch(() => setCode("Failed to load code"));
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative bg-gray-800 p-4 rounded max-w-3xl mx-auto mt-8">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="whitespace-pre-wrap text-sm text-gray-100 max-h-96 overflow-auto">
        {code}
      </pre>
    </div>
  );
}
