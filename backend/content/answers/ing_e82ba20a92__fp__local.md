---
qid: ing_e82ba20a92__fp__local
question: You're using pass@ k instead of majority vote—doesn't that make the results
  invalid?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 433
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:46-05:00'
sources: []
---

**Why “pass‑@ k” can still give meaningful judgments**

Suppose a model is trained to rank \(N\) candidate answers for each query.  
The *fundamental problem* it solves is: **find at least one correct answer as high in the list as possible**.  
If we evaluate with majority vote (accuracy), we only care whether the top‑ranked item is correct, ignoring useful information that a correct answer might appear just below the first position.

Define \(P_{\text{pass}@k}\) as the probability that *any* of the first \(k\) ranked items is correct.  
Mathematically,
\[
P_{\text{pass}@k} = 1-\prod_{i=1}^{k}(1-p_i),
\]
where \(p_i\) is the probability that item \(i\) is correct.  
This expression shows that *pass‑@ k* aggregates complementary evidence: each rank contributes an independent chance of success, and the metric is **monotonic** in each \(p_i\).  

Thus, unlike accuracy, pass‑@ k respects the ranking structure; it rewards models that place correct answers early even if not first.  
From an optimization viewpoint, maximizing pass‑@ k aligns with minimizing the *expected rank* of a correct answer—an information‑theoretic objective: we want to reduce uncertainty about where the correct item lies.

**Non‑obvious insight:**  
Because \(P_{\text{pass}@k}\) is a *concave* function of the individual probabilities, improvements in lower ranks (e.g., moving a correct answer from position 10 to 5) have a larger marginal impact than similar moves at higher positions. Hence, pass‑@ k naturally encourages models to improve tail performance—a property often overlooked when only accuracy is considered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
