---
qid: ing_af11539799__faang__local
question: 'Explain: AI Anti-Patterns — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:30:36-05:00'
sources: []
---

**Clarify**  
The interview asks me to explain *AI anti‑patterns*: recurring design or implementation choices that seem convenient but degrade model quality, reliability, or maintainability. I’ll assume the audience is familiar with ML pipelines and wants concrete examples, not a textbook definition.

**Approach**  
1. List 3–4 classic anti‑patterns.  
2. For each: describe why it looks attractive, what problem it introduces, and how to detect/avoid it.  
3. Conclude with a brief note on how to refactor or guard against them.

**Depth**  

| Anti‑Pattern | Why It Appears Good | Negative Impact | Detection / Prevention |
|--------------|---------------------|-----------------|------------------------|
| **Feature “Engineering” over‑fitting** | Hand‑crafted features often boost short‑term accuracy. | Model becomes brittle to distribution shifts; hard to audit. | Monitor validation drift, use automated feature selection and cross‑validation. |
| **“No‑Data‑Leak” Assumption** | Assuming training/test splits are clean seems trivial. | Hidden leakage inflates performance metrics. | Strict data partitioning pipelines, sanity checks for shared IDs or timestamps. |
| **Monolithic “All‑in‑One” Models** | A single large model feels simpler to deploy. | Training time explodes; hard to debug and update parts of the system. | Modularize: feature extractor + classifier; use pipeline orchestration tools. |
| **Ignoring Explainability Early** | Focus on metrics, not interpretability. | Regulatory risk, loss of stakeholder trust. | Integrate SHAP/LIME or model‑agnostic explanations during dev cycles. |

**Edge Cases**  
- Feature leakage can be subtle (e.g., using future labels).  
- Modular pipelines may suffer from version mismatches between components.

**Optimize & Communicate**  
To mitigate these anti‑patterns, I’d recommend automated pipeline checks, continuous monitoring for drift, and a culture of “model as code” with reproducible experiments. In an interview, I’d emphasize that spotting an anti‑pattern early saves engineering hours and reduces downstream risk—exactly what FAANG teams prioritize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
