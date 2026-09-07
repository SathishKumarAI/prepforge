---
qid: ing_90af71b229__aws__local
question: 'Explain: MCP architecture ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 585
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:21-05:00'
sources: []
---

**Scenario (S)**  
While leading the *Glean* product team, I was tasked to redesign our Machine‑Learning Prediction (MCP) pipeline so it could serve 10× more users without increasing latency.

**Task (T)**  
Build a highly‑available, low‑cost MCP architecture that scales automatically and reduces model inference time by at least 30 %.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. **Model packaging** | SageMaker Model Registry + ECR | Keeps immutable, versioned artifacts; easy rollback. |
| 2. **Inference endpoint** | SageMaker Real‑Time Endpoint with *Multi‑Model* hosting on **ml.m5.large** instances (auto‑scaling) | Enables many models per instance → cost savings. |
| 3. **Orchestration** | Step Functions + Lambda | Decouples data prep, inference, post‑processing; easy retry logic. |
| 4. **Data layer** | DynamoDB (cache) + S3 (raw features) | Low‑latency reads for per‑user context; durable storage for feature drift analysis. |
| 5. **Observability** | CloudWatch Metrics & Logs, X-Ray | Track latency, error rates, and root causes. |
| 6. **Security** | IAM roles + VPC endpoints | Isolate traffic, enforce least privilege. |

*Scalability*: Auto‑scaling triggers on CPU % >70 % → up to 8 concurrent instances; cold starts <200 ms.  
*Availability*: Endpoint deployed across two AZs with failover routing.  
*Cost*: Multi‑model hosting cuts per‑instance cost by ~55 %.  

**Result (R)**  
- Latency dropped from **420 ms** to **280 ms** (≈33 % reduction).  
- Throughput increased 12×, handling **50k concurrent predictions/day**.  
- Operational cost fell 48 % YoY while maintaining 99.9 % SLA.

---

### Leadership Principles Highlighted
- **Ownership** – I owned the entire end‑to‑end pipeline and drove cross‑team collaboration.  
- **Dive Deep** – Built detailed CloudWatch dashboards to pinpoint drift, leading to proactive model retraining.  

### What a Bar‑Raiser Looks For
- **Quantified Impact**: concrete latency & cost numbers.  
- **Depth of Design**: justification for each AWS service choice and trade‑offs.  
- **Learning from Failure**: post‑mortem on a past 2019 outage that drove the multi‑AZ design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
