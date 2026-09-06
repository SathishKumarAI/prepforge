---
qid: ing_bbbde0d004__think__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 560
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:22:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “Query an Absent URL”?* Assume we’re checking if a given URL has ever been seen before, but it isn’t in our primary store (e.g., DB).  
   - *Why Bloom Filters?* We need a fast, memory‑efficient membership test that can say “probably not present” with no false negatives.  
   - *System constraints:* high read throughput, low latency, occasional updates.

**2️⃣ Mental model / framework**  
   - Treat the URL space as a set of items we want to query quickly.  
   - Bloom Filter = bit array + k hash functions → O(1) membership test.  
   - Trade‑off: memory vs false‑positive rate (FP).  
   - Combine with a fallback store (e.g., cache or database) for actual data.

**3️⃣ Step‑by‑step reasoning**  
   1. **Choose Bloom Filter parameters** – size `m`, number of hash functions `k` based on expected URL count `n` and desired FP rate `p`.  
   2. **Insert URLs** into the filter as they arrive (or during batch load).  
   3. **Query path**:  
      * Compute k hashes → check bits.  
      * If any bit is 0 ⇒ URL definitely absent → return “not seen”.  
      * If all bits are 1 ⇒ possible presence → probe the secondary store to confirm.  
   4. **Handle updates** – either rebuild periodically or use a counting Bloom Filter for deletions.  

**4️⃣ Common traps to avoid**  
   - Assuming no false positives; remember Bloom Filters can say “maybe present” incorrectly.  
   - Under‑estimating `m` → too many FPs, causing unnecessary DB hits.  
   - Forgetting about hash collisions or using poor hash functions (e.g., default string hash).  
   - Ignoring that Bloom Filters don’t support deletions unless you use a counting variant.

**5️⃣ Sanity‑check & verbalize**  
   - Verify the FP formula: `p ≈ (1 – e^(–k*n/m))^k`.  
   - Cross‑check memory usage vs. expected traffic.  
   - Explain to stakeholders: “We’ll instantly rule out 99% of absent URLs in RAM; only ~0.1% will go to the database.”  

By following this scaffold, you can confidently design a Bloom‑filter‑based URL query system that balances speed, space, and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
