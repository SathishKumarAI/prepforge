---
qid: ing_8e23b25c9b__eli5__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 257
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:07-05:00'
sources: []
---

Imagine a busy highway with toll booths (your servers). A *load balancer* is like the traffic controller that decides which booth each driver goes to. But first, it needs to know if a booth is actually open and ready to serve.

**Health checks** are simple “yes‑or‑no” tests the controller runs on each booth:

1. **Ping (ICMP) check** – Like calling out, “Are you there?” It just checks that the booth’s door is physically reachable.
2. **HTTP/HTTPS check** – The controller sends a friendly request, “Can you serve me a page?” and expects a normal reply (e.g., status 200). This verifies the booth’s web service works.
3. **TCP port check** – It opens a direct line to the booth’s main entrance (the TCP socket) and sees if it accepts connections, ensuring the network path is clear.

If a booth fails any test for several consecutive tries, the traffic controller stops sending drivers there until it passes again. This keeps your “traffic” flowing smoothly without getting stuck at a broken stoplight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
