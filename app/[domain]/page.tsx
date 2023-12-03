export default function Page({ params }: { params: { domain: string } }) {
  const { domain } = params;
  // get the domain name from the file path

  return (
    <div>
      <h1>Welcome to the {domain}</h1>
    </div>
  );
}
