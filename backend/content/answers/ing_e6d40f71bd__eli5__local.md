---
qid: ing_e6d40f71bd__eli5__local
question: 'Explain: XI. Logs — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 239
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:41-05:00'
sources: []
---

Think of a machine‑learning app as a tiny factory that churns out predictions.  
**Logs** are the factory’s whiteboard: every time something happens—an input is received, a model makes a decision, an error pops up—the app writes a short line to its log file.  

In the 12‑Factor App style, logs **must be treated as one‑way streams of plain text**. The factory never stores them; it just sends each line to a central logging service (like a post office). From there you can read, search, or archive them later.

Why?  
- **Debugging:** If the model misbehaves, you can trace back through the log lines.  
- **Audit:** You know exactly what inputs were processed and what outputs were produced.  

So, think of logs as the factory’s transparent record‑keeping—easy to read, never written to, always sent out for anyone who needs to see what happened.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
