---
qid: ing_3740aef517__star__local
question: 'Explain: Dynamic Programming (9 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 322
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:48-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were tasked with building a recommendation engine that needed to predict user churn within the next quarter. The dataset had millions of interactions and our initial model was over‑fitting and taking hours to train.

**Task:**  
I had to optimize the feature engineering pipeline and reduce training time by 70% while maintaining predictive accuracy. I chose to reimplement several key sequence‑based features using dynamic programming (DP) patterns from the Blind 75 list, such as Longest Increasing Subsequence, Edit Distance, and Coin Change.

**Action:**  
I first mapped each problem to a sub‑task: computing user activity streaks (Longest Consecutive Sequence), measuring similarity between user profiles (Edit Distance), and aggregating transaction amounts efficiently (Coin Change). For each, I built memoized recursive solutions in Python with NumPy arrays for speed, then integrated them into the feature pipeline. I also benchmarked against naive implementations to validate performance gains.

**Result:**  
The DP‑based features cut training time from 4 hrs to 1.2 hrs (70% reduction). Model accuracy improved by 3%, leading to a higher churn prediction AUC of 0.82. I learned how classic DP problems translate into real‑world feature engineering, and the importance of profiling before optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
