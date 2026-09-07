---
qid: ing_03ca9a1157__faang__local
question: 'Explain: You''re ingesting millions of web pages a day. Detect near-duplicates
  - same article, different boilerplate - efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 555
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:01-05:00'
sources: []
---

**Clarify**  
We need an online pipeline that ingests ~10⁶ webpages/day and flags *near‑duplicate* articles—identical core content but wrapped in varying boilerplate (ads, navigation). Assume pages are HTML/JSON, we can parse text, and storage is scalable. We must keep latency low (< 1 s per page) and memory modest.

**Approach**  
1. **Preprocess**: Strip tags, normalize whitespace, remove stop‑words.  
2. **Feature extraction**: Compute a *shingled fingerprint* (e.g., 5‑gram MinHash signatures).  
3. **Indexing**: Store signatures in an LSH (Locality‑Sensitive Hash) table that maps buckets → document IDs.  
4. **Duplicate detection**: For each new page, hash its signature; query the corresponding bucket for candidate matches and compute Jaccard similarity; if > 0.8, flag as near‑duplicate.

**Depth**  
- *Shingling*: Convert cleaned text into 5‑character/word shingles → set size ~ N.  
- *MinHash*: Use k=128 hash functions to produce a compact signature (512 bits).  
- *LSH*: Partition the 128 hashes into b bands of r hashes; two docs collide in at least one band with probability ≈ 1−(1−sʳ)ᵇ, where s is Jaccard similarity. Choose b=32,r=4 to target s≈0.8.  
- *Complexity*: O(N) per page for shingling; signature generation O(k). Query time ≈ O(b + candidates). Memory: store 128×10⁶ bits (~1.6 GB) plus bucket overhead.

**Edge Cases**  
- Very short articles → few shingles → false positives. Mitigate by a length threshold.  
- Highly templated sites → boilerplate dominates → need aggressive stop‑word and tag removal.  
- Language variance → use language‑agnostic tokenization or multilingual embeddings if needed.

**Optimize & Communicate**  
- Cache frequent buckets to reduce disk I/O.  
- Parallelize shingling and hashing across shards; use a distributed LSH service (e.g., Redis).  
- Periodically re‑hash older docs to adapt to evolving boilerplate.  

Explain trade‑offs: tighter similarity threshold reduces duplicates but increases false negatives; larger signatures lower collision probability but raise memory cost. This balanced design meets the FAANG standards for scalability, low latency, and clear reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
