---
qid: ing_b62fb9f027__think__local
question: 'Explain: Coding: given a repository snapshot (path → content), build a
  Merkle tree and write the function that returns which files changed between two
  snapshots without comparing every file''s content.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 427
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:58:48-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - We have two *snapshots* of a repository: each is a mapping `path → file‑content`.  
   - A **Merkle tree** will hash every leaf (file) and combine hashes upward to produce one root per snapshot.  
   - Goal: return the set of paths that differ, without hashing/comparing every individual file between snapshots.

**2️⃣ Mental model / framework**  
   - Treat each snapshot as a *hash‑tree* where internal nodes represent directory hashes.  
   - Two snapshots are identical iff their root hashes match.  
   - If roots differ, recursively walk both trees in parallel: compare child hashes; diverging subtrees must be examined further.

**3️⃣ Step‑by‑step reasoning**  
   1. Build the Merkle tree for each snapshot (leaf hash = `hash(content)`).  
   2. Compare root hashes; if equal → no changes.  
   3. If unequal, traverse both trees simultaneously:  
      * For a given directory node, list its children keys.  
      * For every key present in one but not the other → record as added/removed.  
      * For common keys, compare child hashes; recurse only where they differ.  
   4. Accumulate paths from all divergent leaves.

**4️⃣ Common traps to avoid**  
   - Forgetting that directory hash changes if any file inside changes.  
   - Comparing every leaf even when parent hashes match (wasteful).  
   - Not handling added/removed files: they appear only in one tree’s children list.

**5️⃣ Sanity‑check & communicate**  
   - Verify that identical snapshots produce no output and differing ones list exactly the changed paths.  
   - Explain the algorithm as “hash‑tree diff” to stakeholders, emphasizing logarithmic comparisons versus linear file‑by‑file checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
