---
qid: ing_5a7ad12077__eli5__local
question: 'Explain: Coarse-grained roles don’t provide enough resolution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 224
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:47-05:00'
sources: []
---

Imagine you’re building a smart city map. **Coarse‑grained roles** are like using only the city’s major roads and landmarks to decide where traffic should flow. That gives you a rough idea—cars will stay on highways—but it can’t tell you whether a lane is congested, if a pedestrian bridge is blocked, or if a construction zone needs detours.  

In machine learning, “roles” are the labels we give data points (e.g., *cat* vs. *dog*). If those roles are **coarse‑grained**, they lump many different kinds of cats together and all dogs into one group, ignoring subtle differences like breed or age. The model learns only a broad pattern and can’t distinguish a Siamese from a Persian, or a Labrador from a Beagle.  

Thus, coarse granularity gives you *enough* to see the forest but not enough to understand the trees—missing detail means poorer predictions and less useful insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
