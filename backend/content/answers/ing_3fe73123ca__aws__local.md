---
qid: ing_3fe73123ca__aws__local
question: 'Explain: Companion Chapters — Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 414
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:23-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: While leading a cross‑functional AI squad at my previous company, we were tasked to launch an *Agentic Companion* feature that lets users co‑create interactive story chapters with an AI narrator.  
*Task*: Deliver a fully autonomous system that scales to 10 M concurrent users while keeping latency under 300 ms and cost per request <$0.02.  
*Action*: I owned the end‑to‑end architecture:  
- **Data** – Curated a 5 TB corpus of licensed books, pre‑tokenized with Amazon SageMaker Ground Truth, and stored in S3.  
- **Model** – Fine‑tuned a GPT‑4‑derived model on SageMaker Training, then deployed via SageMaker Endpoint with autoscaling based on CPU/Memory metrics.  
- **Orchestration** – Built an event‑driven pipeline (API Gateway → Lambda → Step Functions) to handle user prompts, retrieve relevant text chunks from DynamoDB, and stream responses back through WebSocket API Gateway for real‑time feedback.  
- **Observability** – Instrumented CloudWatch metrics, X-Ray traces, and a custom dashboard; set alerts on latency >250 ms.  
*Result*: Within 90 days we launched the MVP, hit 1 M active users in week 3, maintained <0.3 s average latency, and reduced per‑request cost by 35% versus our baseline. The feature increased user retention by 22% and generated $2.4 M incremental ARR in year 1.  
**Leadership Principles Highlighted**: *Customer Obsession* (iterative UX tests), *Ownership* (from data prep to ops), *Dive Deep* (performance tuning, cost analysis).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
