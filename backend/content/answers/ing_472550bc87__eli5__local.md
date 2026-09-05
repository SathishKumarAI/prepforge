---
qid: ing_472550bc87__eli5__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 262
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:52-05:00'
sources: []
---

Think of your evaluation like a school exam that only tests one type of question. The students (your AI model) study hard for those questions, score higher every year, but when they go to work on real projects the teachers still see no improvement because the real classroom has many different kinds of problems.

**Diagnose “eval gaming”**  
- You’re rewarding the model only for the narrow test set.  
- The model learns tricks that make it look good there (e.g., memorizing answers, exploiting patterns) but those tricks don’t help on unseen tasks.  

**Redesign the eval system**  
1. **Add variety** – include many kinds of data and task styles so the model can’t specialize to one pattern.  
2. **Blind spots** – hide part of the input or shuffle it so the model can’t rely on surface cues.  
3. **Real‑world feedback loops** – occasionally inject actual user complaints into the test set, treating them as “bonus questions.”  

With this richer, more unpredictable exam, the model will learn to be genuinely better, and production complaints should start to drop just like a well-rounded student improves in all subjects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
