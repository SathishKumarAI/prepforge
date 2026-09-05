---
qid: ing_814421e901__star__local
question: 'Explain: The interview loop — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:48-05:00'
sources: []
---

**Situation**  
At my last company we were launching a new recommendation engine for an e‑commerce platform that had just begun using AI. The product owner wanted the model to be deployed in real time, but our data pipeline was batch‑oriented and the latency target was 200 ms per request.

**Task**  
I had to redesign the inference loop so we could hit that latency while still maintaining a 99.5% accuracy on click‑through predictions.

**Action**  
First I profiled the current system with Py-Spy and found that the data serialization and model loading took over 120 ms. I refactored the pipeline: switched to Apache Arrow for zero‑copy columnar transfer, moved the TensorFlow model into a TensorRT engine on an NVIDIA A100, and wrapped everything in a FastAPI microservice behind a gRPC gateway. I also introduced a lightweight caching layer using Redis that held the most frequent feature vectors. Throughout, I used unit tests with pytest to ensure deterministic outputs and ran a continuous integration pipeline that measured latency after every commit.

**Result**  
The new loop cut inference time from 450 ms to 140 ms, comfortably below our target. Accuracy improved by 0.7% because we could now safely increase feature dimensionality. The deployment also reduced GPU usage by 35%, lowering costs. I learned that a focused profiling‑driven refactor and the right mix of tools (Arrow, TensorRT, FastAPI) can bridge the gap between ML research and production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
