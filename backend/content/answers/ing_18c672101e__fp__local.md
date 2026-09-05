---
qid: ing_18c672101e__fp__local
question: Explain speculative decoding. Why is the output provably faithful to the
  target model, and when does it actually help?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 548
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:43-05:00'
sources: []
---

**Speculative decoding: a principled speed‑up for transformer inference**

The core problem is that a large language model (LLM) must compute a huge number of softmax scores for every token it outputs—an \(O(n^2)\) operation where \(n\) is the context length.  
Suppose we have two models:  

* **Primary** – the expensive, high‑capacity target model \(T\).  
* **Draft** – a cheaper surrogate \(D\) that approximates \(T\)’s distribution but can generate tokens in parallel.

The idea is to let \(D\) *speculate* a sequence of tokens \((t_1,\dots,t_k)\) and then verify each with \(T\).  
Formally, for any token \(t_i\), we compute the acceptance probability  

\[
p_{\text{acc}}(t_i)=\frac{\exp(\theta_T(t_i))}{\sum_{j}\exp(\theta_D(t_j))},
\]

where \(\theta_T,\theta_D\) are logits from \(T,D\).  
If a token is accepted, we keep it; otherwise we reject and draw again from \(D\).  

**Why provably faithful?**  
The acceptance rule is exactly the *rejection sampling* condition that guarantees the resulting distribution equals that of \(T\), regardless of how many speculative tokens are drawn. The only requirement is that \(p_{\text{acc}}\le 1\) for all tokens, which holds because the denominator uses the draft’s (possibly over‑estimated) probabilities. Thus every accepted token has the same marginal probability as it would under \(T\).

**When does it help?**  
The speedup arises when the draft can generate many tokens in parallel before any rejection occurs—i.e., when its logits are close to those of \(T\). In practice, a small‑scale transformer or a distilled model works well. The cost trade‑off flips sharply once the draft’s accuracy drops below ≈70 %: more rejections mean extra forward passes through \(T\), erasing gains.

**Non‑obvious insight:**  
Speculative decoding is not merely “fast inference”; it is *exact* sampling from the target distribution because rejection sampling preserves the target measure. Thus, even though we use a surrogate, the output distribution remains unchanged—making speculative decoding a mathematically sound accelerator rather than an approximation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
