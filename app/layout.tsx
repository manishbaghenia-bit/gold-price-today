import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Gold Price Today - Live Gold & Silver Rates in India',
  description: 'Get live gold and silver prices for Uttar Pradesh and Haryana. Check 24K, 22K, and 20K gold rates today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
