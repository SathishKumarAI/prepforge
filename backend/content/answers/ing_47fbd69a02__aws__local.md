---
qid: ing_47fbd69a02__aws__local
question: 'Explain: Bandwidth is certainly an issue. Cost of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 431
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built a real‑time recommendation engine for a global e‑commerce platform. The model had to ingest user clickstreams (≈ 5 TB/day) and serve predictions with < 50 ms latency, while keeping the monthly data‑transfer bill below $120k.

**Action**  
I first *dive deep* into our data‑flow graph on **AWS Glue + Athena** to understand where bandwidth was wasted. I discovered that raw logs were streamed in full to an S3 bucket and then re‑uploaded to a Redshift cluster for training, doubling the egress cost.

1. **Edge compression & filtering** – implemented Lambda functions at the ingestion point to strip unused fields and compress payloads with Zstd before writing to S3 (cutting raw transfer by 60 %).
2. **Serverless analytics** – replaced Redshift with **Amazon Athena + S3 Select** for ad‑hoc queries, eliminating data movement entirely.
3. **Model serving** – moved inference to a **SageMaker Endpoint** behind an **ALB** that auto‑scales on CPU usage, guaranteeing 99.9 % availability while keeping per‑request cost < $0.0005.

**Result**  
- Bandwidth bill dropped from $120k to $48k/month (60 % savings).  
- Latency improved to 38 ms average, beating the SLA by 22 %.  
- Total cost of ownership for the ML pipeline fell 45 %, freeing up $200k for A/B testing.

**Learning & Ownership**  
I documented each change in a post‑mortem and opened a **SageMaker model registry** so future teams could reuse the trained artifacts, embodying *Ownership* and *Invent & Simplify*. The cost savings were validated by an automated CloudWatch alarm that triggered a quarterly review—demonstrating *Bias for Action* and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
