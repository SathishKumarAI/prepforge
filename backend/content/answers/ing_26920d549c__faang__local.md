---
qid: ing_26920d549c__faang__local
question: 'Explain: AI-native and infrastructure — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 526
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:13:30-05:00'
sources: []
---

**Clarify**  
You’re asking how “AI‑native” design differs from traditional infrastructure and what interviewers look for when probing this topic. I’ll assume they want: (1) a definition of AI‑native, (2) key architectural differences, (3) trade‑offs in performance/operability, and (4) typical interview angles.

**Approach**  
* Define AI‑native vs. legacy stack.  
* Map core components (data ingestion, compute, model serving).  
* Highlight benefits & risks.  
* Summarize common interview questions and expected depth of answer.

**Depth**  

| Layer | Legacy | AI‑Native | Trade‑offs |
|-------|--------|-----------|------------|
| **Data** | Batch ETL pipelines; static schemas | Streaming, schema‑flexible (e.g., Delta Lake, BigQuery ML) | Lower latency but higher operational cost |
| **Compute** | General‑purpose CPUs or GPUs in VMs | Specialized accelerators (TPUs, FPGAs), serverless inference (AWS Lambda + SageMaker Edge) | Better throughput; cold‑start & vendor lock‑in |
| **Model Serving** | Monolithic services on Kubernetes | Micro‑services with model registries, A/B testing via feature flags | Complexity in versioning and rollback |
| **Observability** | Logs & metrics | Model performance dashboards (AUC drift), explainability APIs | Requires new tooling |

Interviewers probe: *“Why would you choose an AI‑native stack over a traditional one?”* – expect discussion of latency, scalability, and data‑centricity. They may ask to design a pipeline that ingests real‑time sensor data, trains a model on the fly, and serves predictions with <10 ms latency.

**Edge Cases**  
- Cold‑start for serverless inference.  
- Data drift causing model degradation.  
- Vendor lock‑in when using proprietary accelerators.  
Test by simulating burst traffic, introducing synthetic drift, and measuring rollback time.

**Optimize & Communicate**  
Explain that AI‑native architectures excel when *model life‑cycle* is tight and *latency* critical; legacy stacks shine for batch analytics or when existing infra cannot be refactored. Emphasize trade‑offs in cost, complexity, and portability. Wrap up by noting that a strong answer shows you can balance performance needs against operational realities—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
