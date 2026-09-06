---
qid: ing_da17115209__fp__local
question: 'Explain: System Design Interview Angle — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 443
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:29-05:00'
sources: []
---

**Why “architecture patterns” matter in a system‑design interview**

A candidate is asked to *solve* a problem under constraints (latency, scale, cost).  
The fundamental challenge is **trade‑off management**: how many resources do we allocate for
throughput versus consistency? How do we keep the system maintainable as it grows?

From first principles this reduces to *mapping requirements onto a small set of reusable
“decision templates”* that encode optimal compromises:

| Pattern | Core trade‑offs | Typical use |
|---------|-----------------|-------------|
| **Monolith** | Simplicity vs. scalability | Small, stable services |
| **Microservice** | Loose coupling vs. operational overhead | Highly modular, frequent releases |
| **CQRS** | Separate read/write models | High query load, eventual consistency |
| **Event‑Sourcing** | Immutable history vs. replay cost | Auditable state changes |
| **Cache‑Aside** | Latency vs. cache staleness | Read‑heavy data |

Each pattern is a *mathematical mapping* from constraints to an architecture that asymptotically
minimizes the chosen cost function (e.g., `Latency + α·Cost`).  
Interviewers expect you to **pick the right mapping** and justify it with constraints, not just name it.

### Non‑obvious insight

Most people treat patterns as black boxes. The deeper principle is that *patterns are
parameterized functions of the system’s cost function*. For example, CQRS can be tuned from
strong consistency (by synchronizing write and read sides) to low latency (by allowing reads
to serve stale data). Recognizing this tunability lets you answer “what if” questions
(e.g., what happens when traffic spikes 10×?) without inventing a new design—just adjust the
pattern’s parameters. This perspective turns pattern knowledge from rote memorization into
a flexible optimization toolkit, exactly what interviewers want to see.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
