export async function GET() {
  const payload = {
    status: 200,
    available: true,
    candidate: {
      name: "Reyyan Alam",
      role: "Backend Engineer",
      timezone: "PKT (UTC+5)",
      specialty: "High-Availability Systems & Fast API Development",
    },
    open_to: [
      "Remote (Global)",
      "EU/US/UK Relocation Ready",
      "On-site (Pakistan Only)"
    ],
    core_stack: ["Node.js", "PHP/Laravel", "SQL Server", "Redis", "Docker"],
    metrics: {
      max_users_handled: "1M+",
      avg_api_latency: "under 50ms",
    },
    message: "If you are a recruiter or engineering manager reading this native JSON response... we should definitely talk.",
  };

  const prettyJson = JSON.stringify(payload, null, 2);

  return new Response(prettyJson, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}