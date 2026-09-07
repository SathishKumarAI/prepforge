---
qid: ing_709df9a9c2__faang__local
question: 'Explain: Scaling & ops — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 607
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:05:30-05:00'
sources: []
---

**Scaling & Ops – Meeting Assistant**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* Build a real‑time meeting assistant that transcribes audio, tags agenda items, and auto‑generates minutes for 10k+ concurrent users. <br>*Assumptions to confirm:* 1) Audio quality varies (webcam mic vs conference call). 2) Latency target ≤ 200 ms per token. 3) Data residency constraints (EU/US). |
| **Approach** | 1️⃣ *Micro‑service architecture* – separate ingestion, ASR, NLP, storage, and UI services. <br>2️⃣ *Event‑driven pipeline* – Kafka topics for raw audio → ASR output → annotation events. <br>3️⃣ *Auto‑scaling* – Kubernetes HPA on CPU/latency metrics; use spot instances for bursty workloads. <br>4️⃣ *Caching & CDN* – Store frequent agenda templates in Redis; serve UI assets via CloudFront. |
| **Depth** | - **ASR**: Use a model (e.g., Whisper‑Large) distilled to 1/3 size, run on GPU nodes; batch inference per 10 s window → ~30× cost savings. <br>- **NLP**: Span detection for action items using BiLSTM‑CRF; fine‑tune on 50k meeting transcripts (≈ 200 M tokens). <br>- **Data store**: PostgreSQL for structured minutes, S3 for raw audio; use partitioning by date. <br>- **Latency**: Target 150 ms per token → 30 ms GPU + 10 ms network + 20 ms processing. <br>- **Observability**: Prometheus metrics (latency, error rate), Grafana dashboards; automated alerts on SLA breaches. |
| **Edge Cases** | • *Noisy audio*: fallback to speaker‑diarization + noise suppression pipeline.<br>• *Simultaneous high‑volume call*: trigger throttling, queue events, notify users of slight delay.<br>• *Legal compliance*: encrypt data at rest (AES‑256), enforce GDPR “right to be forgotten” by purging after 30 days. |
| **Optimize & Communicate** | - Profile CPU/GPU usage; replace heavy layers with quantized ops if > 2× latency. <br>- Use serverless for low‑traffic regions to cut idle cost. <br>Explain trade‑offs: higher accuracy ↔ higher GPU cost; batch size ↔ latency. <br>Document decisions in a design doc and present KPI dashboards to stakeholders, ensuring transparency of scaling strategy. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
