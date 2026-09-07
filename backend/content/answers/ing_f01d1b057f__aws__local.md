---
qid: ing_f01d1b057f__aws__local
question: 'Explain: Inconsistent decision logs — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:07-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a migration of our legacy IAM system to a fully‑cloud native policy engine (AWS IAM + AWS Cognito + custom Lambda authorizer). During load testing we hit *inconsistent decision logs*—policy decisions were being cached or replayed incorrectly, causing intermittent authorization failures that were hard to trace.

**Action**  
I applied the **Five Laws of Cloud‑Native Authorization**:

1. **Decouple policy evaluation from execution** – isolated a Lambda authorizer so each request ran a fresh eval.  
2. **Use idempotent decision keys** – built a deterministic cache key (user, action, resource hash).  
3. **Log decisions with immutable context** – stored every decision in DynamoDB with `EventId`, timestamp, and full policy snapshot.  
4. **Version‑control policies** – deployed via CodePipeline; each change triggered a new version tag so logs always referenced the correct rule set.  
5. **Automate reconciliation** – scheduled nightly Glue jobs to compare live decisions vs. log entries, flagging drift.

I leveraged **AWS DynamoDB**, **Kinesis Data Streams**, and **Step Functions** for audit pipelines, ensuring 99.9% availability and < $0.02 per 1k requests cost.

**Result**  
Post‑refactor, authorization latency dropped from 120 ms to 35 ms (30 % improvement) and the inconsistency rate fell from 7.4 % to < 0.01 %. The audit log now feeds a real‑time dashboard in CloudWatch Insights, giving ops an instant view of policy drift.

**Reflection**  
Ownership drove me to own the entire data flow; diving deep into cache semantics uncovered the root cause. I learned that immutable logging is non‑negotiable for trustworthy auth in distributed systems—an insight I now share with new teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
