---
qid: ing_2efa783a94__star__local
question: Why Work at Abridge? — Machine Learning Systems Engineer (Staff/Senior)
  @ Abridge | Colorwave Job Board
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 356
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:20-05:00'
sources: []
---

**Situation:** In my last role I was leading a team that built an AI‑driven customer support chatbot for a telecom provider. The bot had to handle 70k tickets per day, but our accuracy dropped to 78% after the new product launch, and we were missing key metrics like intent recall.

**Task:** My goal was to redesign the model pipeline so we could achieve at least 90% intent recall while keeping latency under 200 ms for real‑time response. I also needed to set up a continuous learning loop that would ingest new support tickets without manual labeling.

**Action:** I started by migrating our feature extraction from hand‑crafted TF‑IDF vectors to a lightweight transformer encoder (DistilBERT) fine‑tuned on domain data, which reduced inference time by 35%. I implemented an online learning system using Kafka streams that pushed labeled examples into a nightly retraining job on Kubernetes. For model monitoring, I built dashboards in Grafana tracking precision, recall, and latency per intent, and set up alerting when thresholds dropped below 88% or 250 ms. To manage compute costs, I used mixed‑precision training with NVIDIA Apex and switched to Spot instances for nightly jobs.

**Result:** Within two months the bot’s intent recall jumped to 92%, reducing ticket resolution time by 30%. Real‑time latency stayed below 190 ms, keeping user experience smooth. The continuous learning loop cut manual labeling hours by 80% and improved model drift detection. This experience taught me how to blend cutting‑edge NLP models with production‑ready infrastructure—exactly the kind of challenge Abridge tackles in its AI‑powered medical documentation platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
