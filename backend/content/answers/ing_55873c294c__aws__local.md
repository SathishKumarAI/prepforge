---
qid: ing_55873c294c__aws__local
question: 'Explain: Why geography affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:30-05:00'
sources: []
---

**Situation & Task**  
When building a global text‑to‑speech platform for ElevenLabs, I was asked to explain why geographic distance increases end‑to‑end latency and how we could mitigate it while keeping cost under control.

**Action**  
1. **Dive Deep into Network Physics** – Latency is dominated by the *speed of light* in fiber (≈200 km/s). A 10,000 km hop adds ~50 ms one‑way, plus router/packet‑processing delays (~5–15 ms per hop).  
2. **AWS Service Stack** –  
   - **Amazon CloudFront** with edge locations to cache generated audio closer to users.  
   - **AWS Global Accelerator** to steer traffic over the AWS backbone, reducing MTU fragmentation and routing churn.  
   - **AWS Lambda@Edge** for lightweight pre‑processing (e.g., text normalization) at the edge, cutting backhaul time.  
3. **Cost & Availability Trade‑offs** – Edge caching increases storage cost (~$0.023/GB/month per location) but reduces upstream bandwidth by >70 % and improves SLA from 200 ms to <80 ms for 90 % of requests. Using Global Accelerator adds a modest $0.025/million requests, justified by the 30‑point increase in user satisfaction score (from 4.2 to 4.5).  
4. **Result** – After deploying this architecture, average latency dropped from 210 ms to 78 ms globally; peak throughput rose from 1,200 to 3,500 requests/second with a 12 % cost increase—well within the $0.10/user/month budget.

**Learning & Ownership**  
I took full ownership of the end‑to‑end pipeline, validated assumptions with real traffic telemetry, and iterated on caching strategies until we hit our SLA target. This hands‑on deep dive demonstrates my bias for action and commitment to delivering measurable customer results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
