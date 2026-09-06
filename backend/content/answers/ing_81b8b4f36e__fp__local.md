---
qid: ing_81b8b4f36e__fp__local
question: What is LLM-as-a-Judge? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 426
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:00-05:00'
sources: []
---

**LLM‑as‑a‑Judge: a principled view**

At its core an evaluation of AI systems is a *comparison problem*: we have two or more outputs (e.g., model A vs. model B) and we want to decide which one better satisfies some objective. Traditional human judges are costly, noisy, and hard to scale. The LLM‑as‑a‑Judge paradigm replaces the human with an autoregressive language model trained on a massive corpus of text that already encodes implicit judgments (e.g., “this answer is more helpful than that”).

Why must it work this way?  
1. **Bayesian inference**: The LLM’s probability distribution over next tokens can be interpreted as a posterior over *judgment states* given the evidence (the outputs). Conditioning on the candidate responses yields a likelihood ratio that directly ranks them.  
2. **Information theory**: The entropy of the LLM’s output conditioned on each candidate reflects how confidently it distinguishes between them; lower entropy means higher certainty in the ranking.  
3. **Geometry of language space**: Candidate texts are points in a high‑dimensional embedding manifold. The LLM acts as a learned metric that measures “semantic distance” to an ideal judgment point, effectively performing nearest‑neighbour classification in this space.

A non‑obvious insight: *contextual framing*—the prompt that instructs the LLM to act as a judge can be treated as a prior over decision boundaries. By carefully crafting this prompt (e.g., specifying evaluation criteria), we shape the geometry of the judgment manifold, turning a generic language model into a domain‑specific comparator without retraining.

In practice, an LLM‑as‑a‑Judge is invoked on each pair of responses, returns a probability score, and aggregates these scores to produce a robust, scalable ranking—bridging human intuition with machine scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
