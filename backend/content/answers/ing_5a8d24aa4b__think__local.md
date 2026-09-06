---
qid: ing_5a8d24aa4b__think__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 423
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:58:34-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
   - *Clarify*: Is this a real anecdote or a hypothetical scenario?  
   - *Assume*: The interviewer wants to gauge practical knowledge (model compression, quantization, pruning) and trade‑off thinking.

**2️⃣ Mental Model / Framework**  
   - Treat inference cost as a function of **compute**, **memory bandwidth**, and **latency**.  
   - Use the classic “accuracy vs. efficiency” Pareto curve: any optimisation moves you along this curve.

**3️⃣ Step‑by‑Step Reasoning**  
   1. *Identify bottleneck*: Profile to see if FLOPs, memory, or I/O dominate.  
   2. *Choose technique*: e.g., 8‑bit quantization for GPU compute‑bound models; pruning + knowledge distillation for CPU‑bound ones.  
   3. *Apply & measure*: Run a small prototype, record latency and accuracy drop.  
   4. *Iterate*: Tune hyper‑parameters (quantization bits, prune ratio) until the trade‑off meets business constraints.

**4️⃣ Common Traps to Avoid**  
   - Forgetting that quantization may hurt models with softmax or attention layers unless careful scaling is used.  
   - Assuming pruning always preserves accuracy; it often needs fine‑tuning afterward.  
   - Ignoring deployment platform differences (TPU vs. edge CPU).

**5️⃣ Sanity‑Check & Communicate**  
   - Double‑check that the reported speedup matches theoretical FLOP reduction.  
   - Explain the final accuracy loss in concrete terms (e.g., “0.3 % top‑1” or “mAP drop from 0.78 to 0.75”).  
   - Highlight the business impact: reduced inference cost → lower cloud bill, faster user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
