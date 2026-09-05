---
qid: ing_2f9b13ad94__eli5__local
question: 'Explain: You pick one replica. Um, you got — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 262
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:22-05:00'
sources: []
---

**What does “pick one replica” mean in machine‑learning systems?**

Imagine a busy café that has several identical waiters (the *replicas*). Each waiter knows the menu and can take orders, but only one is chosen to serve you at any given moment so you don’t get confused. In a distributed ML system, a *replica* is simply another copy of the same trained model running on a different server or machine. When a user asks for a prediction, the system selects **one** of these copies to answer—just like picking one waiter—to keep the process fast and avoid overloading any single machine.

Choosing a single replica keeps the service simple: the request goes straight to that copy, it returns the result, and no coordination is needed between multiple models. If that replica fails, another can step in, so the system remains reliable without complex “all‑replicas vote” logic. This one‑to‑one match is the core idea behind “pick one replica” in scalable ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
