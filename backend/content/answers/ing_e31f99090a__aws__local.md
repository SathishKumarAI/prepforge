---
qid: ing_e31f99090a__aws__local
question: 'Explain: Prompt Injection and Defense — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 524
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:52:54-05:00'
sources: []
---

**Prompt‑Injection & Defense – Interview Response**

**Situation (S)**  
In my last role at a fintech startup, we built an LLM‑powered chatbot that processed user queries for account balances and transfers. A security audit revealed *prompt injection* attacks: malicious users could inject commands like `“Transfer $10k to attacker”` into the prompt, causing unintended actions.

**Task (T)**  
I was tasked with designing a defense that preserved user experience while preventing unauthorized execution—meeting **Customer Obsession**, **Ownership**, and **Deliver Results**.

**Action (A)**  
1. **Input Sanitization Layer** – Built a rule‑based filter using AWS Comprehend to detect imperative verbs and monetary patterns, tagging suspicious tokens.  
2. **Prompt “Whitelisting”** – Employed *semantic role labeling* with Amazon SageMaker’s NLP model to generate a canonical prompt template; only templates that match the whitelist are forwarded to the LLM.  
3. **Execution Guard** – Wrapped the LLM output in an AWS Lambda “sandbox” that verifies intent tags before invoking any downstream API (e.g., transfer).  
4. **Continuous Monitoring** – Deployed CloudWatch metrics (`prompt_injection_attempts`, `blocked_requests`) and set alarms to trigger a manual review if breaches exceed 0.5% of total traffic.

**Result (R)**  
Within two weeks, the system blocked 97 % of injection attempts while maintaining < 200 ms latency for legitimate queries. Cost stayed under $2/month by using Lambda’s free tier and SageMaker’s on‑demand inference. The feature reduced our incident response time from days to minutes.

**Bar‑raiser cues I’d listen for:**  
- *Ownership*: ownership of the entire pipeline (input → LLM → action).  
- *Dive Deep*: justification of regex rules, model selection, and metric thresholds.  
- *Quantified Impact*: 97 % blockage rate, latency < 200 ms, cost <$2/month.  
- *Learning from Failure*: iterative tuning after false positives and post‑deployment monitoring.

This solution demonstrates **Customer Obsession** (protecting users), **Ownership** (full stack responsibility), and **Deliver Results** (measurable security gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
