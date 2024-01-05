type CodeWithLinkProps = {
  children: React.ReactNode;
};
function CodeWithNoLink({ children }: CodeWithLinkProps) {
  return <code className="bg-vercel-200 px-1 rounded-sm">{children}</code>;
}

export default CodeWithNoLink;
