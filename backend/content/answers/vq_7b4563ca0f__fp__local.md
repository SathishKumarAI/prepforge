---
qid: vq_7b4563ca0f__fp__local
question: What is the definition of accuracy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 359
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:39-05:00'
sources: []
---

**Accuracy (in supervised classification)**  

1. **Fundamental problem** – An algorithm must map inputs \(x\) to discrete labels \(y\).  
2. **Objective** – Minimise the probability that a random input is mis‑labelled, i.e. minimise \(\mathbb{P}[\hat y(x)\neq y]\).  
3. **Optimality condition** – For any distribution over \((x,y)\), the Bayes classifier achieves the smallest possible error; accuracy is simply \(1\) minus that error.  
4. **Definition** –  
\[
\text{Accuracy}= \frac{\#\{i:\hat y_i=y_i\}}{N}
= 1-\frac{\#\{i:\hat y_i\neq y_i\}}{N},
\]
where \(N\) is the number of test samples.  
5. **Connection to deeper principles** – Accuracy is the empirical estimate of the expectation \(\mathbb{E}_{(x,y)}[\mathbf 1_{\{\hat y(x)=y\}}]\), a simple loss (0‑1). It reflects *information* retained about \(y\) and links to entropy: higher accuracy implies lower conditional entropy \(H(Y|\hat Y)\).  
6. **Non‑obvious insight** – Accuracy ignores class imbalance; two models can share the same accuracy yet differ drastically in expected utility for a decision problem. Thus, while mathematically clean, accuracy alone may misguide when the cost of errors varies across classes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
