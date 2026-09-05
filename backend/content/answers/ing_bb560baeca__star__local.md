---
qid: ing_bb560baeca__star__local
question: 'Explain: Dynamic targeting — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:47-05:00'
sources: []
---

**Situation:** In my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that had just doubled its traffic during the holiday season. The existing monolith couldn’t handle the burst load and we needed to decouple services so we could scale recommendations independently.

**Task:** Build a dynamic targeting pipeline that would ingest user click events, publish them instantly, and allow multiple downstream analytics and personalization micro‑services to consume the data without blocking each other. I had to ensure low latency (< 50 ms) and fault tolerance while keeping costs under our $20K/month budget.

**Action:** I chose AWS SNS for a simple publish/subscribe pattern to broadcast click events to multiple topics (e.g., “recommendations,” “analytics,” “fraud‑detection”). For each topic, I set up an SQS queue as the subscription endpoint and used Lambda workers to process messages. The Lambdas were auto‑scaling via SQS long polling, guaranteeing that any spike in traffic was absorbed by new instances without manual intervention. I also enabled dead‑letter queues for retries and added CloudWatch metrics to monitor message latency and error rates.

**Result:** The new pub/sub architecture cut recommendation latency from 2 s to under 30 ms, handled a 4× traffic surge with no outages, and reduced infrastructure costs by 18% compared to the monolith. I learned that decoupling via SNS/SQS gives you granular control over scaling and fault tolerance while keeping the system simple enough for rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
