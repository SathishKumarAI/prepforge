---
qid: ing_fffe1835b6__star__local
question: 'Explain: Score within context — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:35-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were launching an AI‑driven fraud detection model for credit card transactions. The product team insisted on a single “fraud score” threshold to trigger alerts, but early pilots showed the model’s precision dropped sharply when applied across different merchant categories and geographies.

**Task:**  
I needed to redesign our evaluation framework so that stakeholders could understand how each transaction’s fraud score was meaningful within its specific context—merchant type, country, time of day—and use those insights to set dynamic thresholds instead of a one‑size‑fits‑all cut‑off.

**Action:**  
I built an “AI Evals Comprehensive Study Guide” module in Python that wrapped the model outputs with contextual metadata. Using SHAP values and local surrogate models, I generated per‑transaction explanations highlighting which features drove the score. I then aggregated these explanations by context (e.g., “high‑risk category: electronics”) and plotted ROC curves for each slice to quantify trade‑offs. The guide also integrated a lightweight web UI that let analysts tweak thresholds on the fly and instantly see the impact on false positives/negatives across contexts.

**Result:**  
After deploying the contextual scoring system, we cut false‑positive alerts by 35 % while maintaining a 99 % detection rate for high‑risk merchants. The dynamic thresholding reduced manual triage hours from 120 to 45 per week. I learned that embedding context into AI scores not only improves accuracy but also builds trust with non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
