---
qid: ing_f22fae8160__star__local
question: 'Explain: Q113: Your computer-use agent passes demos but fails 30% of real
  workflows in production. Walk through your reliability engineering plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 357
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:31-05:00'
sources: []
---

**Situation:**  
At my last startup we built a conversational AI that automates ticket triage. In the staging environment it passed all unit and integration tests, yet in production about 30 % of user workflows ended with time‑outs or incorrect routing.

**Task:**  
I had to devise a reliability engineering plan that reduced failure rates below 5 % while keeping latency under 200 ms for 95 % of requests.

**Action:**  
1. Instrumented every microservice with OpenTelemetry, collecting request counts, error codes, and span latencies.  
2. Implemented a canary deployment pipeline in Kubernetes: new model versions were rolled out to 5 % traffic first, monitored via Prometheus alerts (SLOs on 99th‑percentile latency).  
3. Added a circuit breaker around the inference service using Hystrix; when error rate exceeded 1 %, it fell back to a cached rule‑based fallback for 2 % of traffic.  
4. Created a “workflow replay” system that automatically replays failed user sessions against a staging environment, logs discrepancies, and triggers automated retraining of the model.  
5. Conducted chaos engineering drills (Simian Army) to stress‑test the retry logic and ensured graceful degradation.

**Result:**  
Within two weeks we cut production failures from 30 % to 2 %, improved latency to 92 % within 200 ms, and reduced mean time to recovery from 45 min to under 10 min. I learned that observability + gradual rollouts + intelligent fallbacks are the backbone of reliable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
