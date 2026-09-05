---
qid: ing_945b60080b__eli5__local
question: Our chatbot gives a different answer every time. How do you test something
  non-deterministic?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 236
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:53-05:00'
sources: []
---

Think of your chatbot like a weather‑forecast app that gives a different sentence each time you open it, but still follows the same rules.  
**Non‑deterministic** means “not fixed to one outcome” – every run can produce a new answer even if the question is identical.  

To test such a thing, treat each answer as a *sample* from a distribution, just like collecting many rain‑cloud photos to see how often clouds form in a city.  
1. **Run it many times** for the same prompt and record every reply.  
2. **Check consistency of intent**: does each reply still explain the same concept?  
3. **Measure variability**: count how many distinct words or phrases appear, and whether any answer is absurd or out of scope.  

If most samples stay on topic and only vary in wording, you’ve passed the test—just like confirming a weather model is reliable even though each forecast differs slightly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
