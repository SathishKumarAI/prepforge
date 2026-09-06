---
qid: ing_a002974b99__fp__local
question: 'Explain: The RAG Triad — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 430
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:41-05:00'
sources: []
---

**Why a three‑color band is the natural language for evaluating AI outputs**

When an AI system generates text, we face *a single observable* (the output) but *three hidden desiderata*: correctness, usefulness and safety.  
Each desideratum can be treated as a *latent variable* that must fall above a threshold to be acceptable. The joint probability of success is then the product of three independent Bernoulli events—one per desideratum.  
Because we rarely have perfect evidence for each latent, we estimate a posterior confidence score \(p_i\in[0,1]\). A naïve binary “pass/fail” discards the continuous nature of these confidences and forces us to pick arbitrary cut‑offs.  

The **RAG triad** (Red‑Amber‑Green) is simply a *piecewise linear quantisation* of the joint confidence:
\[
\text{Score}= \min(p_{\text{corr}},p_{\text{useful}},p_{\text{safety}}).
\]
- **Green** if all \(p_i>0.8\): high confidence in every desideratum.  
- **Amber** if at least one \(p_i\in[0.5,0.8]\): moderate risk; human review recommended.  
- **Red** otherwise: failure on at least one axis; the output should be discarded.

This mapping is optimal under a *risk‑averse* utility function that penalises any single failure quadratically (since a mistake in safety can dominate). The non‑obvious insight: by using the *minimum* of the confidences we implicitly enforce **orthogonal independence**—if one axis drops, the whole product collapses. Thus RAG is not just a visual aid; it is the natural discretisation of a multi‑criteria Bayesian decision rule that protects against cascading failures in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
