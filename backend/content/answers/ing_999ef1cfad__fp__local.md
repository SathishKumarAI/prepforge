---
qid: ing_999ef1cfad__fp__local
question: 'Explain: Short-Term Context Management — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 491
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:38-05:00'
sources: []
---

**Short‑Term Context Management (STCM)**  
At its core, STCM is the algorithmic discipline that keeps a language model’s internal state focused on the *relevant* portion of a conversation while discarding what no longer matters. Imagine a sliding window over the token stream: every new utterance pushes older tokens out until the window hits its capacity. The window size is not arbitrary; it is chosen to satisfy an information‑theoretic constraint.

---

### Why a finite window?

1. **Entropy bound** – A transformer’s self‑attention has complexity \(O(n^2)\) in sequence length \(n\). If we let \(n\to\infty\), the model would need unbounded memory and would violate causality: future tokens cannot influence past predictions.  
2. **Mutual information decay** – Empirical studies show that the mutual information between a token and its far‑away context decays roughly exponentially with distance. Thus, beyond a certain horizon, adding more context yields diminishing returns.

---

### The formal mechanism

Let \(C_t = \{x_{t-k+1},\dots,x_t\}\) be the current context window of size \(k\).  
The *context‑update rule* is:

\[
C_{t+1} = 
\begin{cases}
\{x_{t-k+2},\dots,x_{t+1}\} & \text{if } |C_t|=k,\\
C_t \cup \{x_{t+1}\} & \text{otherwise.}
\end{cases}
\]

This rule guarantees that the model’s attention mask always refers to a contiguous block of tokens whose length never exceeds \(k\). The *context‑pruning* step is implicit: older tokens are simply no longer referenced.

---

### Non‑obvious insight

Most people think STCM merely truncates history. In fact, it implements an **online Bayesian filter**: the window’s contents are a sufficient statistic for predicting the next token under a Markov assumption of order \(k\). By maintaining only this statistic, the model achieves optimal prediction without storing the entire past—mirroring how biological agents forget irrelevant details to conserve neural resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
