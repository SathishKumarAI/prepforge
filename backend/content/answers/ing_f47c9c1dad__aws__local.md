---
qid: ing_f47c9c1dad__aws__local
question: 'Explain: When to Use : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 464
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:44-05:00'
sources: []
---

**Situation / Task**  
I was tasked with scaling a real‑time recommendation engine that served millions of users per day. The model inference latency had to stay below **50 ms** while the traffic spiked 10× during holiday sales.  

**Action**  
1. **Identify the right algorithm** – I compared **Round‑Robin (RR)**, **Least‑Connections (LC)** and **Weighted Least‑Connections (WLC)** against our workload profile.  
2. **Prototype in Python** using `hvac` for load‑balancing logic and `boto3` to spin up EC2 Spot instances.  

```python
def choose_instance(instances, weights=None):
    if weights:          # WLC
        total = sum(weights)
        r = random.uniform(0, total)
        upto = 0
        for i,w in zip(instances,weights):
            if upto + w >= r:
                return i
            upto += w
    elif any(i.connections < threshold for i in instances):   # LC
        return min(instances,key=lambda x: x.connections)
    else:               # RR fallback
        return instances[hash(request_id) % len(instances)]
```

3. **Deploy with AWS Application Load Balancer (ALB)** + Lambda@Edge to route based on CPU‑utilization metrics from CloudWatch.  
4. **Monitor** – set up an SNS alarm that triggers a scale‑up when 95 % of requests hit >70 % CPU.

**Result**  
- Latency dropped from **120 ms → 35 ms** (–71 %).  
- Cost savings of **18 %** by leveraging Spot + WLC.  
- Incident rate during peak traffic fell from **4 per day to zero**.  

**Learning** – The key was *dive deep* into the traffic pattern before choosing a balancing strategy, and *owning* the entire end‑to‑end pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
