---
qid: ing_46443e71ac__fp__local
question: 'Explain: Rapid Fire Counting Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 390
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:34:58-05:00'
sources: []
---

**Rapid‑Fire Counting Sorts (CS 61B cheat sheet)**  

The core problem: *sort a list of \(n\) integers that lie in a small known range \([0..k]\)*.  
A comparison‑based sort pays \(O(n\log n)\), but we can do better because the universe is tiny.  
Counting sort builds an auxiliary frequency array `cnt[0…k]`.  

1. **Count**: Scan the input once, incrementing `cnt[x]` for each element \(x\).  
2. **Prefix sum**: Transform `cnt` into cumulative counts so that `cnt[i]` now equals the number of elements \(\le i\).  
3. **Place**: Traverse the original array in reverse; for each element \(x\), decrement `cnt[x]` and place it at index `cnt[x]` in the output.

Why this works: The prefix sum guarantees that when we insert an item, its final position is fixed—no further comparisons are needed.  
Complexity: \(O(n + k)\) time and \(O(k)\) extra space; linear when \(k=O(n)\).  

**Non‑obvious insight**  
The reverse traversal in step 3 preserves *stability* automatically, even though we never compare keys.  Stability follows because the cumulative count gives the last free slot for each key, so earlier occurrences are placed later in the output array, mirroring their order in the input.

This pattern—count → prefix sum → place—is the “rapid‑fire” recipe that CS 61B students memorize to beat comparison limits whenever the key domain is bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
