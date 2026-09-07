---
qid: ing_9e4283900d__aws__local
question: 'Explain: Otto Support - an MCP agentic-AI security challenge'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 425
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:38-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the *Otto Support* project—a mission‑critical MCP agentic‑AI security platform that needed to detect and remediate threats in real time for a global e‑commerce retailer. The goal was to reduce false positives by 40 % while keeping latency under 50 ms per request.

**Action (Design)**  
I architected a serverless pipeline:  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest | API Gateway + Lambda | Low‑latency, auto‑scaling entry point |
| Feature extraction | SageMaker Processing Jobs | Batch feature engineering on GPU instances |
| Prediction | SageMaker Endpoint (Neptune‑optimized model) | Real‑time inference with 99.9 % availability |
| Remediation | EventBridge → Step Functions → DynamoDB | Orchestrated rollback and alerting |

I introduced *model explainability* by integrating SHAP values in Lambda, feeding back to the data science team for continuous improvement.

**Result**  
- False positives dropped from **18 % to 10.2 %**, a **43 % reduction**.  
- Latency averaged **32 ms**, beating SLA by **36 %**.  
- Cost decreased by **$12K/month** through spot instance usage and auto‑scaling.

**Reflection (Bar‑raiser focus)**  
I took full ownership of the end‑to‑end stack, diving deep into GPU scheduling to avoid cold starts—an area often overlooked. The quantitative impact proved my bias for action, while the iterative feedback loop with data science taught me that even a winning model needs continuous human oversight. This experience exemplifies *Customer Obsession*, *Ownership*, and *Dive Deep*—the principles I live by at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
