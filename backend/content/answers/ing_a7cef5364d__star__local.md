---
qid: ing_a7cef5364d__star__local
question: 'Explain: Devin can now Schedule Devins — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:28-05:00'
sources: []
---

**Situation**  
At my last company we had a quarterly sprint where the front‑end team was consistently overrun because our release calendar was built manually in Excel. Every month, the product owner would spend hours reconciling feature priority with developer capacity, and any change to scope caused cascading delays.

**Task**  
I was tasked with automating that planning process so we could generate a data‑driven schedule for each sprint, predict how many “Devins” (development hours) were needed per story, and adjust the backlog in real time without manual rework.

**Action**  
First I collected 18 months of historical commit logs, issue timestamps, and cycle times from Jira. Using scikit‑learn’s RandomForestRegressor, I trained a model that predicted story completion time based on feature type, complexity score, and past velocity. I wrapped the predictor in an API with FastAPI and exposed it to our Azure DevOps pipeline. Then I built a lightweight React dashboard that pulled the model’s output, visualized the sprint capacity vs. planned work, and allowed the product owner to drag‑and‑drop stories while instantly seeing updated “Devin” counts and risk alerts.

**Result**  
The new system cut manual planning time from 3 hours per sprint to under 10 minutes, increased on‑time delivery by 27 % (from 65 % to 92 %), and reduced the number of overtime shifts by 35 %. I learned that blending historical data with a simple tree‑based model can give actionable scheduling insights without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
