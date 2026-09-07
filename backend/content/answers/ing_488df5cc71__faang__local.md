---
qid: ing_488df5cc71__faang__local
question: 'Explain: Step 3: Design core components — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 551
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:32:31-05:00'
sources: []
---

**Clarify**

You’re asked to describe *Step 3* of designing a core component in a large‑scale ML system (e.g., the feature store, model serving layer, or data pipeline).  
Assumptions:  
- The service must handle millions of requests per day.  
- Latency target < 50 ms for inference, > 99th percentile < 200 ms.  
- Data is immutable once ingested; updates are batched nightly.  

**Approach**

1. Identify functional requirements (latency, throughput, consistency).  
2. List non‑functional constraints (scalability, fault tolerance, cost).  
3. Choose architectural patterns that satisfy both sets of constraints: e.g., *microservices + event‑driven* for decoupling; *caching + sharding* for performance.  

**Depth**

- **Component:** Feature Store  
  - *Ingestion:* Kafka streams → Spark jobs → Parquet in S3 (immutable).  
  - *Serving:* Redis‑Cluster as hot cache, backed by DynamoDB for cold data.  
  - *Schema evolution:* Avro schema registry to enforce compatibility.  
  - *APIs:* gRPC with request/response compression; load‑balanced via Envoy.  
- **Complexity:**  
  - Read latency: O(1) in Redis + O(log N) in DynamoDB for cache miss.  
  - Write throughput: Kafka’s 10k+ msgs/sec, Spark batch jobs run nightly.  

**Edge Cases**

| Case | Issue | Mitigation |
|------|-------|------------|
| Cache stampede | Many concurrent cold reads | Use “cache‑aside” with a mutex or Redis Lua script. |
| Schema drift | New feature added | Enforce schema checks in ingestion pipeline; fallback to default value. |
| Outage of cache | Redis cluster down | Serve directly from DynamoDB, accept higher latency temporarily. |

**Optimize & Communicate**

- **Cost:** Use Spot Instances for Spark jobs; tiered storage (S3 Standard + Glacier).  
- **Observability:** Prometheus metrics per component; OpenTelemetry traces across services.  
- **Narrative:** “I chose a two‑tier serving stack because it gives us sub‑50 ms latency under load while keeping the cold path cheap and durable. By decoupling ingestion with Kafka, we can scale writes independently from reads.”  

This structure demonstrates clear problem framing, methodical planning, technical depth, edge‑case awareness, and thoughtful trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
