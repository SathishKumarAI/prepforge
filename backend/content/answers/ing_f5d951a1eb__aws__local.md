---
qid: ing_f5d951a1eb__aws__local
question: 'Explain: So we use pip to install django — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:39-05:00'
sources: []
---

**Situation & Task**  
In a recent project I was tasked with launching an internal analytics dashboard that required rapid prototyping and easy deployment across multiple environments (dev, staging, prod). The team needed a lightweight framework to expose REST endpoints for ML model inference.

**Action**  
I chose **Django** because its batteries‑included architecture let us ship a production‑ready API in days rather than weeks. I used `pip install django==4.2` and immediately scaffolded the project with `django-admin startproject ml_api`. From there, I:

1. Created a reusable Django app (`ml_service`) that wrapped our scikit‑learn models into stateless views.  
2. Leveraged **AWS Lambda** + **API Gateway** to run the Django WSGI application via the *Zappa* framework, keeping costs low (≈$0.01 / 1 000 invocations).  
3. Stored model artefacts in **S3** and used **Boto3** inside the view to load them on first request, caching with Redis for subsequent calls.

This design satisfies the **Ownership** principle—every component is self‑contained—and **Dive Deep**: I evaluated trade‑offs between Lambda’s 15 min timeout vs. an EC2 autoscaling group (higher cost but no latency risk). I chose Lambda because our inference time was <200 ms, keeping response times below 300 ms for 99th percentile.

**Result**  
The API was live in 3 days and handled 1 000 requests/day with <0.5 % error rate. Deployment costs dropped from $120/month (EC2) to $12/month (Lambda + S3). The team adopted this pattern for three additional services, scaling to 10 k requests/day without any new infra changes.

**Learning**  
If I had not profiled the inference latency first, we might have chosen Lambda and hit timeouts. This iteration taught me to benchmark before committing to a serverless path—a key lesson for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
