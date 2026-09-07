---
qid: ing_ac674bb074__faang__local
question: 'Explain: When do you build an agent versus a fixed workflow? The PM wants
  "an agent."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:51-05:00'
sources: []
---

**Clarify**  
The product manager asks for “an agent” that can autonomously act on user intent. I’d confirm:  

1. What decisions must the agent make?  
2. How much variability exists in inputs/contexts?  
3. Is the task deterministic or does it require adaptation over time?  
4. What level of safety, explainability, and auditability is required?

**Approach**  
*If the workflow is fixed*: use a scripted pipeline—validation → transformation → action.  
*If variability, uncertainty, or learning is needed*: build an agent (RL/decision‑tree + policy network).  

We’ll prototype a simple rule‑based flow first to capture baseline performance and safety guarantees.

**Depth**  
- **Fixed workflow**: deterministic DAG; O(1) latency, trivial testing, no drift.  
- **Agent**: policy π(a|s) trained on logged interactions (supervised or RL). Handles unseen states, can optimize for long‑term reward, but introduces non‑determinism and requires continuous monitoring.  

Complexity trade‑off: agent training ≈ O(N log N), inference ≈ O(1); fixed workflow is O(1) everywhere.

**Edge Cases**  
- Rare edge inputs that violate safety constraints → fallback to rule‑based path.  
- Drift in user behavior → retrain policy or add online learning loop.  

Test for: catastrophic failures, reward hacking, and explainability gaps.

**Optimize & Communicate**  
Start with a hybrid: rule‑based core + learned policy for edge cases. This gives immediate safety while letting the agent improve over time. I’ll present this plan in a concise slide deck, highlighting risk mitigation, expected ROI (time saved per interaction), and monitoring strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
