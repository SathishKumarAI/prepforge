---
qid: ing_a9342bec50__star__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 380
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:19-05:00'
sources: []
---

**Situation:**  
When I joined a fast‑growth startup that was building an image‑sharing platform similar to Instagram, we hit a critical outage during a weekend marketing push—over 40% of user uploads failed and the feed latency spiked above 2 s.

**Task:**  
I needed to redesign the system’s availability layer so that the app could sustain 10× traffic spikes while keeping <1 ms read latency and <0.5 % error rate for uploads.

**Action:**  
- Implemented a **multi‑region, active‑active architecture** using Amazon Aurora Serverless for relational data and DynamoDB Global Tables for user metadata, ensuring local reads with cross‑region replication lag <200 ms.  
- Added an **Edge caching layer (CloudFront + Lambda@Edge)** to serve static media from the nearest edge, reducing origin load by 70%.  
- Introduced a **retry/backoff strategy** in the upload pipeline and switched to **gRPC** for inter‑service communication, cutting serialization overhead by 30%.  
- Deployed **Circuit Breakers** and health‑check endpoints; integrated Prometheus/Grafana dashboards for real‑time SLA monitoring.

**Result:**  
Post‑deployment, we achieved 99.98% uptime during the next month’s campaign, reduced upload errors from 40% to <0.3%, and cut feed latency from 2 s to 120 ms. I learned that designing for *availability* means balancing consistency with partition tolerance, and that real‑time observability is essential for rapid incident response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
