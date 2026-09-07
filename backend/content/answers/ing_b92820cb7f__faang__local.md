---
qid: ing_b92820cb7f__faang__local
question: 'Explain: Containers — What is Docker? | Docker Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 378
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:29-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready explanation of Docker and its role in ML workflows. I’ll assume the audience knows basic cloud concepts but not container internals.

**Approach**  
1. Define containers vs VMs.  
2. Explain Docker’s core components (image, container, registry).  
3. Highlight why containers matter for reproducible ML pipelines.  
4. Mention tooling (Dockerfile, Compose) and ecosystem (K8s, CI/CD).

**Depth**  
- **Containers** package an application with its runtime dependencies into a lightweight, isolated unit that shares the host OS kernel.  
- **Docker Engine** builds images from a declarative `Dockerfile`, layers them for cache reuse, and runs containers via the containerd runtime.  
- **Images** are immutable snapshots; **containers** are mutable instances of those images.  
- A **registry** (Docker Hub, ECR, GCR) stores images for distribution.  
- In ML, Docker ensures that a model trained on one machine runs identically elsewhere—critical for production serving and CI pipelines.

**Edge Cases**  
- Large data volumes: use bind mounts or volume plugins; avoid copying large datasets into the image.  
- GPU support: need NVIDIA Docker runtime (`nvidia-docker2`) to expose CUDA libraries.  
- Security: images should be scanned, signed (Docker Content Trust), and run with least privilege.

**Optimize & Communicate**  
I’d finish by noting that Docker’s lightweight nature reduces deployment latency compared to VMs, enabling rapid A/B testing of models in Kubernetes or serverless environments. This aligns with FAANG’s emphasis on fast, reliable ML delivery pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
