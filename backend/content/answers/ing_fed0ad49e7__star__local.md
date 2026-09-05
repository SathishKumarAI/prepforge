---
qid: ing_fed0ad49e7__star__local
question: 'Explain: Inside Kaiju - building conversational models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 315
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:30-05:00'
sources: []
---

**Situation:** At my previous startup we launched a customer support chatbot that handled 12 k tickets/day. By month three, the model’s accuracy dropped to 72% and latency spiked beyond our SLA of 300 ms because we were still training on a single GPU cluster.

**Task:** I had to redesign the pipeline so the conversational AI could be trained and served at scale—reducing inference time by 40% while boosting F1 score above 85%.

**Action:** I introduced a distributed data‑parallel training framework using PyTorch Lightning across an AWS EKS cluster, sharding the 5 M dialogue pairs into 32 workers. For serving, I swapped the legacy TensorFlow model for a quantized ONNX version deployed via NVIDIA Triton Inference Server behind a Kubernetes autoscaler. I also implemented a rolling update strategy with A/B testing to monitor real‑time performance.

**Result:** Training time fell from 48 h to 6 h per epoch, and inference latency dropped to 180 ms on average. The F1 score improved to 87%, cutting ticket resolution time by 25% and increasing customer satisfaction scores from 3.8/5 to 4.5/5. I learned that coupling model engineering with cloud‑native orchestration is key for scaling conversational AI reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
