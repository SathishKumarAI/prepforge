---
qid: ing_945f5da2e7__fp__local
question: 'Explain: Using Graphiti with Google Gemini — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 375
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:41-05:00'
sources: []
---

**Why a graph is the right substrate for an LLM‑powered agent**

When a language model like Google Gemini produces text, it implicitly encodes knowledge as high‑dimensional vectors. To act on that knowledge in real time we need *structured* access: efficient look‑ups, causal reasoning, and incremental updates. A directed graph is the minimal representation that satisfies these constraints:

1. **Locality of inference** – a node’s outgoing edges capture all immediate consequences of its state; updating one edge propagates only along that path, giving logarithmic‑time reachability checks versus quadratic text search.
2. **Incrementality** – adding or removing facts is O(1) on the adjacency list, unlike retraining a neural net.
3. **Probabilistic weighting** – edge weights can encode confidence from Gemini’s logits; Bayesian update rules naturally apply to propagate uncertainty.

Graphiti implements this by exposing an API that turns Gemini’s *prompt‑response* pairs into graph mutations:  
```python
graph.add_node("Weather", attrs={"location":"NYC"})
graph.add_edge("Weather","Forecast", weight=gemini.confidence)
```
The library then runs a lightweight message‑passing scheduler (similar to belief propagation) to recompute downstream inferences whenever the model’s output changes.

**Non‑obvious insight:**  
Because Gemini can *self‑question*, Graphiti allows the agent to query its own graph for missing edges, prompting Gemini to generate just enough new text to fill gaps. This turns a one‑shot LLM into an *interactive* knowledge base without re‑training, leveraging the model’s internal representation while keeping inference linear in graph size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
