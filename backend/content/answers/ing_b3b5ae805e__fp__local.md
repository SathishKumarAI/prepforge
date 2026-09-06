---
qid: ing_b3b5ae805e__fp__local
question: 'Explain: Indexing — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 377
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:09-05:00'
sources: []
---

**Indexing – the “cheat” that turns a table scan into a binary search**

The fundamental problem is *selection* – retrieving rows whose key satisfies a predicate.  
In a naïve table scan we read every row, an **O(n)** operation.  
An index stores the keys in a sorted structure (B‑tree, hash, etc.), reducing the cost to **O(log n)** by exploiting order or exact matches.

Why must it be sorted?  
A sorted tree lets us discard half of the remaining search space at each level—an application of the *divide‑and‑conquer* principle.  
The height \(h\) satisfies \(b^h \approx n\), where \(b\) is node fan‑out; thus \(h = O(\log_b n)\).  
This logarithmic bound follows directly from the information content: each level conveys \(\log_2 b\) bits of discrimination, matching Shannon’s entropy bound for binary decisions.

Non‑obvious insight: **clustering vs. non‑clustered**.  
A clustered index physically orders rows by key; a non‑clustered one stores only keys plus pointers.  
If the query reads many contiguous rows (e.g., range scans), clustering reduces I/O dramatically because pages are already laid out sequentially.  
In contrast, for point lookups, the extra pointer indirection of a non‑clustered index is negligible compared to the cost saved by avoiding full table reads.

Thus, indexing is not merely an implementation trick; it’s an embodiment of optimal search theory applied to disk‑bound data structures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
