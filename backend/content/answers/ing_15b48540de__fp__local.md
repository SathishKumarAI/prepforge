---
qid: ing_15b48540de__fp__local
question: 'Explain: The Mental Model — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 372
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:23-05:00'
sources: []
---

### The Mental Model – AI Coding Workflow  
*(Neo Kim & Louis‑François Bouchard)*

At its core the model turns **“write code → test code”** into a *probabilistic search* over program space.  
1. **Problem statement as a prior** – you encode your intent (e.g., “sort this list”) into a high‑level description that acts as a Bayesian prior over all possible programs.  
2. **Prompt generation as inference** – the LLM samples candidate snippets conditioned on the prior, effectively performing *importance sampling* in program space.  
3. **Execution‑guided refinement** – each sample is executed; the outcome feeds back as an error signal that updates the posterior (via reinforcement learning or chain‑of‑thought prompting).  
4. **Iteration until convergence** – the loop continues until the posterior probability mass concentrates on a program whose outputs match the specification.

The deep principle here is *optimization over discrete, high‑dimensional spaces with sparse rewards*. By treating code as a random variable and observations as likelihoods, the workflow turns debugging into Bayesian inference rather than trial‑and‑error.

**Non‑obvious insight:**  
Most people treat LLM output as a deterministic “one‑shot” answer. The model reveals that *execution feedback is what actually collapses the search space*. Without running code to observe failures, you’re stuck in a flat posterior; with execution, you get gradients (in a probabilistic sense) that steer the generator toward correct programs. This explains why simple prompt engineering often stalls while “execute‑and‑re‑prompt” pipelines succeed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
