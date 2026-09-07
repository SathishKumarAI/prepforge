---
qid: ing_ea574ef682__aws__local
question: How Does the Presence Platform Identify Whether a User Is Online?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:12-05:00'
sources: []
---

**Situation & Task**  
At our SaaS platform we needed to deliver real‑time “online” status for millions of users so that the chat feature could show accurate presence without polling every device. The goal was a < 50 ms latency, 99.95 % availability, and < $0.02 per user‑hour cost.

**Action – Technical Design**  
1. **Client SDKs** emit a heartbeat (WebSocket `ping` or HTTP POST) to an API Gateway endpoint every 30 s.  
2. API Gateway triggers a Lambda that writes the timestamp to **DynamoDB Global Table** (`UserID → LastSeen`).  
3. A separate Lambda, triggered by DynamoDB Streams, publishes an event to **Amazon SNS** if `LastSeen` is older than 90 s, which updates a **Redis‑compatible ElastiCache cluster** (TTL 120 s) marking the user as *offline*.  
4. The front‑end queries the cache for presence; cache hit latency < 2 ms.

**Result**  
- Reduced infrastructure cost by 35% compared to polling DB every minute.  
- Achieved 99.97% uptime during a 3‑month pilot, with average response time 18 ms.  
- Scaled to 10M concurrent users without additional cost spikes.

**Leadership Principles Reflected**  
*Customer Obsession*: delivered instant feedback for user experience.  
*Ownership & Dive Deep*: engineered end‑to‑end flow, measured latency and costs, iterated on heartbeat interval after observing burst traffic patterns.

**Bar‑raiser takeaway**  
- Demonstrated ownership by handling failure modes (Lambda retries, DynamoDB write failures).  
- Quantified impact with clear metrics (latency, cost, availability).  
- Showed learning: switched from polling to heartbeats after profiling CPU usage and network overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
