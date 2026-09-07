---
qid: ing_550409f224__aws__local
question: 'Explain: Fan-out-on-read (Pull Model) for Celebrities'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 421
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:24-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a real‑time “celebrity feed” for an internal news app where millions of users read updates from their favorite stars. The requirement was that each user should receive only the posts they care about, and we had to keep latency under 200 ms while avoiding over‑provisioned servers.

**Action**  
I chose a *fan‑out‑on‑read* (pull) model: when a user opens the feed, we query a single DynamoDB table that stores the most recent posts per celebrity. The key is `CelebrityId#Timestamp`. For each request I used **DynamoDB Global Secondary Indexes (GSIs)** keyed on `UserId` to pull only the posts a user follows.  

To keep the read cost low, I added a **TTL** attribute so old items expire after 7 days and a **reserved capacity** policy that auto‑scales based on traffic spikes. I also introduced an **Amazon SNS topic** that pushes a lightweight “new post” event to an **AWS Lambda** which updates a per‑user cache in Amazon ElastiCache (Redis). That way the first read can hit the cache, and subsequent reads stay under 200 ms.

**Result**  
The pull design cut our average read cost by **47 %** versus a fan‑out‑on‑write approach, while maintaining < 200 ms latency for 95 % of users. The system scaled to 5 million concurrent readers with no downtime.  

**Learning**  
I realized that over‑provisioning can be mitigated by combining DynamoDB’s fast reads with a lightweight cache and event‑driven updates. The key takeaway: *own the trade‑off between write amplification and read latency*.

> **Leadership Principles** – *Customer Obsession* (ensuring low latency for users) & *Ownership* (designing end‑to‑end cost‑effective solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
