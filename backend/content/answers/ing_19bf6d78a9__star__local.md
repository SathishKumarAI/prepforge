---
qid: ing_19bf6d78a9__star__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 391
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:54-05:00'
sources: []
---

**Situation:**  
At my last company we had a reinforcement‑learning bot that played a simple card game. Every PR hit the CI pipeline, and our quality gate required that any change not degrade win‑rate by more than 2 %. The challenge was to run this test in under five minutes on shared runners.

**Task:**  
I needed to design a lightweight evaluation harness that could be executed automatically for each pull request without waiting for full training or long rollouts, yet still give a statistically meaningful estimate of performance.

**Action:**  
1. **Snapshot the policy:** Pull the latest compiled model from the PR’s build artifacts.  
2. **Generate a deterministic seed set:** Use 100 pre‑chosen random seeds that cover the game’s state space; store them in a small CSV so tests run identically across runs.  
3. **Parallel micro‑simulations:** Spin up 4 Docker containers on the CI runner, each executing 25 episodes of the game with the seeded policy. The simulation code is pure Python and finishes in ~30 s per episode.  
4. **Statistical aggregation:** Compute win‑rate per container, then use a bootstrap confidence interval to estimate the overall mean. If the lower bound dips below the baseline minus 2 %, the PR fails.  
5. **Artifacts & alerts:** Publish the win‑rate histogram as an artifact and send a Slack message if the test fails.

**Result:**  
The pipeline now completes in ~4 minutes, with a false‑positive rate of <1 %. Across 200+ merged PRs we saw a 0.8 % average win‑rate improvement, confirming the bot’s steady progress. I learned that deterministic seeding and parallel micro‑runs can replace heavy evals while keeping CI fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
