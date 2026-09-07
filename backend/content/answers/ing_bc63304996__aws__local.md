---
qid: ing_bc63304996__aws__local
question: 'Explain: PEFT vs. Full-Parameter — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 498
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:49-05:00'
sources: []
---

**Situation / Task**  
I led a research‑to‑production pipeline for a recommendation engine at a media startup. The product team needed to adapt a large language model (LLM) to our niche domain while keeping inference latency under 200 ms on an EC2 g4dn.xlarge fleet.

**Action – PEFT vs. Full‑Parameter Tuning**  
I compared two fine‑tuning strategies:

| Strategy | Key AWS services | Cost | Scalability | Risk |
|----------|------------------|------|-------------|------|
| **PEFT (Parameter‑Efficient Fine‑Tuning)** | SageMaker Training, EFS for shared weights, Lambda for inference dispatch | 70 % cheaper than full fine‑tune; ~3 GB model vs. 13 GB | Can be hot‑started on spot instances; auto‑scaling via ECS Fargate | Slight accuracy drop (~2 %) |
| **Full‑Parameter Tuning** | SageMaker Training, S3 for checkpoints, EC2 GPU fleet | 4× cost; ~13 GB model | Requires larger GPU nodes (p3.8xlarge) and longer warm‑up | Higher accuracy but higher operational overhead |

I implemented PEFT using *LoRA* adapters stored in EFS, enabling rapid re‑training on new data sets without rewriting the base weights. Inference was served via SageMaker Endpoint with a Lambda edge that routes requests to the nearest availability zone.

**Result**  
- **Latency**: 180 ms (vs target 200 ms)  
- **Cost Savings**: $12,000/month versus full‑parameter baseline  
- **Accuracy**: 98.5 % of original model’s BLEU score, a 1.8 % drop that was acceptable for the business metric of click‑through rate (CTR).  

**Reflection**  
I owned the trade‑off between cost and performance, diving deep into GPU utilization logs to identify bottlenecks. The bar‑raiser would note my ownership, quantitative impact, and learning from a failed initial full‑parameter run that over‑budgeted resources.

*Leadership Principles:* **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
