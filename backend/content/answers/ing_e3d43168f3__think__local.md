---
qid: ing_e3d43168f3__think__local
question: 'Explain: 6.1 Photo/Video Upload — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 503
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:01:39-05:00'
sources: []
---

**Thinking process for tackling the “Design Instagram – Photo/Video Upload” question**

1. **Clarify scope & assumptions**
   - What is the user story? (Upload → store → serve → analytics)
   - Constraints: latency (< 2 s), high write traffic, eventual consistency, multi‑region.
   - Define success metrics: throughput, availability, cost.

2. **Choose a mental model / framework**
   - Use the classic *System Design* layers: client → API gateway → upload service → storage → CDN → analytics.
   - Apply the *CAP* and *P–R–C* trade‑offs for each layer.
   - Map requirements to *data partitioning*, *replication*, and *cache* strategies.

3. **Step‑by‑step reasoning**
   1. **Client side**: multipart upload, resumable chunks, progressive compression.
   2. **API gateway**: rate limiting, auth, request routing (REST/GraphQL).
   3. **Upload service**: validate, generate unique ID, store metadata in a relational DB; push chunk refs to a distributed file system.
   4. **Storage layer**: object storage (S3‑like) + CDN edge nodes; use erasure coding for durability.
   5. **Post‑processing**: async workers for thumbnails, transcoding videos, applying filters.
   6. **Serving**: cache URLs in Redis, pre‑signed URLs for private media.
   7. **Analytics & monitoring**: event streams (Kafka), real‑time dashboards.

4. **Common traps to avoid**
   - Forgetting resumable uploads → user frustration on flaky networks.
   - Assuming synchronous processing → violates latency targets.
   - Ignoring cost of storing many versions → ballooning storage bills.
   - Over‑optimizing for read traffic when writes dominate during peak times.

5. **Sanity‑check & verbalize**
   - Ask: “Does each requirement map to a concrete component?”  
   - Validate trade‑offs: e.g., using eventual consistency vs. strong consistency for user feeds.  
   - Explain how scaling is handled (sharding, horizontal workers).  

By following this structured approach you’ll systematically cover all critical aspects and avoid common pitfalls in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
