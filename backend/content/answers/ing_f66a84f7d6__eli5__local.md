---
qid: ing_f66a84f7d6__eli5__local
question: What is the difference between precision and recall? How F1 combines both?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 262
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:05-05:00'
sources: []
---

Imagine you’re a librarian who wants to find every book about *quantum physics* in a huge library.  
**Precision** is the “accuracy” of your search: out of all the books you pulled out, how many are actually quantum‑physics books? If you grab 10 titles and only 7 belong, precision is 70 %.  

**Recall** is the “coverage”: of all the quantum‑physics books that exist in the library, how many did you find? If there are 20 such books and you found 15, recall is 75 %.  

The **F1 score** blends these two goals into one number. Think of it as a balanced‑scoreboard: it’s the harmonic mean (average that rewards both high precision *and* high recall). A perfect F1 of 1 means every book you fetched was correct and you found them all; an F1 near 0 means you’re missing many or pulling many wrong titles. Thus, F1 tells you how well your search is doing overall, not just one side of the trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
