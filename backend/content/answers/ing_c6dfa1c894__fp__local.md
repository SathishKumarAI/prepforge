---
qid: ing_c6dfa1c894__fp__local
question: 'Explain: 25 Must-Do System Design Problems for Tech Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 532
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:04:28-05:00'
sources: []
---

**Why “25 Must‑Do” problems?**  
Interviewers don’t ask for a single perfect diagram; they probe your *design reasoning*. A set of canonical problems covers the full spectrum: scalability, consistency, latency, fault tolerance, and cost. By practicing all 25 you learn to **translate constraints into architectural primitives**—a skill that generalizes far beyond any one product.

### The Core Insight  
Every system design problem boils down to *optimizing a trade‑off surface* defined by (1) **throughput vs. latency**, (2) **consistency vs. availability**, and (3) **cost vs. complexity**. When you sketch a solution, you implicitly choose a point on that surface. The “must‑do” list forces you to confront each dimension in different contexts.

| Problem | Key Trade‑offs Tested |
|---------|-----------------------|
| *Design a URL shortener* | Simple consistency + high write throughput |
| *Design Twitter / microblog* | Consistency vs. fan‑out, real‑time feed latency |
| *Design Instagram* | Storage scaling + CDN latency |
| *Design a newsfeed algorithm* | Personalization (ML) + freshness |
| *Design a ride‑hailing app* | Real‑time matching + location indexing |
| *Design a payment gateway* | Strong consistency + ACID transactions |
| *Design an online multiplayer game* | Low latency + state synchronization |
| *Design a CDN* | Cache invalidation vs. consistency |
| *Design a file storage service (e.g., S3)* | Durability, eventual consistency, global replication |
| *Design a search engine* | Latency vs. freshness of index updates |

*(…and 15 more covering message queues, recommendation engines, IoT hubs, etc.)*

### A Non‑Obvious Takeaway  
**Treat every “design problem” as an opportunity to articulate the *latent cost function* you are implicitly optimizing.**  
Interviewers love when you say:  
> “Given a user base of 100 M and 10 k writes/sec, I’ll choose a sharded write‑through cache because it minimizes the weighted sum of latency × request volume + storage cost, while keeping consistency guarantees at the application level.”  

This shows you’re not just listing components; you’re *justifying* them against concrete system‑level objectives—exactly what interviewers want.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
