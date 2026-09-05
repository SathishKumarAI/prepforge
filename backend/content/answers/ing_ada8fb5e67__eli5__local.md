---
qid: ing_ada8fb5e67__eli5__local
question: 'Explain: Title: GRPO Does Not Close the Multi-Agent Coordination Gap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 260
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:12:37-05:00'
sources: []
---

Think of a group of friends trying to play a cooperative game, like passing a ball around while avoiding obstacles. **GRPO (Generalized Reward‑Based Policy Optimization)** is a rule that tells each friend how to move based on the score they get after each pass—“if you passed well, do more of that.” It’s great when everyone can see all the scores at once, but in a real team each player only sees their own point total. Because GRPO lets agents act independently, they keep making moves that look good for them alone, missing the hidden “pass‑timing” tricks that would make the whole group win.

The *coordination gap* is the difference between what the group could achieve if every friend knew exactly what everyone else was doing and what it actually does when each works only with its own score. GRPO closes this gap only a little: it still relies on local feedback, so the friends can’t fully synchronize their strategies. In short, GRPO helps each agent learn from its own reward but doesn’t give them enough shared information to close the performance gap that comes from needing tight teamwork.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
