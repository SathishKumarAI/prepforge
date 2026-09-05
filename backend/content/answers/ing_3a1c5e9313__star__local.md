---
qid: ing_3a1c5e9313__star__local
question: 'Explain: Data — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:48-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving a churn‑prediction model for a telecom client whose data lake contained over 500GB of raw event logs and user profiles. The accuracy plateaued at 72 % because the features fed into the model were noisy and lacked business context.

**Task** – My goal was to engineer the data pipeline so that each feature reflected real customer intent, thereby boosting model performance while keeping latency under 2 seconds for online scoring.

**Action** – I started by mapping raw event streams (clicks, calls, support tickets) to a unified schema using Kafka Streams and Spark Structured Streaming. Next, I applied domain‑driven transformations: converting “number of dropped calls” into a weighted risk score, aggregating “time since last upgrade” into a decay function, and normalizing text fields with BERT embeddings for sentiment analysis. I also built a feature store in Feast to cache the engineered features, reducing compute by 40 %. Throughout, I used automated unit tests and drift alerts to ensure consistency.

**Result** – The re‑engineered dataset lifted model AUC from 0.72 to 0.86 and reduced churn prediction latency from 5 s to 1.8 s. I learned that context engineering is not just feature creation; it’s about aligning data with business intent, automating the pipeline, and continuously validating against real‑world signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
