---
qid: vq_cc2bfe9bbc__faang__local
question: order. But what is the complete spectrum of possible outcomes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 525
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:54-05:00'
sources: []
---

**Clarify**  
The interviewer wants a systematic view of *all* the ways an AI system can respond or behave when presented with a task (e.g., classification, generation). We’ll assume the AI is deterministic once seeded, operates on a fixed dataset, and we’re interested in observable outputs—correct/incorrect labels, confidence scores, generated text, etc.

**Approach**  
1. Enumerate outcome categories (accuracy, uncertainty, failure modes).  
2. Map each to concrete metrics or behaviors.  
3. Discuss how model architecture or training data shifts the distribution of outcomes.  

**Depth**  
| Category | Typical Outcomes | Metrics / Signals |
|----------|------------------|-------------------|
| **Correct predictions** | Exact match with ground truth | Accuracy, Precision/Recall |
| **Partial correctness** | Near‑correct labels (e.g., multi‑label overlap) | F1, Jaccard index |
| **Uncertainty** | Low confidence scores or high entropy | Calibration curves, Expected Calibration Error |
| **Adversarial failure** | Small perturbations trigger misclassifications | Robustness tests |
| **Out‑of‑distribution (OOD)** | Unseen inputs → nonsensical outputs | OOD detection metrics (AUROC) |
| **Bias / Fairness violations** | Systematic skew across groups | Demographic parity, equalized odds |
| **Resource failure** | Timeout, memory error | Latency, throughput |
| **Ethical / safety breaches** | Generation of disallowed content | Moderation flags |

**Edge cases**  
- *Degenerate inputs* (empty strings) → model may crash or return defaults.  
- *Model overload* → cache hits vs cold starts alter latency distribution.  
- *Adversarial inputs* crafted to exploit confidence thresholds.

**Optimize & communicate**  
Explain that the spectrum is continuous: we move from “perfect” to “catastrophic” outcomes by tuning hyperparameters, data quality, and safety constraints. Highlight trade‑offs—higher accuracy may increase inference cost; tighter calibration can reduce confidence but improve trust. Conclude with a note that monitoring these metrics in production is essential for maintaining the desired outcome distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
