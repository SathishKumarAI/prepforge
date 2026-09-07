---
qid: ing_7bcb441030__aws__local
question: 'Explain: Run AI models on-device with Google AI Edge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 548
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:05:20-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team tasked with delivering an offline recommendation engine for a high‑traffic mobile app that served 12 M users in regions with spotty connectivity. The goal was to keep latency under 200 ms and avoid cloud calls while maintaining >95 % recommendation accuracy.

**Action**  
I chose **Google AI Edge (TensorFlow Lite)** as the on‑device inference framework, because it bundles quantized models that run <5 ms on Pixel‑4 CPUs. I:

1. **Designed a modular pipeline**: data → nightly model training in Vertex AI, export to TFLite, deploy via OTA updates.
2. **Implemented dynamic batching** on-device using TensorFlow Lite’s interpreter with `delegate=GPU` where available, dropping CPU usage by 60 % while keeping energy <30 mAh per inference.
3. **Built a monitoring stack**: Cloud Pub/Sub for OTA status, Cloud Monitoring for inference latency, and BigQuery for accuracy drift.

I also introduced a “model‑health” service that auto‑rolls the next best model if accuracy drops below 93 %.

**Result**  
Post‑deployment we saw:

- **Latency** drop from 450 ms (cloud) to 180 ms on-device.
- **Cost savings** of $0.08 per user/month, totaling $1.2 M annually.
- **Accuracy** maintained at 96 % with a 3 % reduction in data‑plan usage for users.

**Reflection**  
This project exemplified *Customer Obsession* (reducing latency and data costs) and *Ownership* (owning the full ML lifecycle). I learned that quantization trade‑offs can be mitigated by GPU delegates, a nuance I’ll bring to future edge deployments.  

---  

### Bar‑raiser cues
- **Ownership**: Took end‑to‑end responsibility from training to OTA rollouts.  
- **Dive Deep**: Quantified latency, energy, and cost impacts; tuned delegate usage.  
- **Quantified Impact**: $1.2 M saved, 180 ms latency, 96 % accuracy.  
- **Learning from Failure**: Early attempts with CPU-only inference failed to meet latency targets; pivoted to GPU delegates after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
