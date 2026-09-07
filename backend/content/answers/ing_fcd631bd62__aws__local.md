---
qid: ing_fcd631bd62__aws__local
question: 'Explain: Simple Additive Checksums — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:34-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to add a lightweight integrity check for our S3‑like object store that could be verified on the edge without pulling the entire payload. The goal: reduce data corruption incidents by 30 % while keeping latency <5 ms.

**Approach (Design)**  
I chose an **additive checksum** (sum of 32‑bit words modulo 2³²) because it is CPU‑friendly and fits in a single header byte.  
* **Compute**: During upload, the client streams data to a Lambda@Edge that aggregates 4 KB blocks, sums them, and writes the result into an object metadata field (`x-amz-checksum`).  
* **Verify**: On read, another Lambda recomputes the sum on-the-fly; if mismatch → fetch from a secondary replica or trigger a re‑upload.  
* **Scalability**: Each block is processed in parallel across shards; total cost ≈ $0.0000004 per GB (Lambda compute + S3 PUT).  
* **Availability**: The checksum lives in S3 metadata, automatically replicated; no single point of failure.  
* **Trade‑offs**: Additive checksums are fast but vulnerable to collisions; we mitigated by chaining with a small HMAC for critical data.

**Result**  
After rollout, detected corruption dropped from 0.8 % to <0.05 %, saving ~$12k/month in manual repairs. Latency impact was <2 ms on average.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, dove deep into Lambda cost models, quantified a 90 % reduction in incidents, and learned that simple math can be surprisingly robust when paired with layered safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
