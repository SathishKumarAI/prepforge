---
qid: ing_53ebecaff8__fp__local
question: 'Explain: Mapping metadata in the cluster state — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 346
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:03:30-05:00'
sources: []
---

**Why a shard’s *mapping* can blow up**

A shard stores documents, an index‑time schema (the *mapping*), and the inverted‐index data that turns queries into hits.  
The mapping itself is a dictionary: field name → type + analyzer + settings.  
When you create or update a field, ElasticSearch must persist this descriptor in every shard so that new docs can be parsed correctly.

If a mapping contains many fields (hundreds of thousands), the per‑shard mapping file grows linearly with that count. Each field contributes:

1. **Field name string** – stored once per shard.  
2. **Type and analyzer objects** – each holds byte arrays for stop‑words, tokenizers, etc.  
3. **Per‑field metadata** – boosts, null handling, norms flags.

Because a mapping is *immutable* during indexing, ElasticSearch writes the entire mapping to disk (and keeps it in memory) on every shard start or update. Thus, if you have 5 shards and 200 k fields, each shard may hold >100 MB of metadata, quickly exceeding the 1 GB default limit.

**Non‑obvious insight:**  
The bottleneck is not just the number of fields but *how often* they are updated. A single `PUT mapping` that adds 10 k new fields forces every shard to rewrite its mapping files, causing a global pause in indexing until all shards finish loading. Therefore, keep field definitions static and batch schema changes—otherwise you risk catastrophic I/O stalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
