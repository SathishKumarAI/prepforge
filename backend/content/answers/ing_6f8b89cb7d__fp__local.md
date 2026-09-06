---
qid: ing_6f8b89cb7d__fp__local
question: 'Explain: Clarifying Requirements — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 454
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:22-05:00'
sources: []
---

### Clarifying Requirements – the “Why” of a URL Shortener

When an interviewer asks you to **design a URL shortener**, they’re really probing whether you can translate a *user‑centric problem* into a concrete architecture that satisfies three hidden constraints:

1. **Scalability** – millions of hits per second, yet each click must be resolved in < 100 ms.  
2. **Durability & Availability** – the short link should never break, even if a data center goes down.  
3. **Security & Governance** – prevent abuse (spam, phishing) while keeping the system fast.

To solve this, you first **define the minimal set of requirements**:

| Requirement | Why it matters |
|-------------|----------------|
| *Short‑code length* | Determines key space and collision probability; must be long enough for billions of URLs but short enough for human typing. |
| *Redirection latency* | Users expect instant navigation; sets the upper bound on database read times. |
| *Rate limits & throttling* | Protects against DDoS and misuse. |
| *Analytics (click count, geo‑location)* | Business need; drives a separate write path that must not block reads. |

**Why this works:**  
- **Optimisation principle:** The trade‑off between key length and collision avoidance is a classic combinatorial optimisation problem.  
- **Information theory:** Entropy of the short code dictates how many unique URLs you can encode; Shannon’s bound tells you the theoretical minimum.  
- **Geometric partitioning:** Distributing keys across shards (e.g., consistent hashing) keeps read latency constant regardless of scale.

**Non‑obvious insight:**  
Many candidates overlook that *shortening is essentially a key‑value store with a secondary write path*. By modelling it as such, you can reuse proven patterns (e.g., Redis for cache, Cassandra for writes, and Kafka for analytics), simplifying the design while still meeting all constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
