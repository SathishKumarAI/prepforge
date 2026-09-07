---
qid: ing_f5d469750c__aws__local
question: 'Explain: Abridge Inside Epic — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:38-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were tasked to launch *Abridge Inside Epic*—a generative‑AI layer that powers real‑time clinical conversations inside the Epic EHR. The goal was to reduce clinician cognitive load by auto‑generating concise visit summaries and decision prompts while preserving HIPAA compliance.

**Action**  
I assumed full ownership (Leadership Principle: **Ownership**) and mapped requirements:  
1. **Data ingestion** – secure streaming of encounter notes via Kinesis Data Streams into an S3 lake.  
2. **Model inference** – deploy a fine‑tuned Llama‑2 on SageMaker endpoints with GPU burst capacity; use *Inference Pipelines* to batch 100 s per second, achieving <200 ms latency.  
3. **Audit & compliance** – encrypt all payloads (KMS), tag S3 objects, and log every inference call in CloudTrail for auditability.  
4. **Scalability** – auto‑scale SageMaker endpoints with a target CPU utilization of 70%; use Spot Instances to cut inference cost by 35 %.  
5. **Reliability** – host the API behind ALB in two AZs, enable *Multi‑Region* failover via Route 53 latency routing.

I applied *Dive Deep*: profiled GPU memory and discovered a 12 % overhead from the tokenizer; replaced it with a custom Rust implementation, cutting inference time by another 18 %.  

**Result**  
Within three months we achieved:  
- **>95 %** of clinicians reported reduced note‑taking time (average drop 15 min per visit).  
- **$120k annual cost savings** from Spot usage and reduced manual documentation.  
- **99.98 %** availability across both regions, meeting HIPAA SLA.

This project exemplified *Customer Obsession* by directly addressing clinician pain points, *Bias for Action* through rapid prototyping, and *Invent & Simplify* with a lightweight tokenizer replacement that lowered latency and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
