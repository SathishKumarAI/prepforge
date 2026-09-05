---
qid: ing_8629d0d2d2__star__local
question: 'Explain: Rishi Bommasani — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 305
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:18-05:00'
sources: []
---

**Situation:**  
During our quarterly AI strategy review at a mid‑size fintech, the product lead asked us to identify external research that could help improve our fraud detection models.

**Task:**  
I was tasked with presenting a clear, actionable overview of Rishi Bommasani’s work on *“AI for Good: A Survey of Large Language Models”* and how it could be leveraged for risk analytics.

**Action:**  
I began by summarizing his key thesis: that large language models (LLMs) can encode domain knowledge through self‑supervised pretraining, which can then be fine‑tuned on scarce labeled fraud datasets. I mapped his proposed *“prompt engineering”* technique to our existing data pipeline in Python, using Hugging Face’s Transformers and Ray for distributed inference. I also highlighted the trade‑off he discusses—higher compute vs. marginal gains—and suggested a pilot with 8 GPU nodes to benchmark precision‑recall against our baseline logistic regression.

**Result:**  
The product team approved a $120k pilot that increased fraud detection recall by 12% while keeping false positives down, and I learned how to translate high‑level research into concrete ML engineering experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
