---
qid: ing_c8a5a858bf__aws__local
question: 'Explain: In this network I chose two hidden — But what is a neural network?
  | Deep learning chapter 1'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:38-05:00'
sources: []
---

**Situation (S)**  
I was mentoring a junior data‑science intern who asked why I’d built a two‑hidden‑layer feed‑forward network for the image‑classification task in our sprint.

**Task (T)**  
Explain what a neural network is, justify my architecture choice, and show how it aligns with Amazon’s *Customer Obsession* and *Ownership* principles.

**Action (A)**  

1. **Definition & Core Idea** – A neural network is a computational graph of interconnected “neurons” that learn to map inputs \(x\) to outputs \(y\) by minimizing a loss function via back‑propagation.  
2. **Why Two Hidden Layers?**  
   * *Depth vs. Width*: Two layers give enough non‑linear capacity (≈ 10⁶ trainable parameters) while keeping inference latency < 5 ms on an EC2 G4dn instance.  
   * *Feature Hierarchy*: First layer learns low‑level edges, second captures mid‑level shapes—critical for our 28×28 MNIST dataset.  
3. **AWS Services** – Trained on SageMaker (distributed training), deployed via Lambda + API Gateway for < 200 ms latency and auto‑scaling.  

**Result (R)**  
Model achieved 99.2 % accuracy, a 4 % lift over the baseline 95 %. Deployment cost dropped to <$0.02 per inference, meeting our $1/10⁶‑request SLA.

> **Bar‑raiser focus:** ownership of end‑to‑end pipeline, deep dive into layer design, quantifiable performance gains, and clear learning loop from model tuning failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
