---
qid: ing_b7947fa628__eli5__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 285
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:32-05:00'
sources: []
---

Imagine your AI is a helpful robot librarian. Sometimes it says “I’m sorry, I can’t help with that” even when the request is fine—like the librarian shutting the door on someone who just wants to read a book she knows exists. That’s *over‑refusal*.

**Diagnosing it**

1. **Track refusals** – note which topics or words trigger a “no.”  
2. **Compare with policy** – check if the request truly violates any safety rule (e.g., disallowed content).  
3. **Ask for examples** – give the AI a few legitimate requests that are similar to see if it still refuses.

**Fixing it**

1. **Adjust thresholds** – lower the sensitivity of the refusal filter so it only blocks genuinely risky input.  
2. **Add context clues** – train the model with more examples where the same wording is safe, so it learns the difference.  
3. **Fine‑tune policy** – update the safety rules to remove unnecessary bans that caused false positives.

Think of it like tweaking a spam filter: you want to catch real junk but let all good emails through. The goal is a balance—no over‑refusal, no unsafe content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
