---
qid: ing_5a46ba6bed__aws__local
question: 'Q: When would you choose local or on-device inference over a cloud API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 358
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I was building a mobile health app that predicts arrhythmias from ECG strips, the decision between on‑device inference and a cloud API boiled down to *Customer Obsession* and *Ownership*.  

- **Situation:** The product must deliver real‑time alerts with < 50 ms latency while respecting user privacy.  
- **Task:** Choose an inference strategy that meets latency, security, and cost goals.  
- **Action:** I benchmarked a lightweight TensorFlow Lite model (≈ 2 MB) versus a cloud endpoint on Amazon SageMaker. On‑device gave 35 ms inference, < 5 % battery drain, and no network traffic—satisfying privacy mandates. The cloud route added ~200 ms round‑trip latency and incurred $0.0004 per prediction (≈ $144/month for 1M predictions).  
- **Result:** Deploying on‑device reduced user‑reported “lag” by 78% and cut operational cost from $144 to <$10/month, while maintaining ≥ 99.9 % uptime (no dependency on network).  

**Design trade‑offs:** I used Amazon Device Farm for testing across devices, and AWS IoT Greengrass for optional OTA model updates. The bar‑raiser would note that I owned the end‑to‑end cost curve, dove deep into latency budgets, quantified impact with real metrics, and learned that a hybrid approach (device inference + cloud fallback) is often the safest path when scaling to millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
