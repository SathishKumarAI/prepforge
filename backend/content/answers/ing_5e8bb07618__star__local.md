---
qid: ing_5e8bb07618__star__local
question: 'Explain: MAC (Mandatory Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 332
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had to launch a new API that handled sensitive customer data. The compliance team required us to implement a Mandatory Access Control (MAC) layer so that no user or service could bypass the policy set by regulators.

**Task** – I was tasked with designing and integrating a MAC engine that would enforce fine‑grained permissions on every request, while keeping latency under 20 ms and allowing developers to write policies declaratively in YAML.

**Action** – First, I mapped the data taxonomy (accounts, transactions, KYC) to an attribute set (role, clearance level, business unit). Using Rust’s type system, I built a policy engine that evaluated these attributes against signed JSON‑Web‑Tokens issued by our auth service. To keep performance high, I cached compiled policies in an LRU store and used zero‑copy deserialization with `serde`. For auditability, each decision was logged to a Kafka topic with correlation IDs. I also wrote unit tests covering 95 % of policy paths and performed load testing on a staging cluster.

**Result** – The MAC layer added only ~12 ms to request latency and handled 10k TPS without errors. We passed the external audit with zero violations, and the compliance team adopted our policy DSL for all future products. I learned that coupling strong typing, caching, and declarative policies can deliver robust security without sacrificing developer speed or system performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
