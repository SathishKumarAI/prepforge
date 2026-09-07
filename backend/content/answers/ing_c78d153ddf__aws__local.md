---
qid: ing_c78d153ddf__aws__local
question: 'Explain: Choose Horizontal Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:28-05:00'
sources: []
---

**Situation / Task**  
While leading the ML inference service for our recommendation engine, we hit a 2× latency spike during peak traffic (4 k requests/s). The team debated whether to add more powerful GPUs (vertical) or deploy additional containers across nodes (horizontal).

**Action**  
I mapped the workload: each request loads ~30 MB model weights into GPU memory and performs a forward pass. A single GPU maxes at 8 k requests/s, but adding another GPU meant duplicating the entire model in RAM—a waste of 64 GB per node. I proposed **horizontal scaling** with Amazon SageMaker Endpoint + Elastic Container Service (ECS) Auto Scaling:

- *AWS services*: SageMaker for model hosting, ECS Fargate for stateless inference containers, Application Load Balancer for request routing, CloudWatch for metrics.
- *Design*: Each container hosts a lightweight TensorRT engine; we shard the user pool so each node handles distinct segments. Auto‑Scaling policies trigger on CPU/latency thresholds.
- *Trade‑offs*: Slightly higher operational cost (~$0.20/container/hr) vs vertical ($1.00 GPU instance). However, horizontal gives 99.9 % availability (multi‑AZ), zero single‑point failure, and linear cost scaling.

**Result**  
After rollout, average latency dropped from 280 ms to 110 ms (61 % improvement), throughput rose to 12 k req/s, and we maintained a 0.3 % error rate during a 24‑hour traffic spike. Cost increased by only 12 % but revenue grew 5 % due to higher conversion rates.

**Reflection**  
I learned that *Ownership* means evaluating trade‑offs beyond raw power—considering resilience, cost elasticity, and future growth. The bar‑raiser will note my **dive deep** into model memory constraints, the quantitative impact on latency & revenue, and the iterative learning from a near‑failing vertical approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
