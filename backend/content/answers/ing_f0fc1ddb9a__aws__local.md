---
qid: ing_f0fc1ddb9a__aws__local
question: Your model file is 800MB. How does it get onto users' devices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 612
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:21:56-05:00'
sources: []
---

**Situation (S)** – I was leading a mobile‑AI team that had to ship an 800 MB on‑device model for a real‑time translation app used by 4 M daily active users in latency‑critical regions.

**Task (T)** – Deliver the model to every device with < 3 s initial load, keep bandwidth costs <$2 / user/month, and guarantee zero downtime during rollouts.

**Action (A)**  
1. **Sharding & delta updates** – Split the model into 40 MB shards and use Amazon S3 + CloudFront with *Cache-Control: immutable*.  
2. **Edge‑first delivery** – Deploy a Lambda@Edge function that checks device version, returns only missing shards, and streams them via HTTPS/HTTP2.  
3. **Compression & quantization** – Convert the TensorFlow Lite model to 8‑bit float16 (↓ 50 % size) before upload.  
4. **Rollback & monitoring** – Use Amazon CloudWatch Alarms + AWS CodeDeploy’s blue/green strategy; any shard download > 5 s triggers an immediate rollback.  

**Result (R)** – Deployment time dropped from 45 min to < 10 min per region, total bandwidth spent was 0.9 × the baseline ($1.6 / user/month), and model‑update success rate hit 99.97 %. Post‑launch A/B test showed a 12 % reduction in user churn attributed to faster load times.

---

### AWS Services & Trade‑offs
| Service | Why |
|---------|-----|
| **S3** | Durable storage, versioning for rollback |
| **CloudFront** | Global edge caching → low latency |
| **Lambda@Edge** | On‑the‑fly shard negotiation without extra servers |
| **AWS CodeDeploy** | Blue/green rollout with automated rollback |

### Bar‑raiser Signals
- **Ownership:** I championed the end‑to‑end delivery pipeline and drove cross‑team buy‑in.  
- **Dive Deep:** I quantified bandwidth, latency, and failure rates to tune shard size and compression.  
- **Quantified Impact:** 12 % churn reduction directly tied to faster model load.  
- **Learning from Failure:** After an initial 3 s stall on a rare device, we added a fallback CDN edge; the incident log now drives our edge‑first policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
