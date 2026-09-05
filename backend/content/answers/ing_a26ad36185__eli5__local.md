---
qid: ing_a26ad36185__eli5__local
question: 'Explain: F5: Audit-log gap — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 213
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:05-05:00'
sources: []
---

Think of a computer‑use agent (like a smart assistant that runs tasks on your machine) as a *digital diary writer*. Every time it does something—opens an app, moves a file, clicks a button—it should write a line in the diary so later you can read what happened.  

An **audit‑log gap** is when the diary suddenly skips entries: the agent did some work but didn’t record it. Imagine writing a book and leaving blank pages; you’ll never know who was on the street that day. In production, gaps can hide mistakes or security breaches because there’s no trace of those actions. The “gap” isn’t just missing data—it means the system wasn’t reliably telling its story, which is dangerous for debugging, compliance, and trust. Fixing it means making sure every action always gets a proper line in the log, like ensuring no page ever goes blank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
