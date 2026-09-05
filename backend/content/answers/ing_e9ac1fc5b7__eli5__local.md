---
qid: ing_e9ac1fc5b7__eli5__local
question: 'Explain: very simple manner as soon as a — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 225
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:12-05:00'
sources: []
---

Think of Google Docs like a shared whiteboard that several kids can scribble on at once.  
**Operational Transformation (OT)** is the rule‑book that keeps everyone’s notes from getting tangled. Imagine each kid writes a new word or erases a line; OT takes that change, figures out where it belongs relative to every other child’s edits, and reorders or rewrites the whole board so all kids see the same picture without losing anyone’s work.

**Differential Synchronization (DS)** is a simpler version of that idea. Instead of sending every single stroke, DS sends only the *difference* between what a kid had before and what they have now—like a quick “I added ‘hello’ after line 3.” The server merges those small differences with everyone else’s changes, keeping all boards in sync.

Both methods let many people edit simultaneously, but OT is more powerful for complex conflicts, while DS is lighter and easier to implement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
