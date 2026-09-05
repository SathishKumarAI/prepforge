---
qid: ing_f27ed9e17a__star__local
question: 'Explain: Model Routing and Portfolio Management — Hiring an AI Platform
  Engineering Leader: A 2026 Job Spec | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 406
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:53-05:00'
sources: []
---

**Situation**  
When I joined TechNova in early 2024, our AI platform was handling over 50 models across three domains—NLP, vision, and recommendation—but the deployment pipeline was siloed. Every model lived in its own Docker image, and we had no automated routing; users hit a single endpoint that randomly selected a version, causing latency spikes and inconsistent A/B testing results.

**Task**  
I was tasked with designing a unified Model Routing & Portfolio Management system that could dynamically select the best-performing model for each request, roll out new versions safely, and provide real-time metrics for governance—all while keeping costs under 15 % of our existing infra spend.

**Action**  
1. Built a lightweight service mesh layer (Istio + Envoy) to intercept API calls and forward them to a *Model Router* microservice written in Go.  
2. Integrated a feature‑flag engine (LaunchDarkly) so that routing rules could be updated without redeploying the router.  
3. Added a portfolio manager dashboard using Grafana and Tempo, pulling latency, accuracy, and cost metrics from Prometheus and OpenTelemetry traces.  
4. Implemented automated canary releases with a 5 % traffic split controlled by a Bayesian bandit algorithm (Python) that continuously updated performance scores.  
5. Established governance policies via a lightweight policy engine (OPA), ensuring only models meeting SLA thresholds were eligible for production traffic.

**Result**  
Within six months, we reduced average inference latency from 280 ms to 120 ms and increased overall model accuracy by 4.7 % across all services. The cost of the routing layer was just 9 % of our previous infra spend. I learned that marrying a service‑mesh approach with lightweight policy controls delivers both agility and compliance in an AI platform at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
