---
qid: ing_989cb03c25__aws__local
question: 'Explain: Speech-shaped output — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 532
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:35-05:00'
sources: []
---

**Situation / Task**  
While leading the Voice Services team at a fintech startup, we were asked to build a *real‑time speech‑shaped output* system for an on‑call support agent that could generate natural‑sounding responses within 200 ms of user input.

**Action**  
I architected a serverless pipeline using **Amazon Lex** (intent detection), **AWS Lambda** (business logic & dynamic content assembly) and **Amazon Polly** with *neural voice* plus *speech‑shaped output* (SSO) to synthesize audio that mimics human prosody.  
- Inputs stream from the client via WebSocket into an **API Gateway**; Lex triggers a Lambda that queries **DynamoDB** for contextual data, merges it with a templated script, and returns the final text.  
- Polly’s SSO is invoked in a second Lambda; the MP3 is streamed back over the same WebSocket, ensuring end‑to‑end latency < 200 ms.  
- For high availability we enable **Multi‑AZ** Lex deployments and use **CloudWatch** for anomaly detection; cost is kept low by leveraging *On‑Demand* Lambda and **S3** caching of frequently used voice assets.

**Result**  
The prototype achieved 99.8 % accuracy in intent recognition, reduced average response time from 1.2 s to 0.18 s, and cut operational costs by 35 % compared with a legacy EC2‑based solution. User satisfaction scores rose from 4.1/5 to 4.7/5 within two weeks of launch.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, more natural voice experience that directly improved NPS.  
- **Ownership & Dive Deep** – I owned the full stack, debugged latency bottlenecks at the Lambda layer, and iterated on Polly’s SSO parameters until we hit SLA targets.

**Bar‑raiser Takeaway**  
Listeners look for: deep technical ownership (AWS services chosen & tuned), quantitative impact (latency, cost savings), and a learning loop (iterating on user feedback to refine prosody).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
