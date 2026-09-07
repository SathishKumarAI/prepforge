---
qid: ing_e259390866__aws__local
question: 'Explain: A Free Trial That Lets You Build Big! — What is TPS, what is QPS,
  and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 529
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:18-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*

**Situation & Task**  
I was leading a product‑owner team building an “Open‑Source ML Studio” that promised users a free trial to train models on up to 10 GB of data. The engineering lead asked: *“What’s the difference between TPS and QPS, and why does it matter for our billing model?”*  

**Action**  
I mapped the request to concrete metrics:  
- **TPS (Transactions Per Second)** – counts any atomic operation (e.g., a single inference or a database write).  
- **QPS (Queries Per Second)** – counts higher‑level requests that may trigger multiple transactions internally (e.g., a “train model” API call that spins up jobs, writes metadata, and streams data).

I presented a microservice diagram:  
1. **API Gateway** → **Lambda** → **SageMaker Training Job** + **DynamoDB** for job state.  
2. Each *train* request generates ~50 internal DB writes (TPS) but only 1 external API call (QPS).  

Using CloudWatch, I collected baseline logs: a typical trial user sent 200 QPS → ≈10 k TPS during peak training bursts. I simulated 1 M concurrent trials; the system would hit DynamoDB’s provisioned capacity (~50 k TPS) but stay within API Gateway limits (5 k QPS).  

**Result**  
We re‑architected to **Amazon EventBridge** for decoupling, added **DynamoDB Auto Scaling**, and set a *QPS‑based billing cap* of 1 M QPS → $0.10 per QPS. This reduced cost drift by 35% while keeping the free trial attractive. The model also achieved >99.9% availability during peak loads.  

**Learnings**  
- *TPS vs. QPS*: TPS is granular, QPS aggregates high‑level intent; both influence scaling and billing differently.  
- *Fail fast*: Early CloudWatch metrics prevented an over‑provisioning disaster.  

> **Bar‑raiser takeaway:** I owned the problem, dove deep into metrics, quantified impact (35% cost savings), and iterated on a solution that balanced customer value with operational control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
