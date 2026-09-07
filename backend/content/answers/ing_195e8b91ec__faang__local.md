---
qid: ing_195e8b91ec__faang__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 417
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:12-05:00'
sources: []
---

**Clarify**  
The issue is that the production‑assistant bot (PA) is returning incorrect pricing for customer requests. I need to determine whether this is an intentional attack (e.g., data tampering, malicious injection) or a benign bug (logic error, stale cache). Key assumptions:  
- PA runs on a single service instance behind an API gateway.  
- Pricing data comes from a central database and a nightly batch job that recalculates rates.  
- Logs are retained for 30 days.

**Approach**  
1. **Reproduce** the error locally with a controlled request.  
2. **Audit logs**: compare the PA’s internal pricing lookup timestamps to the last successful batch run.  
3. **Check data integrity**: query the database for the specific product and verify checksum/hash against what PA returns.  
4. **Run security scan**: look for recent code changes, unauthorized deployments, or credential leaks that could hint at an attack.

**Depth**  
- If logs show a mismatch between the batch job timestamp and PA’s lookup, it’s likely a cache‑stale bug (complexity O(1) for cache hit).  
- If the database values are correct but PA returns wrong numbers, suspect a regression in the pricing algorithm (O(n) over price rules).  
- An attack would surface as anomalous commits or altered environment variables; verify git history and CI/CD pipelines.  

**Edge Cases**  
- Network partitions causing PA to fall back to old cache.  
- Simultaneous batch runs leading to race conditions.  
- Customer data obfuscation (e.g., A/B testing) that changes displayed price.

**Optimize & Communicate**  
Once identified, patch the bug or rollback malicious code, add a rate‑limit guard on pricing calls, and implement automated checks comparing live responses against ground truth every hour. I’ll document findings, mitigation steps, and lessons learned for future audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
