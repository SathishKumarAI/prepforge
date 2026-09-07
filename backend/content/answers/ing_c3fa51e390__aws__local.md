---
qid: ing_c3fa51e390__aws__local
question: Why ResNet? — The Annotated ResNet-50 | Towards Data Science
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 460
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:13-05:00'
sources: []
---

**Why ResNet? (AWS‑style)**  

*Situation*: Our ML team needed a backbone that could deliver high accuracy on ImageNet while fitting into a CI/CD pipeline that scales to thousands of inference requests per second.

*Task*: Pick a model architecture that balances **accuracy**, **latency**, and **resource footprint** for deployment in SageMaker and Elastic Inference.

*Action*: I chose ResNet‑50 because:

- **Depth vs. Compute** – 50 layers give >75 % top‑5 accuracy on ImageNet, outperforming VGG by ~10 % while using <2× the FLOPs.  
- **Residual connections** eliminate vanishing gradients → faster convergence (≈30 % fewer epochs).  
- **Framework friendliness** – native support in PyTorch/TensorFlow; pre‑trained weights available via SageMaker’s built‑in algorithms.

I designed a two‑tier inference stack:  

1. **SageMaker Endpoint** with GPU instances (g5.xlarge) for batch jobs, auto‑scaling by CPU utilization.  
2. **Elastic Inference** attached to the same endpoint for 1/8th the cost when latency <10 ms is required.

*Result*: Deploying ResNet‑50 reduced inference latency from 120 ms (VGG16) to 45 ms, cut GPU hours by 55 %, and increased throughput from 200 to 900 req/s. Cost per request dropped from $0.02 to $0.008.  

**Leadership Principles Reflected**  
- **Customer Obsession** – Delivering faster, cheaper inference directly improves user experience.  
- **Ownership & Dive Deep** – I benchmarked architectures, tuned hyperparameters, and built a monitoring dashboard that surfaced drift in <2 h.

**Bar‑raiser takeaways**: Look for quantified impact, evidence of architectural trade‑offs, and evidence that the candidate learned from prior experiments (e.g., why VGG16 was rejected).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
