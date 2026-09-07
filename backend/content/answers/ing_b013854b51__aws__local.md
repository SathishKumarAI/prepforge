---
qid: ing_b013854b51__aws__local
question: 'Explain: Functional Requirements — Real Time Presence Platform System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:37-05:00'
sources: []
---

**Situation** – I led the architecture of a real‑time presence platform for a global messaging app that needed to show “online/offline” status to 120 M concurrent users while keeping latency under 200 ms.

**Task** – Deliver a system that scales to millions of heartbeats per second, guarantees eventual consistency across regions, and costs <$5 M/yr.

**Action**  
1. **Event ingestion**: I chose Amazon Kinesis Data Streams (shard‑size 2 MB/s) for low‑latency, partitioned by user ID, and added a DynamoDB “presence” table with a TTL of 5 min to store state.  
2. **Processing**: A Lambda fleet read from Kinesis, updated DynamoDB, and published presence changes via Amazon SNS topics per region.  
3. **Caching & CDN**: Edge‑cached values in CloudFront + AWS Global Accelerator ensured <50 ms round‑trip for UI pulls.  
4. **Observability**: CloudWatch metrics (e.g., “heartbeat drop rate”) triggered auto‑scaling of Kinesis shards and Lambda concurrency.  

**Result** – The platform handled 3 M heartbeats/sec with 99.9 % success, latency <120 ms in 95th percentile, and reduced operational cost by 30 % versus a monolith. I earned the “Customer Obsession” label for proactively monitoring user experience metrics and “Ownership” for driving cross‑team adoption of the new architecture.

**Bar‑raiser note** – Looked for ownership (I owned end‑to‑end), depth (detailed trade‑offs between Kinesis vs. MQTT, DynamoDB TTL vs. Redis), quantified impact (latency & cost numbers), and lessons from a failed early prototype that over‑provisioned shards and caused cold starts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
