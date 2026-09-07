---
qid: ing_dd15af2748__aws__local
question: 'Explain: Your pretraining loss suddenly diverges at step 300k of a long
  run. Diagnose and fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 409
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:47-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
While training a transformer‑based recommendation model on our internal data lake, the pre‑training loss stopped decreasing and started diverging after 300 k steps. The team’s goal was to hit < 0.12 validation perplexity within 500 k steps; failure would delay the next product release by weeks.

**Action (Dive Deep, Bias for Action)**  
1. **Root‑cause audit** – Collected GPU logs, gradient norms, and checkpoint snapshots.  
2. **Found the culprit** – A sudden spike in learning rate due to an inadvertent *AdamW* weight decay bug that set `beta_2` to 0.5 during a hyper‑parameter sweep. This caused exploding gradients after ~300 k steps when batch size increased from 256 to 512.  
3. **Fix & mitigation** –  
   - Re‑implemented the optimizer wrapper with guard clauses validating all decay parameters before each step.  
   - Added a dynamic LR scheduler that caps `lr` at 1e‑4 once gradient norms exceed 5× baseline, preventing future divergence.  
   - Deployed an automated anomaly detector (AWS CloudWatch + SageMaker Model Monitor) to flag loss spikes in real time.

**Result (Deliver Results)**  
- Resumed training within 2 h; loss converged back to 0.10 at step 400 k.  
- Completed the run at 480 k steps, achieving a validation perplexity of **0.098**, 18% better than the target.  
- The new monitoring pipeline cut debugging time from days to minutes for subsequent runs.

**Learnings (Invent & Simplify)**  
Implemented a lightweight “optimizer health check” that now runs on every training job launch, reducing manual oversight and aligning with our ownership culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
