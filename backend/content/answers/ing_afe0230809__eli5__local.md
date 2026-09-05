---
qid: ing_afe0230809__eli5__local
question: 'Explain: RLHF and DPO (Alignment)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 204
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:08-05:00'
sources: []
---

Imagine training a robot dog to fetch a ball. **RLHF** (Reinforcement Learning from Human Feedback) is like giving the dog treats whenever it brings the ball back correctly and gently correcting it when it doesn’t. The dog learns that “good” behavior earns rewards, so over time it chooses actions that maximize those treats.

Now think of a crowded park where many dogs can get mixed up. **DPO** (Direct Preference Optimization) is a shortcut: instead of letting the dog try everything and then judging, we ask a few people to quickly rank two or three possible fetch methods—say “fetch straight” vs. “fetch around the tree.” The dog then learns directly from those rankings, choosing the method most preferred by humans.

Both methods are ways to align an AI (or robot) with what humans actually want: RLHF teaches through rewards, DPO teaches through direct preference comparisons.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
