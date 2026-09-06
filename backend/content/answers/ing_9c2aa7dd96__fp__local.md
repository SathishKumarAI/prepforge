---
qid: ing_9c2aa7dd96__fp__local
question: 'Explain: Perplexity AI Interview Questions — My 2026 Perplexity AI Interview
  Process and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 399
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:21-05:00'
sources: []
---

**Perplexity: the “entropy” of a language model**

At its core, perplexity measures how surprised a statistical model is by a test set.  
If a model assigns probability \(p_i\) to each token \(i\), perplexity is  

\[
\text{PP} = 2^{-\frac1N\sum_{i=1}^{N}\log_2 p_i}
        = \exp\!\bigl(\tfrac1N H(p)\bigr),
\]

where \(H(p)\) is the Shannon entropy of the predictive distribution.  
Thus, perplexity is simply an exponentiated average surprise: a lower value means the model’s predictions are more concentrated and accurate.

Why interviewers love it:

* **Optimization view** – Minimizing cross‑entropy (the log loss in training) is equivalent to minimizing perplexity; both reflect how well the model fits data.
* **Probabilistic sanity check** – A perplexity of 1 means perfect certainty, while a value close to the vocabulary size indicates utter ignorance.  
* **Benchmarking across scales** – Because it’s normalized by token count, we can compare GPT‑3 with a tiny n‑gram model on the same corpus.

**Non‑obvious insight:** Perplexity conflates *model capacity* and *data quality*. A huge model trained on noisy data may still achieve low perplexity simply because it memorizes frequent patterns, masking overfitting. Thus, when interviewing candidates, ask how they would decompose perplexity into “fit” versus “memorization” components (e.g., via held‑out vs. in‑distribution splits). This probes a deeper understanding of generalisation beyond surface metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
