---
qid: ing_7942200c3c__aws__local
question: Design streaming chat for mobile. What breaks that doesn't break on web?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 469
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:25-05:00'
sources: []
---

**Situation (S)** – At my last role I led the migration of a real‑time chat feature from our legacy web stack to a native Android/iOS app for a global messaging platform. **Task (T)** – Build a low‑latency, highly available streaming chat that works on mobile networks (3G/4G/5G) while keeping the existing web experience intact.

**Action (A)** –  
1. **Requirements & Trade‑offs** – Mobile devices have limited CPU, battery and intermittent connectivity; web browsers can keep a WebSocket open indefinitely. I chose **AWS API Gateway + Lambda + Amazon Kinesis Data Streams** for mobile clients to pull short “poll” requests every 2 s (battery friendly) while the web uses a persistent **WebSocket via API Gateway**.  
2. **Design** – Each chat room is a Kinesis shard; Lambda streams messages into an **Amazon DynamoDB Global Table** with TTL for message retention. Mobile clients use **AWS AppSync** + GraphQL subscriptions that poll the table, while web uses real‑time WebSocket pushes.  
3. **Scalability & Cost** – Shard count scales with active rooms (auto‑scaling Kinesis). Lambda concurrency is capped to 100 k/s; DynamoDB provisioned throughput at 2 M read/write units keeps cost under $0.02 per message.  

**Result (R)** – After launch, mobile latency dropped from 600 ms to <120 ms, battery drain decreased by 35 %, and we handled 1.5× the peak traffic without any downtime. The solution also reduced operational costs by 25 % compared to a single‑protocol WebSocket approach.

**Leadership Principles** – *Customer Obsession* (tailoring UX per device), *Ownership* (owning end‑to‑end latency and cost), *Dive Deep* (profiling mobile vs web traffic patterns).  

**Bar‑raiser takeaway** – Demonstrated ownership, quantified impact, deep technical dive, and learned to balance real‑time needs with mobile constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
