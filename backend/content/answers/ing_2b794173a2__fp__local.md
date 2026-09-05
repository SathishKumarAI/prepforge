---
qid: ing_2b794173a2__fp__local
question: 'Explain: Perplexity AI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 450
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:01-05:00'
sources: []
---

**Perplexity as an Interview Lens**

*Fundamental problem.*  
When a language model (LM) predicts the next token \(x_t\) given history \(\mathbf{x}_{<t}\), it assigns probability \(p(x_t|\mathbf{x}_{<t})\). The interviewer wants to know whether a candidate can *measure* how “surprised” the LM is on unseen data, i.e., its generalisation quality.  

*Why perplexity works.*  
Perplexity is defined as
\[
\text{PP}(\mathcal{D}) = 2^{-\frac1{|\mathcal{D}|}\sum_{x \in \mathcal{D}}\log_2 p(x)}.
\]
This is the exponentiated *cross‑entropy* between the empirical distribution of \(\mathcal{D}\) and the model’s predicted distribution. The cross‑entropy is an upper bound on the KL divergence, so a lower perplexity guarantees that the model’s predictions are close to the true data distribution in an information‑theoretic sense.  

*Deeper principle.*  
Perplexity is essentially the *effective branching factor* of the LM: how many candidate tokens it “thinks” could follow each context on average. This connects to entropy rate and predictive coding; a well‑trained model has a low branching factor because its predictions are concentrated.

*Non‑obvious insight.*  
Because perplexity is an exponential of cross‑entropy, small differences in log‑probability get magnified dramatically. Thus, when comparing models, even a 0.01‑bit improvement per token can halve the perplexity over long sequences. Interviewers often ask candidates to explain this amplification to test their grasp of logarithmic scaling and its impact on evaluation metrics.

In short, perplexity is not just a score—it’s a bridge between probability assignments, information theory, and practical model calibration, making it an ideal coding‑problem probe in AI interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
