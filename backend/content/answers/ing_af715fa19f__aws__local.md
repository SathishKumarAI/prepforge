---
qid: ing_af715fa19f__aws__local
question: 'Explain: Kill Switches and Emergency Shutdown — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 545
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:19-05:00'
sources: []
---

**Situation (S)** – While leading the *SafeAI* platform at my previous company, we were tasked to launch a real‑time recommendation engine that could be turned off instantly if it violated content or privacy policies. The risk was high: a faulty model could generate disallowed content and expose us to regulatory fines.

**Task (T)** – Build an automated “kill switch” + emergency shutdown framework that guarantees 99.9 % uptime for legitimate traffic while allowing a latency‑free, auditable abort path within 200 ms of detection.

**Action (A)**  
1. **Architecture**: Deployed the model behind an *Amazon API Gateway* fronting *Lambda@Edge*, with a dedicated *SQS Dead‑Letter Queue* that receives policy‑violation events.  
2. **Kill Switch Service** – A small *EC2 Spot Fleet* instance hosts a lightweight Flask service exposing `/kill`. The switch state is stored in *DynamoDB* (partition key `serviceId`, attribute `active`).  
3. **Emergency Shutdown** – On violation, the model pushes to SQS; a Lambda function reads the message, writes `active=false` to DynamoDB, and publishes an SNS topic that triggers a *CloudWatch Alarm*. The alarm runs a *Step Function* that calls AWS Config rules to disable API Gateway endpoints, ensuring no new requests reach the model.  
4. **Audit & Rollback** – All state changes are logged in CloudTrail; metrics (latency, switch activations) feed into Grafana dashboards.

**Result (R)** – In production, we handled 12 M requests/day with a 0.02 % violation rate. The kill‑switch latency averaged **180 ms**, and the system never falsely disabled the service. After deployment, regulatory compliance scores rose from 78 to 99%, saving an estimated $1.2 M in potential fines.

**Leadership Principles Anchored**  
- **Customer Obsession** – Protect users from harmful content.  
- **Ownership** – Designed end‑to‑end fail‑safe with clear rollback paths.  

**Bar‑raiser cues** – Demonstrated *ownership* by owning the full safety loop, *dive deep* into AWS service trade‑offs (Lambda vs EC2 Spot), quantified impact (latency, compliance score), and learned from an early false‑positive incident to tighten policy rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
