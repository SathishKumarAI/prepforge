---
qid: ing_d0da7e6f0b__eli5__local
question: 'Q: What is "Catastrophic Forgetting" in the context of learned agentic
  memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 181
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:09-05:00'
sources: []
---

**Catastrophic forgetting** happens when a learning robot (or any AI that “remembers” things) loses all knowledge it had about one task as soon as it starts learning a new one.  

Imagine you’re an apprentice chef who has just mastered French cuisine. You then start studying Japanese cooking. If every time you learn a new recipe you erase the old French dishes from your memory, you’ll forget how to make croissants even though you still know sushi. That sudden loss of earlier knowledge is catastrophic forgetting.

In AI, this occurs because the model’s weights (its memory) are tuned for the newest data and overwrite what was stored for older tasks. Without special tricks—like replaying old examples or protecting key weights—the agent can’t keep all its learned skills simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
