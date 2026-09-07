---
qid: ing_df78ccca3d__aws__local
question: 'Explain: Terminologies/Algorithms — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 460
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:49-05:00'
sources: []
---

**Situation – Task**  
I was leading a team that built a real‑time recommendation engine for an e‑commerce platform. The inference service had to serve millions of requests per day with < 50 ms latency and zero single points of failure.

**Action – Design & Execution**  
We chose **AWS Application Load Balancer (ALB)** because it supports HTTP/2, WebSocket, and path‑based routing—critical for our A/B‑testing of new models. The ALB distributes traffic using a *least‑connections* algorithm that automatically shifts load when an instance spikes. For edge caching we added **Amazon CloudFront** to offload latency from the ALB.

Key terminologies I clarified with stakeholders:  
- **Round‑Robin:** cyclic request distribution (used for stateless microservices).  
- **Least Connections:** selects the target with the fewest active connections—our chosen algorithm.  
- **IP Hash:** routes based on client IP, useful for sticky sessions when required.  

We also implemented *Health Checks* that ping a `/healthz` endpoint every 30 s; unhealthy targets are removed from rotation within seconds.

**Result – Impact**  
After deployment:  
- **Latency dropped 35 %** (from 80 ms to 52 ms).  
- **Throughput increased by 4×** without adding new instances.  
- **Cost saved $12K/month** by eliminating over‑provisioned EC2 capacity.

**Reflection – Learnings**  
I learned that selecting the right load‑balancing algorithm hinges on traffic patterns and statefulness; testing under simulated load is essential before production roll‑out. This experience reinforced my ownership of both system reliability and cost efficiency—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
