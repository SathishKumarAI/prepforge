---
qid: ing_9712decf26__aws__local
question: 'Explain: Re-architecture — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 596
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:40-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML platform team at Meta, the monolithic inference pipeline was hitting 1 M requests/day but suffered >30 % tail latency and quarterly costs of $12 M. The leadership wanted a scalable, cost‑effective architecture that still delivered real‑time predictions.

**Action (Design & Execution)**  
I led a cross‑functional squad to re‑architect the pipeline as an **event‑driven microservice** stack:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Ingest | API Gateway + EventBridge | Low‑latency HTTP entry, decouples producers. |
| Orchestration | Step Functions (Parallel state) | Guarantees idempotent, retryable steps; visual DAG for ops. |
| Compute | Fargate + ECS Spot + SageMaker Endpoint (on‑demand) | Auto‑scales by event volume; spot reduces cost 60 %. |
| Data Store | DynamoDB Streams → SQS → Lambda → Redshift | Event sourcing for audit, analytics. |

We added **Kinesis Data Analytics** to pre‑process feature streams in real time, eliminating a 15 min batch window. All services run in a **private VPC** with IAM roles scoped per task, ensuring least privilege.

I wrote a cost‑model script (Python + Boto3) that projected savings and latency improvements. After rollout:

* **Latency:** 95th percentile dropped from 350 ms to 75 ms.  
* **Cost:** Monthly spend fell by **$7.8 M** (≈65 %).  
* **Reliability:** Uptime improved from 99.2 % to 99.9 %.

**Result & Learnings**  
The new architecture empowered us to launch two new ML products in the same quarter, each generating $3 M ARR. I documented “fail‑fast” patterns that later became part of our onboarding playbook.

---

### Leadership Principles Anchored
- **Customer Obsession:** Delivered faster predictions → higher user engagement.  
- **Ownership & Dive Deep:** Owned cost model, dissected latency bottlenecks.  

### What a Bar‑Raiser Listens For
- Quantified impact (latency & cost).  
- Depth of design: service choices, trade‑offs.  
- Ownership: end‑to‑end delivery and post‑launch monitoring.  

> *“I’ll never forget the day we hit 99.9 % uptime; that was proof we could own a system at scale.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
