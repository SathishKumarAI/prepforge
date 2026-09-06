---
qid: ing_e8d81f3c3e__think__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 431
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:23:17-05:00'
sources: []
---

**1️⃣ Clarify the goal & context**  
- Identify what “Overlap Ratio” means in the cited paper (likely a metric comparing student vs teacher outputs).  
- Note that it’s specific to on‑policy distillation of large language models, so assume familiarity with policy gradients and knowledge distillation.

**2️⃣ Adopt a structured framework**  
- *Definition → Purpose → Computation → Interpretation*.  
  - Start by stating the formal definition (e.g., ratio of identical token predictions).  
  - Explain why we care about it (measures fidelity of distilled policy to teacher).  
  - Show how it’s calculated from logits or sampled actions.  
  - Discuss what high/low values imply for performance and sample efficiency.

**3️⃣ Step‑by‑step reasoning**  
1. **Collect outputs**: For each state, run both teacher and student policies to get action distributions.  
2. **Determine overlap**: Count tokens where the argmax (or top‑k) actions coincide.  
3. **Compute ratio**: Divide this count by total evaluated tokens or states.  
4. **Normalize if needed**: Some papers rescale by a baseline or use log‑ratio to emphasize differences.

**4️⃣ Avoid common pitfalls**  
- Don’t confuse overlap with *reward* similarity; it’s purely about action agreement.  
- Remember that overlapping actions can still have different probabilities—Overlap Ratio ignores probability mass.  
- Be careful with stochastic policies: use consistent sampling seeds or average over multiple samples to get stable estimates.

**5️⃣ Sanity‑check & communicate clearly**  
- Verify the ratio lies between 0 and 1 (or 0–100 %).  
- Compare against random policy baseline; a value near that indicates no learning.  
- Explain how the metric fits into the paper’s recipe: it guides when to stop distillation or adjust hyper‑parameters.

By following this checklist, you can articulate Overlap Ratio precisely and contextualize its role in on‑policy LLM distillation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
