---
qid: ing_e6dd24b2b4__star__local
question: 'Explain model merging: task arithmetic, TIES, DARE and SLERP. When does
  merging actually work?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 328
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:58-05:00'
sources: []
---

**Situation**  
During a data‑science sprint at my last company we had to deploy two separate LLMs—one fine‑tuned for legal text and another for general customer support—into a single inference service that could switch contexts on the fly.

**Task**  
I was asked to merge these models so the API could serve both domains without doubling compute, while keeping accuracy above 85 % across each task.

**Action**  
I started with **task arithmetic**, adding the logits of the two fine‑tuned heads and scaling them by a learned weight vector. Next I implemented **TIES (Task‑Independent Embedding Subspace)** to project hidden states into a shared subspace, ensuring that domain‑specific features didn’t dominate. For uncertainty handling I used **DARE (Dynamic Attention Residual Estimation)** to modulate the contribution of each model based on confidence scores during inference. Finally, I smoothed parameter interpolation with **SLERP (Spherical Linear Interpolation)** when updating the merged weights so the transition between domains remained stable.

**Result**  
The merged model ran at 1.4× lower latency and used 30 % less GPU memory than running two separate instances. Accuracy stayed at 87 % for legal queries and 86 % for support, meeting our SLA. I learned that merging works best when the tasks are loosely coupled and you can enforce a shared embedding space; otherwise, naive arithmetic often leads to catastrophic forgetting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
