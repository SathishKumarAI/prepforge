---
qid: ing_b2c292d811__think__local
question: Your new prompt scores 78% vs the old prompt's 74% on a 100-example eval.
  Do you ship it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 383
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:47:45-05:00'
sources: []
---

**1️⃣ Clarify the decision goal and assumptions**

- *Goal:* Determine whether to release the new prompt based solely on its higher score.
- *Assumptions:*  
  - The evaluation is representative of real‑world usage.  
  - A 4 % absolute gain is meaningful for users.  
  - No other metrics (speed, safety, bias) differ significantly.

**2️⃣ Adopt a decision‑making framework**

Use the *Cost–Benefit + Risk* model:  
- **Benefit:** higher accuracy → better user experience.  
- **Cost:** potential overfitting, hidden biases, or deployment friction.  
- **Risk:** downstream impact if the improvement is marginal or context‑specific.

**3️⃣ Step‑by‑step reasoning**

1. Compare effect size: 78 % vs 74 % → Δ = +4 %.  
2. Evaluate statistical significance (confidence intervals).  
3. Check for overfitting by validating on an unseen set.  
4. Inspect other KPIs (latency, fairness metrics) for regressions.  
5. Consider user impact: does a 4 % lift translate to measurable value?  

If all checks pass and the improvement is statistically significant with no negative side‑effects, ship; otherwise iterate.

**4️⃣ Common pitfalls to avoid**

- Assuming higher score alone guarantees overall quality.  
- Ignoring distribution shift or unseen edge cases.  
- Overlooking safety or bias regressions that can mask a numeric win.  

**5️⃣ Sanity‑check & verbalize the decision**

Re‑explain: “The new prompt improves accuracy by 4 %, which is statistically significant and does not harm other metrics, so we ship it.” If any uncertainty remains, flag for further testing before release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
