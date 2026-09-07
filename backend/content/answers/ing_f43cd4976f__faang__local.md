---
qid: ing_f43cd4976f__faang__local
question: 'Explain: Trajectory Benchmarks — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 463
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:18-05:00'
sources: []
---

**Clarify**  
You’re asking how we measure the “trajectory” of an AI agent—its path of decisions over time—rather than just a single-step accuracy. Key assumptions: (1) agents act in sequential environments; (2) we care about long‑term outcomes, not immediate rewards; (3) we have ground truth trajectories or simulated rollouts to compare against.

**Approach**  
1. **Define the trajectory metric** – e.g., cumulative reward, deviation from an optimal policy, or similarity to a reference path.  
2. **Collect data** – run the agent in a benchmark environment (OpenAI Gym, DeepMind Lab) and record state–action sequences.  
3. **Benchmark baseline** – use either a hand‑crafted expert policy or a strong RL algorithm as ground truth.  
4. **Compute trajectory score** – apply metrics like *trajectory similarity* (DTW), *policy loss over time*, or *expected return*.

**Depth**  
- **Metric choice**: Expected cumulative reward is straightforward but ignores path structure; DTW captures shape differences and tolerates small temporal shifts.  
- **Complexity**: For N steps, computing DTW costs O(N²); approximate variants reduce to O(N).  
- **Trade‑offs**: Reward‑based metrics are easy but can be noisy; shape‑metrics capture nuance but need careful alignment.

**Edge Cases**  
- Stochastic environments may produce divergent trajectories even from the same policy.  
- Sparse rewards make cumulative reward a weak signal; trajectory similarity then dominates.  
- Agents that overfit to training traces will score high on benchmarks but fail in unseen tasks.

**Optimize & Communicate**  
Start with a simple cumulative‑reward baseline, add DTW for shape analysis, and finally report both to give a holistic view. Explain the rationale: reward shows *what* is achieved, DTW shows *how*. Highlight that a robust benchmark must balance statistical reliability (multiple runs) with computational feasibility (approximate DTW). This layered approach mirrors FAANG’s focus on clear metrics, scalability, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
