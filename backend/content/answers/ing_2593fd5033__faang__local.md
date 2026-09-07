---
qid: ing_2593fd5033__faang__local
question: 'Your corpus is full of near-duplicates: doc versions, boilerplate, quoted
  email threads. How do you handle deduplication?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 518
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:11:12-05:00'
sources: []
---

**Clarify**  
We’re asked how to remove near‑duplicate documents from a large corpus (different versions of the same doc, boilerplate, quoted email threads). Key assumptions:  
- Corpus size is massive (millions of docs).  
- Duplicates are *near* rather than exact; some noise and formatting differences exist.  
- We need a balance between recall (keeping true unique content) and precision (removing duplicates).

**Approach**  
1. **Pre‑processing**: Strip known boilerplate (headers, footers), normalize whitespace, lower‑case, strip quoted text markers.  
2. **Shingling + MinHash**: Convert each doc into a set of k‑shingles (e.g., 5‑word sequences). Compute MinHash signatures to approximate Jaccard similarity efficiently.  
3. **Locality Sensitive Hashing (LSH)**: Bucket signatures so that highly similar docs fall in the same bucket.  
4. **Cluster & Dedup**: Within each bucket, compute exact pairwise Jaccard or cosine similarity on TF‑IDF vectors; merge clusters whose similarity exceeds a threshold.

**Depth**  
- Shingle size 5–7 words captures context while tolerating small edits.  
- MinHash with ~200 hash functions gives 0.1 error at 90% similarity.  
- LSH banding (e.g., 20 bands × 10 rows) keeps candidate pairs manageable.  
- Final similarity threshold can be tuned; e.g., > 0.85 Jaccard or cosine.  
Complexity: O(n·shingles + n·hashes) for signatures, then near‑linear in candidate pairs after LSH.

**Edge Cases**  
- Completely identical copies with different metadata → removed correctly.  
- Highly paraphrased versions may survive; we might flag them instead of dropping.  
- Very short docs produce unreliable shingles—apply a length filter or fallback to exact match.

**Optimize & Communicate**  
Explain that this pipeline scales to billions of tokens, uses sub‑linear candidate generation via LSH, and allows parameter tuning for precision vs recall. Highlight trade‑offs: tighter thresholds reduce false positives but may miss paraphrases; looser thresholds increase recall but need more post‑processing. Conclude with a brief note on validating with a held‑out set of manually labeled duplicates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
