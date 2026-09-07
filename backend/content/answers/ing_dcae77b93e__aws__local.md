---
qid: ing_dcae77b93e__aws__local
question: 'Explain: ⚡ Inference, Serving & Production LLM Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 597
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:09-05:00'
sources: []
---

**Inference vs. Serving vs. Production for LLMs**

*Situation*: I led a cross‑functional team to launch an AI recommendation engine for a global e‑commerce platform. The goal was to move from research prototypes (inference) to a live, highly available service (production).  

**Task**: Design a system that could ingest user queries in real time, run them through a 10B‑parameter LLM, and return ranked recommendations within 200 ms at scale.

**Action**  
1. **Inference Layer** – I scoped the compute needs by profiling the model on EC2 P4d instances (NVIDIA A100). We benchmarked latency vs. batch size to find a sweet spot: 16‑token batches, 30 ms inference per request.  
2. **Serving Layer** – Built a stateless Lambda layer that wraps the model in a PyTorch `torchscript` graph, deployed via AWS SageMaker Endpoint with GPU inference instances (ml.p4d.24xlarge). Auto‑scaling on CloudWatch metrics kept 99.9 % of requests under 250 ms.  
3. **Production Layer** – Integrated the endpoint into our product’s API Gateway + DynamoDB cache (TTL 5 min) to reduce cold‑starts. Added a Canary rollout in CodeDeploy and A/B testing against a rule‑based baseline, achieving a 12 % lift in conversion.

**Result**  
- Latency dropped from 1.2 s (prototype) to <200 ms in production.  
- Traffic grew 4× within two months without SLA violations.  
- Cost per inference fell by 35 % after switching to spot instances and batching strategies.

---

### Amazon Leadership Principles Highlighted

| Principle | Why it matters |
|-----------|----------------|
| **Customer Obsession** | We measured conversion lift, the ultimate customer metric. |
| **Ownership** | Took full responsibility from model training through live deployment. |
| **Dive Deep** | Benchmarked GPU usage, batch sizing, and cache hit ratios to optimize every layer. |
| **Bias for Action** | Deployed a production endpoint within 6 weeks of research completion. |

---

### What a Bar‑Raiser Looks For

- **Quantified Impact**: Clear metrics (latency, cost, conversion).  
- **Depth & Technical Rigor**: Detailed profiling and trade‑offs between spot vs. on‑demand, batch vs. real‑time.  
- **Learning from Failure**: After a 30 % traffic spike caused timeouts, we added an autoscaling policy based on CloudWatch alarms—demonstrating rapid iteration.  

This approach turns research into a reliable, customer‑centric product that scales globally while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
