---
qid: ing_ea846b92b0__eli5__local
question: You're building a multi-tenant agent platform. Tenants bring their own MCP
  servers and their own data. What isolates them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 234
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:38-05:00'
sources: []
---

Think of each tenant as a **private kitchen** inside a big hotel.  
The hotel (your platform) supplies the overall building, but every guest can bring their own stove (MCP server) and ingredients (data). To keep one kitchen’s food from spilling into another, you give each kitchen its own walls, doors, and ventilation system.

In software terms, **isolation** means that a tenant’s code, data, and resources live in separate “rooms” so they can’t touch or see each other’s stuff. This is usually done with:

* **Containers or virtual machines** – like separate rooms with their own walls.  
* **Dedicated database schemas or namespaces** – each tenant gets its own pantry that only it can access.  
* **Access‑control lists (ACLs)** – like keys that open only the right door.

With these layers, a tenant’s MCP server runs in its own sandbox, and its data stays inside its private pantry, keeping everything tidy and secure for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
