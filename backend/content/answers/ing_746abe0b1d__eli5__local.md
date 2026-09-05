---
qid: ing_746abe0b1d__eli5__local
question: 'Explain: Title: SMOTE: Synthetic Minority Over-sampling Technique'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 239
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:09-05:00'
sources: []
---

**SMOTE – A “Copy‑Cat” for Imbalanced Data**

Imagine a classroom where most students are tall (the majority class) and only a few are short (the minority class). If the teacher wants everyone to get equal attention during a group project, she can’t just let the short kids sit alone; instead, she creates *new* short‑student “copies” by blending features of existing short kids. SMOTE does exactly that for data: it looks at each minority example and picks a nearby one (a *neighbor*). It then draws a straight line between them and randomly selects points along this line to make synthetic examples. The result is a more balanced class distribution, like a classroom where every height group has enough peers to work with.  

- **Minority class**: the under‑represented category in your data.  
- **Over‑sampling**: adding more samples to that minority class.  
- **Synthetic example**: a new data point created by interpolating between two real ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
