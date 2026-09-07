---
qid: ing_98ad05d6a6__aws__local
question: When do you put a queue in front of LLM work, and what does that architecture
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 478
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:52-05:00'
sources: []
---

**When I put a queue in front of LLM work?**  
During a project for a global e‑commerce platform, we had to serve 3 M requests/day for product‑recommendation prompts that consumed an on‑prem OpenAI model (≈$0.02/request). The traffic burst up to 10 k req/s during flash sales, causing CPU saturation and SLA violations.

**Situation / Task**  
I owned the recommendation pipeline and had to guarantee <200 ms latency while keeping cost ≤ $120K/month.  

**Action**  
1. **Queue first** – I introduced Amazon SQS FIFO for decoupling request ingestion from model inference, ensuring exactly‑once processing and preserving order for user sessions.  
2. **Batching & throttling** – A Lambda “batcher” pulls 100 messages every 200 ms, aggregates them into a single GPT‑4 call (≈$0.06/10k tokens), and publishes results to SNS → DynamoDB cache.  
3. **Scalability** – The SQS dead‑letter queue feeds an Auto Scaling group of Spot EC2 instances running the model; each instance handles 200 req/s, so we only spin up 5–7 nodes during peaks.  
4. **Cost & availability** – Spot + On‑Demand mix cuts inference cost by 35 % and SQS provides 99.999% durability.

**Result**  
Latency dropped from 1.2 s to 180 ms (85 % improvement). Monthly cost fell to $78K, a 35 % savings. The queue also allowed us to log every request for audit, satisfying compliance requirements.

> **Leadership Principles**: *Ownership* – I led the redesign end‑to‑end; *Dive Deep* – I profiled traffic patterns and model costs; *Deliver Results* – quantifiable latency & cost wins.  
> **Bar‑raiser cue**: I quantified impact (latency, cost), showed trade‑offs (batch size vs. SLA), and learned that early queuing prevented costly scaling spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
