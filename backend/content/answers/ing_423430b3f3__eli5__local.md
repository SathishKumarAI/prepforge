---
qid: ing_423430b3f3__eli5__local
question: 'Explain: You shipped an LLM feature - how did you evaluate it? Walk me
  through the actual eval setup.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 312
total_tokens: 482
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:21:22-05:00'
sources: []
---

Imagine your new LLM feature is a chef’s special dish that you’re about to serve at a big banquet. Before sending it out, you run a *taste‑testing* session in three stages.

1. **Recipe Check (Unit tests)** – You first make sure every ingredient (token handling, prompt formatting, API calls) works exactly as written. This is like checking the recipe book for typos and measuring each spice correctly.

2. **Mock Dinner (Simulated evals)** – Next you let a small group of “taste testers” (automated prompts or real users in a sandbox) try the dish. You record how often they get the right answer, how long it takes, and whether any words sound off. Think of this as a rehearsal dinner where you spot obvious problems before the main event.

3. **Full‑Scale Gala (A/B test / live monitoring)** – Finally, you serve the dish to a random slice of your real users while keeping a side plate with the old recipe. You compare metrics—accuracy, latency, user satisfaction—and watch for any “food poisoning” signals (unexpected errors). If the new dish scores higher across the board, it’s ready for all guests.

That three‑step tasting process is how you evaluate an LLM feature: unit tests for correctness, sandbox simulations for early feedback, and live A/B testing for real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
