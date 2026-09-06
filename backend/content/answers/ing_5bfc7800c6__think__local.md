---
qid: ing_5bfc7800c6__think__local
question: What are the known biases of LLM judges, and how do you mitigate each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 623
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:03:24-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- *What is a “LLM judge”?* – Assume an AI that evaluates text (e.g., legal or academic) and provides judgments.  
- *Which biases matter?* – Focus on data‑driven, linguistic, and procedural biases relevant to judgment tasks.  
- *Mitigation goal:* reduce unfairness while preserving performance.

**2. Mental model / framework**  
Use the classic bias taxonomy:  
- **Data‑biases:** representation, sampling, label noise.  
- **Model‑biases:** over‑fitting, confirmation bias, amplification of patterns.  
- **Interaction‑biases:** user prompts, interface design.  
For each, map *cause → impact on judgment* and *remediation strategies*.

**3. Step‑by‑step reasoning**  

| Bias | Cause | Impact on judgments | Mitigation |
|------|-------|---------------------|------------|
| **Representation bias** | Training data underrepresents minority groups or legal contexts. | System undervalues arguments from those groups. | Curate balanced corpora, use synthetic augmentation, apply re‑weighting. |
| **Sampling bias** | Over‑representation of popular topics (e.g., criminal law). | Judges favor familiar domains; novelty penalized. | Stratified sampling, active learning to target under‑represented cases. |
| **Label noise / subjectivity** | Human annotators disagree on “correct” judgment. | Model learns inconsistent patterns. | Consensus labeling, probabilistic labels, uncertainty estimation. |
| **Confirmation bias** | Model reinforces its strongest learned patterns. | Over‑confidence in certain outcomes. | Regularization, dropout, calibration techniques. |
| **Amplification bias** | Small skew in data gets magnified by training. | System’s errors become systemic. | Bias monitoring dashboards, iterative retraining with debiased subsets. |
| **Prompt bias** | User wording influences model output. | Inconsistent judgments across similar cases. | Standardized prompt templates, prompt‑tuning to reduce sensitivity. |

**4. Common traps & wrong turns**  
- Assuming “more data = less bias” – quantity doesn’t fix representation gaps.  
- Relying solely on post‑hoc calibration (e.g., temperature scaling) ignores underlying label noise.  
- Over‑engineering mitigation can degrade model utility; balance fairness with accuracy.

**5. Sanity‑check & communication**  
- **Check:** Does the mitigation preserve core judgment quality? Run ablation studies.  
- **Explain:** Present bias‑impact tables to stakeholders, highlighting trade‑offs.  
- **Iterate:** Continuously monitor real‑world outcomes; update data pipelines accordingly.

By following this structured approach—defining biases, mapping causes/impacts, applying targeted mitigations, avoiding common pitfalls, and validating results—you can systematically reduce the known biases of LLM judges while maintaining their effectiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
