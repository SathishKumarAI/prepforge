---
qid: ing_e377d26710__think__local
question: 'Explain: Connection Load — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 477
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:00:22-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Ask whether “Connection Load” refers to the number of active sockets per server, traffic volume, or latency constraints.  
   - Assume WhatsApp‑style instant messaging: millions of users, frequent short messages, low‑latency delivery, and strong consistency for chat history.

**2. Adopt a layered mental model**  
   - *User‑level*: client apps → transport layer (WebSocket/TCP).  
   - *Server‑level*: load balancer → message router → persistence & cache layers.  
   - *Metrics layer*: connection count, bytes/sec, RTT, error rates.

**3. Step‑by‑step reasoning**  
   1. **Estimate user base**: e.g., 2 B users × 10 active sessions ≈ 20 B concurrent connections.  
   2. **Compute per‑connection bandwidth**: small JSON payloads (~200 bytes) at ~0.5 msg/s → ~100 KB/s per connection.  
   3. **Aggregate load**: 20 B × 100 KB/s ≈ 2 PB/s raw traffic.  
   4. **Identify bottlenecks**: transport sockets, memory for session state, database writes.  
   5. **Design mitigation**: connection pooling, long‑polling fallback, sharding by user ID, CDN for media.

**4. Common traps to avoid**  
   - Forgetting that “active” connections may be idle (keep‑alive) and need heartbeats.  
   - Underestimating burst traffic during peak hours or events.  
   - Ignoring edge cases: device wake‑up, network churn, multi‑device sessions.

**5. Sanity‑check & verbalize**  
   - Re‑calculate with a different user assumption (e.g., 1 B users) to see if the design still scales.  
   - Explain how each layer handles its share of load and why scaling horizontally is necessary.  

By following this structured approach, you can confidently estimate connection load and justify architectural choices for WhatsApp‑style messaging systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
