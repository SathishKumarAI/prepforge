---
qid: ing_a218a8c7fe__eli5__local
question: 'Explain: Supervised Fine-Tuning (SFT) — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 281
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:38-05:00'
sources: []
---

Imagine you have a smart robot that knows how to read and answer questions, but its answers are sometimes vague or off‑target. Supervised Fine‑Tuning (SFT) is like giving the robot a personalized training notebook.

**How it works:**  
1. **Collect examples** – You hand the robot pairs of “question” (input) and “correct answer” (label).  
2. **Teach it by example** – The robot looks at each pair, tries to predict the answer, then checks against the correct one. If it’s wrong, it adjusts its internal settings a little so the next time it will be closer.  
3. **Repeat many times** – Over thousands of examples the robot learns patterns that match your style or domain (e.g., medical advice, legal jargon).

**Fine‑tuning strategies** are simply different ways to choose those example pairs and how hard the robot should adjust each time:  
- *Strict* (small adjustments) keeps the robot’s original knowledge safe but may learn slowly.  
- *Aggressive* (big adjustments) lets it adapt quickly but risks forgetting useful general skills.

So, SFT is like a teacher giving targeted practice problems to shape a student’s answers exactly how you want them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
