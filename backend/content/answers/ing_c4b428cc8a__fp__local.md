---
qid: ing_c4b428cc8a__fp__local
question: 'Explain: Review — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 376
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:12-05:00'
sources: []
---

**Why “agentic” matters**

At its core, an *agent* is a system that observes a state \(s\), chooses an action \(a\) to maximize expected future reward, and updates itself based on the outcome. This is the classic reinforcement‑learning loop: perception → decision → feedback. Neo Kim’s review unpacks this loop in real‑world domains, showing that *agentic* AI must embody three non‑obvious properties:

| Property | Why it’s essential | Typical oversight |
|----------|-------------------|--------------------|
| **Hierarchical value alignment** | Rewards are sparse; agents need internal subgoals that reflect human values. | Treating the reward as a flat scalar ignores cultural nuance. |
| **Self‑modifying policy networks** | The world changes faster than training data can cover; agents must adapt on‑the‑fly. | Assuming static models leads to brittleness in dynamic environments. |
| **Causal‑explanatory reasoning** | Agents must know *why* an action succeeded, not just that it did. | Relying solely on correlation degrades transferability across tasks. |

Kim argues that agentic AI’s promise hinges on *optimizing over a distribution of future states*, not merely fitting past data—a subtle shift from supervised learning to **exploratory optimization**. The most non‑obvious insight: *a truly autonomous system must treat uncertainty as a resource, actively querying the environment for information that reduces entropy in its policy space*. This turns exploration into an engineered objective rather than a side effect, enabling agents to solve open‑ended problems like medical triage or autonomous negotiation with graceful degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
