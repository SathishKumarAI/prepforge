---
qid: ing_bb285224aa__aws__local
question: 'Explain: Data & context strategy — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 361
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:40-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the launch of a real‑time voice assistant for a telecom client that needed instant fraud detection and personalized offers while keeping latency under 200 ms.

**Action (Dive Deep & Ownership)**  
I defined a *data & context strategy* that blended streaming telemetry with contextual knowledge graphs.  
- **Data ingestion:** Kinesis Data Streams fed call audio transcriptions to Lambda, which pushed structured events into DynamoDB for low‑latency lookups.  
- **Context enrichment:** A Step Functions workflow queried an Amazon Neptune graph (customer journey + device metadata) and returned a confidence score.  
- **Real‑time inference:** SageMaker endpoint hosted a lightweight BERT model that generated intent & sentiment in < 150 ms, feeding back to the Lambda layer for dynamic response generation.  

I also built a CI/CD pipeline with CodePipeline + CloudWatch alarms to auto‑scale the endpoint based on request spikes, ensuring 99.9 % availability.

**Result (Deliver Results)**  
The system reduced average handling time from 4.5 s to 1.2 s and increased upsell conversion by **18 %** in the first quarter post‑deployment, while keeping monthly AWS spend below $12K through spot instances and auto‑scaling.

**Bar‑raiser check** – I owned every component, dug into latency logs to identify a bottleneck that cut 30 ms, and documented a “failure playbook” for future voice‑AI rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
