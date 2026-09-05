---
qid: ing_6083128527__star__local
question: 'Explain: And we leverage the browser where possible'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 325
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:14-05:00'
sources: []
---

**Situation** – At my last role I was tasked with adding real‑time sentiment analysis to our customer support chat widget. The backend was already running on a Python microservice, but the latency for each message hit ~350 ms, pushing us over the 300 ms SLA we promised to product managers.

**Task** – Reduce inference time by offloading part of the model to the browser without sacrificing accuracy or increasing data usage beyond 1 MB per session.

**Action** – I re‑trained a lightweight transformer (DistilBERT) and exported it with ONNX. Using TensorFlow.js, I bundled the model into a WebAssembly module that ran in the client’s browser. To keep bandwidth low, I compressed the weights to 8‑bit quantization and cached them locally via Service Workers. I also added a fallback API call for older browsers. During dev, I benchmarked inference on Chrome/Edge/Firefox and tuned batch size to 1 to avoid queuing delays.

**Result** – In production the average latency dropped from 350 ms to 85 ms (77% reduction), keeping us well under SLA. Model accuracy stayed within 0.9 F1 of the server‑side version, and client data usage was <1 MB per user session. I learned that edge inference can dramatically improve UX when you balance model size, compression, and browser compatibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
