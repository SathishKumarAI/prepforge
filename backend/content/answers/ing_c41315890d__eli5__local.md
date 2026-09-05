---
qid: ing_c41315890d__eli5__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 228
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:53-05:00'
sources: []
---

Imagine judging a spelling bee where the judges secretly read the contestants’ cheat sheets. The results would be unfair because some kids already knew the answers. In AI, “data contamination” is like those cheat sheets—when the model sees part of its test data while it’s learning, it can memorize and score high without truly understanding.

To keep the scores honest, we use a “clean room” approach:  
1. **Strict separation** – split the dataset into training, validation, and test sets that never overlap.  
2. **Independent test set** – pull a fresh batch of data from a different source (e.g., new documents or user logs) that the model has never seen.  
3. **Blind evaluation** – run the model on this unseen set without giving it any feedback, just like judges scoring blindly.

By treating the test set as brand‑new material and preventing any leakage, we ensure the results reflect genuine performance, not memorized tricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
