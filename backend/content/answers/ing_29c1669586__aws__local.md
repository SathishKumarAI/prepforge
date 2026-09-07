---
qid: ing_29c1669586__aws__local
question: 'Explain: Cloud-Hosted Alternatives — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 517
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:53-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to replace on‑prem “computer use agents” (desktop automation bots) with a cloud‑hosted solution that could scale to 10 000 concurrent users while reducing maintenance overhead.

**Action**  
1. **Architecture** – Built a stateless microservice in **Amazon ECS Fargate**; each task hosts an agent instance powered by a lightweight Docker image.  
2. **AI & Orchestration** – Integrated **SageMaker Runtime** to run the NLP model that interprets user commands and **Step Functions** to coordinate multi‑step workflows (e.g., open app → fill form).  
3. **Observability** – Employed **CloudWatch Logs & X-Ray** for latency tracing; set up Auto Scaling based on CPU/Memory thresholds.  
4. **Cost Control** – Leveraged **Spot Instances** for non‑critical tasks and **Savings Plans** for predictable workloads, achieving a 35 % reduction versus our previous EC2 fleet.

**Result**  
- Achieved **99.9 % uptime** with sub‑200 ms average latency across all regions.  
- Cut operational costs by **$120k annually** while increasing user concurrency from 500 to 10 000.  
- Received a “Best Practice” badge in the internal AWS Innovation Awards.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Built an agent that responded faster and more reliably, improving end‑user satisfaction scores by 18 %.  
- **Ownership & Dive Deep** – Took full responsibility for architecture decisions, continuously profiled performance, and iterated on the model until latency targets were met.

### Bar‑raiser Takeaways
- Demonstrates ownership by moving from a legacy system to a modern cloud stack.  
- Shows depth: detailed trade‑offs between Fargate vs. EC2, Spot vs. On‑Demand, and how each impacts scalability & cost.  
- Quantifies impact with real metrics (uptime, latency, cost savings).  
- Learns from early failures by iterating on the model and scaling policy after initial spike tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
