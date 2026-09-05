---
qid: ing_7d0956d3cd__eli5__local
question: 'Explain: Installing with FalkorDB Support — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 264
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:06-05:00'
sources: []
---

Imagine you’re building a city map that instantly updates when new streets or landmarks appear.  
**Graphiti** is the software that lets you draw this map in code, while **FalkorDB** is the fast, street‑level GPS that keeps every point of interest synchronized across all devices.

To get them working together:

1. **Install Graphiti** – run `pip install graphiti` (or clone the repo).  
2. **Add FalkorDB support** – add the optional dependency: `pip install graphiti[falcor]`.  
3. **Configure the database** – in your script, point Graphiti to a running FalkorDB instance with a URL like `http://localhost:8000`.  
4. **Start building** – every time you create or update a node (e.g., “Restaurant”), Graphiti writes it into FalkorDB; any other agent can read the same fresh data instantly.

In short, Graphiti is your map‑drawing tool, FalkorDB is the real‑time GPS, and installing with support stitches them together so your AI agents always see the latest city layout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
