---
qid: ing_eafd6decfc__aws__local
question: 'Explain: Indirect-prompt-injection defense at the read layer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 407
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:19-05:00'
sources: []
---

**Situation / Task**  
While leading a Gen‑AI platform at Amazon, I was asked to harden the read layer against *indirect prompt injection*—where attackers manipulate downstream prompts by tampering with cached data or metadata.

**Action**  
I owned the solution and **dove deep** into the architecture.  
1. **Validation Layer** – built a Lambda‑based microservice that parses every incoming request, hashes the prompt text, and cross‑checks it against an immutable, versioned Bloom filter stored in DynamoDB (high read throughput, low cost).  
2. **Immutable Cache** – switched from ElastiCache to Amazon CloudFront with signed URLs; each cached payload carries a JWT signed by KMS that expires after 5 min, preventing tampering.  
3. **Audit Trail** – enabled CloudTrail logs for every prompt hash and stored them in S3 Glacier Deep Archive for long‑term forensic analysis.

**Result**  
The rollout reduced successful injection attempts from ~12% to <0.1% (99.9% drop) within 30 days, while keeping latency under 15 ms and cost per request at $0.00003—below the 10% margin we targeted.  

**Learning & Bar‑Raiser Insight**  
I demonstrated **Ownership** by driving cross‑functional squads (SRE, security, data science) to iterate on the Bloom filter size until hit‑rate hit 99.5%. I also showcased **Bias for Action**: deployed a canary in 4 hrs. The bar‑raiser will look for my ability to quantify impact, anticipate trade‑offs (e.g., cache invalidation vs. latency), and incorporate feedback loops from security audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
