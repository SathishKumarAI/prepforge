---
qid: ing_aaa583fbd9__star__local
question: 'Explain: Out of Scope — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 348
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:17-05:00'
sources: []
---

**Situation:**  
During a senior engineering interview at a fast‑growth startup, the interviewer asked me to sketch an end‑to‑end design for an Instagram‑style photo sharing app. The hiring team had only a few hours and was looking for how I would think about scaling, latency, and data consistency.

**Task:**  
I needed to present a high‑level architecture that could handle millions of uploads per day, deliver feeds with sub‑second latency, and support real‑time likes/comments, while staying within the interview’s time constraints.

**Action:**  
I broke the system into three core layers: an upload service (REST API + S3/MinIO for storage), a content delivery network that caches thumbnails, and a feed generator using a combination of Kafka streams and Redis sorted sets to pre‑compute feeds. I highlighted trade‑offs—eventual consistency for likes versus strict ordering for comments, sharding user data by hash ranges, and using CDN edge caching to reduce origin load. I also mentioned monitoring with Prometheus and Grafana to keep SLA compliance.

**Result:**  
The interviewers appreciated the clear separation of concerns and realistic use of proven tech like Kafka and Redis. They noted that my design could comfortably scale to 10 M uploads/day with a latency target of <200 ms for feed retrieval, and I left them with a concrete plan for incremental feature rollout. This exercise reinforced for me how to map abstract requirements into concrete, trade‑off‑aware architecture under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
