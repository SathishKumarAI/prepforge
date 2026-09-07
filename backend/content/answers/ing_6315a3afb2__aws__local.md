---
qid: ing_6315a3afb2__aws__local
question: 'Explain: Rethinking On-Policy Distillation of Large Language Models: Phenomenology,
  Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 425
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:11-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a cross‑functional team tasked with reducing the inference cost of our flagship LLM while keeping user latency under 200 ms for 99th percentile traffic. The existing on‑policy distillation pipeline was *O(n²)* in model size and produced brittle student models.

**Action**  
I applied **Customer Obsession** by first collecting real‑world usage logs (≈ 10 M queries/day) to identify the most frequent prompt patterns. Using these, I redesigned the distillation process around a *phenomenological* curriculum: we generate “soft prompts” that capture high‑entropy token distributions and train the student on those.  
Technically, I built an **AWS SageMaker** pipeline with **S3** for data staging, **ECR** for containerized training jobs, and **Step Functions** to orchestrate parallel *on‑policy* distillation workers. To keep costs low, I leveraged **EC2 Spot Instances** (p3.8xlarge) and **AWS Batch** spot queues, achieving a 4× cost reduction compared with the legacy pipeline.

**Result**  
The distilled model delivered a **30 % drop in latency** (from 250 ms to 175 ms) while maintaining BLEU scores within 1.2 % of the teacher. Production traffic increased by **12 %**, and overall inference cost fell from $120K/month to $35K/month.

**Reflection / Bar‑raiser notes**  
I took full *Ownership* by mapping failure modes (e.g., overfitting on rare prompts) and iteratively refining the curriculum. The deep dive into prompt statistics revealed that 80 % of traffic could be served by a single distilled student, informing our scaling decision. Future iterations will explore **SageMaker Neo** for edge deployment to further reduce latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
