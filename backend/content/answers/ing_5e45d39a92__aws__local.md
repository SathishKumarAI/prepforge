---
qid: ing_5e45d39a92__aws__local
question: 'Explain: Cost Optimization Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 374
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:50-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team to cut the ML inference spend of our recommendation engine from $1.2 M/month to under $600 K/month while keeping latency < 120 ms.

**Action**  
*Ownership & Dive Deep*: I performed a cost‑audit across EC2, SageMaker, and Lambda, uncovering that 35 % of traffic hit on‑demand instances during peak hours.  
*Design*:  
- **Spot + Savings Plans** for GPU instances (p3.xlarge) with an Auto Scaling group that keeps at least one on‑demand fallback to avoid cold starts.  
- **Model Pruning & Quantization** in SageMaker’s training jobs, reducing inference memory from 16 GB to 8 GB, enabling use of cheaper `ml.c5.large` instances for batch scoring.  
- **Serverless Lambda + Step Functions** for low‑volume requests (≤1 % traffic), eliminating idle instance costs.  

*AWS Services*: SageMaker, EC2 Spot, Savings Plans, Lambda, CloudWatch Alarms, Cost Explorer.

**Result**  
Spend fell 50 %, latency improved by 15 %. We saved $600 K/month and freed up a $300 K budget for R&D.  

**Learnings**  
I realized the importance of *Bias for Action*—pushing changes in a rolling fashion—and that continuous monitoring (Cost Explorer dashboards) is essential to sustain gains. This iteration set a new cost‑optimum baseline for all downstream ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
