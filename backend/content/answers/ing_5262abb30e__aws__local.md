---
qid: ing_5262abb30e__aws__local
question: 'Explain: So it''s basically memory, CPU, network and'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 471
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:20-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to design a real‑time recommendation engine for a video streaming platform that had to scale from 10 k concurrent users to 1 M in the next year while keeping latency under 200 ms.

**Action – Technical Design**  
I broke down the ML pipeline into four key resource buckets: **Memory, CPU, Network, and Storage**.  
| Resource | AWS Service | Why |
|----------|-------------|-----|
| **Memory** | Amazon SageMaker Neo + EC2 g4dn.xlarge (GPU) | GPU memory is the bottleneck for inference; Neo compiles models to run on edge‑optimized containers, reducing RAM usage by ~30 %. |
| **CPU** | Elastic Load Balancer → Lambda@Edge for feature extraction | Keeps CPU usage low; serverless scales automatically with request bursts. |
| **Network** | Amazon CloudFront + VPC endpoints | 95 % of traffic is served from edge caches, cutting inter‑region latency by 70 %. |
| **Storage** | S3 + DynamoDB for metadata | S3 holds the model artefacts; DynamoDB provides sub‑10 ms lookup for user embeddings. |

I introduced a **caching layer** (Elasticache Redis) for the top‑20 % of recommendations, reducing GPU inference calls by 60 %. Cost was kept below $0.05 per request through spot instances and auto‑scaling.

**Result**  
- Latency dropped from 350 ms to **180 ms** at peak load.  
- Throughput grew from 10 k to **1 M concurrent users** with a 99.9 % SLA.  
- Operating cost decreased by **35 %** compared to the baseline architecture.

**Reflection (Bar‑raiser cues)**  
I owned every layer of the stack, diving deep into model profiling to identify GPU memory as the primary constraint. I quantified impact via latency and cost metrics, and after a failed first prototype that over‑provisioned CPU resources, I learned to align compute type with workload characteristics—an insight I now apply in all subsequent ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
