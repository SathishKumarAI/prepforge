---
qid: ing_a3f3815734__eli5__local
question: The space of possible conversations is effectively infinite. How do you
  evaluate a conversational agent before launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 223
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:58:15-05:00'
sources: []
---

Imagine building a giant library where every book is a possible conversation the AI could have. You can’t read all of them, but you can test how well it picks good books for different readers.  

**Evaluation** is like giving the AI a set of “sample shelves.” We hand it many real‑world prompts (questions, jokes, complaints) and ask it to write replies. For each reply we check three things:  
1. **Correctness** – does it answer the question?  
2. **Tone** – is it friendly, professional, or off‑track?  
3. **Safety** – does it avoid hate speech or misinformation?  

We score these checks with simple rubrics and let them decide if the AI is ready for launch. If a reply fails one test, we tweak the model or add more training data until the scores improve. This “sampling” method lets us judge an effectively infinite conversation space without reading every book in the library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
