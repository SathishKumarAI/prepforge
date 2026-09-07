---
qid: ing_8b9e27772c__faang__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 459
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:01-05:00'
sources: []
---

**Clarify**  
We’re building an autonomous agent that (1) scrapes web pages and (2) sends emails on behalf of a user. *Indirect prompt injection* occurs when the agent’s internal LLM receives “advice” from a malicious page—e.g., a hidden link or script—that steers it to perform undesired actions.  
Assumptions:  
- The agent can parse arbitrary HTML, including scripts and iframes.  
- Emails are sent via an SMTP/REST API without human approval.  

**Approach**  
1. **Source filtering** – only allow content from a whitelist of domains or trust‑listed URLs.  
2. **Sandboxed parsing** – run the page through a headless browser with script execution disabled; capture only visible text and metadata.  
3. **Prompt sanitization** – strip any code blocks, iframes, and suspicious tokens before feeding into the LLM.  
4. **Intent verification** – after the LLM generates an email draft, run it through a policy engine (e.g., OPA) that checks for prohibited verbs (“send money”, “share credentials”).  

**Depth**  
- Use a deterministic tokenizer to split the page; flag tokens like `eval`, `script`, or `<iframe>` and discard them.  
- The policy engine applies regular‑expression rules and a small BERT classifier trained on malicious intent. Complexity: O(n) per page, negligible overhead compared to LLM calls.  

**Edge Cases**  
- Legitimate pages with embedded scripts (e.g., analytics) – our sandbox will still block them but we can whitelist known safe script URLs.  
- Obfuscated prompts that evade regex – the BERT model mitigates this; fallback to manual review if confidence < 0.7.  

**Optimize & Communicate**  
We can batch sanitize multiple pages, cache results, and expose a webhook for audit logs so compliance teams see why an email was blocked. By layering deterministic filters with ML‑based intent detection, we give interviewers confidence that the solution is robust, explainable, and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
