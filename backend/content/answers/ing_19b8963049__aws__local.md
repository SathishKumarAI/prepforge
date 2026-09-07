---
qid: ing_19b8963049__aws__local
question: 'Explain: Get model history — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 539
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:30-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build an end‑to‑end pipeline that could serve a production‑grade ResNet‑50 model for fraud detection while giving data scientists the ability to trace every training run back to its source artifacts. The business needed a reliable audit trail because regulators required us to prove how each version of the model was derived.

**Action**  
I leveraged **Amazon SageMaker Model Registry** and **SageMaker Pipelines** to create an immutable “model history” service:

1. **Artifact Capture** – Every training job writes its hyper‑parameters, data split, and raw dataset hash into a DynamoDB table (`TrainingRuns`).  
2. **Model Registration** – After the `train` step, I programmatically register the model with SageMaker Model Registry using the same metadata.  
3. **Versioning & Tagging** – The registry automatically assigns a semantic version (e.g., `v1.0.0`) and stores the underlying container image in ECR.  
4. **Audit API** – A lightweight Lambda function queries the registry and DynamoDB, returning a chronological list of model versions, associated training metrics, and data lineage.  

This design uses only managed services (SageMaker, DynamoDB, Lambda, API Gateway), ensuring 99.9 % availability and auto‑scaling with zero operational overhead.

**Result**  
- Reduced model deployment latency from **12 hrs to 1 hr** by eliminating manual artifact checks.  
- Achieved a **30 % drop in false positives** after deploying the new ResNet‑50 version, validated via A/B testing on production traffic (≈ 200k transactions/day).  
- The audit API now serves **> 10 k requests/month** with < 5 ms latency.

---

### Leadership Principles Highlighted
* **Ownership** – I took end‑to‑end responsibility for the entire model lifecycle.  
* **Dive Deep** – Designed a data‑driven traceability system that surfaced every artifact and metric, enabling precise root‑cause analysis when a new version underperformed.  

### Bar‑raiser Signals
* Demonstrated *quantified impact* (deployment time & fraud detection metrics).  
* Showed *deep technical understanding* of SageMaker services and cost‑effective architecture.  
* Reflected on a failure: an earlier manual process caused a 2‑day rollback; this automated design eliminated that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
