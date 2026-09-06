---
qid: ing_03ca9a1157__think__local
question: 'Explain: You''re ingesting millions of web pages a day. Detect near-duplicates
  - same article, different boilerplate - efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 561
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:59:24-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   • *What is a “near‑duplicate”?* Same core text, different headers/footers, ads, scripts.  
   • *Scale*: millions of pages/day → must be sub‑linear per page (ideally O(1) or O(log N)).  
   • *Storage constraints*: we can’t keep the raw HTML of every page forever; only a compact fingerprint is needed.  

**2️⃣ Mental model / framework**  
   • Treat each document as a set of tokens → use **minhash + LSH (Locality‑Sensitive Hashing)** to group similar sets into buckets.  
   • A *shingle* (n‑gram) hash represents local context; minhash compresses the whole set to a few integers.  
   • LSH indexes those fingerprints so that near‑identical documents land in the same bucket with high probability.

**3️⃣ Step‑by‑step reasoning**  
   1. **Preprocess**: strip boilerplate (HTML tags, scripts), normalize whitespace, remove stopwords.  
   2. **Shingle**: create k‑grams of words (k≈5).  
   3. **Hash shingles** to integers.  
   4. **Minhash signatures**: compute *h* hash functions; keep the minimum value per function → a short signature vector.  
   5. **LSH banding**: split signature into bands, hash each band to a bucket.  
   6. **Candidate retrieval**: for a new page, look up its buckets → candidate set of near‑duplicates.  
   7. **Verification**: compute Jaccard or cosine similarity on the candidate set; if above threshold (e.g., 0.8), flag as duplicate.

**4️⃣ Common traps to avoid**  
   • Over‑filtering boilerplate before shingling → loss of unique content.  
   • Too few hash functions ⇒ low recall; too many ⇒ high memory usage.  
   • Ignoring language/encoding differences → false negatives.  

**5️⃣ Sanity‑check & communicate**  
   • Test on a held‑out corpus: verify that known duplicates are found and non‑duplicates aren’t.  
   • Explain the trade‑off: “We keep only a 64‑bit signature per page, so memory is minimal; LSH lets us query in O(1) expected time.”  

This pipeline scales to millions of pages/day while maintaining high recall for near‑duplicate detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
