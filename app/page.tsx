const name = process.env.NEXT_PUBLIC_STUDENT_NAME;

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "10%",
      }}
    >
      <h1>Lab 8 — Vercel Deployment</h1>

      <p>Name: {name}</p>

      <p>Roll: 01-131232-107</p>
      <ul>
        <li>Docker</li>
        <li>LocalStack</li>
        <li>Terraform</li>
        <li>Vercel</li>
      </ul>
    </main>
  );
}