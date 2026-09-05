---
qid: ing_8c344acf98__star__local
question: 'Explain: 📱 Mobile Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 297
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:10-05:00'
sources: []
---

**Situation** – While working at a fintech startup, our app’s fraud‑detection accuracy lagged behind the industry benchmark of 95 %. The product manager pushed us to hit that target before the next regulatory audit.

**Task** – I was tasked with integrating an on‑device machine‑learning model that could flag suspicious transactions in real time without draining battery or compromising user privacy.

**Action** – First, I prototyped a TensorFlow Lite model trained on anonymized transaction logs. To keep latency under 200 ms, I used quantization and pruned the network to 30 % of its original size. I then wrapped it in a Kotlin wrapper that exposed a simple API to our existing payment flow. For privacy, all inference ran locally; no data left the device. I also added an adaptive threshold that tweaked sensitivity based on user behavior patterns, balancing false positives and negatives.

**Result** – After deploying the model in a staged rollout, fraud‑detection accuracy rose from 87 % to 96 %, meeting the audit requirement ahead of schedule. The average CPU usage dropped by 15 %, and battery impact was negligible. I learned how to balance model performance with mobile constraints, and that privacy‑first design can actually boost user trust—and business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
