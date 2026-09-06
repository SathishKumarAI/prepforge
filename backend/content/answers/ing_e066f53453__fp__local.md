---
qid: ing_e066f53453__fp__local
question: 'Explain: Tries: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 519
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:03-05:00'
sources: []
---

**Why Tries Exist**

When we need *prefix‑based* operations—autocomplete, dictionary lookup, longest‑common‑prefix queries—the natural cost is \(O(L)\) per string, where \(L\) is its length. A linear scan over all stored keys would be \(O(nL)\). The trie solves this by **organizing the set of strings into a shared prefix tree**: each node represents a common prefix, and edges correspond to characters.

**Construction & Invariants**

- Root = empty string.
- For each key \(s=s_1s_2\ldots s_k\), walk from root following edges labeled \(s_i\); create missing nodes.
- Mark the terminal node of every key (often with a boolean or count).

This guarantees that *any* prefix appears as some node. Querying a prefix is simply walking along its characters; if we ever miss an edge, no string shares that prefix.

**Space–Time Trade‑off**

A naïve trie uses \(O(nL)\) nodes, but each internal node may have many null children. **Radix or compressed tries** collapse chains of single‑child nodes into one edge labeled by the whole substring, reducing height to the longest common prefix length and keeping time linear in the *effective* depth.

**Deeper Insight**

A trie is essentially a **prefix‑aware hash table**: each node implicitly stores a *hash prefix* (the path label). Thus it supports not only exact matches but also *range queries* over prefixes by traversing subtrees. This dual role explains why tries are optimal for problems like longest‑common‑prefix and dictionary compression—because they embed both deterministic navigation (like a hash) and ordered traversal (like a tree).

> **Non‑obvious takeaway:**  
> In many applications, the trie’s *branch factor* is the bottleneck. By storing children in a **hash map** instead of an array, we preserve \(O(L)\) lookup while keeping space proportional to actual distinct prefixes—an elegant blend of hashing and tree structure that CS61B emphasizes for real‑world data sets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
