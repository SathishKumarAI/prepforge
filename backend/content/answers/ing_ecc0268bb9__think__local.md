---
qid: ing_ecc0268bb9__think__local
question: 'Explain: Add Another URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 552
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:39:06-05:00'
sources: []
---

**1️⃣ Clarify the task & assumptions**  
   - *What is asked?* We need to explain how a “Bloom filter” can be used in a system that allows users to add new URLs (e.g., a URL shortener or duplicate‑check service).  
   - *Assumptions:*  
     1. The system must quickly decide whether an incoming URL already exists.  
     2. Storage is at scale, so exact look‑ups would be expensive.  
     3. False positives are acceptable; false negatives are not.

**2️⃣ Mental model / framework**  
   - **Bloom filter basics:** hash‑based probabilistic set membership test.  
   - **System design layers:**  
     *Input → Bloom filter check* (fast, in‑memory) → *Persisted store* (database).  
   - **Trade‑offs:** memory vs false‑positive rate; update strategy.

**3️⃣ Step‑by‑step reasoning**  
   1. When a user submits a URL, hash it with *k* independent hash functions.  
   2. Set the corresponding bits in a bit array of size *m*.  
   3. To check existence: compute the same hashes; if any bit is 0 → URL definitely new.  
   4. If all bits are 1 → possible duplicate (false positive).  
   5. For a definite duplicate, query the database to confirm and fetch the existing short code.  
   6. For a new URL, generate a short code, store mapping in DB, and update the Bloom filter.

**4️⃣ Common traps & wrong turns**  
   - *Assuming no false positives:* leads to duplicated entries.  
   - *Choosing too small m or too many k:* inflates false‑positive rate.  
   - *Not updating the filter after deletions:* stale bits cause more false positives over time.  
   - *Using a single hash function:* defeats Bloom filter’s benefit.

**5️⃣ Sanity‑check & communication**  
   - Verify that memory usage (m bits) is acceptable for expected URL volume.  
   - Confirm that a single false positive will only trigger an extra DB lookup, not a data inconsistency.  
   - Explain to stakeholders: “We’ll never miss a duplicate (no false negatives), but sometimes we’ll think a new URL already exists; the system handles that by checking the database.”  

This structured approach lets you articulate why and how Bloom filters fit the “Add Another URL” scenario while keeping the explanation clear, concise, and technically sound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
