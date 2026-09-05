---
qid: ing_10fdfeb50b__star__local
question: 'Explain: 1-D Dynamic Programming (12 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:33-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup I was asked to build a quick‑look analytics tool for the sales team. They had a monthly report that listed daily revenue over the past year and wanted an instant way to find the best consecutive month‑long period to run a promotional campaign.

**Task:**  
I needed to compute, in sub‑linear time compared to brute force, the maximum sum of any 30‑day window within the 365‑day array, while also returning the start day of that window. The team expected results within milliseconds for live dashboards.

**Action:**  
I applied a classic 1‑D dynamic programming technique: sliding‑window prefix sums. I first precomputed cumulative revenue `prefix[i] = sum_{0..i-1}` in O(n). Then, for each day `j` from 30 to n, the revenue of the last 30 days is `prefix[j] - prefix[j-30]`. I iterated once over these differences, keeping track of the maximum value and its index. This reduced the problem from O(n²) brute force to O(n), using only two arrays (original data + prefix). I implemented it in Python with NumPy for vectorized operations, ensuring memory locality.

**Result:**  
The tool returned results in under 2 ms on a laptop, a 200× speedup over the naive approach. The sales team could now instantly test “what‑if” scenarios and schedule campaigns more effectively. I learned that simple DP tricks like prefix sums can turn an otherwise heavy analytics task into a real‑time feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
