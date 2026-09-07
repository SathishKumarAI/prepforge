---
qid: ing_e066f53453__faang__local
question: 'Explain: Tries: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 476
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:06-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *tries*—a prefix‑tree data structure often used for string lookup—and why they matter in machine learning (e.g., fast feature hashing, auto‑completion). I’ll assume the audience knows basic trees and wants a concise, interview‑style explanation.

**Approach**  
1. Define the trie formally.  
2. Explain construction & query operations.  
3. Highlight ML use‑cases and trade‑offs vs hash tables or suffix arrays.  

**Depth**  
A *trie* (prefix tree) stores keys as paths from the root: each node represents a character, and edges encode transitions. The root is empty; leaf nodes mark complete words. Inserting `“cat”` creates nodes C→A→T, with a flag at T.  

- **Insertion**: O(L), where L is key length.  
- **Search**: same O(L).  
- **Space**: O(Σ · N) in worst case (Σ alphabet size, N total characters), but shared prefixes compress memory dramatically.  

In ML, tries enable *prefix‑based feature extraction* (e.g., n‑gram counts), *tokenization*, and *efficient lookup for large vocabularies* without hashing collisions. They also support fast longest‑prefix matching, useful in language models for beam search or sequence labeling.

**Edge cases**  
- Empty strings: represented by a root flag.  
- Non‑ASCII alphabets: need larger child maps or radix compression.  
- Very long keys: depth can become a bottleneck; path compression (radix trees) mitigates this.

**Optimize & communicate**  
Trade‑offs: tries use more memory than hash tables for sparse alphabets but avoid collision resolution and provide ordered traversal. For large vocabularies, *compressed* or *ternary* tries reduce space. In an interview, I’d emphasize the O(L) deterministic access versus expected O(1) in hashes, and note that for ML workloads where L is bounded (e.g., words), tries offer predictable latency and prefix queries—critical for real‑time NLP pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
