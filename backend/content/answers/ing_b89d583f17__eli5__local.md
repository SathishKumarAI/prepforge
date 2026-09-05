---
qid: ing_b89d583f17__eli5__local
question: Walk me through what happens inside the server when an LLM processes a request.
  Why are prefill and decode bottlenecked differently?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 232
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:53-05:00'
sources: []
---

Imagine the LLM as a giant recipe book that can write sentences on demand.  
When you ask it a question, the server first **prefills**: it looks up the relevant pages (the model’s knowledge) and copies the right opening lines into a working draft. This step is heavy because the whole book must be scanned to find those exact pages—like pulling a big atlas out of a shelf.

Once the draft starts, the LLM goes into **decode** mode: it adds one word at a time, checking each new line against its internal grammar rules before moving on. Here only the last few words matter, so the process is quicker and more focused, like adding sentences to a notebook rather than pulling from the whole atlas again.

Thus prefill needs to read everything first (bottlenecked by memory access), while decode works word‑by‑word with less overhead, making it faster after the initial jump.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
