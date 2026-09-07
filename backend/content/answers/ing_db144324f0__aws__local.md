---
qid: ing_db144324f0__aws__local
question: How do you debug non-deterministic bugs in LLM systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:24-05:00'
sources: []
---

**Situation (S)**  
While launching a conversational AI product for a global retail client, I noticed the model’s responses drifted every few hours—an intermittent, non‑deterministic bug that could erode customer trust.

**Task (T)**  
My goal was to isolate the root cause and ensure deterministic outputs while keeping latency under 300 ms and cost per request <$0.001.

**Action (A)**  
1. **Instrumentation & Data Capture** – I added fine‑grained CloudWatch logs and traced each inference through AWS Lambda, SageMaker Inference Endpoint, and the underlying GPU instances.  
2. **Determinism Baseline** – Using *AWS X-Ray*, I correlated random seeds, model weights, and input embeddings to identify non‑deterministic layers (e.g., dropout during inference).  
3. **Reproducible Pipeline** – Moved the preprocessing into a containerized Lambda layer, pinned all dependencies with *Dockerfile* and used *Amazon ECR* for immutable images.  
4. **Statistical Analysis** – Employed *AWS Glue* to run nightly Spark jobs that computed variance across 10k inference runs; variance dropped from 0.12 to <0.01 after disabling dropout and enabling deterministic ops in PyTorch (`torch.backends.cudnn.deterministic = True`).  
5. **Cost & Scalability** – Switched to *SageMaker Real-Time Inference* with spot GPU instances, reducing cost by 35% while maintaining 99.9 % availability.

**Result (R)**  
Determinism improved from 75 % to 99.8 %, latency stayed <300 ms, and the client’s NPS rose 12 points within two weeks. The process now runs automatically on every new model version, embodying *Ownership* and *Dive Deep*.

**Bar‑raiser notes** – I demonstrated ownership by taking end‑to‑end responsibility, deep technical dive into deterministic ops, quantified impact (NPS +12), and learned that disabling dropout for inference is essential—an insight now baked into our CI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
