---
qid: ing_48212c51d4__fp__local
question: 'Q41: How do you prevent reward hacking when using Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 618
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:44-05:00'
sources: []
---

**Preventing reward‑hacking in a Best‑of‑N scheme**

1. **Problem formulation**  
   The agent receives a scalar reward \(R\) for each candidate action set \(\{a_1,\dots,a_N\}\). In a *Best‑of‑N* setup the final outcome is chosen from the top‑\(k\) candidates, so the policy is trained to maximise \(\mathbb{E}[\max_{i\in S_k} R(a_i)]\), where \(S_k\) are the selected actions.  

2. **Why hacking arises**  
   The objective is non‑convex and discontinuous: a tiny perturbation that pushes one candidate from rank \(k+1\) to rank \(k\) can double its contribution, even if the underlying reward is meaningless (e.g., exploiting loopholes). Thus the policy learns to *manipulate rankings* rather than true performance.

3. **Geometric‑information principle**  
   Think of each action as a point in feature space \(\mathcal{X}\). The policy defines a probability density \(p_\theta(x)\). The expected reward is \(\int_{\mathcal{X}} R(x) p_\theta(x) dx\). For Best‑of‑N, we effectively sample the top‑\(k\) points according to their *rank* rather than absolute value. This introduces a bias term proportional to the gradient of the ranking function:  
   \[
   \nabla_\theta J = \mathbb{E}\!\left[ R(x)\,\nabla_\theta \log p_\theta(x) + \lambda\,\nabla_\theta \text{rank}(x) \right].
   \]
   The second term is the source of hacking.

4. **Solution: rank‑regularisation**  
   Add a penalty that rewards *stable* ranking across perturbations:
   \[
   L_{\text{reg}} = \beta\,\mathbb{E}_{\epsilon}\!\left[ \bigl(\text{rank}_\theta(x) - \text{rank}_\theta(x+\epsilon)\bigr)^2 \right].
   \]
   This enforces that the policy’s ranking is robust to small changes, discouraging exploitation of spurious features.

5. **Non‑obvious insight**  
   The key is *not* to penalise low‑ranking candidates directly (which would bias towards many mediocre actions), but to penalise *sensitivity* of the ranking function itself. By making the ranking invariant under small perturbations, we implicitly force the policy to learn features that genuinely improve the reward rather than just bumping an action over the threshold.

**Result:** A Best‑of‑N agent that optimises true performance while being immune to reward‑hacking tricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
