---
qid: ing_91bed0b07d__faang__local
question: 'Explain: RAG Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 613
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:23:04-05:00'
sources: []
---

**RAG Evaluation Patterns (Red‑Amber‑Green)**  
*An approach for assessing the quality of Retrieval‑Augmented Generation (RAG) systems.*

| Color | What it means | Typical metrics / signals |
|-------|---------------|---------------------------|
| **Red** | Model outputs are wrong, hallucinated or unsafe. | Precision < 0.5, high hallucination rate, negative sentiment in user feedback. |
| **Amber** | Acceptable but improvable – correct core answer but missing context or detail. | Recall ≈ 0.7–0.8, F1 ~0.6‑0.7, moderate latency. |
| **Green** | Robust, accurate, fast and safe. | Precision & recall > 0.85, low hallucination, latency < 200 ms, no policy violations. |

---

### 1. Clarify  
*Restate:* We need a systematic way to judge RAG outputs—whether they are factually correct, context‑aware, and safe.  
*Assumptions to confirm:*  
- Evaluation set is representative of target domain.  
- Ground truth annotations exist for factual correctness.  
- Safety rules (e.g., no disallowed content) are defined.

### 2. Approach  
1. **Define metrics**: precision, recall, F1, hallucination rate, latency, safety compliance.  
2. **Build a benchmark pipeline**: retrieve docs → generate answer → compare to reference.  
3. **Assign color thresholds** for each metric.  
4. **Automate scoring** and flag outputs that cross red boundaries.

### 3. Depth  
- *Precision* = correct tokens / generated tokens.  
- *Recall* = correct tokens / ground‑truth tokens.  
- *Hallucination* = proportion of answer segments unsupported by any retrieved doc (verified via overlap or external fact check).  
- *Latency* measured end‑to‑end per request; use caching to keep < 200 ms for green.  
- Complexity: O(n) over token count; retrieval cost dominates, so optimize vector indices.

### 4. Edge Cases  
- **Partial matches**: fuzzy retrieval may miss key facts → mislabel as red.  
- **No‑reference answers**: user‑generated contexts lack gold labels—use human review.  
- **Safety drift** over time: re‑evaluate thresholds quarterly.

### 5. Optimize & Communicate  
- *Improvements:* Fine‑tune retriever on domain, use confidence scores to decide when to fallback to pure generation.  
- *Narrative:* “We’ll first quantify factual accuracy with precision/recall, then check hallucinations and latency. Anything below the red thresholds triggers a review; amber is acceptable but we’ll iterate; green confirms stability.”  

**Word count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
