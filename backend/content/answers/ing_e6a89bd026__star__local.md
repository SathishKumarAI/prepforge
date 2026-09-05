---
qid: ing_e6a89bd026__star__local
question: 'Explain: 2.3 Bandwidth Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 342
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:20-05:00'
sources: []
---

**Situation**  
At my last role we were tasked with redesigning the media streaming layer for a new music service similar to Spotify. The existing prototype streamed audio at 128 kbps but was experiencing unpredictable buffering spikes during peak hours.

**Task**  
I had to produce accurate bandwidth estimates for each user session so that the CDN could pre‑allocate resources and we could guarantee a 99% “no‑buffer” rate while keeping infrastructure costs low.

**Action**  
First, I collected telemetry from our test cluster: packet loss, RTT, jitter, and client device specs. Using these metrics I built a regression model in Python (scikit‑learn) that predicted required bandwidth as a function of user’s network type (WiFi/4G), device CPU, and requested bitrate. I then integrated this estimator into the edge load balancer using a lightweight Go microservice that exposed a REST endpoint for real‑time predictions. To validate, I ran A/B tests: one group used static 128 kbps allocation, the other dynamic bandwidth from my model. The model adjusted allocations by ±15% on average, reducing buffering events by 40%.

**Result**  
With the new estimator we achieved a 99.2% “no‑buffer” metric during peak traffic while cutting CDN usage by 22%, translating to roughly $1.8 M in annual savings. I learned that combining real‑time telemetry with lightweight predictive models can dramatically improve user experience without overprovisioning resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
