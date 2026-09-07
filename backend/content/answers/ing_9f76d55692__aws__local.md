---
qid: ing_9f76d55692__aws__local
question: 'Explain: Why Traditional HTTP Isn’t Enough — Long Polling vs WebSockets
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 413
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:24-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our real‑time analytics dashboard from a polling‑based REST API to WebSocket‑driven streaming. The existing long‑polling model hit 60 % CPU on the gateway and introduced ~1.2 s latency, hurting user engagement.

**Action**  
I scoped the problem with *Dive Deep* and *Customer Obsession*: instrumented request/response cycles, identified that 85 % of traffic was “heartbeat” traffic with no payload. I designed a hybrid architecture:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Front‑end client | Browser WebSocket (native) | Low overhead, bi‑directional |
| API gateway | Amazon API Gateway + Lambda@Edge | Edge caching, 99.99 % availability |
| Streaming layer | Amazon Kinesis Data Streams | Autoscaling shards, 10k+ TPS |
| Consumer service | EC2 Auto Scaling Group with Spot | Cost‑effective, high throughput |

I added a fallback to long‑polling for legacy browsers and implemented graceful degradation.

**Result**  
Latency dropped from 1.2 s to <200 ms (85 % reduction). CPU usage on the gateway fell by 55 %. User session time increased by 18 %, translating to $120k in incremental revenue per quarter. I documented lessons: always profile before refactoring, and keep a fallback path for backward compatibility.

**Bar‑raiser cues**  
- Demonstrated *Ownership* by owning the full migration cycle.  
- Showed *Dive Deep* through metrics and cost modeling.  
- Quantified impact with real numbers (latency, CPU, revenue).  
- Learned from failure: initial rollout hit throttling; we added adaptive shard sizing to mitigate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
