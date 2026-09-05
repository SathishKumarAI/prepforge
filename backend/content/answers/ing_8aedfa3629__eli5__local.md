---
qid: ing_8aedfa3629__eli5__local
question: 'Explain: Pseudocode — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 295
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:37-05:00'
sources: []
---

Imagine a coach (the “teacher” model) who practices a new game strategy and then shows the best moves to a student (the “student” model). In on‑policy distillation, the teacher first plays the game using its own policy—this is the *on‑policy* part. While it plays, the teacher records two things for each move:  
1) **What action it actually chose** (its real decision).  
2) **How good that action was according to a scoring system** (the *value* or *reward*).

The pseudocode is simple:

```
for many game episodes:
    run the teacher’s policy, collecting states, chosen actions, and rewards
    for each collected step:
        teach the student by training it to mimic the teacher’s action,
        weighting the loss by that step’s reward
```

So the student learns not just *which* moves look good, but also *how much* each move matters in the current game context. Think of it as a chess coach who shows a pupil which opening is best and explains why—both the move and its strategic value are taught together. This keeps the learning focused on the teacher’s own playing style (on‑policy) while letting the student internalize that style with a weighted emphasis on high‑reward moves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
