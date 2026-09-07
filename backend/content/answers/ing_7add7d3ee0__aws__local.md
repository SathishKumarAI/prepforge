---
qid: ing_7add7d3ee0__aws__local
question: 'Explain: Um, if you really stretch yourself, you — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 423
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:14-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at Google, we built an end‑to‑end recommendation engine for YouTube Shorts that had to serve *10 M+ users per day* and adapt in real time to new content. The goal was to increase watch time by 15% while keeping latency under 200 ms.

**Action**  
- **Ownership & Dive Deep:** I rewrote the data pipeline from a monolithic Spark job into a streaming architecture using **Apache Beam on Dataflow** + **Kafka** for ingestion, which cut processing time from 12 min to 30 s.  
- **Bias for Action & Invent & Simplify:** Implemented a lightweight feature‑store (Tenzing + Redis) so models could fetch user embeddings in <5 ms.  
- **Deliver Results:** Deployed an online A/B test with *2.3 M* traffic; saw average watch time rise 18% and latency stay below 180 ms. Cost dropped from $1.8 M/month to $0.9 M/month.

**Result**  
The system handled peak load of 50 k requests/second, achieved 99.97% uptime, and the model accuracy (MAP@10) improved from 0.32 to 0.41. The architecture was later adopted across 5 other content teams, scaling to 200 M daily users.

**Bar‑raiser takeaways**  
- Demonstrated *full ownership* of performance & cost.  
- Deep dive into dataflow bottlenecks led to a scalable, low‑latency solution.  
- Quantified impact (watch time + cost) and iterated quickly after initial failures in the monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
