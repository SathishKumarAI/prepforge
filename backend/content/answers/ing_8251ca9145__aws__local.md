---
qid: ing_8251ca9145__aws__local
question: 'Explain: What is a good latency for a conversational AI agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:37-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In my last role I led the rollout of a conversational AI for a global e‑commerce platform that handled 2 M monthly conversations.  
> **Task:** We needed to define an acceptable latency threshold that balanced user experience with backend cost.  
> **Action:**  
> *I scoped the problem by measuring current response times (average 1.8 s, 90th percentile 3.5 s) and correlating them with churn data—each additional second over 2 s increased drop‑off by 0.7%. I set a target of **≤ 1.5 s** for the 95th percentile.*  
> *I designed an architecture using Amazon Lex (NLU), Lambda, and DynamoDB Streams. A dedicated “fast‑path” Lambda tier handled deterministic intents in < 800 ms; more complex queries routed to a SageMaker endpoint via API Gateway with autoscaling.*  
> *We implemented CloudWatch metrics and a real‑time dashboard, and ran A/B tests: latency dropped from 1.8 s to **1.3 s** (≈30% improvement) while cost increased by only 12 %. The conversion rate rose 4.2%, translating to $1.6M incremental revenue per quarter.*  
> **Result:** Achieved the target latency, drove measurable business impact, and reduced infrastructure spend through fine‑grained scaling.  

**Leadership Principles:** *Customer Obsession* (tied latency to churn), *Ownership* (owning both metrics and architecture).  

**Bar‑raiser focus:** depth of data analysis, clear ownership of end‑to‑end solution, quantifiable business impact, and reflection on cost trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
