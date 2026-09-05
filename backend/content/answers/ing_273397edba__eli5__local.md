---
qid: ing_273397edba__eli5__local
question: 'Explain: Distance Metrics — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 237
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:51-05:00'
sources: []
---

Imagine you’re at an art gallery where every painting is turned into a list of numbers that describe its colors, shapes, and textures—just like turning a picture into a “vector” (a row of numbers). A *distance metric* is the rule we use to say how similar two paintings are. Think of it as a ruler for taste: if you pick up two brushes and measure how far apart they feel when you touch them, that distance tells you whether the paintings look alike or not.

The most common “ruler” is the **Euclidean** metric—like measuring straight‑line distance with a tape measure. Another is **cosine similarity**, which checks how aligned the two vectors are, ignoring their size (just like comparing the direction of two arrows). In a vector database, we store every painting’s numbers and, when you ask for “paintings similar to this one,” the system quickly uses these metrics to find the nearest neighbors. It’s just a smart way of saying, “Here are the closest matches in flavor space.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
