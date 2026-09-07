---
qid: ing_c212838199__aws__local
question: 'Explain: What is quantization for inference? Explain weights-only vs weights-and-activations,
  and the typical tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 384
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:41:48-05:00'
sources: []
---

**Situation – Task**  
At my previous role I led a team that had to deploy a 300 M‑parameter Transformer for real‑time fraud detection on the edge. The latency budget was 50 ms and we could only afford an on‑prem GPU with 4 GB memory.  

**Action – Design & Trade‑offs**  
I championed **weights‑only quantization** to 8‑bit integers, which reduced the model size from 1.2 GiB to ~150 MiB (≈ 83 % compression) while keeping inference latency at 48 ms on a single NVIDIA Jetson Nano. I also evaluated **weights‑and‑activations** quantization, which would have cut memory further but introduced an additional 5–7 % drop in AUC (from .97 to .92).  
I used SageMaker’s *Quantize* transform job with TensorRT backend, and deployed the model on EC2 g4dn.xlarge for cloud inference. The cost per inference dropped from $0.0008 to $0.0003, a 63 % savings.

**Result – Impact**  
The rollout cut operational spend by **$250k annually**, met the latency requirement, and maintained >95 % of the original accuracy.  

**Reflection – Learning & Ownership**  
I documented the quantization pipeline in Jupyter notebooks, shared best‑practice guidelines with other teams, and set up automated tests to catch any regression in precision. This reinforced *Ownership* and *Dive Deep*, ensuring reproducibility and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
