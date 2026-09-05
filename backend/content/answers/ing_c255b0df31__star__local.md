---
qid: ing_c255b0df31__star__local
question: 'Explain: Where it runs . Who controls it. What certifies it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 282
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:28-05:00'
sources: []
---

**Situation:** In a recent project for a large e‑commerce retailer, we had to deploy an AI recommendation engine that processed customer data in real time while meeting strict privacy and compliance requirements.

**Task:** I was responsible for ensuring the model ran reliably on our infrastructure, establishing clear control over its decisions, and obtaining necessary certifications before launch.

**Action:** First, I containerized the TensorFlow model with Docker and orchestrated it using Kubernetes on a private AWS VPC, isolating inference workloads from other services. For governance, we built an internal policy engine that logged every recommendation decision, linked to user consent flags stored in DynamoDB; only data owners could modify the scoring logic via a fine‑grained IAM role. To certify compliance, I coordinated with external auditors to perform ISO 27001 and SOC 2 Type II assessments, and we implemented automated model drift monitoring using Evidently AI to trigger re‑certification when performance fell below 0.85 AUC.

**Result:** The system launched on schedule, achieving a 12% lift in conversion rates while keeping data handling within GDPR boundaries. We received the ISO 27001 certificate two weeks post‑deployment and learned that embedding governance into the deployment pipeline dramatically reduces audit time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
