---
qid: ing_943f2b0516__eli5__local
question: 'Explain: Uh, uh, is this, uh, working? Okay — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 197
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:46-05:00'
sources: []
---

Think of Google Wave as a giant group‑chat that lives on a single page.  
Every participant has a copy of the same “wave document.” When someone types or drags an image, their client sends just the change—like a note saying *“add this paragraph at line 12”*—to the server. The server keeps a log of all those notes (called a **timeline**). Whenever any user asks for the wave, the server reads the timeline and rebuilds the current page by applying every note in order.

So the “under‑the‑hood” trick is that instead of sending whole documents back and forth, Google Wave sends tiny patches that describe how to move from one version to the next. This keeps bandwidth low and lets many people edit at once without stepping on each other’s toes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
