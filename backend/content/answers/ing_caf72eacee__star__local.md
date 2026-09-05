---
qid: ing_caf72eacee__star__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:53-05:00'
sources: []
---

**Situation:** In a recent product launch for our conversational AI assistant, the internal QA team noticed that the model’s performance on multi-turn context handling was dropping below our SLA of 90% coherence.

**Task:** I needed to set up an automated evaluation pipeline using OpenAI’s `evals` framework to continuously measure and benchmark the assistant against a curated test suite, identify failure modes, and surface actionable insights for fine‑tuning.

**Action:** First, I designed a custom prompt template that mirrored real user dialogs and wrote a Python script to generate 5,000 synthetic conversations using OpenAI’s `chat/completions` endpoint with temperature=0.7. Next, I built an eval run by invoking `openai.eval.create()` with the test set, specifying the `model="gpt-4o-mini"` and the `metrics=["response_length", "coherence_score"]`. I leveraged the `evals.run` CLI to trigger nightly runs, storing results in a PostgreSQL table for trend analysis. Finally, I added an alerting rule in Grafana that fired when coherence dropped below 88%, enabling rapid response.

**Result:** The eval pipeline uncovered a 12% drop in coherence after a recent API update. By iterating on the prompt and adjusting temperature to 0.5, we restored performance to 93% coherence within two weeks. I learned how to orchestrate end‑to‑end evaluation workflows with OpenAI’s tools, turning raw metrics into concrete engineering actions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
