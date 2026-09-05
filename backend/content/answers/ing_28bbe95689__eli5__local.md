---
qid: ing_28bbe95689__eli5__local
question: 'Explain: screen of user or POS right so — Google Docs System design | Part
  1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 337
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:40:17-05:00'
sources: []
---

Imagine a group of friends drawing the same picture on a shared whiteboard that’s floating in the cloud.  
Each friend can scribble, erase, or change any part at any time, but they all want to see everyone’s updates instantly and keep the picture consistent.

**Operational Transformation (OT)** is like having an invisible “tape recorder” for every stroke you make.  
When one person draws a line, the recorder captures that action as a *command* (“draw line from A to B”).  
If two friends draw at the same time, the system rewrites those commands so they can be applied in any order and still end up with the same final picture. It’s a smart re‑ordering trick that guarantees everyone sees the same result.

**Differential Synchronization (DiffSync)** is another way to keep the whiteboard in sync.  
Instead of recording every tiny stroke, each friend sends only the *differences* between their current drawing and what they saw last time (“I added a circle here”).  
The server merges those differences with the master copy, then pushes back any new changes to everyone else. Think of it as sending just the parts that changed, like a quick text message instead of re‑sending the whole picture.

Both OT and DiffSync let many people edit the same document simultaneously, each “screen” staying up‑to‑date while avoiding conflicts—just like friends keeping their shared whiteboard looking identical no matter who draws next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
