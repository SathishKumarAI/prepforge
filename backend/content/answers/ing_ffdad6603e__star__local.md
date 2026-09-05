---
qid: ing_ffdad6603e__star__local
question: 'Explain: Increasing utilization through elastic compute'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 354
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:20-05:00'
sources: []
---

**Situation** – While leading a fraud‑detector team at a fintech startup, our nightly batch model training hit the same 12 hour window every night because we were overprovisioning GPUs on a fixed cluster. Utilization hovered around 30%, and costs ballooned to $4k/month.

**Task** – Reduce compute cost by 40% while keeping training latency under 10 minutes, so we could run daily updates without budget overruns.

**Action** – I rewrote the pipeline to run on Kubernetes with a custom Horizontal Pod Autoscaler that scaled GPU nodes based on CPU/Memory saturation and training queue length. We added Spot‑VM support (AWS G4dn.xlarge) and a cost‑aware scheduler that moved jobs from on‑demand to spot when the price was below 50% of baseline. I also containerized the model code with Docker, used NVIDIA’s device plugin for GPU passthrough, and implemented a job queue in RabbitMQ to batch small training jobs together.

**Result** – GPU utilization jumped from 30% to 78%, cutting compute spend by 43% (from $4k to $2.3k/month). Training time dropped from 12 hours to under 9 minutes, and we gained the ability to add a new feature‑engineering batch without additional budget. I learned that elastic scaling is not just about autoscaling; it’s also about cost‑aware scheduling and containerizing workloads for portability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
