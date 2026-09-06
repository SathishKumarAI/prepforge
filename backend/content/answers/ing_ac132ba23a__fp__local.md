---
qid: ing_ac132ba23a__fp__local
question: 'Explain: Required authorization — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 362
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:01-05:00'
sources: []
---

**Why “create an index” needs explicit authorization**

Elasticsearch is a shared, distributed search engine.  
When a client asks the cluster to *create* an index it is asking for **write access to the metadata layer** – the namespace of indices, their settings, mappings and shard allocation rules.  
If anyone could create indices at will, a malicious actor could:

1. Flood the cluster with many tiny indices → **resource exhaustion** (disk, file descriptors).  
2. Create an index that shadows an existing one and inject false data → **data integrity breach**.  
3. Allocate shards on nodes with limited capacity → **performance degradation**.

Hence the *Create Index* API is gated by the `cluster:admin/indices/create` privilege (or equivalent role‑based permission).  

**Deeper principle – separation of concerns**

Elasticsearch follows a strict **read/write separation**:

- Read APIs (`search`, `get`) only need *index‑level read* rights.  
- Write APIs that alter cluster state (`create index`, `close index`, `delete mapping`) require *cluster‑admin* or *write* rights.

This mirrors the principle of least privilege in operating systems and database security: you grant only what is necessary for a task, limiting potential damage.

**Non‑obvious insight**

Even if an attacker obtains “index‑create” permission, they still cannot **reconfigure existing indices’ mappings** unless they also have `indices:data/write` rights.  
Thus the *Create Index* privilege is strictly about *metadata creation*, not data modification. This subtle distinction allows operators to give developers the ability to spin up test indices without risking accidental data loss in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
