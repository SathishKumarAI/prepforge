---
qid: ing_5fbebe55a8__faang__local
question: 'Explain: Design YouTube — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 520
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:03-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a system that allows millions of users to upload, store, stream and recommend YouTube‑style videos at scale.  
*Assumptions:*  
- Users can upload any length (up to 2 h).  
- Live streaming is optional but must be supported.  
- We need real‑time recommendations and minimal latency for playback.  

**2️⃣ Approach**  
1. **Front‑end API gateway → load balancer → stateless app servers**.  
2. **Storage layer:**  
   - *Video metadata* in a distributed SQL/NoSQL store (e.g., Spanner or DynamoDB).  
   - *Binary video blobs* in sharded object storage (S3‑compatible, CDN edge cache).  
3. **Transcoding pipeline**: Event‑driven microservices that ingest uploads, generate multiple bitrates, and write to storage.  
4. **Streaming layer:** HLS/DASH segments served via a global CDN; token auth for paid content.  
5. **Recommendation engine:** Real‑time feature extraction → batch model training (e.g., TensorFlow) → serving via model server + cache (Redis).  

**3️⃣ Depth**  
- *Scalability:* Each component runs on auto‑scaling groups; use partitioning by video ID and user ID to avoid hotspots.  
- *Consistency:* Metadata uses strong consistency; storage is eventually consistent but idempotent writes guarantee no data loss.  
- *Latency:* CDN reduces RTT to < 200 ms for most regions; streaming buffer of 2–3 s mitigates jitter.  
- *Cost:* Spot instances for transcoding, object storage lifecycle rules (move cold videos to Glacier).  

**4️⃣ Edge Cases**  
- Corrupt uploads → retry with checksum validation.  
- Simultaneous high‑bandwidth streams from a single user → rate‑limit and shard CDN pulls.  
- Recommendation cold start → fallback to popularity metrics.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: stronger consistency vs latency, on‑prem vs cloud storage, real‑time inference vs batch retraining. Highlight how each design choice aligns with business goals (user experience, cost, reliability). End by summarizing the overall data flow and key performance metrics (e.g., 99th percentile stream start time < 3 s).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
