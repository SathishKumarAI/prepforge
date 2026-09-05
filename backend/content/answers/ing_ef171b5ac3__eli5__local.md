---
qid: ing_ef171b5ac3__eli5__local
question: GLM has been bilingual Chinese/English since GLM-130B. What changes in tokenization,
  data, and evaluation when a model must serve both languages well?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 237
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:53:26-05:00'
sources: []
---

Imagine building a bilingual kitchen where dishes can be cooked in either Chinese or English.  
**Tokenization** is the recipe list: for a single‑language model it uses one set of ingredient names (tokens). When you add a second language, the list grows to include both sets, but you keep the same alphabetic order so the stove (the neural network) can still find each ingredient quickly.  

**Data** becomes the cookbook: instead of only Chinese recipes, you now have thousands of English ones too. The model learns that some ingredients look similar in both languages and that many cooking steps are shared, but it also sees unique patterns like “你好” versus “hello.”  

**Evaluation** is tasting tests: you must judge how well the model makes sense in each language separately and together, checking for mistakes like mixing up a Chinese verb with an English one.  
So, bilingual GLMs keep the same recipe structure, add mixed‑language data, and run separate taste tests to ensure both languages are served well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
