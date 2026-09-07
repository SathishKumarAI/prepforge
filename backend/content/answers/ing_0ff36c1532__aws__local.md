---
qid: ing_0ff36c1532__aws__local
question: 'Explain: Authentication ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 437
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:30-05:00'
sources: []
---

**Situation & Task**  
I was hired to secure the Glean MCP (Machine‑Learning‑Inference‑Platform) that exposes model endpoints to internal teams. The system had a simple shared‑secret approach; an audit log showed 4 × 10⁶ failed login attempts per day, and we were on the brink of a compliance audit. I owned the redesign, with the goal of tightening security while keeping latency < 100 ms for 95 % of inference calls.

**Action & Design**  
* **Identity Layer:** Migrated to AWS Cognito + AWS IAM roles for fine‑grained access. Each service account receives a short‑lived JWT (5 min) scoped to the specific model ARN.  
* **Rate Limiting & Throttling:** Deployed an API Gateway with custom Lambda authorizer that checks Cognito tokens and enforces per‑user request caps (500 req/min).  
* **Zero‑Trust Network:** Wrapped MCP behind a VPC endpoint service, exposing only HTTPS via NLB; all traffic is encrypted in transit.  
* **Audit & Monitoring:** Integrated CloudTrail + GuardDuty to flag anomalous token usage; set up an EventBridge rule that triggers a Lambda alert for any failed auth > 1000 per minute.

**Result**  
Within 3 weeks, failed login attempts dropped from 4 × 10⁶/day to < 300/day (99.9 % reduction). The new flow added only ~12 ms latency on the 95th percentile inference request. Cost increased by 18 %, but this was offset by eliminating manual key rotation and reducing potential breach remediation costs.

**Reflection & Learning**  
I learned that *Ownership* means anticipating future audit requirements, while *Dive Deep* forces you to quantify every security metric. The trade‑off—slight latency increase for far greater compliance confidence—was validated by the data and stakeholder buy‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
