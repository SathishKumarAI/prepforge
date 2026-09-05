---
qid: ing_1c5cdf4d1c__fp__local
question: 'Explain: LSM-Tree Databases — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 333
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:06:21-05:00'
sources: []
---

**Why LSM‑Trees Need Bloom Filters**

An LSM‑tree writes data in large, sorted runs (memtable → SSTables).  
To answer a point query it must search every run that could contain the key.  
Without guidance, each lookup incurs *O(n)* disk seeks—untenable at scale.

**Deriving the Solution**

1. **Probabilistic pruning**: We only need to know whether a key *might* be in a given SSTable.  
2. **Set membership test**: The Bloom filter is the canonical data structure that, with negligible false‑positive rate, tells us “not present” for sure, and “maybe present” otherwise.  
3. **Space–time trade‑off**: A small bit array (k log n bits per entry) gives sub‑1% false positives, vastly cheaper than a full index.

Thus, before touching an SSTable we probe its Bloom filter; if it reports “absent,” the disk read is skipped entirely. The overall cost of lookups becomes *O(log n)* I/O rather than linear in the number of runs.

**Non‑obvious Insight**

Bloom filters are *symmetric*: false positives are acceptable because they only trigger a harmless extra read, whereas false negatives would miss data altogether. This asymmetry lets us aggressively compress metadata (a few kilobytes per SSTable) without risking correctness—something many overlook when choosing hash functions or filter size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
