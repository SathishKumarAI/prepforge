---
qid: ing_9a1bacc6aa__think__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 461
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:16:50-05:00'
sources: []
---

**1. Clarify the goal and scope**  
   - Identify that the user wants a *conceptual* explanation of “size‑based eviction” as used in Guava’s cache implementation (not a code walkthrough).  
   - Assume they’re familiar with basic caching but not with Guava specifics.

**2. Choose a mental framework**  
   - Treat the cache as a bounded‑capacity data structure: *key → value* mapping plus metadata (size, timestamps).  
   - Separate “policy” (when to evict) from “mechanism” (how eviction is performed).

**3. Reason step‑by‑step toward an answer**  
   1. Define what “size” means in Guava: the sum of individual entry sizes as returned by a `Weigher`.  
   2. Explain that the cache tracks this running total and compares it to a configured maximum.  
   3. When the limit would be exceeded, the policy chooses which entries to drop (e.g., LRU or custom).  
   4. Highlight that eviction is lazy: triggered on `put`/`get` operations when size constraints are violated.

**4. Watch for common traps**  
   - Don’t conflate *size‑based* with *time‑based* eviction; they’re orthogonal.  
   - Avoid oversimplifying the “weigher” concept—entries can weigh more than one unit, and null weights mean “1”.  
   - Be careful not to imply that Guava evicts only on explicit calls; it’s automatic during cache access.

**5. Sanity‑check & communicate clearly**  
   - Re‑read the explanation with a colleague or in plain language: “The cache keeps track of how big all entries are together, and if adding a new one would make it too big, it removes some old ones according to a policy.”  
   - Use analogies (e.g., a backpack with a weight limit) to reinforce intuition.  
   - Ensure the answer stays within the requested 150‑220 word range.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
