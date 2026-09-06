---
qid: ing_cbbf22170f__fp__local
question: 'Explain: When CoT Fails (Over-thinking) — Chain Of Thought'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 393
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:13:28-05:00'
sources: []
---

**Why a “Chain‑of‑Thought” (CoT) prompt can backfire**

The core problem CoT tackles is *latent variable inference*: the model must guess an intermediate representation \(z\) that, when combined with the final step \(f(z)\), maximises the probability of the correct answer.  
Formally we want
\[
\max_{z}\; \log P(\text{answer}\mid z,\;\text{question}) + \lambda\,\mathcal{L}(z),
\]
where \(\lambda\) is a penalty for deviating from prior knowledge about \(z\).  

In practice the model samples a *long* chain of tokens \(z_1,z_2,\dots ,z_k\). The longer the chain, the higher the chance that early tokens drift into an unlikely region of the token space. Because the objective is maximised locally at each step, the model greedily prefers any plausible continuation, even if it no longer aligns with the true reasoning path. This is *over‑thinking*: the search explores a combinatorially larger hypothesis space but lacks a strong enough global constraint to prune nonsense.

**Non‑obvious insight:**  
CoT fails not because of insufficient knowledge but because **the intermediate objective is under‑constrained**. Adding a *soft* consistency loss that compares each step’s hidden state with an oracle (e.g., a distilled policy or a prior distribution over valid reasoning steps) can dramatically reduce hallucination. In other words, the model must be told “stay on track” rather than just “keep going.” This aligns CoT with constrained optimization and restores its usefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
