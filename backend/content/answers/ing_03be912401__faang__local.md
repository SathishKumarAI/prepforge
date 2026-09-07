---
qid: ing_03be912401__faang__local
question: 'Explain: What they emphasise — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 729
total_tokens: 960
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:00-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer asks what **“they”** (large FAANGs) emphasize when it comes to *AI*, specifically in the context of **abridging**—i.e., making models lighter, faster, or more interpretable while retaining performance.

### Assumptions I’d confirm
- “They” refers to Meta/Google/Amazon/Netflix/Apple.  
- “Abridge” means reducing model size / complexity (model compression, pruning, distillation).  
- The focus is on *practical deployment* rather than pure research novelty.

---

## 2️⃣ Approach  
1. List the key pillars FAANGs care about for AI models.  
2. Map each pillar to a concrete “abridge” technique they champion.  
3. Explain why that technique aligns with business goals (speed, cost, privacy).  

---

## 3️⃣ Depth – Core Answer  
| Pillar | Why it matters | Abridge Technique | Trade‑offs |
|--------|----------------|-------------------|------------|
| **Latency & Throughput** | Mobile, AR/VR, real‑time ads need sub‑ms responses. | *Knowledge Distillation* + *TensorRT / ONNX Runtime* | Slight accuracy drop; extra training step. |
| **Cost & Energy** | Cloud infra and edge devices have budgets. | *Pruning / Quantization* (INT8/FP16) | Possible numerical instability; careful calibration needed. |
| **Explainability** | Trust, regulatory compliance. | *Sparse Attention* + *Feature‑based explanations* | May require domain‑specific engineering. |
| **Privacy & Data Locality** | Federated learning, on‑device inference. | *Edge‑friendly models (MobileNetV2/ViT‑Tiny)* | Limited representational capacity; requires careful data augmentation. |
| **Scalability** | Millions of concurrent users. | *Model Sharding + Parameter Server* | Added complexity in deployment pipeline. |

FAANGs typically combine **distillation** with **quantization** to get the best of both worlds: a small, fast model that still captures most of the teacher’s knowledge.

---

## 4️⃣ Edge Cases  
- Over‑pruning can cause catastrophic forgetting on rare classes.  
- Quantization may hurt models sensitive to small weight variations (e.g., NLP transformers).  
- Distilled models might inherit biases from teachers; need bias auditing.  

Testing: run *ablation studies*, measure *ECE* for calibration, and deploy on target hardware to confirm latency targets.

---

## 5️⃣ Optimize & Communicate  
I’d highlight that the ultimate metric is **business value**—reduced inference cost + higher user satisfaction. I’d narrate how each abridge technique directly maps to a product KPI (e.g., 30 % lower GPU hours, 10 ms faster ad rendering). This shows I’m not just technically fluent but also business‑centric—a key FAANG trait.

*Word count: ~200 words*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
