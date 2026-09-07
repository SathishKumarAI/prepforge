---
qid: ing_f2572e606a__faang__local
question: 'Explain: Web Page Similarity and URL Duplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 510
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:51-05:00'
sources: []
---

**Clarify**  
We need a crawler that flags when two URLs point to essentially the same content (duplicate or near‑duplicate pages) and measures how similar their *web page* bodies are. Key assumptions:  
1. We can fetch HTML, canonical tags, and metadata.  
2. Duplicate detection is needed at crawl time to avoid redundant storage/processing.  
3. Similarity threshold will be tunable.

**Approach**  
1. **Pre‑fetch & normalize** – download page, strip boilerplate (ads, nav), lower‑case, remove whitespace, canonicalize URLs.  
2. **Fingerprint generation** – use MinHash + Locality Sensitive Hashing (LSH) on token sets to get a compact signature.  
3. **Duplicate lookup** – hash fingerprint into a distributed key/value store; if collision within threshold → duplicate.  
4. **Similarity scoring** – compute Jaccard or cosine similarity between TF‑IDF vectors for pages that collide, flag as near‑duplicate.

**Depth**  
- MinHash sketches (k=128) give 0.1–0.2 error on Jaccard; LSH bands (b=32) keep false positives low.  
- Store fingerprints in a distributed hash table (e.g., DynamoDB) for O(1) lookups.  
- Complexity: O(n log n) for tokenization, O(k) per page for sketching, O(1) lookup; overall linear in crawled pages.  
- Trade‑off: larger k → better accuracy but more storage.

**Edge Cases**  
- Dynamic content or personalized rendering may produce different tokens; mitigate with a *content hash* of the raw body as a fallback.  
- Canonical tags missing or malformed → rely on URL normalization heuristics.  
- Very large pages (>10 MB) – stream tokenization to avoid memory blowup.

**Optimize & Communicate**  
To improve throughput, pipeline fetching and sketching via async workers; cache recent fingerprints in RAM for bursty domains. Explain that the system balances false positives (over‑dedupe) vs false negatives (missed duplicates) by tuning LSH parameters, and that monitoring similarity scores over time informs threshold adjustments. This structured flow satisfies a FAANG interview’s emphasis on clear reasoning, technical depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
