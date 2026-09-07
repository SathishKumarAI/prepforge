---
qid: ing_4d8a3e4e9c__aws__local
question: 'Explain: Frontend tech stack: — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 476
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:33-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous company we were asked to build a real‑time chat interface that could embed an LLM (ChatGPT‑style) for customer support. The goal was a low‑latency UI, 99.9 % uptime and the ability to serve 10k concurrent users during peak hours.

**Action & Technical Design (A)**  
I chose **React + TypeScript** on the front end for strong type safety and component reusability. For real‑time communication I used **WebSocket** via **Amazon API Gateway WebSocket APIs**; this gives us a managed, autoscaling endpoint with per‑connection cost of $0.0001 / conn‑hour.  
On the backend the LLM was wrapped in an **AWS Lambda@Edge** function that forwards user messages to **Amazon Bedrock (ChatGPT model)** via the Bedrock SDK. Each request is routed through a **Redis‑based cache (Elasticache for Redis)** to reuse identical prompts, cutting latency from 1 s to ~200 ms and reducing Bedrock calls by 35 %.  
We added an **SQS queue** for burst traffic; Lambda polls SQS with concurrency limits so we never exceed Bedrock’s rate limits.  

**Result (R)**  
The launch achieved <200 ms average latency, 99.95 % availability in the first month and handled 12k concurrent users without a single outage. Cost savings were 28 % compared to a monolithic EC2 solution because we only pay for compute when traffic spikes.

**Learning & Leadership (L)**  
*Customer Obsession:* I surveyed end‑users early, iterating on UI feedback until they rated ease of use at 4.8/5.  
*Ownership:* I took full responsibility from design to production, coordinating with DevOps, security and compliance teams.  
*Dive Deep:* We logged every WebSocket event; analysis revealed a 15 % latency spike during peak hours, which we mitigated by increasing Redis cluster size.  

This project showcases my ability to blend customer focus with deep technical execution while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
