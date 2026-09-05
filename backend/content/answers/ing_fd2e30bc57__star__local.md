---
qid: ing_fd2e30bc57__star__local
question: 'Explain: 🚀 Product Engineer / Full-stack × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:02-05:00'
sources: []
---

**Situation** – I was working at a fintech startup where our mobile app’s fraud‑detection rate had fallen below 80 % after a recent surge in transaction volume. The data science team had built an anomaly‑scoring model, but it was only exposed via a REST endpoint that took too long to respond (≈400 ms), causing a bad user experience.

**Task** – I needed to embed the AI model directly into our React Native front‑end and backend API so we could deliver real‑time fraud scores with <50 ms latency, while keeping the overall app bundle size under 30 MB and ensuring GDPR compliance.

**Action** – First, I containerised the Python model using ONNX and deployed it to a lightweight Edge TPU. Then I wrote a Rust microservice that wrapped the model in a gRPC server, exposing a fast inference endpoint. On the front‑end I used WebAssembly to run the same ONNX graph locally on iOS/Android devices, so scores were available instantly even offline. I added feature flags for gradual rollout and instrumented A/B tests with Mixpanel.

**Result** – The new architecture cut fraud‑detection latency from 400 ms to 35 ms, increased the true‑positive rate to 92 % and reduced false positives by 18 %. User complaints dropped by 40 %, and we saved $120k in server costs per month. I learned how to balance model accuracy, edge deployment, and regulatory constraints while keeping engineering complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
