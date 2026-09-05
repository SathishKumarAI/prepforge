---
qid: ing_49e72fb976__star__local
question: 'Explain: Concept Explanation Framework (ETA) — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:09-05:00'
sources: []
---

**Situation** – While leading the data‑science team at a fintech startup, we had to onboard new hires on our proprietary AI model that predicted credit risk. The onboarding deck was confusing; junior analysts struggled to grasp how feature importance fed into the final probability score.

**Task** – I needed to design a concise, repeatable explanation method so every engineer could quickly explain the model’s decisions to both technical and non‑technical stakeholders within 10 minutes.

**Action** – I created an ETA (Explain–Talk–Apply) framework.  
1. **Explain**: I mapped each feature to its contribution using SHAP values, visualizing them with a waterfall chart in Python’s `shap` library.  
2. **Talk**: I scripted a 90‑second narrative that highlighted the top three drivers (e.g., debt‑to‑income ratio, payment history) and how they interacted via a simple equation.  
3. **Apply**: I built an interactive Jupyter notebook where users could tweak feature values and instantly see the impact on risk score, demonstrating causality.

**Result** – Within two weeks, new hires reported 70 % faster comprehension of the model, and during stakeholder demos we reduced Q&A time by 40 %. The ETA framework was later adopted company‑wide for all AI projects, and I presented it at a regional conference, receiving positive feedback on its clarity and practicality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
