---
qid: ing_5677c7e4f0__eli5__local
question: 'Explain: Just before you leave… — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 229
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:54-05:00'
sources: []
---

Imagine you’re at a huge party and you want to know how many different guests are there without asking everyone to hand out a name tag.  
You hand each guest a small “stamp” that records only the first few digits of their phone number. You keep all those stamps in a tiny notebook, but if two guests share the same stamp you just overwrite it with the larger value—so you never store more than one copy per stamp.

That notebook is **HyperLogLog (HLL)**, a clever data‑structure for counting distinct items when memory is tight.  
*Hash* maps each item to a random-looking number; *registers* are the little slots that remember the longest streak of zeros in those hashes. The algorithm updates registers by taking the maximum seen so far and then uses a simple formula to estimate the total unique count from all registers.  
Result: you get an approximate answer with only a few kilobytes, great for massive data streams where exact counting would explode memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
