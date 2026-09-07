---
qid: ing_796ee78298__aws__local
question: 'Explain: Using Audio Models on Different Platforms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:32-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation:* At my previous role I was tasked with deploying an audio‑to‑text model for a global customer support app that ran on Android, iOS, and web browsers. The goal was to reduce human transcription time by 70 % while keeping latency under 200 ms per utterance.

*Task:* Build a cross‑platform inference pipeline that could scale to millions of users, keep costs < $0.05/utterance, and respect data privacy regulations.

*Action:*  
1. **Model Selection & Training** – I chose a lightweight Transformer (QuartzNet) trained on 10 k hours of multi‑language speech, fine‑tuned with AWS SageMaker Ground Truth for custom accents.  
2. **Cross‑platform Packaging** – Exported the model to ONNX and used TensorFlow Lite (Android/iOS) and WebAssembly (browser). For web, I wrapped the WASM module in a Service Worker to cache weights locally.  
3. **Scalable Inference Layer** – Deployed the serverless inference endpoint on AWS Lambda@Edge with Amazon API Gateway for global edge distribution, ensuring <200 ms latency globally.  
4. **Cost & Availability** – Leveraged Spot Instances in SageMaker for training (30 % savings) and set up CloudWatch alarms to auto‑scale Lambda concurrency based on request bursts.

*Result:* After launch, transcription accuracy hit 92 % WER reduction, user‑reported speed improved by 3×, and we cut per‑utterance cost from $0.12 to $0.04—exceeding the 70 % target. The cross‑platform design also enabled a single codebase for all devices, cutting maintenance effort by 50 %.  

**Learnings:** I discovered that packaging the model in WASM reduced first‑party bandwidth costs but introduced initial cold‑start latency; mitigated by preloading weights on service worker activation. This iterative dive deep into performance trade‑offs reinforced my ownership mindset and helped me deliver a scalable, customer‑centric solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
