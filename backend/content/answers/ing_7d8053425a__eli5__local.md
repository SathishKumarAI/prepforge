---
qid: ing_7d8053425a__eli5__local
question: 'Explain: Pass 3: Dependency Restoration (and the bug that made me build
  it properly)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 257
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:47-05:00'
sources: []
---

**Pass 3: Dependency Restoration**

When a machine‑learning model is trained, each “pass” is like a step in a recipe.  
* Pass 1 builds the network (lays out all the ingredients).  
* Pass 2 runs the forward and backward passes (cooks the dish).  
* **Pass 3 restores dependencies** – it rewires the graph so that every node still knows what other nodes it needs.

Think of the model as a city with roads. In Pass 1 you build all the buildings (layers). In Pass 2 you lay down the highways (forward and backward flows) but some intersections become disconnected because you removed temporary supports while building. Pass 3 is the final inspection that reconnects every intersection to its proper roads, ensuring traffic can flow again.

The bug I hit was like forgetting to re‑attach a bridge after construction: one layer kept pointing at an old, now‑deleted node. When I added a simple “check for dangling pointers” step before rebuilding the graph, the issue vanished. The fix is just that – a safety net that guarantees every node’s dependencies are correct before the next training iteration begins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
