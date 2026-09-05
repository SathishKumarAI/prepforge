---
qid: ing_18eea53170__star__local
question: 'Explain: How do you evaluate agents? Compare trajectory-based and outcome-based
  approaches.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 332
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:56-05:00'
sources: []
---

**Situation:**  
In my last role, I was tasked with selecting a reinforcement‑learning agent for an autonomous delivery robot fleet that needed to navigate dynamic urban environments while minimizing energy consumption.

**Task:**  
I had to evaluate candidate agents quickly so we could roll out a pilot within three months without compromising safety or performance.

**Action:**  
I ran two parallel assessment pipelines. First, the *trajectory‑based* approach: I logged each agent’s state–action sequences on a realistic simulation map, then applied metrics like average deviation from optimal paths and collision rate per kilometer. This gave fine‑grained insight into how the policy behaved in edge cases (e.g., sudden pedestrian crossings). Second, the *outcome‑based* approach: I executed full mission simulations for each agent, measuring final delivery time, total energy used, and overall success rate across 200 runs. To compare, I plotted a Pareto frontier of energy vs. time and overlaid a heatmap of trajectory safety incidents.

**Result:**  
The outcome‑based evaluation highlighted Agent B as the best trade‑off: it delivered 12% faster on average with only a 1.5% increase in energy use, while maintaining the lowest collision rate among top performers. The trajectory analysis revealed that Agent A’s policy over‑reacted to minor traffic signals, causing unnecessary detours. From this project I learned that combining both lenses—trajectory fidelity for safety and outcome metrics for efficiency—yields a more robust selection than either alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
