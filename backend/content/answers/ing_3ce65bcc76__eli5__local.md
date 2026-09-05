---
qid: ing_3ce65bcc76__eli5__local
question: 'Explain: Making the lock safe with fencing — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 231
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:16-05:00'
sources: []
---

**Imagine a shared playground where kids want to use the same swing.**  
If one child keeps holding onto the swing for too long, everyone else has to wait, and they might even push each other or break it. A *distributed lock* is like a polite “take turns” rule that works across many playgrounds (servers) so no one hogs the swing.

In practice, each server writes a tiny note (“I’m using the swing”) into a shared place—like putting a marker on a board that everyone can see. If another server reads the board and sees a note, it knows someone else is already playing and must wait. Once the first child leaves, they erase their note, letting the next one step in.

This “fencing” (adding a unique number or timestamp to each note) ensures that even if notes arrive out of order, only the most recent claim matters—so no two kids ever swing at once. The result is a fair, safe system where all parts work together without stepping on each other’s toes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
