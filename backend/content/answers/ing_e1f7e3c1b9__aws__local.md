---
qid: ing_e1f7e3c1b9__aws__local
question: Where does a LB usually sits? What does an LB improves in a distributed
  system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 438
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:28-05:00'
sources: []
---

**Situation / Task**  
When I launched a real‑time recommendation engine for an e‑commerce site (10 M users/day), the application hit latency spikes during flash sales. I had to decide *where* to place a load balancer and quantify its impact.

**Action**  
I added an **Application Load Balancer (ALB)** in front of two Auto Scaling groups of EC2 instances, each running containerized inference pods. The ALB was placed in the **public subnet** of a VPC so it could terminate HTTPS, offload TLS, and perform path‑based routing to microservices.  

- **AWS services used:** ALB (with target groups), ECS/Fargate for containers, CloudWatch for metrics, Auto Scaling for elasticity.  
- **Scalability & availability:** The ALB automatically distributes traffic across healthy targets, providing built‑in fault tolerance and horizontal scaling.  
- **Cost trade‑offs:** We paid ~$0.0225 per GB processed plus $0.008 per request, which was 30 % cheaper than running a self‑managed Nginx cluster due to reduced ops overhead.

**Result**  
Post‑deployment latency dropped from 350 ms to 90 ms (–74 %), and the system handled a 5× traffic surge during peak events without any outages. The load balancer also exposed detailed CloudWatch metrics, enabling proactive scaling that saved ~15 % on compute costs over three months.

---

**Leadership Principles Highlighted**

- **Customer Obsession:** Delivered faster, more reliable recommendations.  
- **Ownership & Dive Deep:** Selected the right AWS service, engineered for scale, and tuned cost/benefit trade‑offs.  

**Bar‑raiser takeaway** – clear ownership of performance goals, deep dive into architecture choices, quantifiable impact, and continuous learning from A/B test failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
