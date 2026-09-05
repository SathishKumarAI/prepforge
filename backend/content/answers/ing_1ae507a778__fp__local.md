---
qid: ing_1ae507a778__fp__local
question: 'Explain: Stage 3: Fact Verification with Multi-Agent Debate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 399
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:23-05:00'
sources: []
---

**Stage 3 – Fact‑Verification by Multi‑Agent Debate**

When a language model produces an answer, the *semantic gap* between surface wording and underlying truth is unavoidable: the model optimizes next‑token likelihood, not factuality. To close this gap we cast verification as a **minimax game** over evidence space.  

1. **Agents**: Two (or more) sub‑models are instantiated—“Pro” that supports the claim and “Con” that challenges it.  
2. **Evidence Retrieval**: Each agent queries an external knowledge base, generating citations or counter‑examples.  
3. **Debate Loop**: Agents alternately present arguments; each reply must address all points raised by its opponent, forcing a *recursive refinement* of claims.  
4. **Scoring**: An adjudicator (another model or human) evaluates the debate according to coherence, citation quality, and logical consistency—effectively performing a Bayesian update on belief about the claim’s veracity.

Why this works: The game‑theoretic structure guarantees that any *flawed* claim will be exposed by an opponent who can exploit the limited evidence. The adversarial pressure mimics human fact‑checking, where each side must anticipate counterarguments, thus surfacing hidden dependencies or misinterpretations.  

**Non‑obvious insight:** Debates implicitly perform **information bottleneck optimization**—each turn compresses the joint knowledge into a concise argument, discarding irrelevant noise. This compression is what makes the final verdict robust to hallucinations that plague single‑pass generators. By formalizing fact verification as a dynamic, adversarial dialogue, we align AI reasoning with the same principles that underlie scientific peer review and legal cross‑examination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
