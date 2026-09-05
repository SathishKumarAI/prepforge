---
qid: ing_a072436d3e__star__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 367
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:34-05:00'
sources: []
---

**Situation:**  
At a startup we launched an image‑classification API that was initially hosted on a single high‑end VM (32 GB RAM, 8 vCPU). Within three months traffic spiked from 5k to 30k requests per day and latency rose to 350 ms.

**Task:**  
I had to keep the service responsive while staying within our $2k/month budget. The team debated whether to vertically scale (add more CPU/RAM) or horizontally (spawn new instances).

**Action:**  
I first benchmarked the model with a single‑instance Docker container, profiling memory and CPU usage. I found that peak GPU memory hit 28 GB while CPU was saturated at 95 %. Adding another 32 GB node would cost $1.5k/month but still leave us with only one point of failure. I then set up an autoscaling group on Kubernetes, each pod running the model in a lightweight container with 4 vCPU/8 GB RAM, and used a Redis queue to balance load. I also implemented horizontal batch processing to reduce inference overhead.

**Result:**  
After switching to horizontal scaling, average latency dropped from 350 ms to 120 ms, throughput increased to 200 requests per second, and total cost fell to $1.2k/month. The exercise taught me that vertical scaling can mask underlying architectural limits and create single points of failure, whereas a properly orchestrated horizontal approach scales cost‑effectively and improves resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
