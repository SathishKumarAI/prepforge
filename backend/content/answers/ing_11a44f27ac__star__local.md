---
qid: ing_11a44f27ac__star__local
question: 'Explain: Shipping velocity — Langfuse'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 387
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:56-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were launching a new fraud‑detection model that needed to be deployed to production within two weeks after the data science team finished training. The engineering stack was a mix of Go microservices, Python inference servers, and an on‑prem Kubernetes cluster.

**Task**  
I had to design a “shipping velocity” pipeline so we could move from a new model version in GitHub to a live API endpoint with zero downtime, while ensuring the model met our latency SLA (≤ 50 ms per request).

**Action**  
First, I implemented a feature‑flag system using LaunchDarkly integrated into our CI/CD. Each commit triggered an automated Docker image build, unit tests, and a synthetic load test in a separate staging namespace. The results were stored in Langfuse to track inference latency, error rates, and model drift metrics. I set up a “canary” deployment strategy: the new version received 5 % of traffic; if Langfuse reported any metric above threshold (latency > 70 ms or accuracy drop > 1%), we automatically rolled back via Kubernetes Deployment rollback. Finally, I added an alerting rule in Grafana that pinged Slack when shipping velocity dropped below 80 % of the target.

**Result**  
The model went live within 10 days—30 % faster than our original schedule—and maintained < 48 ms latency for 99.8 % of requests. The Langfuse dashboard gave us real‑time visibility, reducing post‑deployment incidents by 40 %. I learned that coupling automated metrics with a controlled rollout is the key to high shipping velocity without compromising quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
