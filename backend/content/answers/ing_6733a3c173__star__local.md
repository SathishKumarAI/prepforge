---
qid: ing_6733a3c173__star__local
question: 'Explain: Designing a Multi-TSP System: Physical and Distributed Aspects'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 426
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:07-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a fleet‑management platform for electric delivery vans. The core feature was to generate optimal routing plans—essentially a Multi‑Traveling Salesman Problem (Multi‑TSP)—for up to 200 vehicles across a city while respecting battery limits and dynamic traffic data.

**Task**  
I needed to build a system that could compute near‑optimal routes in real time, scale to hundreds of nodes, and run on both edge devices (on‑board van GPUs) and the cloud. The solution had to be fault‑tolerant and provide sub‑5 % deviation from the theoretical optimum.

**Action**  
I architected a hybrid pipeline: 
1. **Physical layer** – each van ran a lightweight C++ inference engine on its NVIDIA Jetson Nano, executing a pre‑trained Graph Neural Network (GNN) that generated a coarse route skeleton based on live GPS and battery telemetry.
2. **Distributed layer** – the cloud orchestrated a fleet of Dockerized Python services on Kubernetes. A central scheduler aggregated vehicle data via MQTT, ran a distributed Concorde solver using Ray to refine routes, and pushed updates back through a secure gRPC channel.
I introduced a two‑phase optimization: edge GNN for quick feasibility checks, followed by a cloud‑based branch‑and‑bound that respected hard constraints. I also implemented an incremental update mechanism so only delta changes were transmitted, cutting bandwidth by 70 %.

**Result**  
The system delivered routes within 4.2 % of the optimal cost, reduced average delivery time by 12 %, and cut cloud compute costs by 35 %. I learned that coupling lightweight on‑board inference with a robust distributed optimizer can reconcile real‑time constraints with high‑quality solutions in large‑scale routing problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
