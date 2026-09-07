---
qid: ing_d30acc4fdf__aws__local
question: 'Explain: Tool design — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 442
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to build an *Agent‑Powered Tool Suite* that let non‑technical users run complex data pipelines via natural language. The goal: cut manual effort by 70 % and reduce time‑to‑insight from days to minutes.

**Action (Design)**  
I scoped the problem with **Customer Obsession** & **Ownership** in mind.  

1. **Intent Parsing** – a Lambda function triggers an Amazon Comprehend Medical model to extract entities, then feeds them into a *Custom NLP* layer built on HuggingFace Transformers hosted in SageMaker.  
2. **Agent Orchestration** – the intent is mapped to an AWS Step Functions state machine that invokes serverless tasks (Glue ETL, Athena queries). Each task runs in parallel where possible, ensuring *Scalability*.  
3. **Tool Store** – a DynamoDB table holds reusable tool definitions (e.g., “Summarize CSV”, “Generate KPI dashboard”). Lambda functions read from it and publish results to an SQS queue for downstream consumers.  
4. **Observability** – CloudWatch metrics + X-Ray tracing give end‑to‑end latency; automated alerts trigger a rollback if any step exceeds 2 s.

I chose serverless everywhere to keep *Availability* (99.99 %) and *Cost* low—$0.15 per request, versus $3.00 for an on‑prem VM.

**Result**  
Within three months, users completed 1,200 pipelines that previously required 8 hours of analyst time. Productivity rose by **75 %**, cutting cost by $45k annually. I presented the architecture to leadership; it was adopted as a foundation for the next generation of AI assistants.  

*Bar‑raiser takeaways:* clear ownership, deep dive into latency trade‑offs, quantified ROI, and lessons learned from an initial failure where we underestimated Glue job concurrency (resolved by adding a retry policy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
