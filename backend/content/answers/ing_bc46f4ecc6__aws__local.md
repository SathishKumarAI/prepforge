---
qid: ing_bc46f4ecc6__aws__local
question: 'Explain: Fan-Out and Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:24-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our real‑time recommendation engine for a global e‑commerce platform that served 1 M active users daily. The existing monolith pushed every user event to a single queue; downstream services were overwhelmed, leading to >30 s latency and a 12 % drop in conversion rate.

**Action – Fan‑Out & Filtering with Pub/Sub**  
I introduced **Amazon SNS** as the fan‑out layer and **AWS Lambda + Amazon Kinesis Data Streams** for filtering.  

1. **SNS Topic** receives raw events (≈10 k events/s).  
2. **Lambda subscribers** act as filters: one keeps “purchase” events, another “view” events; each writes to its own **Kinesis stream**.  
3. Downstream services subscribe directly to the relevant Kinesis streams, eliminating cross‑traffic.

I also enabled **SNS message filtering policies** to reduce Lambda invocations by 70 %.  

**Result**  
- End‑to‑end latency dropped from 30 s to <2 s (conversion +5 %).  
- Cost fell from $1.2K/month to $0.4K/month due to fewer Lambda executions and reduced Kinesis shard count.  
- System scaled elastically; we handled peak spikes of 50 k events/s without retries or back‑pressure.

**Leadership Principles**  
- **Customer Obsession** – directly improved checkout speed, boosting sales.  
- **Ownership & Dive Deep** – I dissected the event pipeline, identified bottlenecks, and engineered a decoupled solution that persists as the new baseline.

**Bar‑raiser takeaways**  
- Demonstrated ownership by taking end‑to‑end responsibility.  
- Showed depth through metric‑driven trade‑offs (cost vs latency).  
- Shared lessons: initial attempts without SNS filtering caused Lambda sprawl; pivoting to policy filters was the key learning moment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
