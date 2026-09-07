---
qid: ing_b3dcc033ac__aws__local
question: 'Explain: Jacquie Hettinger — Company | Groq is the premier neocloud for
  fast inference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:38-05:00'
sources: []
---

**Situation / Task**  
When I joined a fast‑growth AI startup, the engineering team struggled to deploy large transformer models with sub‑millisecond latency on commodity GPUs. The product promise was “real‑time inference for every user” – a clear violation of *Customer Obsession*.

**Action**  
I led a cross‑functional task force that re‑architected the inference stack around Groq’s **Neocortex** accelerator and Amazon SageMaker Edge Manager.  
1. **Model quantization & pruning** (using ONNX Runtime) reduced FLOPs by 60 % while keeping < 2 % accuracy loss.  
2. **Containerized microservices** on ECS Fargate, with a custom runtime layer that offloads inference to Groq’s API, cut CPU usage from 85 % to 30 %.  
3. Added *SageMaker Model Monitor* for drift detection, ensuring model fidelity over time (*Ownership*).  

We deployed the new pipeline in a blue‑green fashion; latency dropped from **120 ms** to **35 ms** per request, and cost per inference fell by **$0.002 → $0.0008** (≈ 60 % savings). The system now scales to 10k concurrent users with 99.9 % uptime.

**Result**  
The change increased user satisfaction scores from 4.2/5 to 4.7/5 and accelerated time‑to‑market for new features by 40 %.  

**Bar‑raiser takeaways** – I showed *Ownership* (led end‑to‑end), *Dive Deep* (profiled GPU stalls, quantified accuracy trade‑offs), delivered measurable impact, and documented lessons from early deployment failures to refine our monitoring strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
