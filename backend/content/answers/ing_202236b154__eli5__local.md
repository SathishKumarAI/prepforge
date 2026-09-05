---
qid: ing_202236b154__eli5__local
question: Attention is O(n²) in sequence length. Where does that actually bite in
  practice - prefill vs decode?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 198
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:13-05:00'
sources: []
---

Imagine a classroom where every student has to look at every other student’s notes to decide which ones matter. In the “attention” part of an AI model, each word in a sentence checks every other word—so the effort grows like the square of the number of words (n²).  

During **prefill** (when we give the whole sentence at once), that square‑cost happens only once: the model gathers all the cross‑talk and then spits out its answer. It’s heavy, but it’s a single shot.  

In **decode** (building an answer word by word), each new word repeats the same n² check with everything seen so far. The cost keeps piling up, making long‑output generation slow or memory‑hungry. Thus, attention’s quadratic bite shows up most sharply when we keep adding words one after another.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
