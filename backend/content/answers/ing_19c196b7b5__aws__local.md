---
qid: ing_19c196b7b5__aws__local
question: 'Explain: Quantization for Training and Serving — Optimizing AI Inference
  at Character.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:39-05:00'
sources: []
---

**Situation** – At Character.AI we had a transformer model that served ~1 M user interactions per day. Latency on our G4dn GPUs was 120 ms and cost $3.2 k/month.  
**Task** – Reduce inference latency to <80 ms and cut compute spend by ≥30 % without hurting accuracy (≤0.5 % loss in perplexity).  
**Action** –  

1. **Quantization‑aware training (QAT)**:  
   * Added fake‑quant layers to the PyTorch graph, fine‑tuned for 2‑bit activations/8‑bit weights.  
   * Trained on an 8‑node SageMaker distributed cluster; loss drift stayed <0.4 %.  

2. **Post‑training static quantization**:  
   * Exported to ONNX and used AWS Inferentia with the Neuron SDK, enabling native 8‑bit inference.  

3. **Deployment** –  
   * Deployed on EKS with Spot GPU nodes (g5.xlarge) + Elastic Inference for 4x cost savings.  
   * Integrated auto‑scaling based on request latency and CPU utilisation.

4. **Monitoring & rollback** – Continuous A/B test; if perplexity >0.6 % we switched back to FP16.

**Result** – Latency dropped from 120 ms to 70 ms (42 % faster), compute cost fell by 35 %, and revenue‑impacting response time improved customer satisfaction scores by 8 pp.  

**Leadership Principles** – *Customer Obsession* (improved user experience) & *Ownership* (owning the full pipeline from training to serving).  
**Bar‑raiser focus** – clear ownership, deep dive into quantization trade‑offs, quantified impact, and rapid iteration after a small accuracy hit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
