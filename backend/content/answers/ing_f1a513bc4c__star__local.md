---
qid: ing_f1a513bc4c__star__local
question: 'Explain: Realtime infrastructure for collaborative AI.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:31-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our product was an AI‑driven budgeting assistant that needed to provide instant suggestions to users while they were editing shared spreadsheets in Google Sheets. The existing batch‑processing pipeline caused a 3–5 second lag, which broke the real‑time feel and drove users away.

**Task:**  
I had to design a low‑latency, collaborative infrastructure that could ingest spreadsheet edits, run inference on our language model, and push updates back into the sheet with sub‑second latency, all while handling dozens of concurrent users without overloading our GPU cluster.

**Action:**  
First, I introduced a Pub/Sub layer (Google Cloud Pub/Sub) to queue edit events. Each event triggered a lightweight worker in a Kubernetes pod that pulled the relevant cell context from Redis cache, ran inference on a quantized T5 model using TensorRT for sub‑10 ms runtime, and pushed the suggestion back via the Google Sheets API. I also implemented optimistic UI updates: the front‑end displayed provisional suggestions immediately while awaiting confirmation. To keep costs in check, I autoscaled pods based on event queue depth and used GPU sharing with NVIDIA vGPU.

**Result:**  
Latency dropped from 4 s to under 200 ms for 95% of edits, boosting user engagement by 42% in the first month. The system scaled to 10,000 concurrent users without exceeding budget limits, and I documented a reusable micro‑service pattern that other teams adopted for real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
