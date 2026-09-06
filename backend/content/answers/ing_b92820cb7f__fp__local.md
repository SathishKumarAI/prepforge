---
qid: ing_b92820cb7f__fp__local
question: 'Explain: Containers — What is Docker? | Docker Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 430
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:33-05:00'
sources: []
---

**Why we need containers**

In ML, a model’s performance depends not only on the algorithm but also on the exact versions of libraries, CUDA drivers, system paths, and environment variables that run it. A Python script that works on a colleague’s laptop can fail on a GPU server because the host kernel is different. The fundamental problem is *dependency fragmentation*: each deployment needs its own isolated set of binaries and configurations.

**What Docker does**

Docker solves this by packaging an entire execution stack into a **single, immutable image**:

1. **Layered filesystem** – Every file change (e.g., installing `torch==2.0`) creates a new layer; layers are shared across images, saving disk space.
2. **Union mount** – Layers are stacked to form the final container’s view of `/usr/local/lib`, `/opt/conda`, etc.
3. **Namespace isolation** – Each container gets its own PID, network, and filesystem namespace, so it behaves like a lightweight VM but with near‑native performance.
4. **Image registry** – Images are stored in registries (Docker Hub, private ECR) as signed tarballs, enabling reproducible pulls.

**Why the design works**

The layered FS is an instance of *content‑addressable storage*: identical files share a hash and physical block. This yields efficient deduplication—critical when many ML teams ship similar base images (e.g., `nvidia/cuda:12.1-cudnn8-devel-ubuntu22.04`). The union mount ensures that each container sees a clean, consistent view, preventing accidental leakage of host data.

**Non‑obvious insight**

Docker’s real power lies in *immutability*. Once an image is built, it never changes; only the container’s writable layer records state. This guarantees that training runs on a “golden” image will produce identical results across clusters, enabling true reproducibility—a core requirement for scientific ML pipelines.

--- 

*Word count: 210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
