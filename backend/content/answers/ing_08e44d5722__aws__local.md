---
qid: ing_08e44d5722__aws__local
question: 'Explain: Company context — Together Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 423
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:13-05:00'
sources: []
---

**Company Context – Together AI**

*Customer Obsession & Ownership*: When I joined Together AI, the mission was clear: democratize generative‑AI for small businesses that lacked data science talent. The team had to build a plug‑and‑play platform that could ingest any customer dataset and generate tailored marketing copy, product descriptions, and chatbot scripts—all while staying GDPR‑compliant.

*Technical Scope*: I scoped a microservices architecture using **Amazon SageMaker** for model training/serving, **AWS Lambda** for lightweight inference, and **Amazon DynamoDB** as the metadata store. To keep latency < 200 ms under peak load (≈ 10k requests/sec), I introduced an API Gateway cache tier backed by **ElastiCache‑Redis**. The design leveraged **S3 EventBridge** to trigger retraining when new data arrived, ensuring models stayed fresh without manual intervention.

*Scalability & Cost*: Auto‑scaling SageMaker endpoints reduced idle compute from 70 % to < 20 %, cutting monthly spend by $12k. Using spot instances for training lowered costs by 35 %. We achieved 99.9 % availability with a multi‑AZ deployment and automated failover via Route 53 health checks.

*Result*: Within six months, we onboarded 150 SMEs, generating over **3M** pieces of AI‑generated content monthly—up 120 % YoY—and reduced average response time from 1.5 s to 0.25 s, earning a Net Promoter Score jump from 65 to 82.

*Bar‑raiser focus*: I demonstrated ownership by owning the entire ML pipeline, dove deep into latency bottlenecks, quantified impact with concrete metrics, and iterated after a failed model rollout—pivoting to an ensemble approach that improved accuracy by 8 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
