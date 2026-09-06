---
qid: ing_5eb5dde552__fp__local
question: Compare SFT, RLHF, DPO, and RLVR for improving an instruction-tuned model.
  What data does each need, and when would you pick which?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 567
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:26:02-05:00'
sources: []
---

**Why fine‑tune a language model at all?**  
An instruction‑tuned base already knows how to parse prompts, but it is trained on *generic* corpora that reward fluent text rather than user intent. To shift its objective toward “helpful, safe, and aligned” behavior we need data that encodes the desired preference ordering among outputs. Each method supplies such an ordering in a different way.

| Method | Core idea | Data required | When to use |
|--------|-----------|---------------|-------------|
| **SFT (Supervised Fine‑Tuning)** | Directly teaches the model *exact* responses from curated examples. | Human‑written prompt–response pairs. | Small budgets, when high‑quality demonstrations exist and we want deterministic behavior. |
| **RLHF (Reinforcement Learning from Human Feedback)** | Learns a reward model from pairwise human rankings of candidate outputs; then optimizes the policy to maximize that reward. | Prompt–output pairs + *human* ranking data (which output is better). | When you have enough human reviewers and want behavior beyond the narrow scope of demos, but still need explicit human judgment. |
| **DPO (Direct Preference Optimization)** | Trains the policy directly on preference pairs by maximizing a probability ratio that respects the observed rankings, avoiding an explicit reward model. | Same prompt–output + ranking data as RLHF, but no separate reward network. | When you want to sidestep instability of reward modeling and have plentiful pairwise feedback; cheaper inference because no reward network is needed. |
| **RLVR (Reinforcement Learning with Virtual Rewards)** | Generates synthetic *virtual* preferences by sampling the model itself or using a policy‑gradient estimator, then trains on those. | Only prompt–output pairs from the base model (no human labels). | When human labeling is prohibitively expensive; useful for early‑stage exploration but risk of propagating model biases. |

**Key insight:**  
All four methods aim to approximate the same *true* preference distribution over outputs, but they differ in how they *sample* that distribution. SFT samples a *single point* (the demo), RLHF and DPO sample from human‑generated rankings, while RLVR samples from the model’s own beliefs. Choosing among them boils down to the trade‑off between **data fidelity** (human vs synthetic) and **training stability** (reward modeling vs direct optimization). In practice, start with SFT for a strong baseline, move to DPO if you have many pairwise judgments but want simplicity, and reserve RLVR only when human data is scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
