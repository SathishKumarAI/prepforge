---
qid: ing_30f901222e__think__local
question: 'Design a hybrid architecture: some requests on-device, some to the cloud.
  How does the router decide?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 399
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:22:40-05:00'
sources: []
---

**1. Clarify constraints & goals**  
   • What “requests” mean (inference, data‑collection, model updates).  
   • Performance targets: latency, throughput, energy budget.  
   • Security/privacy requirements and regulatory limits on local vs cloud data.  
   • Assumptions: device has limited compute & battery; network is variable but available; a central cloud offers richer models.

**2. Adopt a layered decision framework**  
   • Input‑level filter (data type, sensitivity).  
   • Contextual layer (device state: battery, CPU load, network quality).  
   • Policy engine (rules or ML model that maps context to “local” vs “cloud”).  

**3. Step‑by‑step reasoning**  
   a) *Pre‑filter*: drop trivial or highly confidential data from cloud path.  
   b) *Context assessment*: measure latency, bandwidth, battery level.  
   c) *Policy lookup*: if latency < X ms or battery > Y %, route locally; else send to cloud.  
   d) *Fallback*: in case of network failure, buffer and retry later.

**4. Common traps**  
   – Over‑optimizing for one metric (e.g., always local → high energy).  
   – Ignoring model drift: a “local” model may become stale without periodic updates.  
   – Assuming static policies; real‑world conditions change rapidly.

**5. Sanity checks & communication**  
   • Simulate edge cases (poor connectivity, battery low) to verify fallback works.  
   • Explain decisions in plain terms: “We send to the cloud when we need more compute or data is not sensitive.”  
   • Document policy parameters so they can be tuned as usage evolves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
