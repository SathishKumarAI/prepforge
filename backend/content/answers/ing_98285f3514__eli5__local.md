---
qid: ing_98285f3514__eli5__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 224
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:53-05:00'
sources: []
---

Think of a city where every neighborhood must be connected by roads, but you want the cheapest network that still lets anyone drive anywhere. A **minimum spanning tree (MST)** is exactly that: the set of roads that links all neighborhoods together while using the least total length.

Imagine each neighborhood as a point and every possible road as a line with a weight equal to its cost. Start with no roads, then repeatedly add the cheapest road that connects two separate groups of neighborhoods—never forming a loop. This greedy process keeps building a tree (no cycles) until all points are linked. The final network is the MST: the minimal‑cost skeleton that still keeps the whole city reachable.

Key terms:
- **Edge** – a road between two neighborhoods.
- **Weight** – cost or length of that edge.
- **Cycle** – a loop where you can return to your start without repeating an edge.  
The MST avoids cycles while staying connected and as cheap as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
