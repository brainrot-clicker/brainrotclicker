import PageLayout from '@/components/layout/PageLayout';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Contact Us - Italian Brainrot Clicker',
  description: 'Get in touch with the Italian Brainrot Clicker team',
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://brainrot-clicker.net/contact" />
      </Head>
      <PageLayout title="Contact Us">
        <div className="max-w-2xl">
          <p className="mb-6 text-lg">
            Have questions, suggestions, or need to report an issue? We&apos;re here to help! 
            You can reach us through the following channels:
          </p>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Email Support</h2>
            <p className="mb-2">
              For general inquiries and support:
            </p>
            <a 
              href="mailto:dingze0304@outlook.com" 
              className="text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              dingze0304@outlook.com
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Before Contacting Us</h2>
            <p className="mb-4">
              To help us assist you better, please include the following information in your email:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>The name of the game you&apos;re playing (if applicable)</li>
              <li>Your browser type and version</li>
              <li>A clear description of your question or issue</li>
              <li>Any error messages you&apos;ve encountered</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Response Time</h2>
            <p>
              We typically respond to all inquiries within 24-48 hours during business days. 
              For urgent matters, please include &quot;URGENT&quot; in your email subject line.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
