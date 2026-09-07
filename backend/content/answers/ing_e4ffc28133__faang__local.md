---
qid: ing_e4ffc28133__faang__local
question: 'Explain: Cost Breakdown — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 632
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:30:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a clear, technical outline of the *cost drivers* that go into building and operating an AI‑powered Document Intelligence (DI) system (e.g., OCR + NLP pipelines). Key assumptions: we’re targeting enterprise‑grade accuracy, real‑time inference, and compliance with privacy regulations.  

**Approach**  
1. List core components: data acquisition, labeling, model training, inference, storage, monitoring, compliance.  
2. For each component, quantify the primary cost factors (compute hours, GPU/TPU usage, cloud storage, human labor).  
3. Sum to a total cost‑of‑ownership (COO) figure; note scale‑up behavior.

**Depth**  

| Component | Cost Driver | Typical Unit Cost | Notes |
|-----------|-------------|------------------|-------|
| **Data & Labeling** | Human annotators + annotation tooling | $0.20–$0.50 per page | High for multi‑language, domain‑specific docs |
| **Model Training** | GPU/TPU hours, data preprocessing | $2–$10/hour per v100/8‑core | Multi‑epoch fine‑tuning on 1M+ pages |
| **Inference** | Edge or cloud compute (CPU/GPU) | $0.01–$0.05 per page | Batch vs real‑time changes cost linearly |
| **Storage & Retrieval** | S3/Blob + indexing | $0.023/GB/month | Long‑term archival may use Glacier ($0.004/GB) |
| **Compliance & Security** | Audits, encryption, key mgmt | Fixed ~$5k/month | HIPAA/PCI DSS add overhead |
| **Monitoring & Ops** | AIOps platform, SLAs | $1–$3 per 10k requests | Alerting, drift detection |

*Total COE* for a medium‑sized org (≈ 500k pages/year) ≈ $300k–$600k.  

**Edge Cases**  
- Sudden spike in document volume → inference cost scales linearly; consider autoscaling or edge caching.  
- Multi‑tenant deployments → isolation costs (separate VPC, separate key rings).  
- Regulatory changes → compliance cost jumps.

**Optimize & Communicate**  
- Use transfer learning + quantization to cut GPU time by 30–50 %.  
- Cache frequent queries; batch inference during off‑peak hours.  
- Adopt serverless inference (e.g., Lambda with GPU) for low‑volume bursts.  

Explain that the biggest lever is *data quality*—clean labels reduce training epochs, saving compute and speeding up iteration cycles. Conclude by framing cost as an investment in ROI: higher accuracy → fewer manual reviews, lower error rates, and faster time‑to‑value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
