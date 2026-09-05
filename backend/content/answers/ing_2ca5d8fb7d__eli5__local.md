---
qid: ing_2ca5d8fb7d__eli5__local
question: What kinds of code-graded assertions can you use on LLM outputs, and where
  do they break down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 254
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:07-05:00'
sources: []
---

Imagine a teacher who reads your essay and then asks you three questions:  

1. **Did you answer the question?** – This is like a *content‑check* assertion that looks for key terms or ideas the model should have mentioned.  
2. **Is the style correct?** – A *style‑or‑format* check compares punctuation, tense, or a required template against a reference pattern.  
3. **Did you use evidence?** – An *evidence‑check* assertion searches for citations or examples that back up claims.

These “code‑graded assertions” are simple programs that run on the model’s text and give a yes/no score. They work well when the answer is factual, formulaic, or follows a clear rule (like spelling a list).  

They break down with things that need creativity, nuance, or personal judgment—because the model might produce a perfectly plausible but unverified explanation, or mix styles in a way that still meets the question but fails a strict pattern. In short, automated checks are great for concrete, rule‑based tasks but can miss the subtlety of human reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
