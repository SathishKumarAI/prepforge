---
qid: ing_c25012bffa__aws__local
question: 'Explain: Runnables — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 437
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:27-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI‑ops team at a fintech startup, we needed to run hundreds of LangChain agents (Runnables) nightly to generate compliance reports. The existing batch job failed on 12 % of runs due to unpredictable memory spikes and lacked observability.

**Action**  
I redesigned the pipeline as a serverless micro‑service:

| Requirement | Design |
|-------------|--------|
| **Scalable execution** | Each Runnable is wrapped in an AWS Lambda (15 min timeout) triggered by EventBridge. |
| **Cost control** | Use provisioned concurrency only for high‑priority agents; others run on-demand. |
| **Observability** | Log to CloudWatch, emit metrics to Amazon Managed Prometheus, and trace with XRay. |
| **Fault tolerance** | Implement retry logic in Step Functions (max 3 retries, exponential backoff) and dead‑letter queue to SQS for persistent failures. |

I also added a lightweight **“Runnable cache”** using DynamoDB to store intermediate embeddings, reducing compute by ~35 %. The architecture runs on **AWS Fargate Spot** for heavy‑weight Runnables that exceed Lambda limits, ensuring 99.9 % availability.

**Result**  
- Runtime dropped from 45 min to 12 min (72 % reduction).  
- Cost fell from $1.20 per run to $0.48 (60 % savings).  
- Error rate decreased from 12 % to <1 %.  

**Reflection**  
This project exemplified *Ownership*—I took full responsibility for the end‑to‑end flow—and *Dive Deep*, as I analyzed Lambda memory logs to pinpoint hotspots. The failure of the initial batch taught me to instrument early and iterate quickly, a lesson I now apply to every AI pipeline I build.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
