---
qid: ing_aa81829bff__fp__local
question: 'Explain: Anti-Patterns to Avoid — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 354
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:07:44-05:00'
sources: []
---

**Why “answer‑framework” anti‑patterns are deadly for AI**

When an LLM is prompted to *“give me a framework,”* the model learns a *template* that maps the user’s intent onto a fixed structure (e.g., **P‑O‑E: Problem – Objective – Execution**). This template is attractive because it guarantees completeness and readability.  
However, from an optimization perspective it collapses the solution space to a low‑dimensional manifold of surface patterns. The model no longer *explores* alternatives; it merely regurgitates the next token in the learned sequence. Consequently:

1. **Loss of expressivity** – novel or domain‑specific insights are suppressed because they do not fit the pre‑defined slots.  
2. **Bias amplification** – the framework’s own implicit assumptions (e.g., “first step is always data collection”) become self‑reinforcing, skewing downstream decisions.  
3. **Evaluation brittleness** – metrics that reward structural adherence (e.g., rubric scores) over substantive content lead to gaming of the system.

*Non‑obvious insight:* The real hazard is not the *format* itself but the *probabilistic collapse* it induces: by conditioning on a fixed skeleton, the model’s posterior distribution becomes sharply peaked around a single mode, eliminating diversity that is essential for robust reasoning. To avoid this anti‑pattern, encourage *open‑ended* prompts or “meta‑question” prompts that let the model first decide whether a framework is appropriate before committing to one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
