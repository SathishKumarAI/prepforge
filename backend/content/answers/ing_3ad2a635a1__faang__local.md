---
qid: ing_3ad2a635a1__faang__local
question: 'Explain: Moving forward — Under the hood: Broadcasting live video to millions
  - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 456
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:01:13-05:00'
sources: []
---

**Clarify**  
We’re asked how Meta streams live video to millions of viewers in real time. Assume we’re dealing with consumer‑grade devices, edge‑to‑cloud latency < 200 ms, and a global audience.

**Approach**  
1. Encode once on the sender’s device (H.264/AVC or AV1).  
2. Push to an ingest cluster via RTMP/HLS.  
3. Distribute through a globally replicated CDN (edge nodes).  
4. Deliver using adaptive bitrate streaming (ABR) with DASH/HLS.  

**Depth**  
- **Ingest**: Edge servers accept RTMP, convert to HLS fragments in real time, and publish to a Pub/Sub queue.  
- **CDN**: Content is cached at edge nodes; pull‑through from origin if missing. Edge nodes are auto‑scaled by a serverless function that monitors traffic spikes.  
- **ABR**: Multiple bitrates (240p–1080p) pre‑encoded on ingest, with manifest pointing to each segment. The player switches quality based on RTT/packet loss measured by the browser.  
- **Latency**: Use low‑latency HLS or WebRTC for the first few seconds, then switch to standard HLS.  
- **Scalability**: Each region runs a sharded ingest cluster; we use Kafka to fan out stream segments to CDN nodes.  

**Edge Cases**  
- *Network churn*: fallback to lower bitrate or cached content.  
- *Device diversity*: graceful degradation for legacy browsers.  
- *Security*: TLS on all hops, token‑based authentication.

**Optimize & Communicate**  
To reduce cost, we employ serverless edge compute (e.g., Lambda@Edge) for dynamic manifests and cache invalidation. I’d explain this flow to the interviewer by mapping each step to a system diagram, highlighting trade‑offs between latency, reliability, and operational overhead. This showcases structured reasoning, technical depth, and practical design decisions—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
