import HtmlSidebar from "../page";

export default function HtmlSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="">
        <HtmlSidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
