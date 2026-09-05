---
qid: ing_38fc92b3ae__eli5__local
question: 'Explain: Why did that happen? That was because — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 309
total_tokens: 481
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:06:34-05:00'
sources: []
---

Imagine a giant kitchen where chefs (Google’s servers) must cook many dishes at once—each dish is a user’s message or file in Google Wave.  
The “why did that happen?” question refers to how the system keeps all those dishes fresh and moving smoothly, even when thousands of cooks are working simultaneously.

Under the hood, Wave uses a *distributed ledger* (a shared notebook) that records every change as a tiny note called an **operation**. Think of each operation like a single ingredient added to a recipe. All servers read the same notebook, so they know exactly what ingredients are in the pot at any moment. When you type a new line, Wave writes one operation to the ledger; every other user’s copy of the page instantly updates because everyone watches the same notebook.

The trick is that operations are **immutable**—once written, they never change. That means if two chefs try to add different ingredients at the same time, both notes survive and are merged automatically. The system then resolves conflicts by ordering the notes (like sorting recipe steps) so every cook sees a consistent final dish.

So “that happened” because Google Wave’s core is this shared, immutable ledger that lets many users edit the same page in real time without stepping on each other’s toes—just like a well‑coordinated kitchen where every ingredient is tracked and blended together smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
