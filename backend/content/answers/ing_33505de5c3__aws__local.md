---
qid: ing_33505de5c3__aws__local
question: 'Explain: compiler who''s targeted C++ let''s say that'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 405
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:17-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building an *auto‑tuning compiler* that optimizes user C++ code for the newest **AWS Inferentia** inference chips. The goal was to reduce latency by at least 30 % while keeping binary size under 10 %.  

**Action**  
1. **Data‑driven feature extraction:** I collected 2 M lines of open‑source C++ and profiled them on Inf2. Using *Amazon SageMaker* I trained a graph neural network to predict which compiler passes (e.g., vectorization, loop unrolling) yield the best latency per code pattern.  
2. **Pipeline design:**  
   - *AWS CodeCommit* → *CodeBuild* → *SageMaker training job* → *ECR image* → *Lambda* that injects optimal pass lists into *LLVM* via a custom plugin.  
3. **Scalability & cost:** Spot instances for training (≤ $0.02/hr) and on‑demand for inference (≤ $0.05/hr). Autoscaling Lambda keeps latency < 200 ms.  

**Result**  
The tuned compiler lowered average inference latency from 12 ms to **8.4 ms** (30 % improvement) and reduced binary size by 18 %. Production deployments on 10,000+ EC2 instances saved ~$1.2M annually.  

**Reflection**  
I owned the end‑to‑end stack, dived deep into LLVM internals, and iterated rapidly—meeting the *Customer Obsession* (better user experience) and *Bias for Action* principles while learning that ML‑guided pass selection can beat hand‑tuned heuristics at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
