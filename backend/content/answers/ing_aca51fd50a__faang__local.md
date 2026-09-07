---
qid: ing_aca51fd50a__faang__local
question: 'Explain: You own an LLM feature in production. What does on-call actually
  look like for it, and tell me about a page you took.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 568
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:13-05:00'
sources: []
---

**Clarify**  
You’re asking what an “on‑call” day looks like when you run a live LLM service (e.g., inference API, auto‑scaling pipeline). I’ll assume the stack includes a request router, GPU/CPU workers, a monitoring layer, and an autoscaler that can spin up/down containers. The goal is to keep latency < 200 ms and availability > 99.9 % while avoiding cost spikes.

**Approach**  
1. **Alert triage** – first‑level alerts (latency > threshold, GPU OOM) trigger a Slack channel.  
2. **Root‑cause analysis** – check logs, trace spans, model queue depth, and resource metrics.  
3. **Mitigation** – apply hotfixes: restart workers, roll back recent model updates, throttle requests, or bump GPU count.  
4. **Post‑mortem & monitoring tweak** – document the incident, adjust thresholds, add predictive scaling rules.

**Depth**  
- **Latency spikes**: I’d inspect `request_queue_length` and `worker_response_time`. If queue > 50 % of max workers, trigger autoscaler to add 2 containers.  
- **GPU OOMs**: Re‑batch requests, reduce batch size from 32 → 16, or swap to a larger GPU node.  
- **Model drift alerts**: Compare recent inference outputs against baseline; if error rate > 5%, pause serving and roll back to previous checkpoint.  

Complexity: each mitigation step is O(1) except scaling (O(log N)). Trade‑off: aggressive scaling reduces latency but increases cost.

**Edge Cases**  
- Sudden traffic spike from a bot → request throttling fails, causing cascading worker failures.  
- GPU driver bug → all workers crash; need to reboot the entire node cluster.  
- Monitoring lag → alerts fire late, user impact larger than expected.

**Optimize & Communicate**  
After the incident I’d automate the scaling policy (predictive ML on traffic patterns) and add a “canary” model path for new releases. I would narrate: *“We detected a latency anomaly at 14:32 UTC, traced it to GPU memory exhaustion after a batch‑size increase, throttled incoming requests, spun up two extra workers, and rolled back the model to the last stable checkpoint. Post‑mortem led to a new autoscaler rule that pre‑emptively adds capacity when queue depth exceeds 30 %.”* This showcases structured problem solving, clear communication, and technical depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
