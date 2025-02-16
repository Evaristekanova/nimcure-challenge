import Navbar from "../components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-0 overflow-x-hidden">
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
