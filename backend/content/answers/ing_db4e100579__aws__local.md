---
qid: ing_db4e100579__aws__local
question: 'Explain: Putting it together: a bank support agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 466
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:45-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I was tasked with launching an AI‑powered virtual support agent for a regional bank that handled 120k monthly tickets—mostly balance inquiries and small transfer requests. The goal: reduce average handling time by 30 % while maintaining compliance.

**Action (A)**  
I built a serverless architecture on AWS:

- **Amazon Lex** + **Lambda** for intent detection and dialog flow, giving instant response latency <200 ms.
- **Amazon Comprehend Medical** to extract sensitive data, then store only masked IDs in **DynamoDB** (encryption‑at‑rest).
- **AWS Step Functions** orchestrated fallback to human agents via **Amazon Connect**, ensuring 99.9 % SLA for escalations.
- **CloudWatch + X-Ray** fed a real‑time analytics dashboard; we used **SageMaker Endpoint** for continuous intent model retraining (every 12 hrs).

I implemented an automated compliance checker that flags PII before any data leaves the agent, and a “confidence threshold” to hand off low‑certainty queries.

**Result (R)**  
Within three months:

- Average handling time dropped from **6.4 min** to **4.1 min** (36 % reduction).  
- Ticket volume handled by AI rose from 22 % to 58 %.  
- Operational cost fell by **$45k/month** (serverless pay‑as‑you‑go vs. dedicated servers).

**Leadership Principles Highlighted**

- *Customer Obsession*: We measured customer satisfaction scores pre/post deployment; they increased from 4.2/5 to 4.6/5.  
- *Ownership & Dive Deep*: I drove the end‑to‑end pipeline, debugging latency spikes and re‑architecting the fallback path after a mid‑cycle outage.

**Bar‑raiser takeaway** – the candidate shows deep technical ownership, quantifies impact with real metrics, and learns from early failures (e.g., adjusting confidence thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
