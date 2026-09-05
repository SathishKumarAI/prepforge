---
qid: ing_869bddfd79__star__local
question: 'Explain: Agent state — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 295
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:01:46-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce platform that needed to adapt its suggestions in real time as user preferences shifted during a browsing session.

**Task** – The goal was to create an “agent” that could maintain an internal state about each shopper, update it on the fly, and use that state to personalize content without re‑running expensive inference pipelines at every click.

**Action** – I applied Neo Kim and Paul Hoekstra’s agentic engineering framework by defining a lightweight state machine inside the model. The state consisted of three vectors: (1) a recent interaction embedding, (2) a cumulative preference score, and (3) an exploration‑exploitation flag. I used a recurrent neural network to update these vectors after each event, then fed the updated state into a transformer decoder that generated the next item recommendation. To keep latency low, I cached the state in Redis with a 5‑minute TTL and only refreshed it on significant interaction changes.

**Result** – The agent reduced recommendation latency from 350 ms to 75 ms, boosted click‑through rate by 18%, and cut GPU usage by 32%. I learned that explicitly modeling agentic state can turn a static ML model into a dynamic decision system that scales with user behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
