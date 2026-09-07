---
qid: ing_a114b2badb__faang__local
question: 'Explain: Your model hits 0.87 AUC offline, you launch it, and the business
  metric doesn''t move. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 455
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:00-05:00'
sources: []
---

**Clarify**  
You’re asked why a model with a strong offline AUC (0.87) fails to lift a key business metric after deployment.  
*Assumptions to confirm:*  
- Offline data distribution matches the live traffic.  
- Feature pipelines are identical in production.  
- The business metric is directly tied to the model’s predictions (e.g., conversion rate, click‑through).  
- There is no labeling delay or selection bias in the online feedback loop.

**Approach**  
1. **Data drift audit** – compare feature statistics pre‑ and post‑launch.  
2. **Feature parity check** – ensure every field used offline is present and transformed identically online.  
3. **Model exposure test** – verify that predictions are actually being used in the decision logic (e.g., threshold, routing).  
4. **Metric alignment** – confirm that the business KPI is sensitive to the model’s output (not dominated by unrelated factors).  
5. **A/B validation** – run a controlled experiment to isolate the model’s impact.

**Depth**  
- Compute KS/Chi‑square on feature distributions; a >5% shift indicates drift.  
- Log feature hashes and compare with offline snapshots.  
- Validate that production inference code applies the same preprocessing (scaling, encoding).  
- Check that the decision engine uses the predicted probability or rank correctly (e.g., threshold 0.6).  
- Use counterfactual analysis: if a user’s prediction were flipped, would the action change?  

**Edge Cases**  
- Labeling lag causing stale KPI signals.  
- Cold‑start users with missing features → fallback logic may dominate results.  
- Unintended business rules (e.g., caps) masking model gains.

**Optimize & Communicate**  
Present findings as a concise dashboard: drift metrics, feature parity score, decision flow diagram, and A/B lift chart. Recommend immediate fixes (re‑train on recent data, adjust thresholds) and longer‑term monitoring pipelines. This demonstrates structured problem solving, clear communication, and depth—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
