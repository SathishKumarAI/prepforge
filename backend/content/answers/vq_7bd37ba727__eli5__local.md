---
qid: vq_7bd37ba727__eli5__local
question: WHAT IS A DEADLOCK IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 187
total_tokens: 343
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:22-05:00'
sources: []
---

Imagine two chefs (processes) trying to use the same stove burner (database lock). Chef A puts a pot on the burner and starts cooking, while Chef B wants to put his own pot on that same burner but has to wait because it’s busy. Meanwhile, Chef A needs something from Chef B’s kitchen—say, a special spice—but Chef B can’t move until Chef A finishes cooking. Each chef is waiting for the other to release what they need, so neither can finish.

In SQL this situation is called a **deadlock**: two or more transactions hold locks that each needs from the other, creating a circular wait. The database detects this and kills one transaction (the victim) so that the others can continue, preventing the system from stalling forever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
