---
qid: ing_c5705bd336__aws__local
question: 'Explain: System 1 vs. System 2 Thinking — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

During my senior thesis I built a lightweight decision‑support tool for a local nonprofit that needed to allocate limited funds between two programs. The problem was essentially *System 1 vs. System 2* reasoning: quick gut‑instinct choices (System 1) versus data‑driven, analytical decisions (System 2).  

**Situation** – The nonprofit’s board wanted to see a model that could simulate both modes in real time.  
**Task** – Deliver an interactive web app that lets users toggle between “intuition” and “analysis” dashboards while preserving the same underlying dataset.  
**Action** – I chose **AWS Amplify** for rapid front‑end deployment, **Amazon SageMaker** to train a lightweight classification model (accuracy = 87%) that flags high‑impact projects, and **DynamoDB** for low‑latency storage of user preferences. The UI exposes two layers:  
1. *System 1*: A heat‑map overlay powered by a pre‑computed 5‑minute inference pipeline on SageMaker Edge.  
2. *System 2*: Full statistical report generated on demand via **AWS Lambda** + **Amazon QuickSight**, with automated refresh every hour.  

Scalability: the inference endpoint scales to 10k concurrent requests using **ElasticInference**; availability is achieved through multi‑AZ deployments and automatic failover in DynamoDB. Cost was kept under $50/month by leveraging spot instances for training.

**Result** – After launch, board members reported a 42% faster decision cycle and an 18% increase in grant allocation accuracy (validated against post‑grant outcomes). The tool also reduced staff time on data preparation from 8 hrs/week to 1 hr.  

**Bar‑raiser cues**: I demonstrated *ownership* by handling the entire stack, *dive deep* into trade‑offs between inference latency and cost, quantified impact with concrete metrics, and learned from an early failure where a naive caching strategy caused stale data; we replaced it with DynamoDB TTLs to ensure freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
