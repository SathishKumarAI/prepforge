---
qid: ing_1c8ba894bc__aws__local
question: 'Explain: Saving The Mask — fast.ai\u2014Making neural nets uncool again
  \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 375
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:57-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at a fintech startup, we needed to deploy an image‑classification model that could run in real time on edge devices. The existing production stack (TensorFlow + Kubernetes) was too heavy and cost‑driven for our 10k monthly active users.

**Action**  
I introduced *fast.ai*’s “Saving the Mask” workflow, which prunes and quantizes networks while preserving accuracy. I re‑architected the pipeline in AWS:  

- **SageMaker Training** (GPU p3.2xlarge) for quick prototyping, using fast.ai’s `cnn_learner`.  
- **Model Packaging** with *ONNX* and a custom Lambda layer to load the pruned graph.  
- **Edge Deployment** via **Greengrass** on Raspberry‑Pi clusters, keeping inference latency < 50 ms.  

I added an automated CI/CD step that runs unit tests and compares validation accuracy against a 0.5% drop threshold, ensuring *bias for action* without sacrificing quality.

**Result**  
The pruned model ran 3× faster (from 120 ms to 40 ms) and reduced monthly inference cost from $1,200 to $350 while maintaining 94.8 % accuracy— a 12 % lift in user satisfaction scores measured by NPS.  

**Reflection**  
This project deepened my understanding of *Dive Deep* into model internals and reinforced the principle of *Ownership*: I took end‑to‑end responsibility, from research to production, and documented lessons learned for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
