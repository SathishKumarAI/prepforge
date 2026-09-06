---
qid: ing_5abd4e99cb__think__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 544
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:58:57-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What* exactly dropped? Which online metric (CTR, conversion, revenue)?  
- *When* did it happen relative to the launch timeline?  
- *Offline evals*—which metrics improved (accuracy, F1, etc.) and on what datasets?  
Assume the offline data is representative of production but may miss real‑world noise; the online drop is statistically significant.

**2️⃣ Adopt a systematic investigation framework**  
Use a **cause‑effect funnel**:  
- Data pipeline → Feature drift → Model behavior → Production environment → Feedback loop.  
Apply the **Five Whys** or a **root‑cause tree** to map symptoms to underlying causes.

**3️⃣ Step‑by‑step reasoning**  
1. *Validate data quality*: check for missing values, distribution shifts between offline and online datasets.  
2. *Feature drift analysis*: compare feature histograms before/after launch; use KS tests or Wasserstein distance.  
3. *Model calibration*: ensure probability outputs are well‑calibrated in production (e.g., via Platt scaling).  
4. *Deployment differences*: confirm that the same model version, hyperparameters, and inference code ran online.  
5. *Feedback loop effects*: if the system uses online predictions to influence data collection, a feedback loop may bias results.  
6. *External factors*: traffic spikes, new user segments, or changes in business logic.

**4️⃣ Common traps & how to avoid them**  
- **Assuming offline improvement guarantees online success**: ignore domain shift.  
- **Over‑fitting the drift test**: use cross‑validation across time slices.  
- **Neglecting latency or resource constraints** that alter inference behavior.  
- **Misinterpreting statistical noise as a real drop**: compute confidence intervals.

**5️⃣ Sanity‑check & communicate**  
- Reproduce the online metric offline on a hold‑out set mimicking production distribution; if it drops, drift is confirmed.  
- Present findings with visual diagnostics (feature shift plots, calibration curves).  
- Summarize root causes and mitigation steps: data augmentation, retraining with recent samples, recalibration, or adding an online monitoring alert system.

By iterating this loop—clarify → model → reason → avoid traps → validate—you’ll pinpoint why offline gains didn’t translate to online performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
