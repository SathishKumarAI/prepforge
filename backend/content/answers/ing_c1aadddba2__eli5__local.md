---
qid: ing_c1aadddba2__eli5__local
question: Walk me through deploying a 70B open-weight model to production on Kubernetes.
  What breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 510
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:17-05:00'
sources: []
---

Deploying a huge AI model (70 B parameters) to Kubernetes is like moving a giant library into a city of tiny apartments.

**Step 1 – Packing the books**  
The model’s weights are stored as files on disk, just as books sit on shelves. In a container you bundle those files with the inference code, but for 70 B it can be tens of gigabytes—like a whole library in one box. If the box is too heavy, the shipping truck (container runtime) will refuse to lift it.

**Step 2 – Finding a suitable apartment**  
Kubernetes gives each pod (the apartment) limited memory and CPU. A 70 B model needs many GPUs or dozens of CPUs, so you must request enough resources (e.g., 8×80 GB RAM, 4 GPUs). If the requested size is larger than any node’s capacity, the scheduler will never place it.

**Step 3 – Making sure the door opens**  
The pod starts, loads the model into memory. With such a big load time, you need a fast disk (SSD) and enough bandwidth; otherwise the pod stalls or times out. If the node runs out of RAM during loading, the process crashes with “out‑of‑memory”.

**Step 4 – Keeping the books safe**  
You expose the model via an HTTP API. The service must handle many concurrent requests. A single request can consume a large portion of GPU memory; if you allow too many at once, later ones will be queued or fail. Rate limiting and batching are essential.

**What breaks?**  
- **Resource limits**: Too little RAM/CPU/GPU → pod evicts or crashes.  
- **Disk I/O**: Slow storage → long start‑up, timeouts.  
- **Scaling**: Replicas share the same model file; if not stored in a shared volume, each replica duplicates 70 B of data, exhausting cluster storage.  
- **Networking**: Large payloads over slow links cause latency spikes or dropped connections.

In short, it’s like fitting an entire library into apartment units that were designed for single‑person studios—careful packing, right-size rooms, fast doors, and a plan to share shelves are all crucial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
