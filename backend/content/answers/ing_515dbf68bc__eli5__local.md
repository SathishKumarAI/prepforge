---
qid: ing_515dbf68bc__eli5__local
question: How does dropout work - and what changes between training and inference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 216
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:46:06-05:00'
sources: []
---

Dropout is like playing hide‑and‑seek with a classroom of students who are learning to solve math problems.  
During **training**, before each practice session the teacher randomly hides some students (drops them out). The remaining students must still finish the problem together, so they learn to rely on many different teammates and don’t become dependent on any single one.  

When it’s time for a real test (**inference**), none of the students are hidden; everyone is present. To keep the team’s performance steady, the teacher scales each student’s contribution down by the probability that they were dropped out during training. This way, the full group still works as if each member had only been part of a fraction of the practice sessions.

So, dropout randomly removes units while training to prevent over‑reliance on any one feature; at inference all units stay active but their outputs are scaled to match the average effect of having been dropped out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
