---
qid: ing_7f90882f3a__star__local
question: 'Explain: Requirements & Assumptions — Spotify System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 370
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:35-05:00'
sources: []
---

**Situation**  
When I joined the streaming team at a startup, we were tasked with building a scalable music recommendation engine that could serve millions of users while keeping latency under 100 ms. The product manager asked us to outline all system requirements and assumptions before committing to architecture.

**Task**  
I needed to produce a clear requirements document and a set of realistic assumptions so the engineering squad could evaluate trade‑offs between data freshness, cost, and performance.

**Action**  
I organized a series of workshops with PMs, data scientists, and ops. We captured functional needs (e.g., “recommendation latency < 100 ms”, “support 10k concurrent users per region”) and non‑functional ones (scalability, fault tolerance). For assumptions, we documented things like “user listening history will be stored in a single PostgreSQL shard per user”, “network bandwidth between data centers is ≥ 1Gbps”, and “batch updates run nightly at midnight UTC”. I used a simple spreadsheet to rank each requirement by impact and effort, then created a risk matrix that highlighted assumptions with the highest uncertainty. The result was a living spec that guided our choice of Kafka for real‑time ingestion and Redis for caching.

**Result**  
The architecture we selected met latency targets within 95 % of users while keeping infrastructure costs down by 30 %. More importantly, the assumption matrix reduced unexpected outages by catching a hidden dependency on external CDN bandwidth early. I learned that explicit requirements & assumptions are the compass that keeps large‑scale ML systems from veering off course.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
