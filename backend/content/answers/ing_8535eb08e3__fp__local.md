---
qid: ing_8535eb08e3__fp__local
question: 'Explain: Act II — Agents (when AI acts) — That Is Embarrassing: Why Frontier
  AI Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 462
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:17-05:00'
sources: []
---

**Act II – The “Embarrassingly Hallucinating” Agent**

When an AI *acts*—generating text, answering questions, or driving a robot—it is solving the problem of **predictive inference under uncertainty**.  
The model has been trained on a vast corpus and learns to maximize likelihood: for each input token it chooses the next token that most often follows that context in its training data. This objective is simple, mathematically tractable, and yields impressive performance on familiar prompts.

However, *frontier* models are pushed beyond their training distribution. The space of possible queries is essentially infinite; the model encounters contexts for which no high‑confidence statistics exist. In those regions the likelihood surface is flat or multimodal. The network’s deterministic decoding (greedy, beam, or temperature sampling) picks a token that locally maximizes the learned probability, even if that token was never observed together with the given context in reality. The result is a **hallucination**—the model fabricates plausible but false content.

Why can’t we just ask for higher‑confidence predictions? Because confidence estimates are themselves derived from the same likelihood surface; they degrade gracefully only when the model has seen similar data, not when it must extrapolate.

### A non‑obvious insight: *Entropy as a safety net*

The key is to treat **entropy**—the spread of probability mass—as an explicit signal. When entropy spikes, the model is uncertain and should defer or request clarification. Many frontier models ignore this cue; they simply output something with maximum probability. By augmenting the loss function to penalize high entropy on out‑of‑distribution inputs (e.g., via *confidence‑regularized* training), we can make the agent “embarrassed” enough to refuse, instead of fabricating.

**Practical take‑away:**  
Add an *entropy guardrail* to your policy: if \(-\sum p_i \log p_i > T\) (for a calibrated threshold \(T\)), the agent outputs “I’m not sure” or asks for more context. This turns the inherent uncertainty of frontier AI into a safety feature, reducing hallucinations without sacrificing performance on familiar tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
