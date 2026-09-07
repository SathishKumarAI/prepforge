---
qid: vq_d1de3f7e90__faang__local
question: In a CLIENT/SERVER environment , which of the following would not be done
  at the client ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 523
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:35:43-05:00'
sources: []
---

**Answer (structured for a FAANG interview)**  

| Step | What I do | Why it matters |
|------|-----------|----------------|
| **1️⃣ Clarify** | Restate the problem: “In a client‑server system, which responsibility is *not* handled by the client?” | Sets scope and ensures we’re answering the right question. |
| **2️⃣ Approach** | • Enumerate typical client duties (UI rendering, local caching, input validation). <br>• Contrast with server duties (data persistence, heavy computation, security enforcement, network routing). <br>• Identify an option that clearly belongs to the server side. | Keeps the solution focused and avoids missing a subtle trick. |
| **3️⃣ Depth** | The client never *manages* or *configures* the underlying network infrastructure—things like firewall rules, load balancers, or routing tables are purely server‑side concerns. These tasks require centralized control, high privileges, and knowledge of the entire system topology—all responsibilities that a thin, potentially untrusted client cannot possess. | Demonstrates technical depth: why those actions must stay on the server. |
| **4️⃣ Edge Cases** | • What if the “client” is an edge gateway with SDN capabilities? Even then it only follows policies set by a central controller; it does not *create* or *modify* them. <br>• Test that no client‑side code attempts to alter network topology. | Shows awareness of special architectures and how they still respect the boundary. |
| **5️⃣ Optimize & Communicate** | • Highlight that keeping network configuration server‑side simplifies security audits, reduces attack surface, and ensures consistency across all clients. <br>• I would explain this trade‑off clearly to a product manager or architect. | Demonstrates both engineering judgment and communication skills—key FAANG criteria. |

**Bottom line:** The responsibility *not* performed by the client is **managing network infrastructure (firewalls, load balancers, routing tables).**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
