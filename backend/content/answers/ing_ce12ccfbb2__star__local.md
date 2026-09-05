---
qid: ing_ce12ccfbb2__star__local
question: 'Explain: Capability-Based Access Control — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 292
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:15-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new AI‑driven recommendation engine that processed user data in real time. Within the first month, internal audits flagged potential privacy breaches because several services could access sensitive customer profiles without restrictions.

**Task:**  
I was tasked with redesigning our security model to ensure only authorized components could read or modify protected data, while still allowing the AI pipeline to function at low latency and meet a 99.9% uptime SLA.

**Action:**  
I implemented Capability‑Based Access Control (CBAC) using signed JWT tokens as capabilities, issued by an identity service. Each microservice received a scoped token that explicitly listed permissible actions (“read_profile”, “write_score”). I integrated the capability checks into our gRPC interceptors, added automatic revocation on user deletion, and logged all capability usage to a centralized audit stream. We also introduced role‑based delegation for trusted analytics teams, allowing them temporary read access without exposing raw data.

**Result:**  
Within two weeks, the number of unauthorized data accesses dropped to zero; compliance scores improved from 78% to 98%. Latency increased by only 3 ms per request, keeping the SLA intact. I learned that CBAC provides fine‑grained, auditable control while preserving system performance—essential for safe AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
