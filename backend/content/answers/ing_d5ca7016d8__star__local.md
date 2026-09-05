---
qid: ing_d5ca7016d8__star__local
question: How would you build a deterministic replay harness for agent evals, and
  what does it genuinely buy you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 311
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:24-05:00'
sources: []
---

**Situation:** In my last role at a robotics startup, we were training reinforcement‑learning agents on simulated factory floors. Our nightly evaluation runs would sometimes pass one week and fail the next due to nondeterministic physics and random seeding in the simulator.

**Task:** I needed to build a deterministic replay harness so that every agent evaluation could be reproduced exactly, enabling us to debug failures, compare policy updates, and audit safety regressions without re‑running costly simulations from scratch.

**Action:** I wrapped the simulator in a lightweight checkpointing layer using Python’s `pickle` for state snapshots and a custom RNG seed manager. Every time an episode finished, we stored the full state vector and random seeds to S3 with a SHA‑256 hash as the key. For replay, the harness re‑instantiated the simulator from that snapshot, reset the RNGs, and ran the agent policy step‑by‑step while logging sensor outputs to a compressed protobuf log. I also added an integration test that automatically flagged any divergence beyond 1e-6 in state vectors.

**Result:** We cut debugging time by 70 %—from hours of re‑simulation to minutes of replay—and reduced simulation costs by ~40 %. More importantly, the deterministic logs let us trace a policy’s failure back to a specific sensor noise pattern, improving our safety validation pipeline and giving stakeholders confidence that performance metrics were truly reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
