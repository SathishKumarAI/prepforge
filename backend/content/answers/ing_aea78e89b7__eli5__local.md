---
qid: ing_aea78e89b7__eli5__local
question: 'Explain: Choose QUIC or HTTP/3 When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 328
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:20-05:00'
sources: []
---

Imagine a delivery truck that can drive on two types of roads: **highways (TCP)** and **express lanes (UDP)**.  
*Highways* are safe and reliable; every delivery is guaranteed to arrive in the right order because traffic lights (acknowledgements) keep everyone in line. But if one truck stalls, all trucks behind it must wait—slow for the whole convoy.  

*Express lanes* let each truck move independently. If a truck gets stuck, the others can still race ahead; only that truck’s package is delayed. This speeds up the overall delivery but you need a system to keep track of who got what and when.

**QUIC (built on UDP)** is like those express lanes: it bundles data in packets that can hop out of order, re‑orders them at the receiver, and uses its own “traffic lights” inside each packet.  
When your application needs *low latency*—real‑time gaming, live video, or quick web page loads—QUIC (and thus HTTP/3) is a good choice because it keeps the convoy moving even if one truck slows down.

If you need *guaranteed delivery order* and can tolerate occasional pauses—for bulk file transfers or where network reliability is paramount—stick with **HTTP/2 over TCP**. It’s like choosing the dependable highway that never skips a stoplight, ensuring every piece arrives exactly when expected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
