---
qid: vq_05ab59bcbb__eli5__local
question: What is the Dimensionality Curse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 238
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:17-05:00'
sources: []
---

Imagine you’re trying to find a single drop of perfume in a huge room by smelling. In a small room (one or two dimensions), you can walk around and feel the scent everywhere; it’s easy to spot where the perfume is strongest. Now picture the same perfume spread across a giant cube with a hundred different rooms inside—each room adds another “dimension” like height, width, depth, temperature, time, etc. The drop of perfume becomes vanishingly small compared to the whole space, and your nose can’t detect it unless you’re standing right next to it.  

In machine learning, every feature (age, income, color, speed) is a dimension. As more features are added, data points become sparse; there’s no “nearest neighbor” left nearby, so algorithms that rely on closeness (like clustering or nearest‑neighbor classification) struggle. That loss of usefulness when many dimensions are present is called the **curse of dimensionality**—a practical obstacle that forces us to reduce dimensions, pick smarter features, or use models designed for high‑dimensional data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
