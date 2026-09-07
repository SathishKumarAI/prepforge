---
qid: ing_fb342737e5__aws__local
question: 'Explain: Problem 3: Cut-off time issue — Reconciliation in Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 665
total_tokens: 900
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:24-05:00'
sources: []
---

**Problem:**  
When processing payment batches we discovered that the reconciliation job ran past its cut‑off window (5 pm local time). Late runs caused customers to see “pending” balances for an extra 24 h, hurting satisfaction and inflating reconciliation costs.

---

### Situation & Task
In my role as *Payment Processing Lead* at a fintech startup, I was responsible for ensuring all daily payments were reconciled before the cut‑off. After an incident where 12 % of transactions stayed “unreconciled” into the next day, we needed a fault‑tolerant system that guarantees on‑time completion and alerts when deadlines are breached.

### Approach (Technical Design)
1. **Event Source** – All payment records land in an **Amazon S3 bucket** (`payments-raw/`).  
2. **Trigger & Validation** – An **S3 event** invokes a **Lambda** that parses the batch, validates schema, and writes a *reconciliation task* to **DynamoDB** (partition key: `BatchID`, sort key: `CreatedAt`).  
3. **Orchestration** – A **Step Function** (`ReconcileWorkflow`) pulls tasks from DynamoDB, executes two parallel Lambdas:
   - `CalculateTotals` (maps over payment items, aggregates sums) → stores intermediate results in S3.
   - `PostToAccountingAPI` (calls external ledger service).
4. **Timeout & Compensating Actions** – The Step Function has a hard 30‑minute timeout. If exceeded, it triggers a **SNS** alert and writes to an **SQS Dead Letter Queue** for manual triage.  
5. **Monitoring** – CloudWatch Alarms on Lambda duration (>90 % of budget) & Step Function status (`Failed`) send Ops alerts.

### Result
- **Latency:** 99th percentile batch completion dropped from 1 h 45 min to **22 min** (95% below cut‑off).  
- **Cost:** Serverless architecture reduced EC2 overhead by **$3,200/month**.  
- **Reliability:** No more late reconciliations in the subsequent 6 months; SLA improved from 88 % to **100 %** on‑time completion.

### Reflection (Bar‑raiser Lens)
*Ownership:* I owned the end‑to‑end flow and coordinated cross‑team testing.  
*Dive Deep:* I profiled Lambda execution, identified a 40 ms cold‑start bottleneck in `PostToAccountingAPI`, and introduced provisioned concurrency.  
*Quantified Impact:* Delivered a 3× performance lift at $‑$3k/month savings.  
*Learning from Failure:* After the first failure, we added a “watchdog” Lambda that re‑triggers the Step Function if it’s idle for >10 min.

**Leadership Principles:** *Customer Obsession* (reduced customer wait time), *Ownership* (full responsibility for resolution), and *Dive Deep* (performance tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
