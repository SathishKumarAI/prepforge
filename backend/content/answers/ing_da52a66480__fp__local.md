---
qid: ing_da52a66480__fp__local
question: 'Explain: Tries (3 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 581
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:56-05:00'
sources: []
---

### Why a Trie?

A *Trie* (prefix‑tree) is the minimal deterministic automaton that accepts exactly all strings of a given set.  
Formally, each node stores a character; paths from the root to a terminal node spell a word. The key property is **shared prefixes**: every edge represents a single symbol, so two words differing only after the *k*‑th letter share the first *k* nodes.  

This sharing gives us three guarantees that no other linear‑time structure can match:

1. **Fast prefix queries** – you walk one edge per input character; if any step fails, the prefix is absent.
2. **Memory locality** – all nodes of a common prefix lie close together in memory, improving cache performance.
3. **Deterministic worst‑case time** – `O(L)` where *L* is the length of the query string, independent of dictionary size.

The underlying principle is *information compression*: by collapsing identical prefixes we reduce redundancy, which is exactly what dynamic programming or suffix trees also exploit but with more overhead.

---

### Three Neetcode 150 Problems

| # | Problem | Trie use‑case | Why a Trie shines |
|---|---------|---------------|--------------------|
| **1** | *Longest Common Prefix* (LC001) | Insert all words; traverse until a node has `children != 1` or is terminal. | The longest common prefix is the deepest node shared by all words – a direct tree traversal. |
| **2** | *Word Search II* (LC212) | Build a Trie of the dictionary; DFS each board cell, pruning when current path isn’t in the Trie. | Every partial word that cannot lead to any solution is cut off immediately, cutting exponential search space. |
| **3** | *Maximum XOR of Two Numbers* (LC421) – *bit‑Trie variant* | Insert binary representations into a bit‑wise Trie; for each number, traverse opposite bits first. | By forcing opposite branches we greedily maximize the XOR value in `O(31)` per query, regardless of array size. |

---

#### Non‑obvious insight

A trie can be *augmented* to answer **range queries** (e.g., “how many words start with ‘pre’?”) by storing a counter at each node for how many terminal nodes descend from it. This turns the Trie into an implicit prefix tree that supports `count(prefix)` in `O(L)` time, which is useful for autocomplete systems and frequency‑based ranking – something most people overlook when they think of tries only as lookup tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
