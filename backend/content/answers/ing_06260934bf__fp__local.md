---
qid: ing_06260934bf__fp__local
question: Compare Kaplan and Chinchilla scaling laws. What did Chinchilla change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 468
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:49-05:00'
sources: []
---

**From the “law of diminishing returns” to an optimal compute‑data trade‑off**

Kaplan et al. (2020) formalized that *model quality* \(Q\) scales as a power law with **compute** \(C\):
\[
Q \;\propto\; C^{-\alpha},
\]
with the exponent \(\alpha\simeq0.25\).  The underlying principle is that, in the asymptotic regime, each additional forward–backward pass yields less improvement because the model’s capacity is already saturated relative to the data it has seen.

Chinchilla (Hoffmann et al., 2022) recognized a *missing variable*: the size of the training dataset \(D\).  
By re‑deriving the scaling law from first principles—optimizing for the total number of tokens processed per parameter—they showed that
\[
Q \;\propto\; D^{-\beta}\,C^{-\gamma},
\]
with \(\beta\simeq0.5,\;\gamma\simeq0.25\).  The key change is the *balance*:
\[
C_{\text{optimal}} \;\approx\; k\,D^{2/3},
\]
i.e., for a fixed budget, one should **under‑parameterize** and **train longer on more data** rather than simply cranking up parameters.

**Non‑obvious insight:**  
The diminishing returns in Kaplan’s law stem from *data redundancy*—each new parameter learns the same patterns already captured. Chinchilla’s adjustment shows that once the data–parameter ratio is optimal, adding more compute yields marginal gains because the model cannot generalize beyond what it has seen. Thus, efficient scaling is a geometry problem: you’re not expanding the model’s “volume” but its *effective dimensionality* relative to the data manifold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
