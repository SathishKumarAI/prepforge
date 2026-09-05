---
qid: ing_af2fe23783__star__local
question: 'Explain: Docker registries — What is Docker? | Docker Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:31-05:00'
sources: []
---

**Situation**  
When I joined the data‑science team at a fintech startup, we had just finished training an NLP model that classified fraud alerts in real time. The engineering stack was all Python, but our CI/CD pipeline was failing because the inference service kept pulling different library versions from the public Docker Hub, leading to flaky deployments.

**Task**  
I needed to create a reliable, versioned image repository so every microservice could pull the exact same container and we could roll back quickly if an update broke something.

**Action**  
First I built a Dockerfile that used `python:3.11-slim` as a base, installed only the required packages (`torch==2.0.1`, `transformers==4.31.0`) and added our model weights. Then I pushed this image to an internal Harbor registry (our private Docker registry). I set up automated tagging with Git commit hashes and used Docker Compose for local testing. In CI, the pipeline now pulls from Harbor, runs unit tests, and if all pass, pushes a new tag (`v1.2.3`) back to Harbor. We also configured Helm charts to reference that specific tag in Kubernetes.

**Result**  
Deployments became 99% deterministic; rollback time dropped from 30 minutes to under 5 minutes because we could instantly pull the previous image. The model’s latency stayed steady at ~12 ms, and our incident rate fell by 40%. I learned how a private registry not only guarantees consistency but also improves security by keeping images in a controlled environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
