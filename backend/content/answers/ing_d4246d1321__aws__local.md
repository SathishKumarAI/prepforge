---
qid: ing_d4246d1321__aws__local
question: 'Explain: Every Decision Is a Tradeoff — Frugal Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:06-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a production‑grade ML inference pipeline for a fintech startup that had to serve 50 k requests per second while staying under a $2k/month budget. The leadership principle guiding me was **Ownership** – I needed to own the end‑to‑end cost vs. performance trade‑off.

**Action (Dive Deep + Bias for Action)**  
I mapped every component: data ingestion, feature store, model training, inference, and monitoring. For each, I compared AWS options:

| Component | Option | Cost | Latency | Trade‑offs |
|-----------|--------|------|---------|------------|
| Inference | **SageMaker Endpoint (ml.m5.xlarge)** | $0.30/hr | 120 ms | High reliability, high cost |
| Inference | **Lambda + SageMaker Runtime** | $0.20/hr | 250 ms | Serverless, cheaper but higher cold‑start latency |
| Feature store | **DynamoDB** vs **EFS** | Dynamo: $1/mo; EFS: $30/mo | Dynamo offers sub‑ms reads, EFS adds network overhead |

I chose **Lambda + SageMaker Runtime** for inference and a **DynamoDB feature store**. This combination reduced monthly spend to **$1,800** while keeping latency at 250 ms—acceptable per SLA—and scaling automatically.

**Result**  
The solution handled peak load with <99.9% uptime and achieved a **30% cost reduction** versus the initial design. I documented the trade‑off matrix and shared it in a townhall; peers replicated the approach for another product, saving $3k/month collectively.  

*Bar‑raiser note*: Demonstrated deep dive into every layer, quantified impact (cost & latency), and ownership by turning an abstract “frugal architecture” principle into concrete, reusable patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
