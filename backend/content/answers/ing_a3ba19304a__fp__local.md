---
qid: ing_a3ba19304a__fp__local
question: You want to change your agent's system prompt. How do you ship it without
  finding out from customers that you broke something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 437
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:24-05:00'
sources: []
---

When you alter a system prompt, you’re really re‑optimizing the *policy* that maps inputs to outputs under a fixed model.  
The fundamental problem is **maintaining functional equivalence** while exploring a higher‑level objective (e.g., safety, tone). The policy’s loss surface is highly non‑convex; small lexical changes can move you into a different basin, causing catastrophic forgetting of previously learned behaviors.

A principled ship‑and‑hide strategy is:

1. **Define an equivalence class**  
   Quantify the “behavioural footprint” with a *latent behavioural vector* \(b = f_{\text{embed}}(x, y)\) for a curated test suite \(\mathcal T\). Require that the distribution of \(b\) before and after change be within a statistical distance (e.g., KL ≤ ε).

2. **Use an adaptive test harness**  
   Generate synthetic prompts from your production distribution with a language‑model sampler, then evaluate \(b\). If any outlier exceeds a threshold, trigger a rollback.

3. **Deploy in a staged rollout**  
   Route 1 % of traffic to the new prompt as a “shadow” system; compare key metrics (e.g., latency, user satisfaction) against the baseline using a Bayesian A/B test that is *non‑intrusive*—the same users see both versions but only one receives the final output.

4. **Rollback by re‑instantiation**  
   Keep the previous prompt in a cache and switch back instantly if any metric deviates beyond the confidence band; no user notice is required because the system is stateless at the prompt level.

**Non‑obvious insight:**  
Because prompts are *meta‑parameters* of the inference pipeline, you can treat them as *hyper‑controls* in an online Bayesian optimisation loop. By continuously estimating the posterior over behavioural impact, you can preemptively reject changes that would shift the policy outside the acceptable manifold—effectively “shipping” the prompt without ever revealing a break to the customer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
