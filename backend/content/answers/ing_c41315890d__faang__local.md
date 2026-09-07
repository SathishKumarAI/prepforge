---
qid: ing_c41315890d__faang__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 391
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:09-05:00'
sources: []
---

**Clarify**  
You’re asking how to avoid *data leakage*—when evaluation data leaks into the training pipeline or contains overlapping samples that inflate performance metrics. I’ll assume we have a standard train/val/test split, a reproducible preprocessing workflow, and access to raw source corpora.

**Approach**  
1. Track provenance of every token (source file, line number).  
2. Deduplicate across splits using hash‑based fingerprinting.  
3. Audit the pipeline: log transformations, random seeds, and versioned feature extractors.  
4. Run statistical sanity checks (e.g., distribution drift tests) before evaluation.

**Depth**  
*Provenance tracking*: attach a unique ID to each document; store in a SQLite table with timestamps.  
*Deduplication*: compute SHA‑256 on preprocessed sentences, drop duplicates across splits. Complexity O(N).  
*Audit logs*: serialize pipeline steps (e.g., using MLflow) so that any run can be replayed and inspected.  
*Sanity checks*: perform KS tests between train/val distributions; flag >5 % drift.  

**Edge Cases**  
- *Over‑aggressive deduplication* may remove legitimate paraphrases → test on a held‑out “paraphrase” set.  
- *Hash collisions* (unlikely) → use salted hashes or Bloom filters for safety.  
- *Hidden metadata leakage* from file names → sanitize filenames before hashing.

**Optimize & Communicate**  
Add a lightweight pre‑validation step in CI that runs the deduplication script and outputs a “data integrity” badge. Explain to stakeholders that this guarantees the reported metrics reflect true generalization, not artefacts of contamination. This keeps evaluation honest while remaining computationally efficient (linear time, small storage overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
