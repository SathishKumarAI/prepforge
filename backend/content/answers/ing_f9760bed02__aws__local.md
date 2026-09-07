---
qid: ing_f9760bed02__aws__local
question: 'Explain: Run experiment — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 480
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:15-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a cross‑functional team that needed to validate a new LLM‑based recommendation engine before launch. The goal was 80 % accuracy on unseen user queries and <2 s latency for production inference.

**Action (Technical Design)**  
I architected an end‑to‑end experiment pipeline in AWS:

1. **Data & Evaluation** – Store the test set in S3, metadata in DynamoDB. Use Langwatch to generate prompt–response pairs; store them back in S3 for auditability.  
2. **Evaluation Engine** – Deploy a lightweight Lambda that pulls batches from S3, runs inference on SageMaker endpoint (real‑time model), and streams results to Amazon EventBridge.  
3. **Result Aggregation** – A Step Function orchestrates parallel evaluations, writes metrics (accuracy, latency) to CloudWatch Metrics and DynamoDB.  
4. **Analysis & Feedback** – Use QuickSight dashboards for real‑time monitoring; trigger an SNS alert if accuracy <80 %.  

I incorporated **Langfuse** for experiment tracking: each run gets a unique ID, all artifacts are versioned, and the UI shows per‑prompt success rates.

**Result**  
The pipeline processed 200k queries in under 12 hrs, delivering a 82 % accuracy score with median latency 1.8 s—meeting our SLA. Cost was $3,400/month vs. the previous manual evaluation ($18,000).  

**Reflection (Leadership)**  
*Ownership*: I owned end‑to‑end delivery and drove cost optimisation.  
*Dive Deep*: By instrumenting every step with CloudWatch and Langfuse I could pinpoint bottlenecks in <5 min.  
*Learned*: Initial Lambda timeouts caused 12 % data loss; we switched to Step Functions for guaranteed retries—an example of bias‑for‑action leading to a more resilient system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
