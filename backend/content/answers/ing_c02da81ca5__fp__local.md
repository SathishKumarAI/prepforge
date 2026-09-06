---
qid: ing_c02da81ca5__fp__local
question: Explain softmax and the temperature parameter. How do you compute softmax
  stably, and where does temperature show up across ML?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 814
total_tokens: 999
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:43-05:00'
sources: []
---

**Why we need softmax**

We are given a vector of *logits* \(z=(z_1,\dots ,z_K)\) that encode how strongly each class is preferred, but logits can be any real number.  
To turn them into a valid probability distribution we must enforce two constraints:

1. **Non‑negativity** – every probability must be ≥0.  
2. **Unit mass** – the probabilities must sum to 1.

The exponential function satisfies (1) and, when normalised, (2). Thus the *softmax* is the unique map that turns logits into a categorical distribution while preserving relative ordering of the logits.

---

### Softmax formula

\[
p_k=\frac{\exp(z_k)}{\sum_{j=1}^{K}\exp(z_j)}
\]

The denominator is the **partition function** \(Z(z)\). It is precisely the *log‑sum‑exp* (LSE) of the logits and guarantees that \(\sum_k p_k = 1\).

---

### Stable computation

Direct exponentiation can overflow when any \(z_k\) is large.  
Use a shift that does not change the ratios:

```python
shifted = z - max(z)
exp_shifted = np.exp(shifted)
p = exp_shifted / exp_shifted.sum()
```

Because all logits are reduced by \(\max(z)\), the largest exponent becomes \(e^0=1\) and the others are ≤ 1, preventing overflow while preserving exact probabilities.

---

### Temperature (β)

Softmax can be parametrised with a *temperature* \(T>0\):

\[
p_k(T)=\frac{\exp(z_k/T)}{\sum_j \exp(z_j/T)}
\]

Equivalently, set \(\beta=1/T\) and write \(\exp(\beta z_k)\).  
Temperature is the inverse of an *effective* temperature in a Boltzmann distribution:

- **High \(T\)** (small β): logits are “softened”; probabilities become more uniform, increasing entropy.  
- **Low \(T\)** (large β): logits are sharpened; the largest logit dominates, producing near‑deterministic choices.

---

### Where temperature appears

| Context | Role of \(T\) |
|---------|---------------|
| **Classification** | Temperature‑scaled softmax is used for *knowledge distillation* and calibration. |
| **Beam search / decoding** | Low temperatures force greedy behaviour; high temperatures encourage diversity. |
| **Reinforcement learning** | Softmax policies use temperature to trade off exploration vs exploitation. |
| **Sampling from language models** | Temperature controls how “creative” the generated text is. |

---

### Non‑obvious insight

Temperature does **not** merely scale probabilities; it rescales *information content*.  
From an information‑theoretic view, \(T\) tunes the Shannon entropy of the categorical distribution exactly like a physical temperature tunes the disorder of a system. Thus, adjusting \(T\) is equivalent to performing *controlled annealing* on the probability landscape: as \(T\to 0\), we “freeze” into the mode; as \(T\to\infty\), we “heat up” until all outcomes become equiprobable. This perspective explains why temperature can be viewed simultaneously as a hyperparameter for exploration, calibration, and regularisation across ML tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
