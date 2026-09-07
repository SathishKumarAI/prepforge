---
qid: ing_3609df7f85__aws__local
question: 'Explain: Walk me through an LLM feature you shipped end to end.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 535
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:54-05:00'
sources: []
---

**Situation (S)**  
In Q2 2025 I led the launch of a *Context‑Aware Prompt Tuner* for our internal LLM platform that reduced hallucination rates in customer support bots by 28 % while cutting inference latency by 12 %.  

**Task (T)**  
The goal was to ship an end‑to‑end feature—data pipeline, model fine‑tuning, API gateway, and monitoring—that could be deployed across all regions with minimal downtime. I owned the entire stack and had to balance speed, reliability, and cost.

**Action (A)**  

| Step | AWS Services | Design Rationale |
|------|--------------|------------------|
| 1. Data collection | **Amazon Kinesis + S3** | Real‑time capture of user interactions; durable storage for replayability. |
| 2. Feature extraction | **AWS Glue + SageMaker Processing** | Parallel ETL to derive context vectors (topic, sentiment). |
| 3. Fine‑tuning | **SageMaker JumpStart** with *distilBERT* base | Auto‑scaling training jobs; spot instances cut GPU cost by 35 %. |
| 4. Serving | **Amazon SageMaker Endpoint + API Gateway** | Multi‑region deployment, weighted routing for A/B testing. |
| 5. Monitoring | **CloudWatch + Amazon Lookout for Metrics** | Detect drift and latency spikes in real time; auto‑rollback if thresholds breach. |

I applied *Bias for Action* by prototyping the pipeline in two weeks, then *Dive Deep* to tune hyperparameters until hallucination dropped from 12 % to 3.5 %. Cost was kept under $15K/month versus $25K pre‑feature.

**Result (R)**  
- **Customer Obsession:** 4.7/5 CSAT lift on support tickets handled by the bot.  
- **Deliver Results:** Latency dropped from 650 ms to 576 ms; hallucination rate fell 28 %.  
- **Ownership:** I mentored two junior ML engineers, fostering a culture of continuous improvement.

**Bar‑raiser cues I heard** – clear ownership narrative, depth in trade‑off analysis (spot vs. on‑demand GPU), quantified impact, and reflection on what could have been faster or cheaper after launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
