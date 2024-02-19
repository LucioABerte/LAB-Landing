
export default function SectionsLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="mt-24 md:32 lg:mt-8 px-4 md:px-[5rem] 2xl:px-24">
      {children}
    </div>
  );
}