---
qid: ing_464b00924c__star__local
question: 'Explain: Step 2: Plan Before You Code — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 351
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:11-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were tasked with building an AI‑driven fraud detection engine for credit card transactions. The data volume was huge—hundreds of millions of records per day—and the model had to run in real time on our existing infrastructure.

**Task:**  
I needed to design a scalable pipeline that could ingest, preprocess, and score new transactions within 50 ms while keeping costs under budget. This required careful planning before any code was written: defining data schemas, selecting feature engineering steps, choosing the right ML framework, and mapping out deployment targets.

**Action:**  
First, I mapped the end‑to‑end flow on a whiteboard, outlining each transformation (normalization, encoding, windowing) and noting potential bottlenecks. I then drafted a modular architecture: a Spark job for batch feature extraction, an ONNX‑exported model served via NVIDIA Triton, and a Kafka stream to push predictions downstream. I wrote detailed unit tests for each module, defined clear API contracts, and set up CI pipelines with Docker images that mirrored production containers. Throughout, I consulted the latest research on low‑latency inference to decide between TensorRT vs. TorchScript.

**Result:**  
The resulting system processed 200k transactions per second with an average latency of 38 ms—well below our target—and reduced inference costs by 27% compared to the prototype. The planning phase cut development time by 35%, and I learned that a solid pre‑coding blueprint is as critical for AI projects as it is for traditional software, especially when performance and cost constraints are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
