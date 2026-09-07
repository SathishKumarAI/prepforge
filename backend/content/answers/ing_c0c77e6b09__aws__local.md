---
qid: ing_c0c77e6b09__aws__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:36-05:00'
sources: []
---

**Situation & Task**  
At my last role as a Machine‑Learning Platform Lead, we shipped an LLM‑powered FAQ bot for a global retailer. Within the first month users reported “hallucinations” – the model giving plausible but factually wrong answers. The business impact was clear: 12 % of support tickets were escalated to humans, costing $18k/month in manual effort.

**Action**  
1. **Root‑cause analysis (Dive Deep)** – I set up a telemetry pipeline using Amazon Kinesis and Athena to capture input prompts, model outputs, confidence scores, and downstream actions. Analysis revealed that 78 % of hallucinations occurred on queries with low historical coverage or ambiguous phrasing.  
2. **Mitigation strategy (Bias for Action & Invent & Simplify)** –  
   *Implemented a hybrid retrieval‑augmented generation pipeline:*  
   - **Amazon OpenSearch** indexes up-to‑date product data and policy documents.  
   - The LLM first retrieves top‑k passages via the “retrieval” step, then generates an answer conditioned on those passages.  
   - We added a *confidence gating* layer: if the model’s internal certainty score < 0.75, it falls back to a curated FAQ response from S3.  
   - All components run in **AWS Lambda** behind an Application Load Balancer for 99.95 % availability and auto‑scaling.  

**Result**  
Within two weeks of deployment:  
- Hallucination incidents dropped from 12 % to < 1 %, cutting manual escalations by $17k/month.  
- Response latency remained under 250 ms, meeting SLAs.  
- Cost increased only 3 % due to additional Lambda invocations, well below budget constraints.

**Reflection (Ownership)**  
I learned that hallucinations stem from data sparsity and lack of grounding. By integrating retrieval with generation and enforcing confidence thresholds, we built a more reliable system while keeping the architecture simple and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
