---
qid: ing_65e43b0099__eli5__local
question: An agent you shipped for a customer four months ago runs on a base model
  the provider is deprecating in 60 days. How do you swap the model without regressing
  quality, and what had to be in place beforehand for that to be possible?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 217
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:44-05:00'
sources: []
---

Imagine your agent is a house built on an old foundation (the base model). In six weeks the foundation company will stop supplying bricks, so you need to move to a new one without making the rooms collapse.

First, keep a *blueprint* of every room—this is version‑controlled code and data pipelines that tell the agent how to interpret inputs. Second, install *temporary supports* (continuous integration tests) that run each time you tweak a wall; they check that the house still stands and sounds like before. Third, set up a *monitoring system* that watches for cracks after the move.

With these in place, swapping the foundation is just replacing one set of bricks with another while the supports hold everything up. The agent keeps its quality because every change is automatically tested and verified before going live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
