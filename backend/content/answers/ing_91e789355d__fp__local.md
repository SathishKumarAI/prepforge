---
qid: ing_91e789355d__fp__local
question: 'Explain: Appendix — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 452
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:22-05:00'
sources: []
---

### Appendix – The *BigLaw Bench* for Evaluating Legal LLMs  
Harvey

**Problem statement**  
Legal practice requires precision on a vast corpus of statutes, case law, and procedural rules. A general‑purpose language model (LLM) can generate plausible text but may misinterpret jurisdictional nuance or produce non‑existent precedents. Traditional benchmarks (GLUE, SuperGLUE) lack the *semantic fidelity* needed for legal reasoning.

**Why a new benchmark must exist**  
1. **Domain‑specific knowledge gaps** – LLMs trained on generic corpora have low coverage of niche statutes; we need to quantify this *coverage gap*.  
2. **Reasoning depth** – Legal arguments involve multi‑step inference (e.g., “rule A applies because… rule B is satisfied”). A benchmark must reward correct causal chains, not just surface similarity.  
3. **Safety & compliance** – Misleading legal advice can be catastrophic; the metric must penalize *plausible‑but‑false* outputs.

**Construction principle**  
We formalise evaluation as a constrained optimisation problem: maximise **Legal Accuracy (LA)** subject to constraints on **Explainability (E)** and **Non‑fabrication (NF)**.  
- LA is measured by exact match against expert‑annotated verdicts.  
- E requires the model to produce a *reasoning trace* that aligns with legal logic graphs.  
- NF penalises any claim unsupported by the training data, detected via provenance checks.

**Deep insight**  
Most benchmarks treat outputs as independent tokens; the BigLaw Bench treats them as nodes in a *semantic dependency graph*. By requiring the model to expose this graph, we uncover hidden biases: if a model repeatedly links unrelated statutes, it reveals an over‑generalisation tendency that surface metrics miss.  

Thus, the BigLaw Bench is not merely another test set—it formalises the *trust* criteria essential for deploying LLMs in high‑stakes legal contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
