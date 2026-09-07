---
qid: ing_fce7d443e5__aws__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:50-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI‑Ops team at a fintech startup, our model‑validation pipeline was manual and error‑prone. The leadership goal: “Deliver Results” by reducing false positives in fraud‑detection models while keeping latency < 100 ms for real‑time scoring.

**Action (Dive Deep + Invent & Simplify)**  
I designed a **Code‑Based Eval framework** that automatically executes user‑supplied evaluation scripts against fresh inference batches. Key components:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Data ingestion | S3 + Kinesis Data Streams | Durable storage + real‑time streaming |
| Evaluation workers | ECS Fargate + SageMaker Processing Jobs | Auto‑scales with batch size; no server management |
| Results aggregation | DynamoDB + CloudWatch Logs | Low‑latency, cost‑effective key‑value store |
| Alerting | SNS + EventBridge | Immediate ops notification |

The framework parsed each script’s `eval()` function, ran it on a 10 k sample set, and returned metrics (AUC, precision@k). We added a retry policy and sandboxed containers to mitigate malicious code.

**Result (Customer Obsession)**  
- **Accuracy uplift:** AUC increased from 0.81 → 0.87 (12% relative) by quickly iterating on feature engineering.  
- **Latency:** End‑to‑end eval time dropped to 78 ms, meeting SLA.  
- **Cost:** Operational spend fell 35 % because we eliminated manual QA hours.

**Learnings & Bar‑Raiser Insight**  
I documented failure cases (e.g., script timeouts) and introduced a “code review” gate, ensuring every eval script passes static analysis before deployment—an ownership practice that the bar‑raiser highlighted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
