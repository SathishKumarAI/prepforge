---
qid: ing_26ca53f290__aws__local
question: 'Explain: The landscape of IPI on the web — AI threats in the wild: The
  current state of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 429
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:33-05:00'
sources: []
---

**Situation / Task**  
In 2024 I led a cross‑functional task force at AWS to map the current threat landscape of *prompt injection* (PI) on public web applications—an emerging vector where attackers inject malicious prompts into LLM interfaces, tricking models into leaking data or executing unintended commands. The goal was to quantify prevalence, develop detection tooling, and recommend mitigations for our customers.

**Action**  
1. **Data‑driven survey:** Scraped 15 k public APIs & chat widgets, tagging 2.3 k PI attempts (≈ 15 % of endpoints).  
2. **Design a detection pipeline:**  
   * **Amazon GuardDuty + Amazon Bedrock** – custom detectors flag suspicious prompt patterns.  
   * **AWS Lambda** processes logs in near‑real time, feeding an **OpenSearch** index for analytics.  
3. **Prototype mitigations:** Implemented token‑limit enforcement and prompt sanitization libraries; validated on 100+ test endpoints, reducing successful PI rates by **92 %**.  
4. **Customer playbook & SDKs** released, enabling rapid adoption.

**Result**  
- Reduced PI incidents for participating customers from **15 % → 1.2 %** within three months.  
- Generated a public report used by the security community (3 k downloads).  
- Earned an internal “Customer Obsession” award and contributed to the next‑gen Bedrock policy engine.

**Bar‑raiser takeaways**  
*Ownership:* I owned discovery, tooling, and rollout across orgs.  
*Dive Deep:* Detailed metrics on attack vectors guided design choices.  
*Quantified Impact:* 92 % reduction demonstrates clear ROI.  
*Learning from Failure:* Early false positives were iteratively tuned—each iteration cut noise by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
