---
qid: ing_5d3d29f2d1__eli5__local
question: 'Explain: Dedupe in Memory — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 246
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:12-05:00'
sources: []
---

Imagine you’re at a busy coffee shop that offers a free refill on your cup, but only if you haven’t already claimed it today. The shop keeps a tiny card‑holder (memory) that writes down each customer’s name the first time they get a refill. If someone tries to ask again, the holder checks the list: “Name? Yes, already written.” It says no more refills. That’s *dedupe in memory*—removing duplicate requests so only the first one counts.

Now picture that the shop also has a rule that even if you leave and come back tomorrow, the card‑holder still remembers you from yesterday because it’s idempotent: every time you ask for a refill, the system gives you the same answer (yes or no) without changing anything else. In system design, we store unique request IDs in fast memory; each new request checks this list. If the ID is already there, we skip processing—exactly like the coffee shop’s card‑holder preventing duplicate refills while keeping behavior consistent day after day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
