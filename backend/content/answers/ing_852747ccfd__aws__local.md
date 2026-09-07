---
qid: ing_852747ccfd__aws__local
question: 'Explain: Senior engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 491
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:00-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a cross‑functional team to launch an on‑device recommendation engine for our flagship Android app. The goal was to reduce server load by 60 % while keeping latency under 200 ms.

**Task (T)**  
Design the mobile system architecture that could train, serve, and update models locally, with minimal battery drain and zero data leakage.

**Action (A)**  

1. **Ownership & Customer Obsession** – I mapped user flows, identified 4 × 10⁶ daily active users, and set a KPI of <200 ms inference time.  
2. **Dive Deep into requirements** – I scoped: *on‑device training*, *incremental updates via OTA*, *privacy‑preserving* (no raw data to server).  
3. **Architecture** –  
   - **TensorFlow Lite** for inference, bundled with a lightweight **C++ kernel**.  
   - **Edge TPU / Neural Engine** offload for devices that support it; otherwise CPU fallback.  
   - **SQLite + Fernet encryption** stores user‑specific model weights locally.  
   - **AWS IoT Greengrass** orchestrates OTA updates and secure telemetry of aggregate statistics to S3 (no PII).  
4. **Scalability & Availability** – Using **Lambda@Edge** for update triggers, **SQS** queues for batch weight pushes; auto‑scales with the number of devices.  
5. **Cost** – Estimated $0.02 per OTA payload, saving ~$1.2 M annually in server compute vs. cloud‑only inference.

**Result (R)**  
Post‑deployment, we achieved 62 % reduction in backend calls, latency 180 ms on average, and a 25 % increase in daily retention—validated by A/B tests (p < .01). The design was later adopted company‑wide for other product lines.  

**Bar‑raiser takeaway** – I demonstrated full ownership, deep technical dive, quantifiable impact, and iterative learning from early beta failures (e.g., battery spikes → model pruning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
