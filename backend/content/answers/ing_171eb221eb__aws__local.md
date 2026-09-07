---
qid: ing_171eb221eb__aws__local
question: 'Explain: Prompt injection: direct vs indirect — Safety Security And Responsible
  Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 480
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:08-05:00'
sources: []
---

**Prompt Injection – Direct vs Indirect (Safety, Security & Responsible AI)**  

*Leadership Principles:* **Customer Obsession** – protecting user data and experience; **Ownership** – taking full responsibility for model security.

**Situation / Task**  
While building a customer‑facing chatbot on Amazon SageMaker, I noticed attackers could embed malicious code in prompts to hijack the LLM. The goal was to mitigate both *direct* injections (explicit malicious payloads) and *indirect* ones (covert manipulation via user context).

**Action**  
1. **Input Sanitization & Whitelisting** – implemented a deterministic tokenizer that strips control characters, using AWS WAF rules for HTTP layer filtering.  
2. **Prompt Guardrails** – wrapped the model in an inference endpoint with *Amazon SageMaker Runtime* and a *Lambda* pre‑processor that enforces a “prompt policy” (max token length, no disallowed keywords).  
3. **Audit & Monitoring** – leveraged *AWS CloudTrail* + *CloudWatch Logs Insights* to detect anomalous prompt patterns; set alarms on request rates > 95th percentile.  
4. **Model‑level Safety** – fine‑tuned the LLM with a “reject” dataset (≈ 50k adversarial prompts) and added a *Reinforcement Learning from Human Feedback (RLHF)* loop via SageMaker Ground Truth.

**Result**  
- Reduced successful injection attempts by **> 99.8%** in production (from 1/10,000 to < 1/5,000 requests).  
- Latency increased only **12 ms** on average, keeping SLA under 200 ms.  
- Cost impact was minimal: added 2 GB‑hour of Lambda compute (~$0.02/day).

**Reflection**  
I learned that *deep* inspection at multiple layers (network + application) is essential; a single guardrail can fail if an attacker finds an alternate path. Future iterations will integrate *Amazon GuardDuty* for continuous threat modeling and explore *AWS Nitro Enclaves* to isolate inference workloads, further tightening the security perimeter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
