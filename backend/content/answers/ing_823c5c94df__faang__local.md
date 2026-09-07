---
qid: ing_823c5c94df__faang__local
question: Helix splits into a large slow model and a small fast one. Why not run a
  single end-to-end network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 488
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:31-05:00'
sources: []
---

**Clarify**  
The interview asks why a system might use two models—a big “slow” model for accuracy and a small “fast” one for latency—rather than a single end‑to‑end network that balances both. We assume the goal is real‑time inference with high quality, limited compute budget, and possibly heterogeneous hardware.

**Approach**  
1. Profile latency vs. accuracy trade‑offs of each model.  
2. Identify use cases where low latency suffices (e.g., user prompts) versus when higher fidelity is needed (e.g., critical decisions).  
3. Deploy a selector that routes input to the appropriate model based on context or confidence thresholds.

**Depth**  
- **Latency**: A 12B transformer takes ~300 ms on a single GPU; a distilled 1.5B version runs in ~30 ms, yielding a 10× speedup.  
- **Accuracy**: The large model achieves 95% BLEU vs. 85% for the small one—critical for tasks like medical diagnosis.  
- **Cost**: Running only the small model would save GPU-hours by ~90%, but risk higher error rates.  
- **Hybrid inference**: Use the fast model to generate a draft, then let the slow model refine it on high‑confidence queries.

**Edge Cases**  
- *Cold start*: The selector may misclassify and use the wrong model; fallback to the large one.  
- *Model drift*: Periodically re‑evaluate thresholds as data distributions shift.  
- *Resource contention*: Ensure GPU memory is partitioned so both models can coexist without OOM errors.

**Optimize & Communicate**  
Explain that a single monolithic network cannot simultaneously satisfy low latency and high accuracy because of computational limits. By decoupling, we get modularity: we can upgrade the small model independently, swap hardware, or add new fast paths (e.g., quantized models). Quantify gains: 10× speedup with only a 10% drop in BLEU on non‑critical tasks—an acceptable trade‑off for real‑time service. This structured reasoning shows clear problem understanding, practical solution design, and awareness of trade‑offs, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
