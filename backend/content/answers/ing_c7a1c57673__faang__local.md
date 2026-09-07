---
qid: ing_c7a1c57673__faang__local
question: 'Explain: Solving the “thundering herd” problem — Under the hood: Broadcasting
  live video to millions - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 429
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:24:23-05:00'
sources: []
---

**Clarify**  
The “thundering herd” occurs when a single event (e.g., a new live‑stream start) triggers millions of clients to fetch the same data, overwhelming servers and bandwidth. The question asks how Meta’s video stack avoids this while broadcasting live streams to millions simultaneously.

**Approach**  
1. **Publish–Subscribe (pub/sub)** with a distributed message bus.  
2. **Edge caching & CDN pull‑push model** so each edge only pulls once.  
3. **Rate‑limiting and adaptive bitrate** at the client.  
4. **Stateless micro‑services** for scalability.

**Depth**  
- **Event ingestion**: When a user starts a stream, an event is published to Kafka. Each consumer (edge server) receives the notification once, not millions of times.  
- **Edge CDN**: Edge nodes pull the video segment from the origin only on first request; subsequent viewers use cached copy.  
- **Adaptive bitrate & chunked delivery**: Clients request small HLS/DASH chunks; servers serve them via pre‑cached segments, eliminating bulk pushes.  
- **Back‑pressure**: If an edge is saturated, it signals upstream to slow the stream rate (e.g., lower resolution).  
Complexity: O(1) per edge node for notification; overall O(N) for N viewers but distributed across edges.

**Edge cases**  
- Sudden flash crowds → CDN auto‑scaling.  
- Network partitions → fallback to peer‑to‑peer or degraded quality.  
- Security: authentication tokens prevent unauthorized pulls.

**Optimize & Communicate**  
Explain that the key is *distribution of work*: only one origin push, many passive pulls; this eliminates the herd effect. Highlight metrics (latency < 200 ms, 99th percentile bandwidth stable) and how you’d monitor with Prometheus/Grafana. End by stressing the trade‑off: slight cache miss latency vs massive savings in upstream traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
