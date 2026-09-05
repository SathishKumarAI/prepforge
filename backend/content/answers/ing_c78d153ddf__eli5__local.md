---
qid: ing_c78d153ddf__eli5__local
question: 'Explain: Choose Horizontal Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 218
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:56-05:00'
sources: []
---

Think of your system as a bakery that sells cupcakes.

**Vertical scaling** is like hiring a single master baker who works extra hours and uses a bigger oven to bake more cupcakes in one go. It’s simple—just add more skill or equipment to the existing kitchen. But there’s a limit: an oven can only get so big, and one baker can’t keep up forever.

**Horizontal scaling** is like opening several small bakeries side‑by‑side, each with its own chef and oven. When demand spikes, you simply open another shop; every shop keeps working independently. If one shop breaks down, the others still run, and customers can be served from any location.

Choose horizontal scaling when:
- You expect traffic to grow beyond what a single machine can handle.
- Reliability matters—failures in one part shouldn’t stop the whole service.
- You want to keep costs predictable by adding inexpensive machines instead of buying an enormous one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
