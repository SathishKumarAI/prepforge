---
qid: ing_18cadd66b4__aws__local
question: 'Explain: Non-functional — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 474
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:04-05:00'
sources: []
---

**Situation / Task**  
I led the migration of a legacy call‑center chatbot to a *real‑time voice agent* that could answer 30 k inbound calls/day while keeping latency < 200 ms and SLA 99.9%. The goal was to improve customer satisfaction (CSAT) from 72% to >90%.

**Action**  
- **Design**: Adopted an event‑driven architecture: Amazon Lex for intent parsing, AWS Lambda for business logic, Amazon Polly for TTS, and Amazon Kinesis Data Streams as a fault‑tolerant buffer.  
- **Scalability & Availability**: Enabled *Lex auto‑scaling* (10 k concurrent sessions) and *Lambda provisioned concurrency* (200). Used *Kinesis shards* (5) to guarantee sub‑100 ms ingestion.  
- **Cost & Trade‑offs**: Shifted from a monolithic EC2 fleet (~$12 k/month) to serverless, reducing cost by 65% while keeping a single point of failure in Lambda that we mitigated with *multi‑AZ deployment*.  
- **Metrics & Testing**: Ran chaos tests (simulated 50 % traffic spikes) and recorded average response time 185 ms; error rate < 0.05%.  
- **Customer Obsession**: Implemented a real‑time CSAT survey after each interaction, feeding back into an automated *feedback loop* that retrained Lex models weekly.

**Result**  
Within 3 months post‑launch:  
- CSAT rose to **92%** (+20 pts).  
- Call handling capacity increased by **120%** without extra hardware.  
- Operational cost dropped from **$12 k** to **$4 k/month** (≈ 65% savings).  

**Reflection**  
I learned that *Bias for Action* paired with *Dive Deep* on latency guarantees leads to tangible business value. The bar‑raiser would note my ownership of the end‑to‑end stack, quantitative impact, and iterative learning from failure scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
