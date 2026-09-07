---
qid: ing_32c3d10d6c__faang__local
question: 'Explain: Sources — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 583
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:34-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *“Sources – Harvey”*—presumably the taxonomy or framework introduced by **David Harvey** (or a similar scholar) that categorizes information sources used to train and evaluate AI systems.  I’ll assume it refers to *primary, secondary, and tertiary data sources* in the context of machine learning.

---

### Approach  
1. Define each source type.  
2. Explain why each matters for model fidelity and ethics.  
3. Illustrate with concrete examples (text, image, sensor).  
4. Highlight trade‑offs: bias, cost, scalability.

---

### Depth  

| Source Type | What it is | Typical AI use | Key concerns |
|-------------|------------|----------------|--------------|
| **Primary** | Raw, first‑hand data collected for the task (e.g., sensor logs, clinical trials). | Supervised learning on medical imaging. | High cost; privacy regulations; sampling bias. |
| **Secondary** | Curated datasets derived from primary sources (e.g., ImageNet, COCO). | Transfer learning, pre‑training. | Label noise; provenance gaps; licensing limits. |
| **Tertiary** | Aggregations of secondary data (e.g., Wikipedia dumps, open‑source corpora). | NLP language models, knowledge graphs. | Over‑representation of dominant cultures; copyright risk. |

*Example*: A self‑driving car uses primary LiDAR scans, secondary annotated driving videos, and tertiary map APIs.

---

### Edge Cases  
- **Non‑representative primaries** (e.g., clinical trials with healthy volunteers).  
- **Stale secondaries** that miss recent phenomena (e.g., evolving slang).  
- **Tertiary hallucinations** where aggregated data misrepresents rare events.

Test by:  
1. Auditing class distribution across sources.  
2. Running bias‑detection metrics (e.g., disparate impact).  
3. Validating licensing compliance for each layer.

---

### Optimize & Communicate  
- Prioritize primary data when high accuracy or domain specificity is needed, but mitigate cost via *synthetic augmentation* or *few‑shot learning*.  
- Use secondary datasets to bootstrap models; fine‑tune on small primaries to balance bias.  
- Leverage tertiary sources for zero‑shot reasoning but flag content with uncertain provenance.

Explain to stakeholders: “Our source strategy is a layered funnel—rich, costly primary data at the core, supplemented by scalable secondaries and broad ter­tiaries, each layer calibrated for accuracy, fairness, and legal compliance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
