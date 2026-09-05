---
qid: ing_0d8dc87eb2__fp__local
question: 'Explain: Design the routing layer that decides whether a user request is
  handled on-device, by a first-party server model, or by a third-party model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 472
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:35-05:00'
sources: []
---

**Fundamental problem**

A mobile AI stack must decide, in real time, whether to process a user query locally, on the owner’s server, or on an external provider. The decision trades *latency*, *privacy*, *cost*, and *model quality*.  
Formally we want to minimize expected total cost  

\[
C = \sum_{i} p_i\,(\ell_i + c_i)
\]

where \(p_i\) is the probability that request type \(i\) occurs, \(\ell_i\) is the latency of the chosen backend, and \(c_i\) its monetary or privacy cost.  

**Why a layered router works**

1. **Feature extraction layer** – collects *contextual features* (device load, network bandwidth, user sensitivity flag, model accuracy score).  
2. **Optimization layer** – solves a lightweight linear program that chooses the backend with minimal \(C\) given constraints (e.g., maximum allowed latency).  
3. **Policy layer** – enforces hard rules (e.g., never send PII to third‑party models unless user consented).

This architecture follows *separation of concerns*: feature gathering is independent of optimization, allowing each to be improved without breaking the other.

**Deeper principle**

The router is an instance of a **constrained Markov Decision Process (MDP)** where states are device conditions and actions are backend choices. The Bellman equation guarantees that the greedy policy derived from the cost function yields the optimal one‑step decision, because future costs are captured by updated state features.

**Non‑obvious insight**

Most designs treat “on‑device” vs “cloud” as a binary choice. In practice, *hybrid inference* (splitting the model into a low‑latency front‑end on device and a high‑accuracy back‑end in the cloud) often beats both extremes. The router should therefore expose a **split‑point decision**—selecting how many layers to execute locally—rather than just picking a backend. This subtle shift turns the routing problem from a discrete choice into a continuous optimization, unlocking significant gains in latency and energy without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
