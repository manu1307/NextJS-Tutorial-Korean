type CodeWithLinkProps = {
  children: React.ReactNode;
};
function CodeWithNoLink({ children }: CodeWithLinkProps) {
  return <code className="bg-vercel-200 px-1 rounded-sm mx-1">{children}</code>;
}

export default CodeWithNoLink;
