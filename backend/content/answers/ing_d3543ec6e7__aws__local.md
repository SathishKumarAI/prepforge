---
qid: ing_d3543ec6e7__aws__local
question: 'Explain: Supported Operations in Headless and Interactive Modes ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 447
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:22-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional ML platform team at a fintech startup, I was asked to support our new inference service in both **headless** (batch/CLI) and **interactive** (real‑time API) modes. The goal was to reduce latency for high‑frequency fraud alerts while keeping cost per inference < $0.001.

**Action**  
I designed a **dual‑pipeline architecture**:  

| Mode | Pipeline | AWS Services | Key Design Choices |
|------|----------|--------------|--------------------|
| Headless | Batch job on S3 → EMR Spark → SageMaker endpoint | **EMR**, **SageMaker** | Use spot instances; data stored in Parquet for 10× compression. |
| Interactive | API Gateway + Lambda → SageMaker Real‑Time Endpoint | **API Gateway**, **Lambda**, **SageMaker** | Cold‑start mitigation with warm‑up Lambda; endpoint auto‑scales (min = 2, max = 20). |

I implemented a **feature flag** in the data pipeline to route inference requests to the appropriate mode based on payload size and SLA. I also added CloudWatch metrics for request latency and cost.

**Result**  
- Latency dropped from 350 ms (legacy) to 120 ms (interactive) – a **66% improvement**.  
- Batch processing time reduced by 4×, saving ~30% in compute costs.  
- Overall inference cost per call fell to $0.0008, meeting the target.

**Learning & Ownership**  
I owned the full CI/CD pipeline and performed A/B tests on the warm‑up strategy; after a mis‑scaled Lambda that caused a 15 % outage, I re‑architected the scaling policy, turning a failure into an opportunity to tighten our **Bias for Action** and **Ownership**.  

*Leadership Principles highlighted:* **Customer Obsession**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
