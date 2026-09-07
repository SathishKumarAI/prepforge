---
qid: ing_ed336ef2d2__aws__local
question: What metadata would you attach to each chunk, and what does it buy you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 553
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:41-05:00'
sources: []
---

**Situation / Task**  
When we migrated the internal knowledge base to an LLM‑driven FAQ system, every paragraph had to be searchable and auditable at scale (10 M+ documents).  

**Action**  
I defined a **chunk schema** stored in DynamoDB, then ingested each chunk via a Lambda pipeline that:

| Metadata | Why it matters |
|----------|----------------|
| `doc_id` | Unique source for audit & versioning |
| `chunk_index` | Enables precise navigation and rollback |
| `length_bytes` | Helps cap token usage and cost |
| `embedding_vec` (SageMaker endpoint) | Drives semantic similarity search in OpenSearch |
| `tags/keywords` | Improves keyword‑based filtering |
| `source_url` | Supports traceability for compliance |
| `lang_code` | Enables language‑specific models |
| `timestamp` | Enables time‑based pruning and lifecycle policies |

The Lambda writes the chunk text to S3, stores metadata in DynamoDB, and indexes the embedding in OpenSearch.  

**Result**  
- Retrieval latency dropped from 1.2 s → 250 ms (90 % reduction).  
- Search relevance ↑ 23 % per NDCG evaluation.  
- Cost per query fell by 18 % thanks to token‑aware chunk sizing.  
- Compliance audits now finish in <5 min vs >30 min.

**Reflection**  
Ownership: I owned the end‑to‑end pipeline and iterated on metadata until we hit the SLA.  
Dive Deep: By inspecting DynamoDB throughput and OpenSearch shard health, we identified the 7 % of “long” chunks that bloated costs.  
Learning from failure: The first run missed a `source_url` field; after adding a validation step, downstream analytics no longer produced orphan records.

**Bar‑raiser cues** – Look for clear ownership, data‑driven impact, depth in the design (why each field matters), and evidence of learning from an initial misstep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
