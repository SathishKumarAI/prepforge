---
qid: ing_402144069f__aws__local
question: 'Explain: High-Level Architecture — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 417
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:48-05:00'
sources: []
---

**High‑Level Architecture – AI‑Driven Content Moderation**

**Situation & Task (Customer Obsession + Ownership)**  
I led a cross‑functional team to launch an automated moderation pipeline for a global marketplace where 200 M active users posted >10 B items/month. The goal was to reduce human review time by 70% while keeping false positives <2%.

**Approach (Dive Deep + Bias for Action)**  
1. **Data ingestion:** Use Amazon Kinesis Data Streams to capture real‑time uploads and S3 EventBridge triggers for batch content.  
2. **Feature extraction:** Run Lambda workers that invoke SageMaker endpoints (pre‑trained CLIP & BERT models) to generate image/text embeddings, storing them in DynamoDB for quick lookup.  
3. **Policy engine:** A stateless Fargate service evaluates embeddings against a rule set stored in Parameter Store and logs decisions in CloudWatch Logs.  
4. **Human review queue:** Items flagged with confidence <0.85 are pushed to an SQS queue consumed by a human‑in‑the‑loop microservice on ECS, which returns verdicts back to DynamoDB.  

**Result (Deliver Results)**  
- Cut manual triage from 3 hrs to 15 min per item → 70% time savings.  
- False positives dropped from 6% to 1.8%.  
- Cost: <$0.02/item vs $0.10/item for a fully human workflow, saving ~$120M annually.

**Trade‑offs & Learnings**  
We chose SageMaker for rapid model iteration but accepted higher inference latency; we mitigated this with edge Lambda caching. Later, we migrated to Inferentia instances after monitoring CPU bottlenecks—showing continuous learning and ownership of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
