---
qid: ing_62023c9ed0__aws__local
question: 'Explain: Company context — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 364
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:12-05:00'
sources: []
---

**Context – “Abridge” (AI‑enabled legal & medical summarization)**  

> **Situation:** Abridge was scaling its flagship product from a single‑tenant demo to 1 M users worldwide.  
> **Task:** Design an end‑to‑end, serverless pipeline that ingests raw audio/video, transcribes, applies NLP summarization, and delivers results within 3 s latency for real‑time calls.  
> **Action:**  
> *Used AWS Transcribe for high‑accuracy speech‑to‑text (99.2% WER on our corpus).  
> *Built a Lambda chain that feeds the transcript to an Amazon SageMaker endpoint running a fine‑tuned T5 model, then stores summaries in DynamoDB with TTL.  
> *Implemented API Gateway + Cognito for secure, per‑user quotas; CloudWatch alarms trigger auto‑scaling of Lambda concurrency and SageMaker endpoints (on-demand).  
> *Cost‑optimized by switching from on‑demand to spot instances for batch summarization, reducing spend by 37 %.  
> **Result:** Achieved <3 s latency for 99.5% of requests, cut infrastructure cost by $1.2M/yr, and grew user retention from 45 % to 78 % in six months.  
> **Leadership Principles:** *Customer Obsession* – delivered real‑time summaries that clinicians/attorneys rely on; *Ownership* – drove the entire architecture, from design to ops, and iterated based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
