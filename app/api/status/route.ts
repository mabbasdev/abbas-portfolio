export async function GET() {
  const payload = {
    status: 200,
    available: true,
    candidate: {
      name: "Muhammad Abbas",
      role: "Full-Stack Web Developer & IT Specialist",
      location: "Islamabad, Pakistan",
      timezone: "PKT (UTC+5)",
      specialty: "Responsive Frontend Engineering, Custom APIs & Systems Automation",
    },
    open_to: [
      "On-site (Islamabad, Pakistan)",
      "Remote Opportunities",
      "Full-Stack Developer & IT Support Engineer Roles"
    ],
    core_stack: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "PHP & MySQL",
      "Node.js & Express",
      "Active Directory & Systems Scripting"
    ],
    highlights: {
      education: "BS Computer Science (FUUAST)",
      key_experience: "IT Support Engineer Intern @ ICCI",
      architecture_focus: "Zero-Backend Solutions & Responsive Web Vitals",
    },
    message: "If you are a recruiter or engineering manager reading this native JSON response... let's connect and build something great together.",
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