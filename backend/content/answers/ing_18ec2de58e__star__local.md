---
qid: ing_18ec2de58e__star__local
question: 'Explain: Data Center — Jobs at SpaceXAI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 382
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:57-05:00'
sources: []
---

**Situation** – When I joined SpaceXAI, the company was scaling its autonomous drone fleet and needed a new data‑center to host real‑time vision models for launch pad inspections. The existing on‑prem cluster was 30 % over budget and lagging behind the 5 ms latency target for flight‑path corrections.

**Task** – I was tasked with designing, deploying, and optimizing a cost‑effective AI data center that could ingest terabytes of sensor streams, run inference at sub‑millisecond latency, and scale to support future autonomous launch vehicles.

**Action** – First, I mapped the workload profile using Prometheus metrics and identified CPU‑bound vs GPU‑bound phases. I chose NVIDIA A100 GPUs in a 3 U rack configuration, paired with NVMe SSDs for rapid data staging. Using Terraform, I provisioned the infrastructure on AWS Outposts to keep data within the company’s perimeter, then set up Kubernetes with KubeEdge to orchestrate containers across edge nodes at each launch site. For model serving, I leveraged Triton Inference Server and added a custom TensorRT plugin that reduced inference time by 40 %. To cut costs, I implemented spot‑instance auto‑scaling for non‑critical batch jobs and introduced a tagging policy that made cost attribution transparent.

**Result** – The new data center met the 5 ms latency requirement with a 98 % uptime SLA. Operational spend dropped from $1.2M/month to $850K, a 30 % savings, while we doubled inference throughput. I learned that coupling workload profiling with edge‑aware orchestration can unlock significant performance and cost gains in AI‑driven aerospace systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
