---
qid: ing_c68b9b961f__faang__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 643
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:22:30-05:00'
sources: []
---

**Clarify**  
You’re asking how *continued pre‑training* (CPT) differs from *supervised fine‑tuning* (SFT), and when we should inject domain knowledge into a language model.

Assumptions to confirm:  
- The base is a large transformer already trained on generic corpora.  
- We have access to additional unlabeled data (for CPT) or labeled examples (for SFT).  
- “Domain knowledge injection” means adding curated facts, rules, or specialized vocabularies.

**Approach**  
1. Define each training regime and its objective function.  
2. Contrast their data sources, loss functions, and typical use‑cases.  
3. Map when domain knowledge is beneficial (e.g., high‑confidence factual recall vs. style adaptation).

**Depth**  

| Aspect | Continued Pre‑Training | Supervised Fine‑Tuning |
|--------|-----------------------|------------------------|
| **Goal** | Improve *representation* quality on new, unlabeled corpora; preserve general language understanding. | Adapt model to a *specific downstream task* (classification, generation) using labeled data. |
| **Loss** | Masked LM or next‑token prediction (same as original pre‑train). | Task‑specific loss (cross‑entropy for classification, RLHF for dialogue, etc.). |
| **Data** | Large unlabeled domain corpus. | Smallish labeled dataset. |
| **Effect on weights** | Gentle shift; avoids catastrophic forgetting of base knowledge. | Strong shift; model may overfit to task idiosyncrasies. |

*Domain knowledge injection* is useful when:  
- The target domain has a **high‑precision fact set** (e.g., medical terminology). Injecting facts during CPT or via adapter modules keeps the base LM’s fluency while ensuring factual accuracy.  
- The downstream task requires **specialized syntax or style**; SFT can learn it, but if data is scarce, pre‑injecting domain vocabularies reduces sample complexity.

**Edge Cases**  
- If unlabeled data contains *noisy* or *contradictory* facts, CPT may degrade performance.  
- Over‑fine‑tuning on a tiny labeled set leads to overfitting; early stopping or regularization is needed.  

**Optimize & Communicate**  
- Combine CPT followed by SFT: first align representations, then specialize the head.  
- Use adapters for knowledge injection—lightweight modules that can be swapped without retraining the whole model.  
- When explaining to stakeholders, emphasize that CPT preserves generality, while SFT sharpens task performance; domain injection is a “knowledge‑boost” step that keeps factual fidelity.

*Summary*: CPT refines language representations on new data using unsupervised objectives; SFT tailors the model to a labeled downstream task. Inject domain knowledge when you need high‑confidence facts or specialized jargon—typically during CPT or via adapters—to keep the base LM fluent while ensuring domain correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
