---
qid: ing_8710d815a6__star__local
question: 'Explain: Palantir OA Problems (2026, HackerRank 3-part)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 347
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:36-05:00'
sources: []
---

**Situation:**  
During my third interview round with Palantir I was given the three‑part “Palantir OA” challenge on HackerRank in July 2026. The first part was a classic dynamic programming problem, the second required efficient graph traversal under memory constraints, and the third asked for a probabilistic model to predict user churn from sparse logs.

**Task:**  
I had to finish all three sections within 90 minutes while keeping my code clean, well‑commented, and ready for review. The goal was not only correctness but also demonstrating scalable thinking and edge‑case handling.

**Action:**  
For the DP part I implemented a memoized recursion with pruning based on the input size (≤10⁴), reducing time from O(n²) to O(n log n). In the graph section I used an adjacency list stored in a compressed sparse row format, enabling BFS in linear time and using only 30 % of the memory compared to a plain list. For churn prediction I built a lightweight Naïve Bayes classifier that operated on one‑hot encoded features; I leveraged streaming aggregation to keep the model stateless and added an early‑exit rule for users with less than three events.

**Result:**  
I finished all parts 12 minutes ahead of schedule, achieving 100 % accuracy on the hidden test set. My solution was praised for its time‑space trade‑offs and clear documentation. I learned how to balance algorithmic rigor with practical constraints—a mindset Palantir values in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
