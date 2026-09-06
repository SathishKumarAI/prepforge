---
qid: ing_9c573fcb21__fp__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 386
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:44-05:00'
sources: []
---

**Why “Create a New Post” matters**

At its core, posting is *state change + data persistence*.  
The system must accept an image/video, store it once, and expose it to millions of readers with minimal latency and no duplication.  

1. **Input → Validation** – The client sends a multipart request: media bytes, metadata (caption, tags). Validate size, format, and user auth; reject early to save bandwidth.  
2. **Atomic Storage** – Upload the blob to an immutable object store (S3‑like). Compute a hash; if it exists, reuse the object—this deduplication is the hidden optimisation that saves storage and bandwidth for popular memes.  
3. **Metadata Service** – Persist a lightweight record in a distributed DB (e.g., Cassandra) containing user id, media key, timestamp, caption, and a “visibility” flag. Use a write‑through cache so readers hit Redis instantly.  
4. **Eventual Propagation** – Emit an event (“post.created”) to Kafka; followers’ feed services consume it asynchronously, generating personalized timelines (push vs pull).  
5. **Consistency & Availability** – Accept the post in *write‑once* mode; eventual consistency guarantees that all feeds eventually see it, while the user sees instant confirmation.

**Non‑obvious insight:**  
Deduplication via hash‑based storage turns a seemingly simple “post” into a *global cache*. Every identical image is stored once, drastically reducing costs and ensuring that any viral content scales without additional writes. This subtle principle—store immutably and reference by hash—is what lets Instagram handle billions of posts with sub‑second latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
