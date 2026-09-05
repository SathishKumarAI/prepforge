---
qid: ing_e863dbb1c4__eli5__local
question: 'Explain: Q112: Your agent performs well on short tasks but degrades badly
  past 30 minutes of autonomous work. Diagnose and fix it using context engineering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 314
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:13-05:00'
sources: []
---

Imagine your AI is a student who can take notes for a single class (short task) but gets overwhelmed when the semester stretches beyond a few weeks. The “context” it carries—its memory of earlier questions, answers, and goals—is like the notes in its notebook. When those pages fill up or get shuffled, the student forgets what they were studying, so performance drops.

**Diagnosis:** Your agent’s context window (the amount of text it can keep in mind) is too small for continuous work. After about 30 minutes, new information pushes out older, still‑relevant data, causing confusion and errors.

**Fix with context engineering:**
1. **Chunking** – Break the long session into logical segments (e.g., “Morning brief,” “Afternoon deep dive”) and give each segment a fresh, concise prompt that reminds the model of its overall goal.
2. **Summarization** – After each chunk, generate a short summary of key points and feed that back in as part of the next prompt so the model never loses track of earlier progress.
3. **Prompt templating** – Use a fixed template that always includes the task objective, recent context summary, and a “What’s next?” question to keep the flow tight.

By constantly pruning and re‑introducing only the essentials, your agent behaves like a well‑organized student who stays on top of the semester no matter how long it runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
