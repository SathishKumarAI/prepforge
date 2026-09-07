---
qid: ing_a62b4e70a4__aws__local
question: 'Explain: Step 2 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 440
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:42-05:00'
sources: []
---

**Situation & Task**  
When I joined the e‑commerce team at **ShopSphere**, we launched a recommendation engine that was generating real‑time product suggestions for our users. Within two weeks, traffic spiked from 10K to 2M concurrent sessions, and latency began creeping past 300 ms. My task: redesign the stack so it could handle millions of users without breaking the user experience.

**Action**  
*Customer Obsession & Ownership*: I first measured every request in a *tracing pipeline* (X-Ray + CloudWatch) to find the bottleneck – our **batch‑inference Lambda** was the choke point.  
I replaced it with an **Amazon SageMaker endpoint** behind an **Application Load Balancer (ALB)**, using *parallelism* (multi‑model endpoints) and *autoscaling policies* tied to CPU utilization. For cold starts I added a *warm‑up schedule* that kept one instance running 24/7.  
To keep costs under control I leveraged **Spot Instances** for the training cluster and **S3 Glacier Deep Archive** for model artifacts. I also introduced **Amazon CloudFront** caching of static recommendation JSONs, cutting downstream API calls by 70%.  

**Result**  
- Latency dropped from 350 ms to **<90 ms average** under peak load.  
- Throughput scaled from 10K to **2M concurrent users** with a *99.9%* uptime SLA.  
- Monthly operational cost decreased by **18%** due to spot‑instance optimization.  

**Reflection**  
I learned that *Dive Deep* into metrics often reveals hidden scaling issues, and *Bias for Action* means iterating quickly – I rolled out the new architecture in 48 hours instead of a full redesign sprint. This approach is what Amazon expects from a bar‑raiser: ownership, data‑driven impact, and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
