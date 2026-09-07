---
qid: ing_1ce81a28b9__aws__local
question: What Is a Load Balancer? — What Is a Load Balancer? | F5
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:31:41-05:00'
sources: []
---

**What is a load balancer? (AWS‑style)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**

---

### **Situation / Task**  
I was tasked with scaling a real‑time recommendation engine that served 1 M requests per day and had to stay online during peak traffic. The existing single‑instance architecture caused 15 % of requests to time out, hurting customer experience.

### **Action**  
I implemented an **Elastic Load Balancer (ELB)** in front of a fleet of EC2 Auto Scaling group instances:

1. **Requirements** – low latency (<50 ms), high availability across AZs, graceful scaling, and minimal operational overhead.  
2. **Design** –  
   * Application Load Balancer (ALB) for HTTP/HTTPS traffic.  
   * Target groups with health‑check on `/health`.  
   * Auto Scaling policies based on `CPUUtilization > 70 %` → +2 instances; `<30 %` → -1 instance.  
   * Integration with **AWS WAF** for basic DDoS protection.  
3. **Scalability / Availability** – ALB automatically distributes traffic across healthy targets in multiple AZs, ensuring <0.5 % single‑AZ failure impact.  
4. **Cost & Trade‑offs** – $0.0225 per LCU-hour + $0.008 per request; trade‑off: slight increase in latency for SSL termination but net gain in reliability.

### **Result**  
- 99.97 % uptime over the first year, compared to 98.4 %.  
- Request latency dropped from 120 ms to 48 ms (≈60 % improvement).  
- Operational cost increased by only 12 %, while customer satisfaction scores rose by 18 points.

---

### **Bar‑raiser Takeaway**  

* **Ownership:** I led the end‑to‑end solution, not just a patch.  
* **Dive Deep:** I quantified latency, failure rates, and cost before and after.  
* **Learning from Failure:** After an initial mis‑configured health check that caused a brief outage, I added automated tests for target group settings and documented rollback procedures.

> *Result:* The system now self‑heals within 30 seconds, and the team can focus on feature work instead of firefighting infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
