---
qid: ing_76c4a85fe0__aws__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 530
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:39-05:00'
sources: []
---

**Situation & Task**  
At a mobile‑first AI startup we shipped a single on‑device base model (≈30 M params). Customers demanded *summarization*, *rewriting*, *reply suggestions* and *tone adjustment*. Shipping twelve separate models would bloat app size, increase OTA costs and slow feature rollouts. I had to deliver all features while keeping the model footprint < 50 MB.

**Action**  
1. **Multi‑Task Architecture** – Built a single encoder–decoder with task tokens (one per feature). Trained on a shared corpus + task‑specific fine‑tuning, achieving ≤ 2× loss over single‑task baselines while keeping the same parameter count.  
2. **Adapter Modules** – For each new feature added an 8 k‑parameter adapter that plugs into the base model; adapters are swapped at runtime via a lightweight config loader (AWS Lambda edge).  
3. **Model Packaging** – Used *TensorFlow Lite* + *Edge TPU* to compile the core model once; adapters shipped as separate .tflite files loaded on demand, reducing OTA payload from 300 MB to < 50 MB.  
4. **Deployment & Monitoring** – Deployed via AWS AppConfig + CloudWatch metrics (latency ≤ 80 ms, CPU ≤ 30 %). Continuous A/B testing triggers automatic rollback if accuracy drops > 1%.

**Result**  
- Feature latency stayed under 80 ms across iOS/Android; model size dropped by **83%**.  
- OTA bandwidth savings ≈ 70 GB/month for 2 M users.  
- Customer satisfaction (NPS) rose from 48 to 65 in 3 months.

**Leadership Principles Anchored**  
- *Customer Obsession*: Delivered a lightweight, fast experience without compromising quality.  
- *Ownership*: Designed end‑to‑end pipeline, monitored live health, and iterated quickly on failures.

**Bar‑raiser Takeaway**  
Demonstrated ownership by turning a scalability pain into an architectural win; dove deep into multi‑task learning to quantify impact (latency, size, bandwidth); learned from early adapter failures and adjusted training data accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
