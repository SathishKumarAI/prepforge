---
qid: ing_400730d8cf__aws__local
question: 'Explain: 4.2 Requirement 2: Music Search — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 460
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:31-05:00'
sources: []
---

**Situation** – At my last role I led a feature that let users discover tracks via audio‑based search (think “search by humming”). The goal was 95 % recall on a catalog of 50 M songs while keeping latency < 200 ms.

**Task** – Build a scalable, low‑cost, real‑time music‑search service that ingests millions of user queries per day and returns top‑10 matches.

**Action**  
1. **Feature extraction** – Use Amazon SageMaker to train an EfficientNet‑based CNN that converts raw audio into 128‑dim embeddings (batch size = 64). Store embeddings in an Aurora PostgreSQL “tracks” table with a GIN index on the vector column.  
2. **Search layer** – Deploy a Faiss index on an EC2 Auto Scaling group behind an Application Load Balancer. Faiss handles nearest‑neighbor search in sub‑millisecond time.  
3. **Caching & CDN** – Frequently queried results are cached in Amazon ElastiCache Redis (TTL = 12 h). Global distribution via CloudFront ensures 99.9 % availability.  
4. **Observability** – Metrics (`search_latency_ms`, `hit_rate`) flow to CloudWatch; alarms trigger auto‑scaling.  
5. **Cost control** – Spot instances for training, on‑demand for inference; pay‑per‑query S3 storage for raw audio.

**Result** – Deployed in 6 weeks, the service achieved 96 % recall and < 150 ms latency at peak load (200k QPS), saving $120K/yr vs. a monolithic RDB solution.  

*Learnings:*  
- **Ownership:** I championed end‑to‑end pipeline ownership, from data ingestion to monitoring.  
- **Dive Deep:** Profiling Faiss vectors revealed a 3× speedup after dimensionality reduction.  
- **Bar‑raiser focus:** Quantified impact (recall, cost) and iterated on failure points (cache misses).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
