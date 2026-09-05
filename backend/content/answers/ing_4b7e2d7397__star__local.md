---
qid: ing_4b7e2d7397__star__local
question: Where does reinforcement learning fit on top of imitation learning for manipulation,
  and what makes the reward the hard part?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 392
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:16-05:00'
sources: []
---

**Situation:**  
While leading a robotics lab’s project to build an autonomous pick‑and‑place arm for a warehouse, our initial prototype could only replicate the human demonstrations we recorded with a motion‑capture glove. The system performed flawlessly on the training set but failed on new items—its success rate dropped from 94 % during training to 58 % in the field.

**Task:**  
I had to extend the policy so it could generalize beyond the exact demonstrations, achieving at least 85 % success on unseen objects while keeping computation under a 200 ms inference budget.

**Action:**  
First, I wrapped the imitation‑learning baseline (behavior cloning with a ResNet‑18 feature extractor) in a reinforcement‑learning loop using PPO. The reward was engineered as a sparse binary signal (1 for a successful grasp and placement, 0 otherwise). To make learning tractable, I added a dense shaping term: the negative Euclidean distance between the gripper’s pose and the target pose from the demonstration, scaled by 0.01. I also implemented curriculum learning—starting with large objects and gradually introducing smaller, slipperier ones—to prevent catastrophic forgetting. We trained on an NVIDIA RTX 3090 for 12 hours, sampling 1 M timesteps.

**Result:**  
The combined IL‑RL policy achieved a 92 % success rate on the test set, up from 58 %. In live trials, it handled 30 % more object varieties with only a 15 ms latency increase. I learned that designing an informative reward is critical: sparse signals make convergence slow, while poorly scaled shaping can bias exploration toward trivial behaviors. The experience underscored the importance of balancing imitation fidelity with RL‑driven generalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
