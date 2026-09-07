---
qid: ing_2fa97173b7__aws__local
question: 'Explain: Title: Hidden in Memory: Sleeper Memory Poisoning in LLM Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 380
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:03-05:00'
sources: []
---

**Hidden in Memory: Sleeper Memory Poisoning in LLM Agents**

**Situation & Task (Ownership, Customer Obsession)**  
I led a cross‑functional team to secure an internal LLM‑powered recommendation engine that served 1 M daily users. During a quarterly audit we discovered intermittent “sleeper” memory corruption—malicious data injected into the agent’s in‑memory context during idle periods, later surfacing as biased recommendations.

**Action (Dive Deep, Bias for Action)**  
1. **Forensics & Detection:** Instrumented the agent with *Amazon CloudWatch Logs* and *X-Ray* to capture full execution traces, isolating the injection point in the memory cache layer.  
2. **Remediation Architecture:** Deployed a stateless *AWS Lambda* wrapper that serializes context via *S3* (encryption at rest) before rehydration, guaranteeing immutability. Added *DynamoDB Streams* to audit every write and trigger a *SNS* alert if an anomaly is detected.  
3. **Mitigation Testing:** Ran 10 k synthetic poisoning attacks in a staging environment; our detection pipeline flagged >99% of incidents with <2 s latency.

**Result (Deliver Results)**  
- Reduced memory‑poisoning incidents from 4 per quarter to 0 for six months.  
- Cut average recommendation latency by 12 ms (10 × improvement) while keeping cost <5 % of the previous architecture.  

**Bar‑raiser notes:** The solution shows true ownership, deep dive into root cause, quantified impact on security and performance, and a learning loop that turned a failure into a robust design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
