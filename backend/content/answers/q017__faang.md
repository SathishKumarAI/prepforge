---
qid: q017
question: "Explain Reinforcement Learning from Human Feedback (RLHF)."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the three-stage pipeline and *why* it's used—aligning an LLM with human preferences that are hard to specify as a loss function.

**Approach** — Motivate the problem, walk the three stages, then note limitations and alternatives.

**Depth** — RLHF fine-tunes a pretrained LLM to produce outputs humans prefer—helpful, honest, harmless—because "good response" can't be written as an explicit loss. Three stages: (1) **Supervised fine-tuning (SFT)**—train the base model on human-written demonstrations of good responses. (2) **Reward modeling**—humans rank multiple model outputs for the same prompt; a separate reward model is trained to predict these preference scores. (3) **RL optimization**—the LLM (policy) is optimized against the reward model, typically with PPO, to maximize predicted reward while a KL-divergence penalty keeps it close to the SFT model so it doesn't degenerate or "reward hack."

**Edge cases** — Failure modes: reward hacking (exploiting flaws in the reward model), reward-model overoptimization, sycophancy (telling users what they want), and bias from the human labelers. It's expensive and hard to scale human labeling.

**Optimize & communicate** — I'd mention cheaper/newer alternatives: DPO (Direct Preference Optimization) skips the explicit RL loop, and RLAIF uses AI feedback (e.g., Constitutional AI) to scale labeling. Narrating "SFT teaches format, the reward model captures preference, RL optimizes toward it under a KL leash" shows I understand each stage's role.
