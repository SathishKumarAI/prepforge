---
qid: ing_8aea93dbde__aws__local
question: What is prompt injection? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 451
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:47-05:00'
sources: []
---

**Prompt Injection – a security pitfall in LLM‑driven systems**

*Situation:* While designing a customer‑facing chatbot for an e‑commerce platform (Amazon.com), we discovered that malicious users could embed hidden commands in the user prompt that alter the model’s behavior, bypassing our content filters and exposing private data.

*Task:* Build a mitigation strategy that protects the LLM while keeping latency under 200 ms for 10k concurrent sessions per hour.

*Action:*  
1. **Input sanitization** – Strip or escape control characters (`{`, `}`, `<`, `>`) using AWS WAF rules and a custom Lambda@Edge function to block known injection patterns.  
2. **Prompt templating** – Use a strict “safe‑template” with placeholders only for user text; concatenate the prompt in code, not in the LLM request.  
3. **Model isolation** – Deploy the model on Amazon SageMaker Edge Manager so that each session runs in its own container, limiting cross‑session leakage.  
4. **Monitoring** – Enable CloudWatch Logs Insights to flag any prompt containing prohibited tokens and trigger an automated rollback.

*Result:* After deployment, we reduced successful injection attempts by **99.8 %**, keeping model latency at 180 ms (down from 210 ms pre‑fix) and cost per inference fell from $0.00035 to $0.00028 thanks to fewer retriggers. The solution was reviewed in a quarterly security audit with zero findings.

**Leadership Principles:**  
- **Customer Obsession** – Safeguarding user data protects trust.  
- **Ownership** – I led cross‑functional teams (SRE, Security, Product) and drove the end‑to‑end fix.

**Bar‑raiser cues:** ownership of the problem, deep dive into sanitization patterns, quantified impact, and lessons from a failed pilot that used naïve string replacement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
