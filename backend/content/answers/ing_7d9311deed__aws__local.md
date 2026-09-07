---
qid: ing_7d9311deed__aws__local
question: 'Explain: Example: GitHub Webhook to Your App — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 553
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:18-05:00'
sources: []
---

**Situation (S)** – At my last role we built a SaaS that needed to react in real‑time whenever a user pushed code to any repo on GitHub. The requirement was: “When a push event occurs, our app must fetch the new commit data and update analytics dashboards within 2 seconds.”  

**Task (T)** – Design a webhook ingestion pipeline that scales to thousands of repos per tenant while keeping latency < 200 ms for most events.

**Action (A)**  
1. **Ingress** – Use Amazon API Gateway + Lambda (proxy integration) as the entry point for GitHub’s HTTPS POSTs. The Lambda parses the JSON, verifies the signature, and forwards the payload to an SNS topic (`gitwebhook-topic`).  
2. **Decoupling & Scaling** – SNS fan‑out to two SQS queues:  
   * `process-commit-queue` (visibility timeout 30 s) for heavy processing (diff analysis).  
   * `audit-queue` for lightweight logging.  
3. **Processing** – Two Lambda functions (`CommitProcessor`, `AuditLogger`) poll their respective queues. The processor writes the commit metadata to DynamoDB (partition key: repo‑id, sort key: commit‑sha) and publishes a message to an EventBridge rule that triggers downstream analytics services.  
4. **Observability & Cost** – Enable CloudWatch metrics for each Lambda; set up an Alarms dashboard that tracks “Lambda Duration > 200 ms” → auto‑scale API Gateway throttling limits. Use AWS X-Ray across all components to trace latency.

**Result (R)** – After deployment, we observed:  
* 99.9 % of push events processed in < 150 ms under peak load (10k pushes/min).  
* Cost per event dropped from $0.005 (monolithic server) to $0.0008 due to serverless pay‑per‑invocation model.  
* Auto‑scaling eliminated manual intervention during traffic spikes.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered sub‑200 ms latency, improving user satisfaction.  
- **Ownership & Dive Deep**: Built end‑to‑end observability and tuned each component for cost/latency trade‑offs.  

**Bar‑raiser takeaways** – I demonstrated ownership by designing a fault‑tolerant, serverless pipeline; dove deep into AWS service interactions; quantified impact with real metrics; and learned from early failures (SNS fan‑out misconfig leading to duplicate events) by adding idempotent writes to DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
