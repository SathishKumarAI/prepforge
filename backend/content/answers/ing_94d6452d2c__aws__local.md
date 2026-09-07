---
qid: ing_94d6452d2c__aws__local
question: 'Explain: Conclusion — What are WebSockets and Why are they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 367
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:25-05:00'
sources: []
---

**What I did (S – Situation)**  
In my last role at a SaaS startup we launched a real‑time analytics dashboard that streamed live user activity to thousands of concurrent browsers. The existing REST polling architecture caused 2–3 s latency and hit our API quota, driving up costs.

**Task**  
I had to find a way to deliver instant updates while keeping the system cost‑effective and highly available.

**Action**  
After diving deep into networking protocols, I introduced **WebSockets**: a full‑duplex TCP connection that stays open between client and server. I designed an AWS‑native solution using:

- **Amazon API Gateway WebSocket APIs** – handles handshake, scaling to millions of connections.
- **AWS Lambda** for message routing (stateless, pay‑per‑execution).
- **Amazon DynamoDB Streams** as the trigger source for real‑time events.
- **Amazon CloudFront** as a low‑latency edge layer.

I also added graceful fallback logic that reverts to long‑polling if the client’s browser doesn’t support WebSockets. This reduced latency from 2 s to <200 ms and cut API request costs by 35%.

**Result**  
The new architecture supported 100k concurrent users with 99.9% availability, and we saw a 40% increase in user engagement on the dashboard.  

**Leadership Principles** – *Customer Obsession* (delivering instant data) & *Ownership* (owning end‑to‑end performance). I learned that choosing the right protocol can be as impactful as any feature addition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
