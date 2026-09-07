---
qid: ing_a29295e1d5__faang__local
question: 'Explain: Back of the Envelope: Understanding Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:02:28-05:00'
sources: []
---

**Clarify**  
We’re asked to give a quick, intuitive sense (“back‑of‑the‑envelope”) for how large a machine‑learning problem is—e.g., number of samples, features, training time, memory—and what that implies for algorithm choice.

**Approach**  
1. Identify the key dimensions: *data volume* (samples × features), *model size*, and *compute budget*.  
2. Roughly estimate per‑sample cost (memory, FLOPs).  
3. Multiply to get total cost; compare against typical hardware limits.  

**Depth**  
- **Data**: 1 M rows × 100 features ≈ 100 M numbers. At 8 bytes each → ~800 MB.  
- **Model**: A deep net with 10⁶ weights = 8 MB.  
- **Training FLOPs**: One forward/back‑prop pass ≈ 2×#weights × #samples = 2×10⁶×1 M = 2×10¹² ops.  
  On a GPU delivering ~10³ GFLOP/s, that’s ~200 s per epoch.  
- **Memory**: Need input + gradients ≈ 3×800 MB ≈ 2.4 GB → fits on modern GPUs but not on CPUs with 8 GB RAM.

Thus, a problem with >10⁶ samples and deep nets typically needs GPU acceleration; otherwise training would be prohibitively slow or infeasible.

**Edge Cases**  
- Sparse features reduce memory but increase CPU cost.  
- Very high‑dimensional data (e.g., images) may need dimensionality reduction first.  
- Distributed training mitigates size but adds communication overhead.

**Optimize & Communicate**  
If the estimate shows >1 TB of data, suggest sampling or streaming. For >10¹² ops, recommend model compression or more powerful GPUs. I’d present these numbers in a quick slide: “Data ≈ 800 MB → 2 s/epoch on GPU; CPU would take days.” This shows clear reasoning, keeps the answer concise, and demonstrates practical engineering judgment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
