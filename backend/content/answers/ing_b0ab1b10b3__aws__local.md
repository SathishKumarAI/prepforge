---
qid: ing_b0ab1b10b3__aws__local
question: 'Explain: Sales Support — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 575
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:39-05:00'
sources: []
---

**Situation & Task**  
I was tasked to onboard a new product‑launch team that needed a clear understanding of *TPS* (Transactions Per Second) vs. *QPS* (Queries Per Second). The goal was to design an ML‑driven recommendation engine that could scale while keeping latency under 50 ms for every customer request.

**Action & Design**  
- **Define metrics**:  
  - **TPS** counts all write operations (e.g., order placements, cart updates) in a distributed system.  
  - **QPS** counts read operations (searches, recommendation pulls).  
  - For our use case, QPS dominates (~95 % of traffic), but TPS must still be robust to support real‑time inventory updates.
- **Architecture**:  
  1. **Amazon DynamoDB** for transactional writes (TPS) with *Provisioned Capacity* and *Auto Scaling*—ensures 99.9 % availability for order updates.  
  2. **Elasticsearch on Amazon OpenSearch Service** to serve read queries (QPS), backed by an autoscaling domain that can ingest up to 10,000 QPS while maintaining sub‑30 ms latency.  
  3. **AWS Lambda + SageMaker Endpoint** for on‑demand recommendation inference; the endpoint is throttled to 5,000 RPS and scales via *Provisioned Concurrency*.
- **Cost & Trade‑offs**:  
  - Using DynamoDB’s *On‑Demand* mode avoids over‑provisioning during flash sales.  
  - OpenSearch clusters are sized for peak QPS; we use *Cold Storage* to archive infrequently accessed logs, cutting storage costs by ~40 %.  
  - Lambda + SageMaker introduces a slight cold‑start latency (~200 ms) but offers zero‑maintenance scaling.

**Result & Impact**  
- Deployed the system in 4 weeks (vs. typical 8).  
- Achieved **99.98 % uptime** for both TPS and QPS during launch, with average latency <45 ms.  
- Reduced operational cost by **35 %** through auto‑scaling and cold storage.

**Leadership Principles Reflected**  
- *Customer Obsession*: Designed for sub‑50 ms response time to enhance user experience.  
- *Ownership & Dive Deep*: I drove the entire stack design, quantified trade‑offs, and iterated based on real traffic metrics.  

**Learning from Failure**  
Initially we over‑provisioned DynamoDB, inflating costs by 25 %. A post‑mortem led to adopting On‑Demand mode, illustrating how continuous measurement drives smarter resource allocation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
