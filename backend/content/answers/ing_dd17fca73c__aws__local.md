---
qid: ing_dd17fca73c__aws__local
question: 'Explain: Large Containers or Bloated Images — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 479
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:55-05:00'
sources: []
---

**Situation & Task**  
At my previous company we migrated a monolithic ML inference pipeline to Amazon SageMaker + Fargate. The initial Docker image was ~3 GB because it bundled the entire data‑science stack (NumPy, Pandas, SciPy, Jupyter) even though only the inference runtime was needed. This bloated image caused 30 % slower start‑up and inflated ECR storage costs by $1.2k/month.

**Action**  
I led a “container hygiene” sprint:  
* **Strip unnecessary layers** – removed dev tools, test suites, and large data files from the Dockerfile.  
* **Multi‑stage builds** – compiled only the inference binary in stage 1, then copied it to a slim Alpine base for stage 2.  
* **Layer caching & immutable tags** – leveraged ECR image scanning and automated tagging (`ml-infer:v${BUILD_NUMBER}`) to enforce immutability.  
* **Adopted Amazon ECS Fargate with Spot capacity** – reduced per‑second cost by 18 % while keeping the same concurrency level.  

**Result**  
Image size dropped from 3 GB to 450 MB (85 % reduction). Container start‑up went from 12 s to 2.5 s, enabling a 40 % increase in inference throughput. Monthly ECR storage cost fell by $1.4k, and we saved an additional $0.8k/month on Fargate Spot usage. Overall, the new deployment achieved 99.9 % uptime with a $3.2k monthly cost savings.

**Reflection (Bar‑raiser notes)**  
*Ownership*: I owned the entire container lifecycle from build to runtime.  
*Dive Deep*: I quantified layer sizes and start‑up times, using CloudWatch metrics.  
*Quantified Impact*: Direct correlation between image size and cost/latency was measured.  
*Learning*: Initially underestimated the impact of dev tools; pivoted to a data‑driven cleanup that produced measurable ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
