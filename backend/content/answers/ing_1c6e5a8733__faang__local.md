---
qid: ing_1c6e5a8733__faang__local
question: 'Explain: Catch risky agent actions before they execute'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:54-05:00'
sources: []
---

**Clarify**  
We need a system that detects and stops an ML agent from performing dangerous or policy‑violating actions *before* the action is executed.  
Assumptions to confirm:  
1. The agent has a well‑defined action space (e.g., API calls, UI clicks).  
2. We have access to its decision pipeline (policy network, intermediate features).  
3. There is a set of “risky” actions or constraints we can encode.

**Approach**  
1. **Action‑level supervision** – train a *risk classifier* that takes the agent’s state and intended action as input and outputs a risk score.  
2. **Real‑time interception** – hook into the policy execution loop; before dispatching an API call, pass the candidate action through the classifier.  
3. **Feedback loop** – if flagged risky, either reject or request an alternative action from the agent.

**Depth**  
- Feature vector: state embedding + action embedding (e.g., one‑hot).  
- Model: lightweight feed‑forward network (≈10 k parameters) to keep latency <5 ms.  
- Training data: labeled pairs of safe/risky actions, possibly generated via adversarial rollouts or human annotation.  
- Complexity: O(1) inference per action; memory negligible.  
- Trade‑offs: higher recall → more false positives (agent may be blocked unnecessarily); lower precision → risk slips through.

**Edge Cases**  
- Novel actions not seen in training → default to safe mode.  
- Adversarial agents that manipulate the classifier’s input representation.  
- Latency spikes under high load could delay critical decisions; test with bursty traffic.

**Optimize & Communicate**  
Iteratively tighten the risk threshold based on observed false‑positive rates, and monitor a *risk‑budget* metric (e.g., cumulative probability of risky actions). Explain to stakeholders that this acts like an “air‑traffic control” for ML behavior—preventing accidents while allowing autonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
