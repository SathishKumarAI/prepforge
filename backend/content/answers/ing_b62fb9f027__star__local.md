---
qid: ing_b62fb9f027__star__local
question: 'Explain: Coding: given a repository snapshot (path → content), build a
  Merkle tree and write the function that returns which files changed between two
  snapshots without comparing every file''s content.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 392
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:40-05:00'
sources: []
---

**Situation:**  
At my last gig I was on a continuous‑integration team that had to roll out nightly builds of a large codebase—about 12 k files and 3 GB of source text. The build pipeline would fail if any file changed, so we needed a fast way to detect which files were different between two snapshots without hashing every file again.

**Task:**  
I was tasked with writing a utility that, given two directory snapshots (a map from path to raw content), could return the list of changed paths in under 2 seconds on my laptop, even when the repo had millions of lines.

**Action:**  
I decided to build a Merkle tree: each leaf node hashed the file’s contents with SHA‑256; internal nodes hashed the concatenation of their children’s hashes. For each snapshot I constructed a single root hash in O(n) time. To compare snapshots, I walked both trees simultaneously—if two child hashes matched I pruned that branch; if they differed I recursed into the subtrees. This reduced comparisons to only the differing sub‑branches. I implemented it in Rust for speed, using `rayon` for parallel hash computation and `serde_json` to persist tree metadata between runs.

**Result:**  
The comparison routine cut runtime from 12 seconds (full file‑by‑file diff) to 0.9 seconds on average, a 90% reduction. The tool also produced a concise list of changed files, which the CI pipeline used to trigger only the necessary unit tests. I learned that structuring data as Merkle trees lets you skip entire unchanged subtrees, turning an O(n) comparison into near‑O(k) where k is the number of changed paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
