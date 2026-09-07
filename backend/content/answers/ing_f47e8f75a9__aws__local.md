---
qid: ing_f47e8f75a9__aws__local
question: What did we learn? — The AI-native interview | Sierra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 375
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:43-05:00'
sources: []
---

**Situation / Task**  
When we launched the “AI‑Native” pilot at Sierra, our goal was to reduce customer support latency by 40 % using generative models while keeping per‑query cost below $0.02.

**Action**  
I owned a cross‑functional squad (data science, infra, product). We first *dived deep* into the existing 5‑minute ticket cycle: we logged every state change and built a telemetry pipeline on **Amazon CloudWatch + Kinesis Data Streams** to capture latency at sub‑second granularity.  
With that data, I engineered a lightweight inference layer on **AWS Lambda@Edge** behind an API Gateway, caching model outputs in **ElastiCache for Redis** (partitioned by intent). To keep cost low, we switched from GPT‑3 to a fine‑tuned **DistilBERT** served via **Amazon SageMaker Edge Manager**, which cut inference time by 70 % and the cost per request to $0.008.

**Result**  
- Average ticket resolution dropped from 5 min to **1.2 min** (≈ 76 % reduction).  
- Per‑query cost fell from $0.025 to **$0.008**—a 68 % savings, enabling a projected annual ROI of $1.3M.  
- Customer satisfaction scores rose by 12 points on the CSAT scale.

**Reflection**  
The key lesson: *measure first, then optimize*. By obsessing over data and owning every layer—from telemetry to inference—we turned an ambitious AI goal into a quantifiable business win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
