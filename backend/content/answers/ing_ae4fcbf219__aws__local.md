---
qid: ing_ae4fcbf219__aws__local
question: 'Q: How do you defend against prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 424
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:49-05:00'
sources: []
---

**Situation** – While leading the NLP platform for our recommendation engine, a security audit revealed that attackers could inject malicious prompts into our GPT‑based inference API, causing data leakage and model misbehavior.  
**Task** – Design an end‑to‑end defense that preserves latency (<50 ms) while preventing prompt injection.

**Action** –  
1. **Input sandboxing**: Built a lightweight Lambda layer that tokenizes every user prompt using the same tokenizer as the model, rejecting any sequence that contains disallowed control tokens or exceeds 256 tokens (≈95 % of normal traffic).  
2. **Prompt‑scoring filter**: Deployed an Amazon SageMaker endpoint that assigns a “suspicion score” to each prompt based on n‑gram analysis and a pre‑trained anomaly model; prompts above 0.8 trigger a re‑prompt or rejection.  
3. **WAF & rate limiting**: Configured AWS WAF rules at API Gateway to block IPs with >10 failed attempts per minute, reducing injection attempts by 92 %.  
4. **Monitoring & alerting**: Integrated CloudWatch metrics and GuardDuty findings; any anomalous score spike auto‑triggers a Lambda remediation that temporarily throttles the user’s session.

**Result** – Within two weeks of deployment, we saw a **98 % drop in injection incidents**, maintained an average latency of 42 ms, and reduced cost by 15 % through efficient token filtering.  

**Leadership Principles**: *Customer Obsession* (protecting user data), *Ownership* (owning the entire security stack), *Dive Deep* (analyzing token patterns), and *Bias for Action* (rapid deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
