---
qid: ing_b87652072c__faang__local
question: How do you construct the data mixture for a fine-tune to prevent capability
  regressions - and how do you validate the mixture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 515
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:52:08-05:00'
sources: []
---

**Clarify**  
We’re asked: *How to build a training‑data mixture for fine‑tuning an LLM so that it doesn’t lose existing abilities (“regressions”), and how to validate that the mixture works?*  
Key assumptions:  
1. Base model already has broad capabilities (e.g., code, math, language).  
2. Fine‑tune is targeted (domain X) but must preserve prior skills.  
3. We have access to labeled validation sets for both target and preserved tasks.

**Approach**  
1. **Stratify the data** into *core* (existing abilities), *target* (new domain), and *boundary* (overlap).  
2. **Balance sampling**: maintain a ratio that keeps core samples ≥ 10‑fold higher than target, to prevent catastrophic forgetting.  
3. **Curriculum schedule**: start with mixed batches, then gradually shift weight toward target while monitoring core loss.

**Depth**  
- Use *elastic weighting* (e.g., Elastic Weight Consolidation) or *parameter isolation* (adapter layers) so the model can add capacity without overwriting shared weights.  
- During training, compute separate validation losses: \(L_{\text{core}}\), \(L_{\text{target}}\).  
- Define a **regression metric**: \(R = L_{\text{core,new}} / L_{\text{core,base}}\); require \(R \le 1.05\) to accept the fine‑tune.  
- Complexity: training remains \(O(N)\) per batch; additional overhead is minimal (extra loss terms).

**Edge Cases**  
- If target data contains concepts that conflict with core knowledge (e.g., medical terminology vs. general safety), the model may learn contradictory rules—test with adversarial prompts.  
- Small core datasets can cause overfitting; augment with synthetic paraphrases.  
- Evaluate on *zero‑shot* tasks not present in either set to catch hidden regressions.

**Optimize & Communicate**  
Iteratively adjust sampling ratios and curriculum weights based on \(R\). Document the process: “We kept core loss within 5 % while improving target BLEU from 0.45 to 0.62.” This shows controlled growth without degradation, satisfying FAANG interviewers’ focus on structured reasoning, clear communication, and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
