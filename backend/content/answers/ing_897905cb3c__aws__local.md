---
qid: ing_897905cb3c__aws__local
question: What is distillation, and how is it used in the LLM ecosystem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 449
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:04-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation / Task** – While leading a cross‑functional team that built a recommendation engine for an e‑commerce platform, we needed to deploy a transformer‑based language model on edge devices with < 50 ms latency and ≤ 500 MB footprint. The original model (175M params) was too large for our mobile SDK.  

**Action** – I introduced **knowledge distillation**: a teacher–student training loop where the large “teacher” network’s soft logits are used as targets to train a compact “student.”  
1. **Requirements:**  
   * Student size ≤ 50M params, inference latency < 50 ms on ARMv8.  
   * Accuracy drop ≤ 2 % relative to teacher on our validation set.  

2. **Design & AWS services** –  
   * Use SageMaker training jobs with distributed Horovod for the teacher and student.  
   * Store intermediate checkpoints in S3, orchestrate via Step Functions.  
   * Deploy student on Lambda@Edge + Amazon CloudFront for low‑latency inference; fallback to SageMaker Endpoint for heavy requests.  

3. **Trade‑offs** – We accepted a slight accuracy loss (2 %) to gain 90 % reduction in model size and 80 % cost savings on GPU usage.  

**Result** – The distilled model achieved 97.5 % of the teacher’s BLEU score, cut inference time from 200 ms to 35 ms, and lowered monthly compute costs by $12k.  

*Leadership Principles:* **Ownership** (took end‑to‑end responsibility), **Dive Deep** (analyzed model internals and AWS cost models), **Bias for Action** (deployed within two sprints).  
Bar‑raisers look for: quantified impact, clear trade‑off reasoning, and learning from iterative failure (we retrained the student after a 5 % accuracy dip by augmenting the loss with an entropy term).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
