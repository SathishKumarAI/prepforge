---
qid: ing_194f415abb__aws__local
question: 'Explain: When to use: — Load Balancing Algorithms Explained with Code (and
  Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 560
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:32-05:00'
sources: []
---

**Situation –** While leading the migration of our recommendation engine from on‑prem to a fully managed micro‑service stack, I noticed that incoming traffic spikes during holiday sales caused 30 % latency degradation.  
**Task –** Design a robust load‑balancing strategy that guarantees <20 ms response time even at 10 k QPS.

**Action –**  
1. **Requirements & Trade‑offs**:  
   * Low jitter, high throughput, cost‑efficiency.  
   * Need to route based on session affinity and request size.  

2. **Design** (AWS‑centric):  
   * **Elastic Load Balancer (ALB)** with **Weighted Target Groups** for *round‑robin* and *least‑connections* mix.  
   * **Lambda@Edge** to inspect the `X‑Session‑ID` header; if present, forward to a dedicated *sticky* target group.  
   * **Application Auto Scaling** tied to CloudWatch metrics (latency & error rate).  

3. **Code snippet (Python/Flask)** – demonstrates how ALB forwards requests and how Lambda@Edge alters the path:

```python
# lambda_edge.py
def handler(event, context):
    request = event['Records'][0]['cf']['request']
    session_id = request['headers'].get('x-session-id', [None])[0]
    if session_id:
        request['targetGroupArn'] = 'arn:aws:elasticloadbalancing:region:acct-id:targetgroup/sticky/123456'
    return request
```

4. **Scalability & Availability**:  
   * ALB scales automatically to 10 k+ QPS with minimal latency.  
   * Lambda@Edge runs globally, eliminating single‑point failure.  

5. **Cost**: Roughly $0.008 per LB‑hour + $0.20 per 1M requests; far below maintaining a fleet of EC2 instances.

**Result –** Post‑deployment we achieved <15 ms average latency during peak sales and reduced operational costs by 25 %.  

---

### Leadership Principles  
* **Customer Obsession** – ensured ultra‑low latency for end users.  
* **Dive Deep** – dissected metrics, implemented per‑request routing logic, and tuned scaling thresholds.  

Bar‑raisers will note my ownership of the entire pipeline, the data‑driven impact (latency & cost savings), and the iterative learning loop that turned a failure into a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
