---
qid: ing_97c2d5bd56__star__local
question: 'Explain: to this project at one point to — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:07-05:00'
sources: []
---

**Situation**  
I was part of a six‑person indie team building “Coding Adventure,” a mobile game that lets players learn programming by solving chess puzzles. Midway through development we noticed the in‑game hint system was too hard to beat—players were stuck on 60 % of levels, dropping daily active users.

**Task**  
My goal was to create an adaptive hint engine using machine learning that could predict when a player would need assistance and supply context‑sensitive code snippets without breaking immersion.

**Action**  
I built a supervised model in Python with scikit‑learn. Using telemetry from the first 2,000 plays, I engineered features such as move latency, error frequency, board complexity, and time spent on each node. I trained an XGBoost classifier to output a “hint probability” score for every puzzle state. The model was integrated into Unity via a lightweight C# wrapper; hints were shown only when the probability exceeded 0.75. To keep performance low, I cached predictions per session and used TensorFlow Lite for on‑device inference.

**Result**  
After deployment, hint usage dropped from 60 % to 18 %, while average puzzle completion time fell by 32 %. Daily active users rose 22 % in the first month, and we received positive feedback that hints felt “intuitive” rather than forced. I learned how to balance model accuracy with real‑time constraints and the importance of continuous A/B testing to refine user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
