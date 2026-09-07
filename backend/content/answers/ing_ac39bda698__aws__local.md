---
qid: ing_ac39bda698__aws__local
question: 'Explain: Predicting results — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 454
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:33-05:00'
sources: []
---

**Situation & Task**  
At a prior startup I was asked to build an image‑classification pipeline for a medical imaging product. The team wanted a high‑accuracy model that could run on the edge while still meeting HIPAA compliance.

**Action**  
I chose **ResNet‑50** as the backbone because it balances depth and inference speed. Using the *Annotated ResNet‑50* code from Towards Data Science, I:

1. **Data‑prep** – applied 5 augmentation pipelines (rotation, flip, brightness) to expand our 12k labeled set by 3×, reducing overfitting.
2. **Fine‑tune** – froze the first 30 layers, trained the last 10 with a cosine‑annealed LR scheduler; achieved 0.92 top‑1 accuracy on the validation split.
3. **Quantization & pruning** – exported to TensorRT and pruned 40 % of weights, dropping latency from 120 ms to 65 ms on an NVIDIA Jetson Nano while maintaining <2 % drop in accuracy.
4. **Deployment** – wrapped the model in a Flask API, containerized with Docker, and orchestrated via AWS Fargate (spot instances) behind an Application Load Balancer.

**Result**  
The final edge deployment achieved 0.90 accuracy, 65 ms inference time, and cost $0.0008 per request—down 70 % from the baseline cloud‑only model. We reduced data transfer by 80 %, cutting egress costs to <$5/month.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – built a fast, compliant solution that directly improved clinicians’ workflow.  
- **Ownership & Dive Deep** – I drove the entire pipeline from research to production, iterating on data augmentation and model compression until metrics met business goals.

*Bar‑raiser note:* Listen for clear ownership of each stage, depth in explaining trade‑offs (quantization vs accuracy), quantified impact, and lessons learned when the initial pruning step temporarily dropped accuracy by 4 %—prompting a re‑balance of layer freezing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
