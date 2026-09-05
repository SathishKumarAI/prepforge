---
qid: ing_2dcef7f523__fp__local
question: Isn't pass@ k meaningless since you could eventually guess the right answer
  through randomly sampling k times?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 463
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:21-05:00'
sources: []
---

**Pass@\(k\) from first principles**

The core problem in retrieval‑style ML (e.g., question answering or recommendation) is *information acquisition*: we want a system that can surface the correct item among a huge candidate set with minimal queries. If a model ranks candidates, the probability that the true answer appears within the top \(k\) slots is exactly

\[
P_{\text{pass@}k}= \frac{\#\{\text{instances where rank}\le k\}}{\text{total instances}},
\]

which equals the empirical success rate of a single‑shot “guess” that stops after \(k\) probes.  

Why does this matter?  
- **Resource budget**: In practice we can afford only a handful of interactions (e.g., 10 clicks on a search engine). Pass@\(k\) tells us, *given that limit*, how often the answer is found.  
- **Information gain**: If every candidate costs equal effort, passing in the first \(k\) slots yields an information‑theoretic gain of \(\log_2 k\) bits compared to random guessing (\(\log_2 N\)). Thus Pass@\(k\) quantifies how much more efficient a model is than blind search.  
- **Calibration**: A model that scores uniformly will give \(P_{\text{pass@}k}=k/N\). Any deviation indicates useful ranking structure.

**Non‑obvious insight:**  
Pass@\(k\) is *not* just “how many random guesses hit.” It measures the *order* of the correct answer. Even if a model’s top‑\(k\) precision were 100 % but all correct items always appeared exactly at rank \(k\), Pass@\(k\) would still be high, yet the user experience would differ dramatically from having it at rank 1. Thus Pass@\(k\) implicitly rewards early success, which is critical in human‑in‑the‑loop systems where latency and effort are asymmetric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
