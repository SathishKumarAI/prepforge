---
qid: ing_056a0fa30e__aws__local
question: 'Explain: Dependency Resolution and Loading — How Do Computer Programs Run?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 474
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked with explaining how a machine‑learning pipeline resolves dependencies and loads code when running on an AWS inference endpoint. The audience were senior ML engineers who needed to understand the low‑level mechanics to debug latency spikes.

**Action**  
1. **Clarify requirements** – The pipeline must load Python packages, custom operators, and model binaries within 100 ms of a request while keeping memory usage <2 GB per container.  
2. **Design** – I described a *container‑first* approach:  
   - **Amazon Elastic Container Registry (ECR)** stores immutable images built with Docker.  
   - Each image contains the exact Python virtual environment (`requirements.txt`) and pre‑compiled shared libraries, so runtime dependency resolution is avoided.  
   - For on‑demand model loading, I proposed using **Amazon SageMaker Neo** to compile the model into native binaries that load in 10 ms.  
3. **AWS services & trade‑offs** –  
   - *ECS/EKS* for orchestration, providing high availability and auto‑scaling.  
   - *Elastic File System (EFS)* only if multiple containers need shared data; otherwise keep everything inside the image to reduce I/O latency.  
   - Cost vs. performance: using EFS adds 20 % cost but can cut cold‑start times by 30 %.  
4. **Scalability & Availability** – Deploy with *AWS App Mesh* for fine‑grained traffic routing and *S3* for model artifacts, ensuring zero downtime during rolling updates.

**Result**  
Implemented the design on a production SageMaker endpoint; cold‑start latency dropped from 350 ms to 95 ms (≈73 % improvement). CPU usage fell by 15 %, cutting hourly inference costs by $0.02 per container, translating to ~$1,500 saved annually for a 10‑instance cluster.

**Learnings**  
I realized that over‑engineering dependency resolution can hurt performance; immutable images and pre‑compiled binaries are the key to predictable latency. This lesson guided our next migration to *AWS Lambda Layers* for shared libraries, further reducing image size by 25 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
