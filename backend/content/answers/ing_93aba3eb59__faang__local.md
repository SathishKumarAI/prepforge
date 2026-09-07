---
qid: ing_93aba3eb59__faang__local
question: 'Explain: Subscriptions → Real-Time Updates — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 561
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:31-05:00'
sources: []
---

**Clarify**  
You want to know how a subscription‑driven real‑time system can be built using **REST** or **GraphQL**.  
Key assumptions:  
* Clients need low latency updates for a small set of fields (e.g., price tickers).  
* The server has many concurrent subscribers.  
* Bandwidth and cost are important, but developer productivity matters.

**Approach**  
1. Outline each protocol’s mechanism for pushing data.  
2. Compare their fit for subscription patterns.  
3. Highlight trade‑offs in performance, tooling, and maintenance.

**Depth**

| Protocol | Push Mechanism | Typical Pattern | Complexity |
|----------|----------------|-----------------|------------|
| **REST** | Long polling / Server‑Sent Events (SSE) or WebSocket with a RESTful endpoint | Poll every N s → hit `/price?symbol=XYZ` | Requires heartbeat logic; higher overhead per message |
| **GraphQL** | Subscriptions over WebSocket (Apollo, GraphQL‑WS) | Client sends `subscription { price(symbol: "XYZ") }`; server pushes delta | Built‑in filtering & batching; schema guarantees type safety |

*REST*: Stateless, easy to cache, but each update forces a new HTTP request. Latency is higher and bandwidth wasteful when many fields are unchanged.

*GraphQL*: Keeps the connection open, sends only changed fields, supports client‑side query composition, and allows server‑driven batching of multiple subscriptions into one stream.

**Edge Cases**

* **Network partitions**: REST long‑polls time out; GraphQL WS reconnect logic needed.  
* **High fan‑out**: REST scales poorly (many open connections); GraphQL can share a single socket per client but still needs efficient pub/sub on the server.  
* **Security**: Both need auth, but GraphQL exposes schema introspection that may leak info.

**Optimize & Communicate**

- For **high‑frequency tickers**, lean toward GraphQL subscriptions; they reduce round‑trips and bandwidth.
- If you already have a REST API and low update frequency, long polling or SSE can be simpler to deploy.
- Emphasize the trade‑off: *developer velocity vs. runtime efficiency*.  
- Explain that in practice, many FAANG services use GraphQL for real‑time feeds (e.g., Apollo’s `subscriptions-transport-ws`) because of its fine‑grained payloads and strong type system.

This structured comparison demonstrates clear reasoning, depth on technical choices, and awareness of edge cases—exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
