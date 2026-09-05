---
qid: ing_e066f53453__star__local
question: 'Explain: Tries: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:31-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, we were building an anomaly‑detection model that had to flag suspicious credit‑card transactions in real time. The raw data included customer names and transaction descriptions, and we discovered that many fraudulent patterns were hidden in rare prefixes of the description strings.

**Task**  
I needed to create a fast lookup structure that could store all known malicious prefixes and return matches in sub‑millisecond time so the model could score each transaction on the fly without blocking the streaming pipeline.

**Action**  
I implemented a trie (prefix tree) in C++ using `unordered_map<char, Node*>` for child pointers. Each node stored a flag indicating whether a prefix was “blacklisted” and the associated risk score. I pre‑loaded the trie from a CSV of 120 k known malicious prefixes, pruning unnecessary branches to keep memory under 250 MB. During inference, I traversed the trie character by character for each transaction description; as soon as a node with a risk flag was hit, I added its weight to the anomaly score and broke out early, cutting average lookup time from ~3 ms (hash‑based list) to <0.5 ms.

**Result**  
The new prefix lookup reduced latency by 80 % and increased detection precision from 82 % to 89 %. I learned how a simple data structure like a trie can dramatically improve real‑time ML pipelines when the problem is inherently sequential, and that careful memory layout (compact nodes, early exit) is key for high throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
