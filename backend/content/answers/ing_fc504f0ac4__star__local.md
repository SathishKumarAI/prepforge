---
qid: ing_fc504f0ac4__star__local
question: Do You Need Durable Execution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 302
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:04-05:00'
sources: []
---

**Situation:**  
During a summer internship at a fintech startup, I was tasked with building an AI‑driven fraud detection pipeline that processed millions of transactions per day. The original design used stateless microservices orchestrated by Kubernetes jobs, which meant each job ran to completion and then exited.

**Task:**  
I needed to ensure the system could reliably handle transient failures (network blips, spot instance termination) without losing partial results or re‑processing entire datasets—critical because a missed fraud alert could cost the company thousands of dollars per day.

**Action:**  
I introduced Azure Durable Functions to orchestrate the workflow. I broke the pipeline into three durable activities: ingestion, model inference, and result aggregation. Each activity persisted its state in Cosmos DB, so if an instance died, the next one resumed from the last checkpoint. I also added a retry policy with exponential back‑off and circuit breaker logic for external API calls. Finally, I instrumented the orchestrator with Application Insights to monitor execution times and failure rates.

**Result:**  
The system achieved 99.9% uptime during peak load, reduced duplicate processing by 45%, and cut fraud detection latency from 12 seconds to 4 seconds on average. I learned that durable execution isn’t just a convenience—it’s essential for building resilient AI pipelines where state consistency directly impacts business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
