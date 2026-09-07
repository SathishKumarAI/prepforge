---
qid: ing_21f61fb08c__faang__local
question: How does the receiver subscribe to a specific live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:35-05:00'
sources: []
---

**Clarify**  
The question asks how a *receiver* (client app) subscribes to a particular live‑streamed video. I’ll assume:  
1. The stream is identified by a unique ID or URL.  
2. The backend uses WebRTC/RTMP/HLS for delivery.  
3. We need low latency and scalable distribution.

**Approach**  
1. **Discover the stream** – receiver requests a “stream descriptor” from a control service (REST/WebSocket).  
2. **Authenticate & authorize** – token or JWT verifies that the user can view the stream.  
3. **Obtain media endpoints** – descriptor returns ICE servers, SDP offer (for WebRTC) or HLS/RTMP URLs.  
4. **Establish transport** – client initiates connection (WebRTC peer‑to‑peer via SFU or pulls HLS segments).  
5. **Maintain session** – keep‑alive heartbeats; on disconnect, send unsubscribe to the control plane.

**Depth**  
- *Control service*: stateless API backed by a stream catalog (e.g., DynamoDB).  
- *Transport*: WebRTC SFU for low latency (<200 ms) and scalability; fallback HLS for CDN caching.  
- Complexity: O(1) per subscribe request, constant‑time lookups in the catalog.  
- Trade‑off: WebRTC needs STUN/TURN servers (extra cost) vs. HLS offers CDN cache but higher latency.

**Edge Cases**  
- Invalid stream ID → 404 with retry logic.  
- Authorization failure → 403; prompt re‑auth.  
- Network churn → ICE renegotiation or re‑fetch descriptor.  
- High concurrency → load‑balance control service, use CDN for HLS.

**Optimize & Communicate**  
I’d add a caching layer (Redis) for descriptors to reduce DB hits and expose metrics (latency, error rates). I’d explain that the design balances low latency for interactive viewers with CDN fallback for broad reach, satisfying both performance and cost goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
