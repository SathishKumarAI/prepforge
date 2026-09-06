---
qid: ing_8d13f0f428__think__local
question: 'Explain: When is fine-tuning the wrong call? Describe failure modes you''d
  warn a team about.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 487
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:23:10-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - *What* do we mean by “fine‑tuning” (pre‑trained weights + task‑specific head, full‑model, LoRA, etc.)?  
   - *Which model family* and *dataset size* are involved?  
   - *Deployment constraints*: latency, memory, privacy, regulatory limits.  

**2️⃣ Adopt a failure‑mode framework**  
   - **Data mismatch** (distribution shift, label noise).  
   - **Capacity mismatch** (over‑parameterized vs. under‑parameterized for the target task).  
   - **Safety & robustness** (adversarial fragility, hallucination).  
   - **Operational constraints** (compute budget, inference speed).  

**3️⃣ Step‑by‑step reasoning**  
   1. Check if the fine‑tuning dataset is large enough to justify adjusting millions of weights; otherwise a feature extractor + classifier may suffice.  
   2. Evaluate whether the target distribution differs markedly from the pre‑training corpus—if so, risk catastrophic forgetting or poor generalization.  
   3. Assess regulatory / privacy rules: fine‑tuning on sensitive data can leak private info via weight inspection.  
   4. Measure inference latency/memory; full‑model tuning may exceed edge limits, favor adapters or quantization instead.  

**4️⃣ Common traps to avoid**  
   - Assuming “more data = better” without considering noise or label quality.  
   - Ignoring that fine‑tuning can amplify pre‑training biases.  
   - Overlooking that a single catastrophic failure (e.g., hallucination in a medical bot) is more damaging than modest accuracy gains.  

**5️⃣ Sanity‑check & communicate**  
   - Run a quick “probe” experiment: freeze most layers, train only the head; compare to full fine‑tuning.  
   - Present trade‑offs as a matrix (accuracy vs. compute vs. privacy).  
   - Summarize with a one‑sentence verdict: *“Fine‑tune only when you have enough clean data, negligible distribution shift, and sufficient resources; otherwise use adapters or prompt‑engineering.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
