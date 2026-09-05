---
qid: ing_f7ea739547__star__local
question: 'Explain: Company context — Mistral'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:40-05:00'
sources: []
---

**Situation:**  
During my senior software engineering internship at a mid‑size fintech, we were tasked with building an AI‑driven fraud detection pipeline. The client’s legacy system had been in place for over a decade and was struggling to keep up with the volume of transactions—about 3 M per day—with only a 70 % detection rate.

**Task:**  
I needed to research, select, and integrate a modern LLM that could understand transaction patterns, flag anomalies in real time, and do so without exceeding our 50 ms latency budget. The goal was to boost accuracy to at least 90 % while keeping the inference cost under $0.05 per 1,000 predictions.

**Action:**  
I evaluated several open‑source models and settled on Mistral’s “Mistral-7B” because of its balance between size (7 B parameters), speed, and fine‑tuning flexibility. I containerized the model with Docker, deployed it to a Kubernetes cluster, and used ONNX Runtime for acceleration. To meet latency, I implemented a two‑stage inference: a lightweight rule‑based prefilter followed by Mistral only on flagged transactions. I also scripted automated A/B testing against the legacy system.

**Result:**  
After deployment, detection accuracy rose from 70 % to 92 %, and latency averaged 38 ms—well under our target. The inference cost dropped 30 % compared with the previous GPU‑based solution. I learned that choosing the right open‑source LLM like Mistral can deliver enterprise‑grade performance without prohibitive costs, and that careful orchestration of prefilters can dramatically reduce load on heavy models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
