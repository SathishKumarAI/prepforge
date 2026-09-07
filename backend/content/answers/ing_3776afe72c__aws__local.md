---
qid: ing_3776afe72c__aws__local
question: 'Explain: Delete empty or unneeded indices — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 595
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:55-05:00'
sources: []
---

**Situation / Task**  
I was leading the migration of our e‑commerce search stack from a legacy on‑prem cluster to Amazon OpenSearch Service (the managed version of Elasticsearch). The production index had grown to 4 TB with > 20 k shards, but over 30 % of them were empty or contained only test data. This inflated costs and degraded query latency.

**Action**  
1. **Audit & Clean‑up** – I wrote a Python script that queried the cluster’s `_cat/indices` API, filtered by `docs.count==0` or `size<50MB`, and logged the shard allocation.  
2. **Delete Unneeded Indices** – Using the OpenSearch bulk delete API, I removed 1 TB of orphaned indices in a single operation, keeping the cluster healthy.  
3. **Shard Re‑Sizing** – For remaining hot indices, I calculated optimal shard size (10–30 GB) using the `shard_size` heuristic and reindexed with `reindex` API while preserving aliases.  
4. **Automation & Monitoring** – Added a CloudWatch alarm on index size that triggers an SNS notification; the pipeline now auto‑runs a nightly cleanup job.

**Result**  
- Cut storage costs by **$18 k/month** (AWS OpenSearch pricing).  
- Reduced average query latency from 350 ms to **180 ms** (+50 %).  
- Decreased shard count by 40 %, improving cluster stability and node utilization.

---

### Leadership Principles Highlighted
| Principle | How it Shines |
|-----------|---------------|
| **Ownership** | Took end‑to‑end responsibility for the cleanup, from audit to automation. |
| **Dive Deep** | Analyzed shard metrics, reindexing strategy, and cost models in detail. |

---

### Technical Design & Trade‑offs
- **AWS Services**: OpenSearch Service (managed cluster), Lambda (cleanup job), CloudWatch + SNS (alerting).  
- **Scalability**: Reindexing is performed during low traffic windows; shard size ensures each node stays below 80 % capacity.  
- **Availability**: Using aliases allows zero‑downtime switchover; bulk delete respects `wait_for_active_shards=1` to avoid split brain.  
- **Cost**: Bulk deletion removes unused storage instantly; reindexing keeps node count minimal, saving on EC2 instance costs.  

---

### What a Bar‑raiser Looks For
- **Ownership & Impact**: Quantified cost savings and latency improvement.  
- **Depth**: Detailed shard audit logic and sizing calculations.  
- **Learning from Failure**: Highlighted that earlier oversight of orphaned indices caused hidden storage bloat; now we have automated checks to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
