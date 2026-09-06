---
qid: ing_8fbd383ad2__fp__local
question: 'Explain: Tips For Communicating With Domain Experts'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 377
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:51-05:00'
sources: []
---

**Why we must tailor our language to domain experts**

At its core, collaboration between an AI practitioner and a subject‑matter expert (SME) is a *bipartite information transfer problem*. The SME holds high‑entropy knowledge about real‑world processes; the AI model encodes patterns in data. For the transfer to be useful, each side must map its internal representations onto the other’s vocabulary with minimal loss. If the AI speaks only in “feature × label” tuples while the SME thinks in terms of *process flows*, the exchange becomes noisy and the joint optimization stalls.

**Key principle: mutual information maximization**

Treat communication as a channel where each utterance is an encoding of a concept. The goal is to maximize \(I(\text{AI}\!\!:\!\!\text{SME})\), the mutual information between what we say and what the expert understands. This requires:

1. **Explicit grounding** – link abstract model terms to concrete, observable phenomena (e.g., “latent factor #3” → “the typical seasonal drop in demand for product X on Mondays”).  
2. **Iterative refinement** – let the SME correct mis‑groundings; each correction is a feedback signal that reshapes the AI’s representation space.

**Non‑obvious insight:** *Use the expert’s own metrics as a fidelity check.* Instead of asking “does this look right?”, ask “how would you evaluate this against your KPIs?” The SME can then compute an error metric they already trust (e.g., mean absolute percentage error on quarterly forecasts). This turns subjective validation into an objective, domain‑aligned loss function that the AI can directly optimize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
