---
qid: ing_8ae7b762db__aws__local
question: 'Explain: Characteristics — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 448
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:38-05:00'
sources: []
---

**Situation / Task**  
I led a data‑science team building a real‑time recommendation engine that fed into our e‑commerce storefront. The model was invoked via an API gateway and could fail for transient network or compute issues, yet we needed near‑zero latency and 99.9 % success.

**Action**  
1. **Design a retry pattern**:  
   * **Exponential back‑off + jitter** to avoid thundering herd.  
   * Use **AWS Step Functions** with the `Retry` field for up to 5 attempts (0 ms, 200 ms, 400 ms, 800 ms, 1.6 s).  
   * On failure after retries, route the payload to an **SQS DLQ** and trigger a **Lambda** that logs the event and notifies engineering via SNS.  
2. **Observability**: Instrumented each retry with CloudWatch metrics (`ml.retries.total`, `ml.retries.success`).  
3. **Cost control**: Limited retries to 5; any unprocessed messages are moved to DLQ, preventing runaway charges.

**Result**  
- Reduced API error rate from **4.2 %** to **0.12 %** (≈ 97 % improvement).  
- Latency increased by only **18 ms** on average—still within SLA.  
- Cost impact: Step Functions added < $0.01 per 1,000 invocations; overall monthly spend fell by **3 %** after de‑scaling under‑utilized SageMaker endpoints.

**Reflection (Bar‑raiser notes)**  
I owned the problem end‑to‑end, dove deep into retry semantics, quantified impact with real metrics, and learned that a modest back‑off can dramatically improve reliability without hurting user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
