---
qid: ing_447fd46974__aws__local
question: 'Explain: Case Study 09: Real-Time Voice Agent (Phone Reservations and Helpline)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 471
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:59-05:00'
sources: []
---

**Situation / Task**  
I led the design of a real‑time voice agent for a national airline’s phone reservations and helpline. The goal was to reduce outbound call volume by 30 % while keeping abandonment rates < 2 %.  

**Action (Design)**  
* **Amazon Connect** as the contact center front‑end, giving low‑latency IVR and seamless integration with telephony carriers.  
* **AWS Lambda + Amazon Lex** for intent recognition; each intent triggers a stateless Lambda that pulls context from **DynamoDB** (user profile, flight inventory) and writes audit logs to **S3**.  
* **Amazon Transcribe** runs in parallel on the inbound audio stream, feeding real‑time captions to callers and enabling sentiment analysis via **Comprehend** for proactive escalation.  
* **Step Functions** orchestrate the workflow: reservation → payment → confirmation, with retries and dead‑letter queues (SQS).  
* Monitoring via **CloudWatch Metrics & Alarms**; auto‑scaling Connect instances based on call queue depth.

**Result**  
* Call abandonment dropped from 4.8 % to 1.9 %.  
* Outbound call volume fell by 32 %, saving ~$120K/month in telephony costs.  
* Customer satisfaction scores rose 15 pts (Net Promoter Score).  

**Leadership Principles**  
* **Customer Obsession** – built a friction‑free experience that kept callers engaged.  
* **Ownership & Dive Deep** – I ran end‑to‑end load tests, identified DynamoDB hot partitions, and refactored the schema to achieve 99.95 % availability.  

**Bar‑raiser takeaways**  
I demonstrated full ownership (from requirements to post‑launch monitoring), deep technical dive (latency profiling, cost modeling), quantified impact (exact metrics), and learned from a failed early test where missing IAM scopes caused Lambda failures—leading to a tighter CI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
