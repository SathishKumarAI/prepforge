---
qid: ing_c0f8ecfb7d__faang__local
question: 'Explain: Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 433
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *spaced repetition* as described on Wikipedia, plus why it matters in ML‑based learning systems. I’ll assume they’re looking for the algorithmic intuition and its application to memory models.

**Approach**  
1. Define spaced repetition in plain terms.  
2. Highlight key parameters (inter‑review interval, forgetting curve).  
3. Explain the typical algorithmic forms (e.g., SM-2 from SuperMemo).  
4. Connect to ML: how reinforcement learning or Bayesian inference can tune intervals.

**Depth**  
Spaced repetition is a memory‑enhancement technique that schedules review of information at increasing intervals to counteract exponential forgetting (Ebbinghaus). In practice, an algorithm tracks each item’s *strength* \(s\) and computes the next interval \(I_{next}=f(s)\), often using a decay function or logistic curve. The classic SM‑2 rule:  
\(I_1=1,\; I_2=6,\; I_n = I_{n-1}\times 2^{(q/5)}\) where \(q\in[0,5]\) is the quality of recall. Modern systems replace hand‑crafted formulas with Bayesian models or bandit algorithms that learn optimal schedules from user data, enabling adaptive spacing at scale.

**Edge cases**  
- Cold start: no prior performance → default short intervals.  
- Forgetting catastrophes if a learner skips many reviews → interval caps.  
- Over‑spaced items may never be reinforced; need a minimum review frequency.

**Optimize & communicate**  
Emphasize that spaced repetition is not just a heuristic—it’s an evidence‑based algorithm that can be tuned with ML to improve retention rates by ~2× compared to massed practice, which is why companies like Duolingo integrate Bayesian interval predictors. Conclude by noting the trade‑off between computational overhead (maintaining per‑item state) and user engagement gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
