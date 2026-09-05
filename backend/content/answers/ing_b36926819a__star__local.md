---
qid: ing_b36926819a__star__local
question: 'Explain: List and describe the different load balancing methods and their
  algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 428
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:47-05:00'
sources: []
---

**Situation:**  
When I joined the AI Ops team at a fintech startup, our real‑time fraud detection model was running on a Kubernetes cluster that suddenly started dropping requests during peak hours—latency spiked from 45 ms to over 300 ms.

**Task:**  
I had to design and deploy a load‑balancing strategy that could handle the high request volume (≈20k req/s) while keeping latency under 80 ms, without adding too much operational overhead.

**Action:**  
1. **Round Robin** – I configured an Nginx Ingress controller for simple round‑robin to distribute traffic evenly across pods.  
2. **Least Connections** – For bursty traffic, I switched to the least‑connections algorithm in HAProxy, which dynamically routes new requests to the pod with the fewest active connections.  
3. **Weighted Round Robin** – Since some model replicas were on newer GPUs, I assigned weights (GPU: 3, CPU: 1) so heavier hardware handled more traffic.  
4. **Consistent Hashing** – To preserve session affinity for certain user flows, I implemented IP‑hash hashing at the load balancer level.  
5. **Dynamic Scaling + Auto‑Scaler Rules** – Combined with Kubernetes Horizontal Pod Autoscaler (target CPU 70 %) to spin up/down replicas automatically.

**Result:**  
Latency dropped to an average of 62 ms during peak hours, and request loss fell below 0.01 %. The system handled a 150 % traffic spike without manual intervention. I learned that no single algorithm fits all scenarios; combining them with autoscaling delivers robust, cost‑effective performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
