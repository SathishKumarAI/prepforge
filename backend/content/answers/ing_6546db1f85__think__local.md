---
qid: ing_6546db1f85__think__local
question: Your ads CTR model shows a 2% offline AUC gain, but the online A/B shows
  revenue-neutral results with worse calibration. What's going on and what do you
  do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 509
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:43:47-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What’s measured offline?* 2 % AUC gain on a held‑out test set.  
- *What’s observed online?* No revenue lift, calibration actually worsened (probabilities too high/low).  
Assume: same feature distribution, similar campaign, but the online traffic may differ from the offline split; model deployed in production with real‑time constraints.

**2️⃣ Adopt a diagnostic framework**  
- **Distribution shift** → are test features representative of live users?  
- **Model mis‑calibration** → does probability output match observed click rates?  
- **Metric mismatch** → AUC ≠ revenue (utility) – need to connect ranking to monetary value.  
- **Operational constraints** → latency, feature availability, etc.

**3️⃣ Reason step‑by‑step**  
1. *Check feature drift*: compare summary statistics of training vs live data.  
2. *Validate calibration online*: plot reliability diagram or use Brier score; if probabilities are off, consider recalibration (Platt scaling, isotonic).  
3. *Align metric to business*: maybe optimize for revenue‑weighted AUC or lift instead of pure ranking.  
4. *Investigate context*: ad inventory changes, seasonality, user intent—could alter the click‑to‑purchase path.  
5. *Run a controlled rollout*: small traffic segment with recalibrated model, monitor revenue & CTR.

**4️⃣ Common traps to avoid**  
- Assuming AUC improvement guarantees revenue lift; ignore utility.  
- Ignoring that offline test set may over‑fit or be biased (e.g., only “good” users).  
- Over‑recalibrating without preserving ranking quality.  
- Failing to account for latency constraints that might force feature simplification online.

**5️⃣ Sanity‑check & communicate**  
- Summarize findings in a concise slide: drift evidence, calibration plot, revenue impact.  
- Explain why AUC gain didn’t translate (distribution shift + mis‑calibration).  
- Propose concrete actions: retrain on recent data, apply online recalibration, re‑optimize objective to revenue.  

Keep the narrative focused on *why* the metrics diverge and *what concrete steps* will bring online performance back in line with offline expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
