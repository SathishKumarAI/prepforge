---
qid: ing_ab6420b11b__aws__local
question: 'Explain: Drawbacks : — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 479
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:48-05:00'
sources: []
---

**Situation & Task**  
I led a team that built a global recommendation engine for an e‑commerce platform. The load balancer had to route millions of inference requests per second while keeping latency < 50 ms. I needed to pick the right algorithm, code it in Go, and expose metrics.

**Action – Technical Design**  
1. **Algorithm**: Implemented a *Weighted Round Robin* (WRR) that accounts for GPU utilization and request type.  
   ```go
   type Server struct{ addr string; weight int }
   func next(srv []Server, idx *int) Server {
       w := srv[*idx].weight
       if w == 0 { *idx = (*idx+1)%len(srv); return srv[*idx] }
       // decrement weight per call to spread load
       srv[*idx].weight--
       return srv[*idx]
   }
   ```
2. **AWS Services**:  
   - **Elastic Load Balancer (ELB)** for health checks + TLS termination.  
   - **Amazon ECS Fargate** to run inference containers with spot pricing.  
   - **CloudWatch** metrics (`RequestCount`, `Latency`) and **X-Ray** tracing.  
3. **Scalability & Availability**: Auto‑scaling based on CloudWatch alarms; cross‑AZ placement for 99.99% uptime.  
4. **Cost**: WRR reduces over‑provisioning by ~30 % vs. pure round robin, saving $15k/month.

**Result**  
- Latency dropped from 78 ms to 42 ms (53 % improvement).  
- Throughput increased from 2.1M RPS to 3.4M RPS (62 % gain).  
- Cost savings of $18k/quarter, enabling re‑investment in data science.

**Reflection – Bar‑raiser Lens**  
I owned the end‑to‑end pipeline, *dive deep* into weight decay logic, quantified every metric, and learned that a simple algorithm can outperform complex ML‑based routing when coupled with right observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
