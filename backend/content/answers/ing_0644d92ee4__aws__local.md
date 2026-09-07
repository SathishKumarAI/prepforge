---
qid: ing_0644d92ee4__aws__local
question: 'Explain: How do you build streaming into a chat UI end-to-end? Walk me
  through the pieces and the gotchas.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 393
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:40:04-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: I led a cross‑functional team that had to add real‑time chat streaming for our AI assistant on the mobile app.  
> *Task*: Deliver low‑latency, fault‑tolerant message delivery while keeping cost under $0.05 per 1 000 messages.  
> *Action*:  
> 1. **Front‑end** – use React Native with a WebSocket hook that falls back to HTTP long‑polling; buffer incoming tokens and render them as they arrive.  
> 2. **Back‑end** – publish each GPT token to Amazon Kinesis Data Streams (shard size 5 MiB/s).  
> 3. **Consumer** – a Lambda function (cold‑start mitigated by provisioned concurrency) reads the stream, streams tokens via API Gateway WebSocket to the client.  
> 4. **Reliability** – enable Kinesis retention 24 h, duplicate detection with DynamoDB dedupe key; use CloudWatch alarms for shard throttling.  
> 5. **Cost** – Kinesis charges $0.015/GB, Lambda $0.20/MB‑s, API GW $1.50/million messages → < $0.04 per 1 000 tokens on average.  

*Result*: Latency dropped from 2.3 s to 350 ms (avg), user satisfaction rose by 18% (NPS +4).  
**Bar‑raiser focus**: Ownership of end‑to‑end latency, deep dive into shard scaling, quantified cost impact, learning loop—retuned shard count after a spike that caused throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
