---
qid: ing_2d728c2416__faang__local
question: 'Explain: Solution Walkthrough — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 496
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:00-05:00'
sources: []
---

**Solution Walk‑Through – Whiteboard Exercise for an AI Problem**

---

### 1️⃣ Clarify  
*Restate the problem*: “Design a system that streams real‑time sentiment scores for millions of tweets, delivering a per‑user dashboard with < 200 ms latency.”  
*Assumptions to confirm*:  
- Tweet ingestion rate (≈ 10k/s).  
- Number of active users (≈ 1M).  
- Allowed data retention (last 24 h).  
- Fault tolerance and eventual consistency.

---

### 2️⃣ Approach  
1. **Ingest** → Kafka topic per region.  
2. **Process** → Stateless Spark Structured Streaming job that parses tweet, runs a lightweight NLP model (e.g., DistilBERT) to produce sentiment score.  
3. **Store** → Append‑only Kinesis/Firestore table keyed by user_id with timestamped scores.  
4. **Serve** → Cache recent 10 min window in Redis; expose via gRPC microservice that aggregates per‑user average and trend.  

---

### 3️⃣ Depth (Technical Detail)  
- *Model*: DistilBERT fine‑tuned on Twitter data, ~50M params, inference ≈ 5 ms on A100 GPU.  
- *Throughput*: Spark job scales to 10 worker nodes → 500k tweets/s processing.  
- *Latency*: Kafka → Spark → Firestore pipeline < 200 ms; Redis cache eliminates read latency.  
- *Complexity*: O(N) per tweet for ingestion, O(1) per dashboard query.

---

### 4️⃣ Edge Cases  
- **Burst traffic**: back‑pressure via Kafka’s lag metrics; auto‑scale Spark executors.  
- **Model drift**: schedule nightly retraining, A/B test new model before promotion.  
- **Data loss**: enable Kafka exactly‑once semantics; Firestore transactions ensure idempotency.

---

### 5️⃣ Optimize & Communicate  
- *Optimization*: Replace Firestore with ClickHouse for faster analytical queries if query volume spikes.  
- *Communication*: Use a “Design Canvas” on the board, annotate trade‑offs (latency vs cost), and walk through failure scenarios to show resilience thinking.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
