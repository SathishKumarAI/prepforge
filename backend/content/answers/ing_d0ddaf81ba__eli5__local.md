---
qid: ing_d0ddaf81ba__eli5__local
question: 'Explain: Stop Sequences — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 190
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:16-05:00'
sources: []
---

Imagine you’re reading a story with a bookmark that tells you exactly where the chapter ends. **Stop sequences** work like those bookmarks for AI text generation. When an AI is asked to write, it keeps adding words one by one. A stop sequence is a tiny phrase—like “END” or “*finish*”—that signals: “You’ve reached the end; stop writing.” The inference pipeline (the system that runs the model) watches for this phrase as soon as each new word appears. As soon as it spots the stop sequence, it halts and returns everything written up to that point. This keeps answers tidy, prevents runaway sentences, and lets you control exactly where the AI should finish. It’s a simple “stop‑watch” built into the AI’s workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
