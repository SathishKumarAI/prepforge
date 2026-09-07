---
qid: ing_1fba10146d__aws__local
question: 'Explain: Per-tenant eval suite as the gate — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:58-05:00'
sources: []
---

**Situation & Task**  
I led a team that built a *per‑tenant evaluation suite* for our multi‑tenant fine‑tuning platform at AWS. The goal was to prevent a single tenant’s noisy data from degrading the shared model pool while keeping latency under 200 ms and cost below $0.005 per inference.

**Action**  
1. **Ownership & Bias for Action:** I scoped the problem, defined success metrics (≤ 1% drift in BLEU score across tenants), and broke it into three phases: data vetting, dynamic thresholding, and rollback.  
2. **Dive Deep:** We instrumented each tenant’s training job with CloudWatch metrics (loss variance, token‑rate). Using Amazon SageMaker Feature Store, we built a real‑time feature store to feed the evaluation engine.  
3. **Design & AWS Services:**  
   * *Amazon SageMaker Pipelines* orchestrated the fine‑tuning jobs.  
   * *AWS Lambda + Step Functions* executed the per‑tenant eval logic at the end of each pipeline run.  
   * *DynamoDB* stored tenant‑specific thresholds; *SNS* triggered alerts for drift.  
4. **Scalability & Cost:** The Lambda pool was auto‑scaling (max 200 concurrent), keeping memory usage ≤ 512 MB, yielding an average cost of $0.003 per inference versus the baseline $0.006.

**Result**  
- Reduced cross‑tenant contamination by 92%, measured as a drop from 12% to 1% BLEU drift.  
- Cut platform operating costs by 35%.  
- Earned “Customer Obsession” recognition for delivering a robust, transparent guardrail that gave tenants confidence in shared resources.

**Learning**  
A failed pilot exposed latency spikes due to cold starts; we migrated critical logic to Amazon EC2 Spot Fleet with pre‑warm instances—highlighting the importance of continuous monitoring and rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
