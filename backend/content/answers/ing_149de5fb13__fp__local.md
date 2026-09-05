---
qid: ing_149de5fb13__fp__local
question: 'Q: When would you use Self-Consistency vs Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 465
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:06-05:00'
sources: []
---

**Why choose Self‑Consistency (SC) over Best‑of‑N (BoN)?**

Both SC and BoN aim to reduce hallucinations by aggregating multiple model outputs, but they differ in *how* that aggregation is justified.

1. **Fundamental problem:** A language model produces a distribution \(p(y|x)\). We want a single answer that maximizes expected utility under an unknown reward function \(R(y,x)\).  
2. **BoN rationale:** Sample \(N\) i.i.d. draws \(\{y_i\}\), then pick the one with highest *heuristic* score (e.g., log‑probability or a separate evaluator). This is a *maximum likelihood* estimate under the assumption that higher probability correlates with higher reward.  
3. **SC rationale:** Re‑sample conditioned on each candidate \(y_k\) to obtain a distribution of “consistent” completions \(\{y_{k,j}\}\). If many draws agree, they are likely near a mode that is robust to the model’s stochasticity. SC exploits *posterior consistency*: the probability mass around a correct answer concentrates as we condition on it.  

**When to use each?**

| Situation | Preferred Method |
|-----------|------------------|
| **High‑stakes factual queries** where the reward function is unknown and you need maximal confidence | SC – its consensus signal is tighter than BoN’s single best‑guess. |
| **Time‑critical or compute‑limited tasks** where a quick, good‑enough answer suffices | BoN – fewer samples, still benefits from diversity. |
| **Tasks with subtle trade‑offs (e.g., style, creativity)** | BoN – you can pick the variant that best matches an external criterion. |

**Non‑obvious insight:** SC’s power comes not just from averaging but from *conditioning on the answer itself*. This transforms a noisy posterior into a sharper estimate of the mode, effectively performing a lightweight form of Bayesian inference without extra cost. BoN treats samples independently, missing this concentration effect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
