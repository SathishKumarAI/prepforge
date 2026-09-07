---
qid: ing_aedb6093cb__aws__local
question: 'Explain: Step 3: High-Level Architecture — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 610
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:57-05:00'
sources: []
---

**Step 3: Build a High‑Level Architecture – What the Interviewer Wants**

> *“Describe how you’d architect a production ML pipeline.”*  
> I treat this as a **Customer Obsession + Ownership** problem. The customer is the data scientist who needs fast, reliable inferences; I own the end‑to‑end flow.

### S – Situation
Our startup had to move from a single‑node training script to a real‑time scoring service that could handle 10 k requests/sec with < 50 ms latency. The previous prototype used a local GPU and dropped traffic during peaks.

### T – Task
Design a scalable, highly available ML inference system on AWS that delivers predictions within SLA while keeping monthly spend under $30K.

### A – Action
| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| **Data Ingestion** | *Amazon Kinesis Data Streams* | Handles bursty streams and feeds downstream in real time. |
| **Feature Store** | *Amazon SageMaker Feature Store* | Centralizes feature access, versioning, and caching. |
| **Model Serving** | *SageMaker Endpoint (Multi‑model)* + *AWS Lambda* | Multi‑model endpoint reduces cost; Lambda routes requests to the right model based on metadata. |
| **Autoscaling & Availability** | *Elastic Load Balancer*, *Auto Scaling Groups*, *Amazon ECS Fargate* | Guarantees 99.95 % uptime and scales by CPU/Memory metrics. |
| **Monitoring** | *CloudWatch Metrics + SageMaker Model Monitor* | Detects drift, latency spikes; triggers alerts. |

#### Trade‑offs
- **Cost vs Latency:** Multi‑model endpoints lower cost but add a tiny cold‑start delay (~200 ms). Acceptable for our 50 ms SLA after warm‑up caching.
- **Simplicity vs Flexibility:** Using Lambda + SageMaker keeps infra simple; if we needed more custom logic, we could switch to ECS.

### R – Result
- **Throughput:** Sustained 12 k req/sec with < 48 ms latency (5th percentile).  
- **Cost:** Monthly spend dropped from $70K to $28K.  
- **Reliability:** No outages during a two‑month load test; SLA met 99.98% of the time.

---

**Bar‑raiser notes:**  
- Demonstrated *ownership* by choosing services that meet both performance and cost goals.  
- Showed *dive deep* through concrete metrics, trade‑off analysis, and monitoring strategy.  
- Quantified impact (cost savings, latency) and highlighted learning: “If latency had to drop further, we’d explore GPU‑optimized endpoints.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
