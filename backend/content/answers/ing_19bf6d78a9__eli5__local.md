---
qid: ing_19bf6d78a9__eli5__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 237
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:17:03-05:00'
sources: []
---

Think of your AI agent like a new recipe you want to bake every time you tweak it. In continuous‑integration (CI) the kitchen is automated: as soon as someone “pulls” a change, a short test run starts and finishes in under five minutes.

1. **Unit tests** – Check that each small part of your code still works (e.g., does the text‑preprocessor return the right format?).  
2. **Mocked environment** – Replace real data or external services with fake ones so the agent can run fast.  
3. **Speed‑run inference** – Run the model on a tiny, representative sample and measure latency; if it’s too slow, CI fails.  
4. **Safety check** – Verify that outputs stay within allowed ranges (e.g., no offensive words).  

If all these quick checks pass, your PR is green; otherwise you get an instant feedback loop. It’s like having a kitchen timer that tells you right away whether the dish will be ready on time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
