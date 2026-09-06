---
qid: ing_c941038ac0__think__local
question: 'Explain: Engagement Service — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 495
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:13:32-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Ask whether we’re focusing on *engagement* (likes, comments, shares) or also on feed ranking/notifications.  
- Assume a global user base (~10 B users), high read/write throughput, and eventual consistency for social graphs.  

**2️⃣ Adopt a system‑design framework**  
- **Requirements** → Functional (post CRUD, engagement APIs) + Non‑functional (latency < 200 ms, 99.9% availability).  
- **Core components**: API gateway, authentication, post service, engagement service, feed generator, notification engine, analytics.  
- **Data model**: User, Post, Engagement (type, timestamp), FeedEntry.  

**3️⃣ Step‑by‑step reasoning**  
1. *API layer* routes `/engage` calls to the Engagement Service.  
2. *Engagement Service* validates auth, records engagement in a write‑optimized log (e.g., Kafka).  
3. Persist to a NoSQL store for fast reads; use eventual consistency with background jobs to update counters.  
4. Trigger feed update: push a “post‑engaged” event to the Feed Service which recalculates relevance scores.  
5. Emit notification events via a message queue to deliver real‑time alerts.  

**4️⃣ Avoid common traps**  
- Don’t mix read/write paths; keep engagement writes isolated from feed reads to avoid latency spikes.  
- Beware of hot keys (popular posts); shard counters or use probabilistic data structures (HyperLogLog).  
- Ignore rate limiting → users can spam likes/comments, skewing analytics.  

**5️⃣ Sanity‑check & communicate**  
- Verify each component meets SLA: e.g., 99.9% success for engagement API, < 50 ms read latency.  
- Walk through a sample flow: user A likes post B → write log → counter update → feed score bump → notification to followers.  
- Summarize trade‑offs: eventual consistency vs. real‑time accuracy; sharding complexity vs. performance.

Follow this pattern for any system‑design interview question—clarify, model, reason stepwise, guard against pitfalls, and validate your design verbally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
