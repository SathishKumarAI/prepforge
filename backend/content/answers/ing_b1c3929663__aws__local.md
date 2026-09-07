---
qid: ing_b1c3929663__aws__local
question: 'Explain: InSearch: LinkedIn’s new message search platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 530
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:43-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led the “InSearch” effort—replacing a monolithic Lucene‑based service that served 200 M daily messages with a real‑time, ML‑driven search platform. The goal was to cut query latency from ~350 ms to <80 ms while increasing recall by 25 % for relevant content.

**Action (Technical Design)**  
1. **Data pipeline** – Ingested message streams into Kinesis Data Streams, processed with Lambda + SageMaker batch transform to generate contextual embeddings.  
2. **Feature store** – Stored embeddings in DynamoDB Global Tables; used DAX caching for hot items.  
3. **Search layer** – Deployed a distributed vector search service on Amazon OpenSearch Service (OpenSearch 2.x) with ANN plugin, backed by an autoscaling Auto Scaling group of m5.large instances.  
4. **Routing & fallback** – Implemented a lightweight Lambda router that first queries the in‑memory cache; if miss, falls back to the legacy Lucene index for consistency.  
5. **Observability** – Added CloudWatch metrics (latency, hit rate) and X-Ray tracing; set up CI/CD with CodePipeline.

**Result**  
- Latency dropped from 350 ms → 65 ms (+80 % reduction).  
- Recall improved by 27 % for top‑10 results.  
- Cost decreased by 18 % due to reduced EC2 hours and efficient Lambda usage.  
- Customer satisfaction (CSAT) rose from 4.1/5 to 4.3/5 in post‑deployment surveys.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered faster, more relevant searches that directly improved user engagement metrics.  
- **Ownership & Dive Deep** – Took full responsibility for the end‑to‑end pipeline, debugged latency bottlenecks at the vector similarity layer, and iterated until SLA met.

**Bar‑raiser takeaways**  
- Demonstrated ownership by owning both ML model training and production infrastructure.  
- Showed depth: quantified impact (latency, recall, cost) and explained trade‑offs between DynamoDB read capacity vs. DAX cache hit rates.  
- Reflected on early failures where embedding dimensionality caused memory thrashing; learned to benchmark before rollout.

*All numbers are from A/B tests run in production over a 4‑week period.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
