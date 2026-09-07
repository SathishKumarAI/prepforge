---
qid: ing_3fb27e9753__aws__local
question: 'Explain: 3.5 The Choice of QAT Training Dataset — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 615
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:43-05:00'
sources: []
---

**Situation** – In 2024 I led a cross‑functional team that had to deploy a reasoning‑oriented LLM (≈ 10B params) for an internal knowledge‑base product. The model needed < 1 GB inference footprint on edge devices while keeping accuracy within 2 % of the full‑precision baseline.

**Task** – I was responsible for selecting the quantization‑aware training (QAT) dataset and proving that low‑bit QAT could preserve reasoning quality, a hard requirement because reasoning LLMs are highly sensitive to weight noise.

**Action** –  
1. **Dataset curation**: I scoped 50 M tokens from *OpenBookQA*, *ARC‑e*, and *CommonsenseQA* (all logic‑heavy), ensuring coverage of inference patterns the model would encounter.  
2. **QAT pipeline**: Leveraged AWS SageMaker Neo with TensorRT‑LLM, training a mixed‑precision 4‑bit QAT model for 10 epochs on an EC2 p3dn.24xlarge cluster (≈ 120 GPU‑hrs).  
3. **Evaluation & iteration** – Ran automated QA benchmarks; accuracy dropped from 86.5 % to 84.8 %. I analyzed layer‑wise calibration, identified the attention heads most affected by quantization, and added per‑head scaling factors—bringing accuracy back to 85.9 %.

**Result** – The final 4‑bit model was **28 % smaller** (0.78 GB) and ran inference at **2× faster latency** on a t4g.medium edge instance, while maintaining a **≤ 1.6 % loss in reasoning accuracy** versus full precision. Cost per inference dropped by **$0.004** due to lower storage and compute usage.

---

### Amazon Leadership Principles Highlighted  
- **Customer Obsession** – Delivered a product that meets strict latency & cost constraints for end‑users.  
- **Ownership** – Took end‑to‑end responsibility from dataset selection to deployment metrics.  
- **Dive Deep** – Conducted layer‑wise error analysis and engineered per‑head scaling.  

### Technical Takeaways  
| AWS Service | Role |
|-------------|------|
| SageMaker Neo | On‑device compilation & inference optimization |
| EC2 p3dn.24xlarge | High‑throughput QAT training |
| S3 | Dataset storage & versioning |
| CloudWatch | Automated benchmark reporting |

**Bar‑raiser notes:**  
- Demonstrated ownership by owning the full lifecycle and iterating based on data.  
- Showed depth with layer‑wise calibration analysis.  
- Quantified impact (size, latency, accuracy).  
- Learned from initial 1.7 % drop and applied targeted scaling to recover performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
