---
qid: ing_2593fd5033__think__local
question: 'Your corpus is full of near-duplicates: doc versions, boilerplate, quoted
  email threads. How do you handle deduplication?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 432
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:08:51-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   *Ask what “near‑duplicate” means for your corpus (exact copy, >90 % overlap, same content with different metadata). Assume you can access raw text and some identifiers (hashes, dates).  

**2️⃣ Adopt a layered deduplication framework**  
   - *Exact matching*: simple hash of the whole document.  
   - *Near‑matching*: use shingling + MinHash or locality‑sensitive hashing to catch 90–99 % overlap.  
   - *Semantic similarity*: embed with sentence transformers and cluster at a cosine threshold if you need to catch paraphrased versions.  

**3️⃣ Step‑by‑step reasoning**  
   1. Preprocess: normalize whitespace, remove boilerplate headers/footers.  
   2. Compute exact hash → drop true duplicates.  
   3. Generate shingles (e.g., 5‑word) → MinHash signatures → LSH bucket documents.  
   4. Within each bucket compute Jaccard or cosine similarity; keep the “best” (longest, most recent).  
   5. Optionally run a semantic cluster to catch non‑shingle matches.  

**4️⃣ Common traps to avoid**  
   - *Over‑aggressive hashing*: tiny changes (e.g., timestamps) break exact match.  
   - *Missing boilerplate removal*: “Hello” or email signatures inflate similarity.  
   - *Memory blowup*: LSH parameters too loose → huge buckets.  

**5️⃣ Sanity check & communicate**  
   - Sample a few clusters and manually verify duplicates vs. unique content.  
   - Report metrics: % deduplicated, average cluster size, runtime.  
   - Explain the trade‑off between precision (few false positives) and recall (catching all near‑duplicates).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
