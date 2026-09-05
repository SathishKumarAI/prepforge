---
qid: ing_270075622f__eli5__local
question: 'Explain: Installing with Amazon Neptune Support — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 262
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:32-05:00'
sources: []
---

Imagine you’re building a smart city map that not only shows streets but also knows who lives where and what they like. **Amazon Neptune** is the city’s super‑fast database for such maps, while **Graphiti** is the software that writes the map. Installing Graphiti with Neptune support means giving it a direct road to that fast database so it can write and read the map in real time.

First, you clone the GitHub repo (`getzep/graphiti`) onto your computer—just like grabbing the city’s blueprint. Then you run `pip install -e .` (or use Docker) to put Graphiti on your machine. After that, you edit a small config file to point Graphiti at your Neptune instance: provide the URL, port, and authentication key. Once that link is set, every time Graphiti learns something new—say a user’s preference—it writes it straight into Neptune, and any AI agent can pull those facts instantly.

So the “Neptune support” step simply plugs Graphiti into a lightning‑fast graph database, letting your AI agents ask real‑time questions about the knowledge graph without delays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
