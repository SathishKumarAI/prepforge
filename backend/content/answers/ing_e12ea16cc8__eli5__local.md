---
qid: ing_e12ea16cc8__eli5__local
question: 'Explain: Binary Search Variations — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 252
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:17-05:00'
sources: []
---

Imagine you’re looking for a particular song on a huge, neatly ordered CD rack—each CD is labeled with its release year and the list is sorted from oldest to newest. **Binary search** is like asking “Is this song older or newer than the one I want?” If it’s too old, you skip the first half of the rack; if it’s too new, you skip the second half. You keep halving until you find the exact CD.

In a system‑design interview, variations of this idea help solve real problems:

- **Binary search on answer**: Find the smallest capacity that fits all users (e.g., minimum servers to handle traffic).  
- **Lower/upper bound search**: Count how many items meet a criterion—like “how many orders were placed after 6 PM?” by finding the first order after that time.  
- **Search in rotated arrays**: Locate a file when folders have been shuffled but still remain mostly ordered.

Each variant tweaks the simple “half‑the-list” rule to answer specific design questions, keeping the search fast and predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
