---
qid: ing_068d4a7fc0__faang__local
question: 'Explain: Round 3: AI system design (45-60 minutes)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 460
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:41-05:00'
sources: []
---

**Round 3 – AI System Design (45‑60 min)**  

---

### 1️⃣ Clarify  
*Restate the problem:* “Design an end‑to‑end AI system that can recommend personalized content to millions of users in real time.”  
*Assumptions to confirm:* data volume, latency targets, privacy constraints, available compute budget, and whether we’re serving a single model or multiple modalities (text, image, video).  

### 2️⃣ Approach  
1. **Data pipeline** – ingest logs → batch preprocessing → feature store.  
2. **Model training** – collaborative filtering + transformer‑based content embeddings; train on GPUs, checkpoint every epoch.  
3. **Serving layer** – use model distillation to lightweight inference models; deploy via a microservice cluster with autoscaling.  
4. **Cold‑start & personalization** – fallback popularity ranking; online learning updates user vectors in real time.  
5. **Monitoring** – latency dashboards, A/B test counterfactuals, drift alerts.

### 3️⃣ Depth (Core Design)  
*Training:* Use distributed PyTorch Lightning on a GPU cluster; sharded data loader for millions of interactions. *Complexity:* \(O(N \log N)\) for negative sampling per epoch.  
*Serving:* Quantized models (INT8) reduce inference latency to <10 ms; cache top‑k recommendations per user in Redis. *Trade‑off:* Slight accuracy loss vs. massive throughput gain.  

### 4️⃣ Edge Cases  
- **Data sparsity** – hybrid content + collaborative signals.  
- **Model drift** – schedule nightly retrain or online incremental updates.  
- **Privacy violations** – enforce differential privacy during training; use secure enclaves for inference.

### 5️⃣ Optimize & Communicate  
Explain that we’ll start with a monolithic prototype to validate latency, then refactor into microservices for scalability. Highlight that monitoring will catch performance regressions early. Conclude by summarizing how each component meets the business goal of delivering relevant content at scale while staying within budget and compliance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
