---
qid: ing_5b0bb11417__faang__local
question: 'Explain: Title: Training language models to follow instructions with human
  feedback'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 488
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:05-05:00'
sources: []
---

**Clarify**  
We’re asked how large‑scale language models (LLMs) can be trained to obey instruction prompts using human feedback. Key assumptions: (1) we have a base model fine‑tuned on next‑token prediction; (2) users provide “instruction” and “desired answer” pairs; (3) we can collect human judgments comparing multiple outputs.

**Approach**  
1. **Collect Instruction–Response Data** – Curate a dataset of prompts + correct answers.  
2. **Reward Model Training** – For each instruction, generate several candidate responses with the base model. Human raters rank or score these candidates. Use these rankings to train a neural reward predictor that maps (instruction, response) → scalar reward.  
3. **Reinforcement Learning (RL)** – Treat the LLM as an agent; maximize expected reward via policy‑gradient methods (e.g., Proximal Policy Optimization). The policy is the language model’s probability distribution over tokens conditioned on the instruction and partial output.

**Depth**  
- *Reward Model*: typically a transformer that concatenates instruction + response, outputs a scalar. Trained with cross‑entropy on human‑derived ranks.  
- *RL Step*: at each decoding step, sample a token, compute cumulative reward from the reward model, update weights to increase probability of high‑reward trajectories.  
- *Safety*: incorporate constraint penalties (e.g., toxicity) into the reward or via post‑processing.

**Edge Cases**  
- Ambiguous instructions → reward model may overfit; test with paraphrased prompts.  
- Hallucinations: human raters might penalize plausible but incorrect facts; evaluate factual consistency.  
- Long‑form generation: cumulative reward can degrade quality—test with varied lengths.

**Optimize & Communicate**  
Improvements include using *RLHF* with *self‑critical* baselines to reduce variance, caching partial outputs for faster inference, and curriculum learning (start with short prompts). I’d explain the pipeline visually, emphasize that human feedback turns an unsupervised language model into a goal‑directed agent, and highlight trade‑offs between reward fidelity and computational cost. This narrative shows structured reasoning, depth, and awareness of practical concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
