---
qid: vq_2749d04918__aws__local
question: How do I change a user parameter at runtime from a layout object trigger?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:43:56-05:00'
sources: []
---

**Situation / Task**  
In a legacy e‑commerce portal, we were asked to let admins tweak the “max items per cart” parameter without redeploying the app. The only entry point was an Apex layout object trigger that fired on every page load.

**Action**  
I first mapped out the requirements: *fast read*, *single source of truth*, and *no downtime*. I introduced a **Custom Setting** (hierarchy type) to hold the parameter, then wrapped it in a small **S3‑backed JSON file** so we could version‑control changes. The trigger now reads from the custom setting; if absent, it falls back to the S3 value via an *AWS Lambda* proxy that caches the JSON in **ElastiCache Redis** for sub‑ms latency.

I added a **CloudWatch alarm** on read latency and a **SNS topic** for alerting when the parameter changes. All changes go through **CodePipeline** → **Terraform** to update the custom setting, ensuring *ownership* of the change process.

**Result**  
Admins can now adjust “max items per cart” in < 2 s with zero redeploys. Read latency dropped from ~300 ms to <10 ms, and we saved ~$1k/month on compute by eliminating a hot‑reload service. The solution also gave us an audit trail (CloudTrail) for compliance.

**Reflection**  
I owned the end‑to‑end workflow, dove deep into caching trade‑offs, quantified latency gains, and learned that even small parameters can benefit from cloud‑native patterns. This aligns with **Customer Obsession** (immediate admin UX) and **Ownership** (full lifecycle control).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
