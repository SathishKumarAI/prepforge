---
qid: ing_e72be07f80__star__local
question: 'Explain: Build web applications — Serverless Computing \u2013 Amazon Web
  Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 353
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:44-05:00'
sources: []
---

**Situation:**  
At my last startup we had an image‑classification model that needed to serve predictions for a mobile game in real time. The existing server was overloaded during peak hours, and our team couldn’t afford the cost of scaling traditional EC2 instances.

**Task:**  
I was tasked with designing a low‑latency, cost‑efficient web service that could automatically scale with traffic while keeping per‑request costs below $0.02.

**Action:**  
I chose AWS Lambda for compute and Amazon API Gateway as the front‑end. The model was containerised in a 200 MB Docker image and pushed to ECR; I used the new “Lambda containers” feature so each invocation pulled the latest image. To keep cold starts fast, I pre‑warmed Lambdas by scheduling a CloudWatch Event that triggered every 5 minutes during business hours. For storage of model artefacts I leveraged Amazon S3 with versioning and signed URLs for secure access. Finally, I added an Application Load Balancer in front of API Gateway to handle TLS termination and integrated AWS WAF for basic DDoS protection.

**Result:**  
The new serverless stack cut prediction latency from 800 ms to under 120 ms on average, handled a 3× spike during the game launch without any manual intervention, and reduced infrastructure spend by 60 % compared to our previous EC2‑based approach. I learned how careful orchestration of Lambda layers, container images, and API Gateway caching can deliver both performance and cost savings in ML deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
