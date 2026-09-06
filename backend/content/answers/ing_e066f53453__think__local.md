---
qid: ing_e066f53453__think__local
question: 'Explain: Tries: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 463
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:47:29-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Assume the user is familiar with basic CS concepts but not with tries.  
   * Define “trie” in the context of string‑based data structures (prefix trees).  
   * Note that we’ll focus on core properties, use cases, and a quick cheat‑sheet reference.

**2. Adopt a mental model / framework**  
   * Treat a trie as a rooted tree where each edge represents a character.  
   * Emphasize the key invariants: nodes store children indexed by alphabet symbols; leaves (or special markers) indicate word termination.  
   * Use “insertion → traversal → search” as the high‑level algorithmic pattern.

**3. Step‑by‑step reasoning toward the answer**  
   1. Explain the motivation (efficient prefix queries, auto‑complete).  
   2. Walk through insertion: start at root, create missing child nodes per character, mark end of word.  
   3. Show search: follow characters; if a node is missing → not present; otherwise continue until end.  
   4. Highlight space vs time trade‑offs (O(total chars) memory, O(k) lookup where k = query length).  
   5. Provide a compact cheat‑sheet table summarizing operations, complexities, and typical use cases.

**4. Common traps to avoid**  
   * Confusing “leaf” with “end of word”; remember many internal nodes can also be word terminators.  
   * Over‑emphasizing alphabet size; mention radix or compressed tries for large alphabets.  
   * Forgetting that deletion requires careful pruning or lazy marking.

**5. Sanity‑check & verbal communication**  
   * Verify each operation’s complexity by hand (e.g., insertion visits exactly k nodes).  
   * Use a concrete example (“cat”, “car”, “dog”) to illustrate node sharing.  
   * Summarize the cheat‑sheet in bullet form so the user can read it quickly and test with their own examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
