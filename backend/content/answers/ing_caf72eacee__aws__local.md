---
qid: ing_caf72eacee__aws__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 428
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:55-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑ops team at a fintech startup, we needed to validate a new OpenAI model before deploying it into production. The goal was to create an “eval run” that could automatically score responses against multiple criteria (accuracy, bias, latency) and surface actionable insights.

**Action**  
I scoped the requirements: 1 × 10⁶ prompt‑response pairs, real‑time scoring, and a dashboard for product owners. I designed a pipeline on **AWS Lambda** (stateless compute), **Amazon SQS** (message queue), and **Amazon DynamoDB** (low‑latency storage).  
- Each Lambda invoked the OpenAI API with an `evals` payload that included custom scoring functions.  
- Results were written to DynamoDB, then streamed via **Kinesis Data Firehose** into **Amazon Athena** for ad‑hoc queries.  
- A **QuickSight** dashboard visualized metrics (mean score, latency distribution).  

I used **Step Functions** to orchestrate retries and dead‑letter queues, ensuring 99.9 % availability. Cost was capped at $0.75 per million requests by batching prompts and leveraging Lambda’s free tier for the first 1M invocations.

**Result**  
The eval run processed 1.2 million responses in 4 hours, revealing a 12 % accuracy drop on edge cases. Product updated the model and reduced downstream errors by **18 %**, cutting support tickets by $15K/month.  

**Leadership Principles** – *Customer Obsession* (validated user‑centric metrics), *Ownership* (took end‑to‑end responsibility for reliability), *Dive Deep* (analyzed latency vs. cost trade‑offs). The bar‑raiser noted my clear ownership, data‑driven impact, and willingness to iterate on failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
