---
qid: ing_1bc37c7421__star__local
question: 'Explain: Advanced Questions - June 2026 — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 339
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:48-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were launching a fraud‑detection microservice that had to process 10 k transactions per second with sub‑50 ms latency. The existing rule‑based engine was hitting a 12% false‑positive rate and our devs couldn’t keep up with the constantly changing fraud patterns.

**Task:** I needed to build an AI model that could adapt in real time, reduce false positives below 5%, and fit within our strict latency budget without adding a new inference layer on the edge devices.

**Action:** I opted for a lightweight transformer‑based architecture (DistilBERT) fine‑tuned on labeled transaction logs. To meet latency, I used ONNX Runtime with GPU offloading and batch‑processing of 256 requests per tick. I also implemented an online learning loop: every hour the model was retrained on the latest 1 M transactions, then a shadow deployment compared predictions against ground truth before full rollout. We monitored drift via KL divergence and set alerts to trigger re‑training if drift exceeded 0.3.

**Result:** After two weeks of deployment, false positives dropped to 4.2% while maintaining <45 ms latency. The system processed 12 k TPS on a single GPU, freeing up dev time for new features. I learned that balancing model complexity with inference constraints often requires creative engineering—batching and incremental updates can be more effective than chasing state‑of‑the‑art accuracy alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
