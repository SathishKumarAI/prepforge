---
qid: ing_290cca5aa1__eli5__local
question: 'Explain: ​ Evaluator inputs — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 229
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:40-05:00'
sources: []
---

Imagine you’re a chef preparing a new recipe and you want your diners to judge how it tastes.  
In LangChain, the **evaluator** is that diner’s voice, but instead of tasting food it checks an AI model’s answer.  

*Evaluator inputs* are the ingredients the evaluator needs:  
1. **Prompt** – the original question or instruction the user gave.  
2. **Response** – the AI’s reply you want to judge.  
3. **Ground truth** (optional) – a reference answer that shows what “good” looks like.  
4. **Context** – any extra information the model used, such as documents it retrieved.  

Just as a chef needs the recipe and ingredients before tasting, the evaluator needs these pieces of data to score the response accurately. Once all are supplied, LangChain runs the chosen evaluation method (e.g., “is the answer correct?” or “does it follow the style?”) and returns a clear score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
