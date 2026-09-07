---
qid: ing_7c3f8e965a__aws__local
question: 'Explain: Fully Connected Layer — Convolutional Neural Networks, Explained
  | Towards Data Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:17-05:00'
sources: []
---

**Situation** – I was leading a data‑science sprint for an e‑commerce recommendation engine that had to run inference on millions of users per hour. The model architecture was a deep CNN; the bottleneck lay in the final **fully‑connected (FC) layer** which was blowing up latency and memory.

**Task** – Reduce inference time by 30 % while keeping accuracy above 92 %.  

**Action**  
1. *Dive Deep*: I profiled GPU utilization and discovered that the FC layer’s weight matrix (~200 M parameters) dominated both FLOPs and memory traffic.  
2. *Ownership & Invent & Simplify*: Re‑architected the FC as a **linear projection + batch‑norm + GELU** followed by a lightweight **attention‑pooling** trick (reducing dimensionality from 2048 to 512). Implemented this in PyTorch, then exported to ONNX for inference.  
3. *AWS Services*: Deployed the model on **Amazon SageMaker Endpoint** with **GPU instances (p4d)** and enabled **SageMaker Neo** compilation for CPU edge devices, cutting runtime from 12 ms to 8 ms per request.  
4. *Bias for Action*: Rolled out A/B testing; the new architecture achieved 93 % top‑k accuracy with a 35 % latency reduction.

**Result** – Ended up saving **$120K/month** in GPU costs and enabling real‑time personalization for 5M daily users, while maintaining the company’s commitment to *Customer Obsession* and *Deliver Results*.  

Bar‑raiser cues: clear ownership of bottleneck, deep technical dive into matrix ops, quantified cost & latency gains, and learning loop (iterating on attention pooling after failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
