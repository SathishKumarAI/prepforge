---
qid: ing_188c7df6a3__fp__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 400
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:00-05:00'
sources: []
---

### Why “Delete indices, not documents” matters for shard size

When you **delete a document** inside an index, the underlying Lucene segment is *not* physically shrunk; the doc’s bits are merely marked as deleted and later reclaimed by an *optimum merge*.  
A **merge** copies every surviving term into a new segment, so if you delete 90 % of an index’s 10‑GB dataset, the live data still sits in the original 10 GB segments. Until a merge runs, disk space isn’t freed and query performance suffers because Lucene must scan many “dead” fragments.

Conversely, **deleting an entire index** drops all its shards instantly: Elasticsearch removes the shard files from disk, releasing their full size.  
Thus:

1. **Disk usage** – deleting an index frees the *entire* shard’s space; deleting docs only releases it gradually.
2. **Search latency** – after a bulk delete you still have many merged‑in segments that increase cache misses; dropping the index removes them all.

Because of this, when you need to purge large swaths of data you should:

- **Delete the index** (or create a new one) instead of mass‑deleting docs.
- **Size your shards** so each shard is < 50–100 GB. Smaller shards merge faster and consume less memory during reindexing.

#### Non‑obvious insight  
The “delete‑all‑docs” strategy can backfire: if you delete 99 % of a large index, the remaining 1 % stays in huge segments that still occupy most RAM for query parsing. Dropping the index first (or recreating it) ensures those massive segments never materialize on disk or memory, giving you a clean slate and predictable shard behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
