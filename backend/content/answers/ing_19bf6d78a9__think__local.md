---
qid: ing_19bf6d78a9__think__local
question: 'Explain: How do you test an agent in CI? Not evals - CI, on every pull
  request, in under five minutes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 563
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:26:24-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is “testing an agent”?*  We mean a deterministic or stochastic policy that interacts with an environment (e.g., OpenAI Gym) and produces actions.
- *CI constraints:* Must run on every PR, finish <5 min, no heavy evals or long rollouts.
- *Assumptions:* The code compiles, the agent’s API is stable (`act(state)`), and a small deterministic test environment exists.

**2️⃣ Mental model / framework**

Use **unit‑level integration tests** that mimic a single episode but with a *fixed*, lightweight simulator. Think of it as a “sanity check” rather than full evaluation:

- *Deterministic environment* → reproducible states.
- *Short horizon* → few steps (e.g., 10–20).
- *Fixed random seed* → no nondeterminism.

**3️⃣ Step‑by‑step reasoning**

1. **Setup minimal env**: a toy Gym env (`CartPole-v0` or custom stub) that runs quickly.
2. **Load the agent** from the PR branch (import, instantiate).
3. **Run a fixed‑length episode** with seed 42:
   - Reset env → state.
   - Loop `T` steps: `action = agent.act(state)` → step → observe reward.
4. **Assert sanity checks**:
   - No NaNs or infinities in actions.
   - Actions within action space bounds.
   - Episode terminates before horizon (to catch infinite loops).
5. **Collect simple metrics** (cumulative reward, steps survived) and compare against a *baseline* stored from the last good build. If reward drops by >X% → flag.

All of this can be written in ~100 lines of Python/pytest and will run <30 s on a CI runner.

**4️⃣ Common traps to avoid**

- **Heavy rollouts:** don’t run full episodes; keep horizon tiny.
- **Randomness:** forget seeding → flaky tests.
- **Environment dependency:** if the agent uses external services, mock them or skip in CI.
- **Baseline drift:** update baseline only after manual review.

**5️⃣ Sanity‑check & communication**

- Run locally first to confirm pass/fail logic.
- Add a comment in PR templates: “Agent sanity tests passed – reward ≈ baseline ± 10%.”
- Keep logs minimal but include the seed and episode length for reproducibility.

By following this quick, deterministic loop you can confidently catch regressions in agent code on every pull request while staying well under the five‑minute CI budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
