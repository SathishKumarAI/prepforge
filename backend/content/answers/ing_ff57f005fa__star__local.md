---
qid: ing_ff57f005fa__star__local
question: 'Explain: Healthcare — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:28-05:00'
sources: []
---

**Situation** – In 2023 I was part of a startup that built an AI‑powered clinical decision support tool for mid‑size hospitals. Our sales pipeline stalled because clinicians were hesitant to trust the system’s recommendations, citing lack of transparency.

**Task** – My goal was to demonstrate the model’s explainability and safety so we could close contracts with two regional health systems within six months.

**Action** – I led a cross‑functional sprint: first, I integrated SHAP (SHapley Additive exPlanations) into our inference pipeline to produce per‑patient feature importance heatmaps. Second, I worked with the data science team to retrain the model on a curated subset of de‑identified EMR data that prioritized rare but critical conditions, reducing false positives by 15 %. Third, I built an interactive dashboard in Tableau that let clinicians drill down from aggregate performance metrics (AUROC 0.92) to individual case rationales, and ran a series of mock audit sessions with physicians to iterate on the UI.

**Result** – The enhanced transparency earned us signed agreements with the two health systems, boosting our ARR by $1.8 M annually. Internally, we cut model‑related support tickets by 40 % and I published a whitepaper that is now cited in three peer‑reviewed studies on AI trust in medicine. I learned that marrying rigorous explainability tools with user‑centric design can turn skepticism into adoption, especially in regulated sectors like healthcare.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
