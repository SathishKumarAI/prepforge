---
qid: ing_8f1f73ced5__aws__local
question: 'Q: How do you protect an LLM application from prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 464
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:55-05:00'
sources: []
---

**Situation / Task**

At my previous role I led a SaaS product that exposed an LLM‑powered chatbot to enterprise clients. In March 2025, we detected a spike in malicious prompts that bypassed the API and extracted internal knowledge, threatening our compliance SLA of 99.9% data confidentiality.

**Action**

1. **Ownership & Bias for Action** – I formed a cross‑functional “Prompt Guard” squad and set a 48‑hour sprint to harden the prompt pipeline.
2. **Dive Deep** – Analyzed logs with CloudWatch Insights; discovered that attackers were using crafted JSON keys that the LLM parsed as instructions.  
3. **Design** – Implemented a two‑layer filter:
   * **AWS WAF + Managed Rules** to block known injection patterns at edge.
   * A **Lambda@Edge** preprocessor that normalizes and sanitizes user input, stripping disallowed tokens before forwarding to the LLM endpoint (Amazon Bedrock).
4. **Metrics** – Post‑deployment, injection attempts dropped from 1.2 k/day to <5/day (≈ > 99% reduction). SLA impact remained below 0.01%.
5. **Cost & Availability** – Lambda@Edge adds ~10 ¢/M requests; WAF cost negligible. Both are globally distributed, ensuring <50 ms latency and 100% availability.

**Result**

Within a week the product met its compliance goal, and we documented the architecture in the internal “Prompt Guard” playbook used by all new LLM projects.

---

### What a bar‑raiser listens for

* **Ownership** – taking responsibility for security from first contact to post‑release monitoring.  
* **Dive Deep** – using CloudWatch Insights to pinpoint injection vectors and crafting precise mitigation rules.  
* **Quantified Impact** – demonstrating >99% drop in attacks with measurable SLA preservation.  
* **Learning from Failure** – turning a compliance risk into an opportunity for cross‑team tooling that benefits future launches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
