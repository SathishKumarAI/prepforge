---
qid: ing_b6acd86cc2__think__local
question: 'QAT Training Objectives: SFT or KD? — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 488
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:00:38-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   * Identify that the user asks whether **SFT (Supervised Fine‑Tuning)** or **KD (Knowledge Distillation)** is preferable for QAT on reasoning LLMs.  
   * Assume the model size is large, we have a high‑quality instruction‑tuned checkpoint, and the goal is to preserve logical reasoning while reducing bit‑width.

**2️⃣ Adopt a comparison framework**  
   * **Objective preservation**: how well each method retains reasoning accuracy.  
   * **Training efficiency**: data needs, epochs, compute.  
   * **Quantization robustness**: sensitivity to weight/activation clipping and calibration.  

**3️⃣ Step‑by‑step analysis**  
   1. *SFT*: fine‑tunes the full model on a reasoning dataset; quantization is applied during training, so gradients flow through low‑precision ops, allowing the network to adapt.  
   2. *KD*: trains a small student from a large teacher; the teacher’s logits guide the student, but the student still needs QAT to learn low‑bit representations.  
   3. Compare empirical results: SFT often yields higher reasoning fidelity because it directly optimizes for the target task; KD may suffer when the teacher’s knowledge is not perfectly aligned with low‑precision constraints.  

**4️⃣ Common pitfalls to avoid**  
   * Assuming KD always outperforms SFT—true only when the student architecture matches the teacher’s capacity.  
   * Neglecting calibration data: QAT can drift if the activation range isn’t properly estimated, hurting reasoning consistency.  
   * Overlooking that SFT may need more epochs to converge in low‑bit regimes.

**5️⃣ Sanity check & verbalize**  
   * Verify that the chosen method keeps the loss on a held‑out reasoning set within acceptable bounds (e.g., ≤2 % drop).  
   * Communicate: “For reasoning LLMs, SFT with QAT usually delivers better fidelity because it directly optimizes for the target task while learning low‑bit representations, whereas KD can introduce mismatch between teacher guidance and quantization constraints.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
