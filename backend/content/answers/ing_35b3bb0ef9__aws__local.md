---
qid: ing_35b3bb0ef9__aws__local
question: 'Explain: Interview Walkthrough — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:02-05:00'
sources: []
---

**Situation – Task**  
I was asked to build a *conversational AI* that could answer support tickets in real time for an e‑commerce platform with 1 M monthly active users.

**Action – Design & Execution**  
- **Architecture:** Stateless Lambda functions triggered by API Gateway, orchestrated via Step Functions.  
- **Core Engine:** Amazon SageMaker endpoints (pre‑trained BERT fine‑tuned on our ticket corpus) for intent detection and slot filling.  
- **State Management:** DynamoDB with TTL for session context; Redis‑compatible ElastiCache for low‑latency in‑memory cache of frequent intents.  
- **Fallback & Escalation:** If confidence < 0.75, route to human queue via SQS → ECS Fargate worker that logs the issue and notifies a Slack channel.  
- **Observability:** CloudWatch metrics + X-Ray tracing; automated alerts on latency > 500 ms.

**Result – Impact**  
- Reduced average ticket resolution time from 12 min to 3 min (75 % improvement).  
- Cut human agent hours by 60 %, saving $200K annually.  
- Maintained 99.95 % uptime during peak traffic; auto‑scaling handled a 4× surge in Q4.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster, more accurate support.  
- **Ownership & Dive Deep:** Built end‑to‑end pipeline, tuned models, and monitored every layer.  

**Bar‑raiser Takeaway**  
A strong candidate shows ownership of the entire system, dives deep into performance metrics, quantifies business impact, and openly discusses trade‑offs (e.g., Lambda cold start vs. cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
