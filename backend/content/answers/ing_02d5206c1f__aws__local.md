---
qid: ing_02d5206c1f__aws__local
question: 'Explain: Two Common Types of Fine-Tuning — Fine-Tuning Explained for Noobs
  (How Pretrained Models Learn New Skills)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 412
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:30:43-05:00'
sources: []
---

**Situation** – At my previous company we had a generic BERT model that performed well on general NLU tasks but lagged on our domain‑specific customer support queries (accuracy ≈ 78%). **Task** – I was tasked to lift accuracy above 90% while keeping inference cost low.  
**Action** – I explored two fine‑tuning strategies:

| Type | What it does | AWS stack |
|------|--------------|-----------|
| **Full‑parameter finetune** | Re‑optimizes all ~110 M weights on the new corpus. | SageMaker Training Job (p3.2xlarge, 8 GB GPU), EFS for dataset, Spot Instances to cut cost by 30%. |
| **Adapter / Prompt tuning** | Adds lightweight bottleneck layers or learns a prompt vector; only ~1–5% of weights are updated. | SageMaker Inference Endpoint (ml.m5.large) + Lambda for request routing; cheaper and faster (<20 ms). |

I ran A/B tests: full‑parameter fine‑tune raised accuracy to **91.3%** but cost per inference rose 4×; adapter tuning hit **90.1%** with a 70% reduction in GPU hours.  

**Result** – I deployed the adapter model, achieving >90% accuracy at $0.0015/inference and 10 ms latency. The savings allowed us to scale to 10× traffic without extra spend.  
*Learnings:* ownership drove me to benchmark both methods; diving deep into weight‑sharing patterns uncovered that adapters captured domain nuance with minimal overhead—an example of **Invent & Simplify** and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
