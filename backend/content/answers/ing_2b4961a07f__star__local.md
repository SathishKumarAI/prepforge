---
qid: ing_2b4961a07f__star__local
question: 'Explain: IPv4 — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 343
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:26-05:00'
sources: []
---

**Situation** – While working on a fraud‑detection platform at FinTechCo, we noticed that the clickstream logs were missing key features: the origin and destination IPs were stored as raw strings, making it hard to feed them into our gradient‑boosted trees. The data volume was 15 M rows per day, and latency had to stay below 200 ms for real‑time scoring.

**Task** – I needed to design a lightweight, scalable pipeline that could convert IPv4 addresses into numerical features suitable for ML models without bloating the storage or slowing inference.

**Action** – I first parsed each dotted quad using Python’s `ipaddress` library, then encoded it as a 32‑bit unsigned integer (big‑endian). To preserve subnet information, I extracted the /24 prefix and stored both the full integer and the prefix separately. For performance, I built a UDF in Spark that leveraged vectorized operations and broadcasted a small lookup table of known malicious prefixes. The pipeline ran on our existing Kafka–Spark cluster, adding only 0.3 s per batch.

**Result** – After deployment, the model’s precision improved from 82% to 88%, and inference latency dropped by 35 ms. I learned that thoughtful IP encoding can dramatically reduce feature dimensionality while retaining essential network topology signals for ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
