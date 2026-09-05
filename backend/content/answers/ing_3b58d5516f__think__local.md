---
qid: ing_3b58d5516f__think__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 432
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:45:38-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants a *conceptual* explanation, not code.  
   - Assume they know basic vector similarity but may be unfamiliar with indexing strategies.  
   - Decide on a concise yet complete overview: definition → why it’s called “flat” → pros/cons vs other indexes.

**2. Pick a mental model**  
   - Treat the database as a collection of points in high‑dimensional space.  
   - Think of search as two phases: *candidate generation* (indexing) + *exact scoring*.  
   - For a flat index, candidate generation = “all points”.

**3. Step‑by‑step reasoning**  
   1. Define “flat” (no hierarchical or compressed structure).  
   2. Explain brute‑force search: compute similarity to every vector → O(N) time.  
   3. Show how this is implemented in a vector DB (simple array, contiguous memory).  
   4. Contrast with tree/graph indexes that prune the search space.  
   5. Summarize trade‑offs: simplicity & exactness vs scalability.

**4. Common traps to avoid**  
   - Don’t conflate “flat” with “unindexed”; it *is* an index (trivial).  
   - Avoid overemphasizing performance; highlight when flat is actually preferable (small N, need for 100% recall).  
   - Be careful not to claim it’s the fastest—clarify that other indexes beat it on large data.

**5. Sanity‑check & verbalize**  
   - Run through a quick example: 10k vectors → 10k distance calculations ≈ trivial on modern CPUs.  
   - Check wording for accessibility: no jargon like “hash table” unless defined.  
   - End with a one‑sentence takeaway that the user can recall: *A flat index is just a simple, exhaustive scan—exact but linear in cost.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
