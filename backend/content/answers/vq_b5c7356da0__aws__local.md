---
qid: vq_b5c7356da0__aws__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 462
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:19-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built an event‑driven microservice platform on AWS. A recurring issue was deadlocks in the distributed transaction coordinator that caused SLA breaches (up to 12 % of requests stalled for >30 s). My goal was to eliminate deadlocks while keeping latency <50 ms and cost under $0.02 per request.

**Action**  
1. **Ownership & Dive Deep:** I first instrumented the coordinator with CloudWatch metrics (`deadlock_count`, `transaction_latency`) and traced a sample of 10 k failed transactions using X-Ray to identify contention points on DynamoDB tables.  
2. **Design Change – Optimistic Locking + Retry Loop**  
   * Replaced pessimistic locks with DynamoDB’s conditional writes (using `__version` attribute).  
   * Implemented an exponential back‑off retry strategy in the Lambda orchestrator, capped at 3 retries.  
   * Added a “deadlock detector” Lambda that scans the `deadlock_count` metric and triggers an SNS alert if >5 per minute.  
3. **AWS Services & Trade‑offs** – DynamoDB (on‑demand), Lambda, CloudWatch, X‑Ray, SNS.  
   * **Scalability:** No shared lock table; each transaction operates independently, scaling to 10 k TPS.  
   * **Availability:** Conditional writes are atomic; no single point of failure.  
   * **Cost:** Reduced from $0.08/request (with pessimistic locking) to $0.015/request.

**Result**  
Within two weeks of deployment, deadlock incidents dropped to <0.1 % and average request latency improved from 68 ms to 42 ms—meeting our SLA. The cost savings were $12k/month. I documented the solution in a knowledge‑base article that cut onboarding time for new engineers by 30 %.  

**Bar‑raiser cues** – clear ownership, deep technical dive, measurable impact, and proactive learning loop (continuous monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
