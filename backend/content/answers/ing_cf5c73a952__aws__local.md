---
qid: ing_cf5c73a952__aws__local
question: 'Explain: Cost — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 451
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:47-05:00'
sources: []
---

**Situation / Task**  
I was hired to reduce the monthly inference bill of a B2B SaaS that served 10 k clients with a real‑time recommendation model. The existing client‑server design ran the model on an on‑prem cluster, costing ~$120K/month and had a 99.8% SLA.

**Action**  
I re‑architected to a *client‑side lightweight feature extractor + server‑side heavy inference* model:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Feature extraction on the edge | **Lambda@Edge / CloudFront Functions** | Low latency, zero servers |
| Inference | **Amazon SageMaker Endpoint (Multi‑Model)** | Auto‑scaling, pay‑per‑second |
| Data store | **S3 + DynamoDB** | Durable cache for feature vectors |
| Monitoring | **CloudWatch & X-Ray** | Deep dive into cold‑start latency |

I used a *multi‑model endpoint* to share the same inference container across all clients, cutting compute usage by 70%. I added an optional *GPU spot pool* for heavy traffic bursts, saving another 15% while keeping 99.9% availability.

**Result**  
- **Cost:** $120K → $28K/month (77 % reduction).  
- **Latency:** 20 ms avg vs 350 ms pre‑refactor.  
- **Reliability:** SLA improved to 99.95%.  

I documented the failure mode where a Lambda timeout caused stale features; we added retry logic and increased the timeout by 50 %, eliminating that outage.

**Leadership Principles Highlighted**  
- *Customer Obsession* – drastically lowered latency and cost for our clients.  
- *Ownership & Dive Deep* – engineered end‑to‑end solution, quantified impact, learned from edge failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
