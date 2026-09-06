---
qid: ing_d19364b12b__fp__local
question: 'Explain: What you’re actually trying to do — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 351
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:25:59-05:00'
sources: []
---

**What the interviewer really wants you to solve**

When a senior engineer asks you to *design a mobile system* they’re not looking for a “copy‑paste” architecture diagram; they want you to formalise **the trade‑offs that make a mobile app usable at scale**.

1. **Latency vs. throughput** – Mobile users expect < 200 ms responses, yet the same server must handle millions of concurrent requests.  
2. **Consistency vs. availability** – The CAP theorem tells us we can’t have all three; for push notifications and real‑time chat you lean toward eventual consistency, but for payments you insist on strong consistency.  
3. **Cost vs. performance** – You must decide between expensive in‑memory caches (Redis) or cheaper disk‑based stores, weighing the cost per request against the required TTL of data.

These three axes form a *three‑dimensional optimization problem*: each design choice shifts the system’s point in that space. The interviewer expects you to map the problem onto this framework, justify your positioning, and discuss how you would monitor and iterate as traffic grows.

**Non‑obvious insight:**  
Mobile networks are *heterogeneous*. Designing for a 5G user is different from a 2G user; you should explicitly model **network variability** (e.g., adaptive compression, chunked downloads) because it can be the single biggest source of latency variance, far outweighing server‑side optimisations. This nuance often separates an average answer from a standout one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
