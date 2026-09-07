---
qid: ing_ce54b6ea95__aws__local
question: 'Explain: Start quickly and scale — gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 483
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to launch a real‑time recommendation engine that had to process ~10 k requests/sec from mobile clients with <50 ms latency while keeping the cost under $30K/month. The team wanted a “start‑quick” approach and the ability to scale without redesigning the API.

**Action**  
I chose **gRPC** over REST for its binary protocol, low overhead, and native streaming support. I built a lightweight **Python/Go microservice** that wraps a pre‑trained model in TensorFlow Lite, containerized it, and deployed on **ECS Fargate** behind an **Application Load Balancer** with gRPC listeners.  
To bootstrap traffic I used **AWS Lambda** to generate synthetic requests via the gRPC client, feeding them into CloudWatch metrics. The load balancer’s target group health checks were tuned for 30 ms response windows, and auto‑scaling policies kicked in at 70 % CPU.  

I instrumented request/response sizes with OpenTelemetry, exported traces to **X-Ray**, and set up alerts on latency outliers. This gave us a clear visibility loop—if latency spiked, the autoscaler added capacity before users noticed.

**Result**  
Within 48 h of deployment we hit 12 k req/sec with 45 ms average latency, staying under the $28K/month budget. The system handled a sudden 3× traffic surge during a marketing push without any manual intervention.  

**Reflection (Bar‑raiser notes)**  
*Ownership*: I drove the entire stack from design to ops.  
*Dive Deep*: Leveraged gRPC’s streaming and binary framing to shave 20 % latency vs. REST.  
*Quantified Impact*: 12 k req/sec, <50 ms latency, $28K/month cost.  
*Learning*: Initially underestimated Lambda cold‑starts; fixed by warming pool, reducing 5–10 ms per request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
