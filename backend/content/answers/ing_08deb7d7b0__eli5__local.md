---
qid: ing_08deb7d7b0__eli5__local
question: Design memory that persists across sessions for an assistant. How is it
  different from managing context within a session?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 211
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:43-05:00'
sources: []
---

Imagine your assistant as a friendly house‑maid who cleans up after you each day (the *session*). During that day she keeps a list of what you asked and remembers it while you’re still in the same room. When you leave, she puts everything back to normal—no notes left on the counter.

Now think of *persistent memory* as a filing cabinet in her office. Whenever you give her a new task, she writes a short note into that cabinet: “User likes coffee with oat milk.” The next time you come back, even if it’s months later, she pulls out that note and remembers your preference. This is different from the day‑to‑day list because it survives when you’re not there; it lives in storage rather than fleeting memory.

So, session context is like a temporary to‑do list for one visit, while persistent memory is a long‑term filing system that keeps useful information across all visits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
