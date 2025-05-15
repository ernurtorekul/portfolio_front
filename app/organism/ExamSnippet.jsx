import React, { useState } from 'react';

const CodeSnippet = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div className="relative bg-gray-800 text-white rounded-xl p-4 shadow-md w-8/12">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded-md"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>

      <pre className="overflow-x-auto text-sm font-mono whitespace-pre mt-6">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
