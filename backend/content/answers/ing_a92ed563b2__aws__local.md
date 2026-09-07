---
qid: ing_a92ed563b2__aws__local
question: 'Explain: AWQ (Activation-aware Weight Quantization)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 374
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:04-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a project to deploy a transformer model for real‑time recommendation in the mobile app. The model size (~300 M params) caused >1 s latency on edge devices, hurting conversion rates (down 4% from baseline).  

**Action**  
I introduced **Activation‑Aware Weight Quantization (AWQ)**—a post‑training technique that learns a per‑layer scaling factor by minimizing the difference between full‑precision and quantized activations. I built an AWS Lambda pipeline to run the AWQ fine‑tuning on EC2 p3.8xlarge instances, then exported the 4‑bit weights to Amazon SageMaker Neo for edge deployment.  

**Result**  
The model size dropped from 1.2 GB to **140 MB**, and inference latency fell from 1.0 s to **180 ms** on a single mobile GPU, boosting click‑through rate by **7%** and revenue by $12K/month. Cost of inference infrastructure decreased by 35%.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Directly improved user experience and business metrics.  
- **Dive Deep & Ownership**: I engineered the entire quantization workflow, from algorithm design to production deployment, iterating on hyper‑parameters until validation loss was <1% of baseline.

**Bar‑raiser notes** – The answer demonstrates ownership (from research to launch), deep technical dive (AWQ mechanics and AWS tooling), quantified impact, and learning loop (tuning based on latency/accuracy trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
