---
qid: ing_2ef7a15aa0__aws__local
question: 'Explain: Stage 1: Single Server (0-10K users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 566
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:18-05:00'
sources: []
---

**Situation** – While leading a startup’s ML product, we had to launch the first prototype for up to **10 k active users** before moving to a distributed architecture.  
**Task** – Build a single‑server solution that could handle real‑time inference and data ingestion with minimal latency while keeping costs under $2k/month.

**Action**  
1. **Requirements & Constraints** –  
   * Inference latency < 200 ms for 95% of requests.  
   * Model size ~30 MB, CPU‑bound inference.  
   * Data pipeline: user events → feature store → model → response.  

2. **Design**  
   * **Hardware** – 8 vCPU, 32 GB RAM on an AWS `c5.large` spot instance (cost ≈ $0.08/h).  
   * **Model Serving** – Wrap the PyTorch model in a lightweight FastAPI app; deploy with Docker and autoscale to one replica (no horizontal scaling needed).  
   * **Feature Store** – Use Amazon DynamoDB for key‑value lookups (10 k users → < 5 GB); enable on‑demand capacity.  
   * **Event Ingestion** – AWS Kinesis Data Streams (shard count 1) feeds a Lambda that updates DynamoDB; guarantees at‑least‑once delivery.  
   * **Observability** – CloudWatch metrics for request latency, error rate; X-Ray traces for bottlenecks.  

3. **Scalability & Trade‑offs** –  
   * Single server simplifies deployment and reduces operational overhead.  
   * Spot instances cut cost but risk eviction; mitigated by backing up model weights on S3 and auto‑reboot logic.  
   * DynamoDB’s latency is < 10 ms, well within our SLA.  
   * If traffic exceeds 10 k, the architecture can be horizontally scaled: add a second `c5.large`, shift to ECS with Service Auto Scaling, and shard Kinesis streams.

**Result** – The prototype served 9 k concurrent users with 97% of responses under 150 ms. Monthly spend was $1,200, 40% below budget. When load peaked at 12 k requests/second, the single‑server failed; we migrated to ECS in two days, maintaining SLA and increasing capacity by 3× without breaking the product roadmap.

**Leadership Principles** – **Ownership** (took end‑to‑end responsibility for design & cost), **Dive Deep** (analyzed latency budgets, spot instance behavior), **Bias for Action** (rolled out a production‑ready system in weeks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
