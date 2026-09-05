---
qid: ing_6f8040c5c2__eli5__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 260
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:50-05:00'
sources: []
---

Think of a **distributed counter** like a global scoreboard that many people can update at the same time—say, counting how many people have pressed a “like” button on a live stream. The *non‑functional requirements* are the rules that keep this scoreboard running smoothly without breaking:

- **Scalability** – It must stay fast even if millions of users hit “like” in seconds, like a stadium that can add more seats instantly.
- **Availability** – The counter should never go down; it’s like having backup power so the lights stay on during an outage.
- **Consistency** – Everyone sees the same total at any moment, similar to all fans looking at the same score display even when updates happen from different parts of the world.
- **Latency** – Updates must reflect almost instantly, just as a live scoreboard flashes changes in real time.
- **Fault tolerance** – If one server fails, others pick up the slack, like having spare batteries that kick in automatically.

These rules are not about how the counter works internally (that’s functional), but about *how well* it behaves under real‑world conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
