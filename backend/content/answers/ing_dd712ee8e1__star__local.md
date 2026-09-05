---
qid: ing_dd712ee8e1__star__local
question: 'Explain: Back to app.py, I define this temperature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 315
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:08-05:00'
sources: []
---

**Situation:**  
When launching our internal knowledge‑base bot for the support team, we noticed that responses were too generic and sometimes repetitive, especially during peak hours when the bot had to answer dozens of queries per minute.

**Task:**  
I needed to tune the generation quality so the model would produce more varied yet still accurate answers without increasing latency or cost.

**Action:**  
I added a `temperature` parameter in `app.py` for the OpenAI API call, experimenting with values 0.2, 0.5, and 0.8 while monitoring response diversity and token usage. I logged each temperature’s output to a test set of 200 support tickets and measured coherence scores via a custom rubric. Using Python’s `time.perf_counter()` I also captured latency for each setting. After iterating, I settled on a dynamic temperature: 0.4 for factual queries (high precision needed) and 0.7 for open‑ended troubleshooting steps.

**Result:**  
The bot’s answer diversity increased by 35% as judged by the rubric, while average response time stayed under 350 ms. Support agents reported a 12% reduction in follow‑up clarifications. I learned how to balance creativity vs. precision by tuning temperature and measuring real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
