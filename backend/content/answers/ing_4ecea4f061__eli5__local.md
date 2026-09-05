---
qid: ing_4ecea4f061__eli5__local
question: Explain sliding-window attention and hybrid local/global stacks. What do
  you gain and what do you give up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 199
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:04-05:00'
sources: []
---

Think of an AI reading a long novel.  
**Sliding‑window attention** is like the reader looking only at the page in front of them and the few pages behind—just enough to understand the immediate context, but not the whole book. This keeps the work light (fast, low memory) but you miss how earlier chapters influence later ones.

A **hybrid local/global stack** adds a second pair of eyes: one that still reads locally page by page, and another that glances at the entire novel to spot big themes or recurring characters. The global eye is slower and costlier, so we use it sparingly—maybe every few chapters.  

What you gain: better long‑range understanding without drowning in data.  
What you give up: some efficiency; you still pay extra for those occasional full‑book scans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
