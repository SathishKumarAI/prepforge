---
qid: ing_ac84306227__star__local
question: 'Explain: Greedy (8 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:31-05:00'
sources: []
---

**Situation**  
I was prepping for a technical interview at a fintech startup where they asked me to solve the “Greedy” section of the NeetCode 150 list—eight classic problems that all share the same underlying strategy.

**Task**  
My goal was to demonstrate how a greedy approach works: pick the locally optimal choice at each step, prove it leads to a globally optimal solution, and implement it efficiently in Python.

**Action**  
I started with **Activity Selection**, using a sorted list of intervals by finish time and iteratively picking the earliest finishing activity that doesn’t conflict. For **Interval Scheduling Maximization**, I extended this idea to weighted intervals, using dynamic programming after sorting. In **Minimum Number of Arrows to Burst Balloons**, I transformed each balloon into an interval, sorted by end coordinate, then shot arrows at the rightmost point. The **Job Sequencing with Deadlines** problem was solved by sorting jobs by profit and filling a deadline array greedily. For **Maximum Subarray (Kadane)**, I kept a running sum, resetting when it went negative. **Coin Change (Greedy)** required a canonical coin system; I sorted denominations descending and subtracted as many as possible. In **Gas Station**, I scanned once, tracking current gas and the last deficit to find the start index. Finally, **Burst Balloons** (LeetCode 312) used a two‑pointer greedy to burst balloons from outer edges inward.

**Result**  
I completed all eight problems in under an hour each, achieving O(n log n) time for sorting‑based ones and O(n) for linear scans. My solutions passed the full test suites with minimal memory overhead. I learned that while greedy works when a local optimum guarantees global optimality, careful proof or counterexample is essential before applying it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
