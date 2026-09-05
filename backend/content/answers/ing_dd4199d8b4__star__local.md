---
qid: ing_dd4199d8b4__star__local
question: 'Explain: Data Structures Runtime Table: Ordered as (Average Runtime / Worst
  Runtime) - inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 348
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:37-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with building a recommendation engine that had to process millions of user‑item interactions in real time for an e‑commerce client. The team’s prototype was slow; our search queries were taking over 2 seconds, which would break the user experience.

**Task:**  
I needed to analyze and optimize the data structures we used for indexing so that lookup times stayed below 200 ms under peak load while still supporting updates at a high rate.

**Action:**  
I created a runtime table (inspired by the Big O cheat sheet) comparing common structures: arrays, hash maps, balanced trees, B‑trees, and skip lists. I benchmarked each against our workload using Python’s `timeit` and measured average vs worst case times. For example, I found that a hash map offered 10 µs average lookup but could degrade to O(n) in collision‑heavy scenarios, whereas a balanced tree gave ~20 µs consistently. I then refactored the engine to use a hybrid approach: a hash map for hot items and an AVL tree for cold ones, adding lazy rebalancing to keep worst‑case performance bounded.

**Result:**  
Lookup latency dropped from 2 seconds to 180 ms on average, with worst‑case never exceeding 250 ms. The system handled a 5× traffic spike without degradation. I learned how empirical benchmarking and a clear runtime table can guide data‑structure choices in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
