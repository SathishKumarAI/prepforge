---
qid: ing_15569d22cd__fp__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 558
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:38-05:00'
sources: []
---

**Context rot**  
In a long‑running agent the *context* is the set of past interactions that inform every new decision. From an information‑theoretic standpoint, each message is a random variable \(X_t\). The agent’s policy \(\pi(a|c_{1:t})\) maximises expected reward over the joint distribution of all past states. However, storing every \(X_t\) leads to *exponential blowup* in entropy: the marginal entropy of the full history grows linearly with time while the relevant mutual information between distant events decays (typically as a power or exponential). Consequently, the policy starts conditioning on noise—this is context rot.

**Why it must be compacted**  
The agent’s objective can be re‑expressed as maximizing \(I(R;C)\), the mutual information between reward \(R\) and retained context \(C\). Since \(I(R;X_t)\) decays, past observations become irrelevant. Retaining them only increases computational load and can mislead exploration. Therefore a principled strategy is to *project* the history onto a low‑dimensional sufficient statistic that preserves \(I(R;\cdot)\).

**Compaction strategies**

| Strategy | Mechanism | Theoretical basis |
|----------|-----------|-------------------|
| **Sliding window** | Keep last \(k\) tokens. | Approximation of Markov property; bounded entropy. |
| **Relevance‑weighted decay** | Weight past states by learned relevance score \(\alpha_t = f(X_{1:t})\). | Greedy maximisation of expected future reward, akin to importance sampling. |
| **Latent compression (VAE/Transformer encoder)** | Encode history into latent vector \(z\) and reconstruct only when needed. | KL‑regularised bottleneck enforces that only information useful for prediction survives. |
| **Policy‑driven summarisation** | Use the policy itself to decide what to keep: if \(\pi(a|c)\approx \pi(a|c')\), merge contexts \(c,c'\). | Policy equivalence classes minimise redundancy while preserving action distribution. |

**Non‑obvious insight**  
The *most informative* part of history is often **future‑conditioned** rather than past‑conditioned: a concise summary can be constructed by predicting the next observation and only storing the prediction error. This “predictive coding” ensures that retained bits are precisely those that cannot be inferred from current state, yielding maximal compression without sacrificing control performance.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
