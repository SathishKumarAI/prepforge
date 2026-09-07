---
qid: ing_945b60080b__faang__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:29:10-05:00'
sources: []
---

**Clarify**  
The client’s bot is stochastic (e.g., GPT‑style). We need to verify that it consistently meets quality metrics—accuracy, safety, latency—even though each response varies. I’d confirm the following:  

1. What “correctness” means for the domain (factually correct, policy‑safe, user‑satisfied?).  
2. The acceptable variance thresholds (e.g., 95 % of responses must be safe).  
3. Which metrics are observable (response time, length, safety flags).

**Approach**  
1. **Generate a large test set**: seed prompts covering edge cases and typical queries.  
2. **Run multiple iterations per prompt** to capture the distribution of outputs.  
3. **Automate scoring** with:  
   * Rule‑based checkers (regex, policy filters).  
   * ML classifiers for toxicity or factuality.  
4. **Aggregate statistics** (mean, variance, percentile) and compare against SLAs.

**Depth**  
- For each prompt `p`, execute `N` times → `{r₁,…,r_N}`.  
- Compute metric `M(r)` per response.  
- Aggregate: `μ_M(p)=Σ M(r_i)/N`, `σ_M(p)=sqrt( Σ (M(r_i)-μ_M)^2 / N )`.  
- Flag violations if `μ_M` or any percentile falls outside thresholds.  
Complexity: O(P·N) time, O(N) memory per prompt; feasible with distributed workers.

**Edge Cases**  
- Prompts that trigger rare model behaviors (e.g., hallucinations).  
- Non‑text outputs (images, code snippets).  
- System failures or latency spikes.  
Testing should include “corner” prompts and synthetic adversarial inputs.

**Optimize & Communicate**  
After baseline passes, we can reduce `N` for stable prompts while increasing it for high‑variance ones—adaptive sampling.  
Report dashboards showing per‑prompt distributions, trend over time, and drift alerts.  
Explain that non‑determinism is managed statistically: we don’t expect identical answers but a bounded distribution of quality metrics, ensuring user trust and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
