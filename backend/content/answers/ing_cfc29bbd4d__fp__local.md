---
qid: ing_cfc29bbd4d__fp__local
question: 'Explain: Design the evaluation for a document understanding feature: users
  upload invoices and scanned forms and ask questions about them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 565
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:02-05:00'
sources: []
---

**Why we evaluate at all?**  
When a user uploads an invoice or a form, the system must *translate* a noisy image into a structured knowledge base and then answer natural‑language questions about it. The ultimate objective is user satisfaction, which depends on two intertwined properties:

1. **Accuracy of extraction** – every field (date, total, line items) must be correctly recognized.
2. **Relevance of answers** – the retrieved information must match the intent behind the question.

These goals are not independent; a perfect extractor can still mislead if the retrieval logic is wrong, and vice versa. Therefore an evaluation framework must jointly assess *information fidelity* and *semantic alignment*.

---

### 1. Ground‑truth construction  
- **Pixel‑level annotations** for key fields (bounding boxes + labels).  
- **Question–answer pairs** derived from a realistic user query set, each linked to the minimal set of ground‑truth spans that satisfy it.

### 2. Metrics  

| Metric | What it captures | Why it matters |
|--------|------------------|----------------|
| **Field‑level F1** (precision/recall over extracted tokens) | Extraction fidelity | Penalises both false positives and negatives, reflecting downstream error propagation. |
| **Question Answer Exact Match (EM)** | Retrieval correctness | Ensures the system returns precisely the requested value(s). |
| **Mean Reciprocal Rank (MRR)** | Ranking quality for ambiguous queries | Rewards systems that surface the correct answer early. |
| **Error‑propagation score** (e.g., BLEU between extracted text and ground truth) | Impact of OCR noise on downstream QA | Quantifies how much extraction errors bleed into question answering. |

### 3. Evaluation protocol  

1. **Cross‑validation over document types** – ensure generalisation across invoices, tax forms, receipts.  
2. **Adversarial perturbations** (blur, skew) to stress‑test robustness.  
3. **Human‑in‑the‑loop sanity check** on a random 5 % of samples to catch systematic biases.

---

### Non‑obvious insight  

*The bottleneck often lies in the *semantic mapping* step rather than raw OCR accuracy.* Even perfect extraction can fail if the system misinterprets “total” as “subtotal.” Therefore, augmenting evaluation with **intent‑aware metrics** (e.g., measuring semantic similarity between extracted field names and question tokens) reveals hidden weaknesses that pure F1 or EM miss. Incorporating such a metric turns evaluation from a surface check into a principled probe of the system’s true understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
