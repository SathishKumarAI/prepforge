---
qid: ing_0cc8254dab__faang__local
question: What is Docker? — What is Docker? | Docker Docs
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks, *“What is Docker?”* – they’re probing your understanding of containerization and how it fits into modern ML pipelines. I’ll assume they want a concise definition plus its relevance to reproducibility, deployment, and collaboration in ML projects.

**Approach**  
1. Define Docker as a platform for building, shipping, and running containers.  
2. Highlight key components: images, containers, Dockerfile, registry.  
3. Explain why containers are valuable for ML (dependency isolation, environment consistency).  
4. Touch on orchestration tools (Docker Compose, Swarm, Kubernetes) that scale ML workloads.

**Depth**  
Docker packages an application and all its runtime dependencies into a lightweight, portable image. A container runs that image in a sandboxed process, sharing the host kernel but with isolated filesystem, network, and process namespaces. In ML, this guarantees that a model trained on one machine will run identically elsewhere—critical for reproducibility and CI/CD pipelines. Dockerfiles declare environment steps (e.g., `FROM python:3.10-slim`, `RUN pip install -r requirements.txt`), enabling version‑controlled builds. Images are stored in registries like Docker Hub or private ECR; containers can be orchestrated with Compose for multi‑service stacks, or Kubernetes for large‑scale inference serving.

**Edge Cases**  
- **Large model weights**: store them outside the image (e.g., S3, NFS) to keep layers small.  
- **GPU access**: need NVIDIA Docker runtime (`nvidia-docker`) and `--gpus` flag.  
- **Security**: avoid running containers as root; use multi‑stage builds to trim bloat.

**Optimize & Communicate**  
I’d conclude by noting that Docker’s lightweight nature reduces overhead compared to VMs, speeds up deployment, and integrates seamlessly with ML tools (TensorFlow Serving, TorchServe). I’d emphasize its role in building reproducible experiments and scalable production pipelines—key for any FAANG ML team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
