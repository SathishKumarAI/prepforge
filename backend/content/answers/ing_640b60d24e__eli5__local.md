---
qid: ing_640b60d24e__eli5__local
question: 'Explain: What We Collect — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 231
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:14:41-05:00'
sources: []
---

Imagine you’re building a giant family tree, but instead of people it’s all the little pieces of information that help an AI “know” the world.  
In this project, the software gathers three main types of data:

1. **Facts (nodes)** – tiny facts like “Paris is the capital of France.” Each fact becomes a point in the graph.  
2. **Relationships (edges)** – how those points connect: “Paris → France” or “Apple → CEO”. These are the lines that show connections.  
3. **Context (metadata)** – extra details such as when the fact was added, who added it, and how reliable it is.

The code pulls these pieces from existing sources (databases, APIs, or user input), cleans them up, and stitches them together in real time. The result is a living map that an AI can walk through instantly, following links to answer questions or make decisions—just like a navigator that knows every street, intersection, and shortcut in a city.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
