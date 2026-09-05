---
qid: ing_11c0baa154__fp__local
question: 'Explain: Common Mistakes and Anti-Patterns — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 442
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:43:44-05:00'
sources: []
---

### Why Tool‑Agent Design Fails

At its core, a **tool agent** is an *information–processing pipeline* that receives user intent, maps it to the correct API call, and post‑processes the response back into natural language.  
If any link in this chain is weak, the system collapses.  

| Mistake | Why It Happens | Deeper Principle |
|---------|----------------|------------------|
| **Over‑fitting the prompt** | Developers hand‑craft a single prompt that works on training data but never generalises. | *Over‑parameterisation* – the model memorises prompt patterns instead of learning the intent‑to‑API mapping. |
| **Ignoring API constraints** | Treating the tool like a black box, calling it indiscriminately. | *Information bottleneck* – unnecessary calls waste bandwidth and increase latency; they also violate rate limits that encode real‑world capacity constraints. |
| **No rollback or verification** | Assuming every call succeeds. | *Probabilistic consistency* – each API has a non‑zero error probability; without checks you propagate uncertainty downstream. |
| **Treating the tool as stateless** | Forgetting context across calls (e.g., auth tokens, session IDs). | *Stateful geometry* – actions are points in a high‑dimensional state space; ignoring state collapses the trajectory to a single point. |

#### One Non‑Obvious Insight  
Most people miss that **the cost of an API call is not just latency but also *entropy* reduction**: every successful call consumes the model’s internal uncertainty budget. If you call a tool too often, you effectively “burn” entropy and reduce the agent’s ability to reason about subsequent steps. Design agents with *entropy budgeting*—limit calls to those that yield maximal information gain (e.g., using Bayesian active learning). This turns every API invocation into an *information‑theoretic experiment*, not a blind hammer stroke.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
