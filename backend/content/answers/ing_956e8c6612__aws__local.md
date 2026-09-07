---
qid: ing_956e8c6612__aws__local
question: 'Explain: Custom Governance Controls — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 528
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:51-05:00'
sources: []
---

**Situation & Task**  
At a health‑tech startup we were asked to build an on‑prem “AI Concierge” that could converse with patients about medication adherence. The client required *zero data leakage* and compliance with HIPAA, GDPR, and the FDA’s 21 CFR Part 11. We had to create **Custom Governance Controls** so that every generative‑AI utterance was auditable, auditable, and only allowed if it passed a policy engine.

**Action**  
1. **Architecture** – I designed an *event‑driven* pipeline:  
   - **Amazon Bedrock** (LLM) wrapped in a *custom prompt layer*.  
   - **AWS Lambda** as the policy gatekeeper; each request/response pair is passed through a JSON schema validator and a rule set stored in DynamoDB.  
   - **Amazon KMS** encrypts all conversation logs at rest; **AWS CloudTrail** records every API call.  
   - **Amazon GuardDuty** + **AWS Config** enforce continuous compliance checks.

2. **Governance Engine** – I wrote a *policy-as-code* DSL (in Go) that maps to the FDA’s “Safe Use” guidelines. The engine flags disallowed content, rate‑limits certain prompts, and routes flagged utterances to human reviewers via Amazon SQS.

3. **Testing & Validation** – We simulated 1 M conversation turns in a staging cluster; latency stayed <120 ms (95th percentile) while cost per turn was <$0.03.

4. **Deployment & Monitoring** – Using AWS CDK, I codified the stack for IaC and set up CloudWatch dashboards that report *policy‑violation rate* and *average review turnaround time*.

**Result**  
- Achieved **100 % compliance audit score** on the first FDA audit (no findings).  
- Reduced manual review effort by 70 % (from 5 h/day to 1.5 h/day).  
- Cut infrastructure cost by 30 % through right‑sizing Lambda and using *Provisioned Concurrency* only for peak hours.

**Reflection**  
I learned that *policy‑as‑code* must evolve with regulatory changes; we now run quarterly policy reviews automatically triggered by Config. This project exemplifies **Ownership**, **Dive Deep**, and **Deliver Results**—ensuring customer data stays safe while delivering a scalable AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
