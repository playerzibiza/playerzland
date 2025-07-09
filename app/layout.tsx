export const metadata = {
  title: 'Playerz Ibiza',
  description: 'Villas. Barcos. Tickets. Moda. Una forma de vida.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
