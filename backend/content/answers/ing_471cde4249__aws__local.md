---
qid: ing_471cde4249__aws__local
question: 'Explain: Global edge network — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:29-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**.  

**Situation / Task** – In my last role I was charged with reducing latency for a global multiplayer game that served 12 M concurrent users. The existing client‑server model introduced >200 ms RTT in regions outside North America, hurting engagement by 18 %.  

**Action** – I led the design of a **global edge network** using **Liveblocks’ real‑time engine** coupled with **AWS CloudFront + Lambda@Edge** to push state changes closer to players.  
1. *Data‑driven requirement*: target <50 ms RTT in 90 % of regions.  
2. *Architecture*: replicated Liveblocks rooms on edge caches; used **DynamoDB Global Tables** for authoritative sync and **Kinesis Data Streams** for replay.  
3. *Scalability*: auto‑scales with CloudFront’s edge locations, eliminating a single point of failure.  
4. *Cost*: 30 % reduction in EC2 usage by offloading 70 % of traffic to the CDN; estimated $1.8M/yr savings.  

**Result** – Latency dropped from 210 ms to 48 ms (average), player churn fell by 12 %, and DAU grew 9 % within two months.  

*Bar‑raiser note*: I owned the project end‑to‑end, dove deep into network telemetry, quantified every trade‑off, and iterated after a first failed attempt that over‑cached state—learning that edge consistency must be backed by DynamoDB streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
