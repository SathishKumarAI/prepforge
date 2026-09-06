---
qid: ing_86b84659d7__fp__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 546
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:55-05:00'
sources: []
---

**Why the client layer matters**

When a user opens Instagram on web or mobile it has *one* job: **display a consistent feed in real‑time while keeping latency under ~100 ms**.  
The fundamental constraints are

| Constraint | Why it exists |
|------------|---------------|
| Statelessness | Users can hit any edge node; we cannot keep per‑session state in the client. |
| Horizontal scalability | Millions of concurrent users, each requesting thousands of posts. |
| Low data transfer | Mobile bandwidth is precious; we need to send only what the user will see. |

**From constraints to design**

1. **Cache‑first rendering**  
   *Principle:* *Temporal locality*. A user’s feed changes slowly compared to request frequency.  
   → Store a per‑user “feed snapshot” in a CDN (e.g., CloudFront). If a cache hit occurs, the client receives an HTML fragment or JSON payload with pre‑rendered images and metadata.  

2. **Incremental hydration**  
   *Principle:* *Progressive enhancement*. The first paint must be fast; richer content can load later.  
   → The web app initially renders placeholders (Skeleton UI). A background fetch pulls the next 10–20 posts via a lightweight GraphQL query, then hydrates them into React components without blocking the main thread.

3. **WebSocket push for real‑time updates**  
   *Principle:* *Event‑driven consistency*. New likes/comments should appear instantly.  
   → A single long‑lived WebSocket per session streams delta events (new posts, likes). The client merges these deltas into the cached feed, ensuring eventual consistency without full refetches.

4. **Mobile offline mode**  
   *Principle:* *State reconciliation*. Users may be offline; we need a local store that syncs on reconnect.  
   → Use SQLite/Realm to persist the last seen feed slice and queue user actions (likes, comments). On reconnection, an incremental sync API reconciles conflicts via vector clocks.

**Non‑obvious insight**

Most designs focus on *fetching* data efficiently, but **the client must also act as a lightweight cache**. By materializing the first paint from a CDN snapshot and only hydrating the rest, we reduce round‑trips by >70 % and avoid “thundering herd” spikes at the backend—an optimization that is often overlooked in interview answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
