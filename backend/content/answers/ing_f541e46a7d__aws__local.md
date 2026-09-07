---
qid: ing_f541e46a7d__aws__local
question: 'Explain: Model Overview — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 401
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:29-05:00'
sources: []
---

**Model Overview – “Inside Kaiju” (Conversational AI at Scale)**  

*Leadership Principles:* **Customer Obsession** & **Ownership**  
*Situation:* In 2023 our CX team saw a 35 % drop in first‑contact resolution for high‑volume support tickets. We needed an on‑prem, GDPR‑compliant LLM that could answer 200k queries/day with <1 s latency.  

*Task:* Build a modular conversational stack that can be updated independently and scaled elastically across regions.  

*Action:*  
- **Data layer:** Sharded PostgreSQL + S3 for training corpora; use **Amazon SageMaker** Pipelines to ingest, label, and version data (10 M utterances).  
- **Model layer:** Deploy a multi‑task transformer on **ECS Fargate** with GPU spot capacity. Autoscale based on request queue depth; set max 8 vCPU/16 GB per task for cost control.  
- **Serving layer:** API Gateway → Lambda (Python) → SageMaker Endpoint (Real‑time inference). Cache top 5k responses in **ElastiCache Redis** to cut GPU calls by 60 %.  
- **Observability:** CloudWatch metrics + OpenTelemetry tracing; trigger alert if latency >500 ms.  

*Result:* Reduced first‑contact resolution time from 12 min to 3 min (75 % improvement). Cut inference cost by 48 % while maintaining <1 s latency.  
*Bar‑raiser check:* Demonstrated ownership of end‑to‑end pipeline, deep dive into latency trade‑offs, quantified impact on CX, and iterative learning from a failed cache rollout that informed the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
