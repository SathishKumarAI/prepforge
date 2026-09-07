---
qid: ing_7cb6d288e0__faang__local
question: Walk me through actually collecting preference data. What are the logistics,
  and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 490
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:56-05:00'
sources: []
---

**Clarify**  
We’re asked how an AI system gathers user preference data—e.g., click‑throughs, ratings, or interaction logs—and where the pipeline can break. I’ll assume a web/mobile product with a recommendation engine and focus on collection, storage, processing, and privacy safeguards.

**Approach**  
1. Instrumentation → front‑end events (SDKs, analytics tags).  
2. Ingestion → event bus / message queue (Kafka/Cloud Pub/Sub).  
3. Normalization & enrichment → schema registry, user ID resolution.  
4. Storage → cold (S3/Blob) for raw logs; hot (DynamoDB/Postgres) for feature vectors.  
5. Feature extraction → batch jobs or streaming micro‑services feeding ML pipelines.  

**Depth**  
- **Instrumentation:** Use lightweight SDKs that batch events to reduce latency, tag with timestamps and device IDs.  
- **Ingestion:** Kafka topics partitioned by user segment; enable exactly‑once semantics to avoid duplicates.  
- **Storage:** Raw logs in immutable object storage for auditability; feature store (e.g., Feast) keeps denormalized, up‑to‑date vectors.  
- **Processing:** Streaming jobs compute real‑time engagement scores; batch jobs re‑compute weekly for model training. Complexity: ingestion O(1) per event; batch transforms O(n log n). Trade‑off between freshness (streaming) and cost (batch).

**Edge Cases**  
- Missing or corrupted events → fallback to server‑side logs.  
- Duplicate user IDs across devices → use deterministic hashing + identity resolution service.  
- Privacy violations (GDPR, CCPA) → enforce consent flags, data minimization, differential privacy noise addition.

**Optimize & Communicate**  
I’d highlight that the most fragile spot is the *consistency* between client‑side telemetry and server‑side logs; a mis‑aligned schema can silently corrupt features. To mitigate, I’d propose automated schema validation pipelines and a “canary” user cohort to surface drift early. In an interview, I’d stress how this end‑to‑end design balances latency, cost, and compliance—key metrics for any FAANG recommendation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
