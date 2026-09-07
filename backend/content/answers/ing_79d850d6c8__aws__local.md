---
qid: ing_79d850d6c8__aws__local
question: 'Explain: p95 time-to-first-token on answers regressed from 1.2 s to 3 s
  after a release. Walk me through finding and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 448
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:32-05:00'
sources: []
---

**Situation / Task**  
After deploying the new “Context‑Aware” layer for our LLM service, we saw a spike in the p95 time‑to‑first‑token (TTFT) from **1.2 s to 3 s**, hurting user experience and SLA. The goal was to root‑cause the regression and bring TTFT back below 1.5 s without breaking the new feature.

**Action**  
*Customer Obsession & Ownership* – I owned the incident, coordinated with Ops, QA, and Dev teams.  
1. **Dive Deep into Metrics**: Enabled CloudWatch logs for `invoke_latency` on Lambda@Edge + API Gateway, added a custom metric for token‑generation latency per request ID.  
2. **Profiling**: Ran `xray trace` and `AWS X-Ray sampling rules` to isolate the “prompt‑embedding” step. The new layer was loading a 2 GB embedding model from S3 into memory on every cold start, adding ~1.8 s.  
3. **Architectural Fix**: Switched to **EFS‑mounted Lambda** for the embedding file and enabled **Provisioned Concurrency** (30) for the inference function. Added a **Lambda@Edge cache** for embeddings in CloudFront.  
4. **Cost/Availability Trade‑off**: EFS adds ~\$0.30/hr per GB, but reduces cold‑start cost by 90 %. Provisioned concurrency keeps latency under SLA at \$1.20/hr per instance.

**Result**  
TTFT p95 dropped to **1.3 s** (≈45 % improvement). Monthly cost increased by only **\$200**, well below the $5k budget cap. The fix was merged with a rollback plan, and I added automated latency checks in CI.  

*Bar‑raiser notes*: ownership of the full lifecycle, deep metric analysis, quantified impact, and learning loop (embedding strategy change).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
