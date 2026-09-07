---
qid: ing_5beaea7dec__faang__local
question: 'Explain: When to Use This Pattern — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 416
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:16:56-05:00'
sources: []
---

**When to Use an Architecture Pattern**

| Step | What to Do |
|------|------------|
| **Clarify** | The question asks *“when”* a pattern is appropriate, not “what pattern.” Confirm you’re discussing reusable architectural patterns (e.g., MVC, CQRS, Event‑Sourcing) that influence system structure. |
| **Approach** | 1️⃣ Identify the problem domain: scalability, modularity, cross‑cutting concerns, or rapid iteration. <br>2️⃣ Map each pattern to a set of common constraints (data volume, latency, team autonomy). |
| **Depth** | • **Microservices** – use when you need independent deployment, polyglot persistence, and clear bounded contexts. <br>• **Monolith + Modularization** – choose for small teams or legacy systems where splitting risks more complexity than benefit. <br>• **Event‑Driven** – apply when eventual consistency is acceptable and decoupled workflows are needed. <br>• **Serverless** – appropriate for bursty workloads, low operational overhead, and fine‑grained scaling. <br>Complexity trade‑offs: microservices add networking latency; event‑driven systems need robust monitoring; serverless may hit cold‑start limits. |
| **Edge Cases** | • Legacy data that can’t be partitioned → avoid microservices.<br>• Tight SLA requirements (sub‑ms) → microservices might introduce unacceptable overhead.<br>• Teams lacking DevOps skills → start with a monolith or simple modular pattern. |
| **Optimize & Communicate** | Emphasize that the *choice* is driven by business goals and team maturity, not by hype. Frame your recommendation as: “Given X constraints, Y pattern yields Z benefits while incurring W trade‑offs.” This shows you understand both technical depth and practical impact—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
