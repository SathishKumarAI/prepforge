---
qid: ing_93aba3eb59__fp__local
question: 'Explain: Subscriptions → Real-Time Updates — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 421
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:04-05:00'
sources: []
---

### The Core Problem  
A client needs a *single source of truth* that stays in sync with the server as events occur—think chat, stock prices or IoT telemetry. Two paradigms surface:

| Paradigm | How it solves the problem |
|----------|---------------------------|
| **REST** | Pull‑based polling or long‑polling; each request is independent and stateless. |
| **GraphQL Subscriptions** | Push‑based push via WebSocket, driven by a declarative query that specifies *exactly* what data the client cares about. |

### Why REST Must Poll  
REST’s statelessness forces the client to re‑issue requests at intervals or use tricks like `ETag/If-None-Match`. The server can’t “tell” the client anything because it has no persistent socket; the cost is network overhead and latency that grows with the polling frequency.

### Why GraphQL Subscriptions Must Push  
GraphQL’s type system lets the server understand *which fields* a client needs. A subscription channel is essentially a *subscription to a data stream*. The server only sends deltas matching the query, reducing payloads and eliminating the “over‑fetch” problem inherent in REST’s fixed endpoints.

### Non‑obvious Insight  
Both paradigms obey an *information–theoretic bound*: **REST + polling ≈ Shannon entropy of state changes × inverse poll rate**; **GraphQL subscription ≈ mutual information between client query and server event stream**. In practice, the latter is always lower because the client’s filter eliminates irrelevant bits—essentially a form of *optimal coding* for real‑time data.

### Bottom Line  
If you need low latency and fine‑grained control over what changes reach the UI, GraphQL subscriptions are the mathematically efficient choice; otherwise, REST polling remains simpler but incurs higher entropy cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
