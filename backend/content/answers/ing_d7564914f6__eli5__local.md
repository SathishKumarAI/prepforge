---
qid: ing_d7564914f6__eli5__local
question: Explain sequence packing in SFT. What's the attention contamination problem
  and how is it solved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 248
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:15:47-05:00'
sources: []
---

Imagine you’re teaching a class of students who all need to learn the same lesson, but some desks are empty because those students have finished early. In “sequence packing” for Self‑Fed Tuning (SFT), we cram many short sentences into one big batch so the computer can train faster—just like filling up those empty desks with extra students.  

But a problem pops up: when the model looks at all the words in the packed batch, it sometimes mixes up which sentence belongs to which student. That’s the **attention contamination** issue—attention heads see signals from neighboring sentences that should stay separate.  

The fix is simple: we give each word a “seat number” (a segment ID) and tell the attention mechanism to ignore words from other seats. It’s like giving every student a name tag and saying, “Only listen to your own class.” This keeps learning clean and prevents cross‑talk between packed sequences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
