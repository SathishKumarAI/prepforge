---
qid: ing_b5b37b0d57__aws__local
question: When would you distill an LLM into a smaller model, and what does that pipeline
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 465
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:09-05:00'
sources: []
---

**Situation / Task**  
At a startup we built an LLM‑powered recommendation engine that ran on a **p5.12xlarge** (48 vCPU, 192 GiB) and cost ~$3k/month. After launching to production, latency spiked during peak traffic—response times rose from 120 ms to 1.2 s, hurting the user experience and driving churn up by 4 %.  

**Action**  
I led a **distillation sprint** (Ownership, Bias for Action).  
1. **Collect logits** from the teacher on a representative test set (≈200k samples).  
2. **Fine‑tune a smaller BERT‑Base model** with knowledge‑distillation loss (KD), using SageMaker Training Jobs and Spot Instances to keep cost < $50.  
3. **Quantize to INT8** in PyTorch, export via ONNX, and deploy on **AWS Inferentia2** for 5× throughput at <$0.01/1k invocations.  
4. **CI/CD with CodePipeline** triggers re‑distillation every 30 days or when accuracy drops >1%.

**Result**  
Latency dropped to < 50 ms, SLA hit 99.9%. Monthly cost fell from $3k to <$300 (90 % savings). User retention improved by 7%, and the model size shrank from 1.5 GB to 250 MB—allowing edge deployment for mobile clients.

**Reflection**  
I learned that distillation is justified when *cost or latency* threatens business metrics, not merely for curiosity. Future iterations will incorporate **prompt‑tuning** to further reduce inference cost.  

> **Bar‑raiser notes:** Demonstrated ownership (driven sprint), deep dive into trade‑offs (spot vs on‑demand, quantization vs accuracy), quantified impact (latency, cost, churn), and clear learning loop for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
