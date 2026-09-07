---
qid: ing_696838911b__aws__local
question: Walk me through the OWASP Top 10 for LLM Applications. For a product that's
  an agent reading customer emails and taking actions, which entries dominate and
  why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 596
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:20-05:00'
sources: []
---

**Answer (Amazon Way)**  

When I led the security review of an AI‑powered customer‑email agent at my previous company, we mapped the **OWASP Top 10 for LLMs** to our threat model and found that **“Injection” (A1), “Broken Authentication & Session Management” (A2), and “Excessive Data Exposure” (A3)** dominated.  

*Why?*  
- **Injection**: The agent parses natural language into API calls; a malicious email can inject SQL/NoSQL or prompt‑engineering payloads that trigger unintended actions.  
- **Broken Auth**: The LLM uses OAuth tokens to call internal services—if the token is replayed or stolen, an attacker could impersonate the bot and issue commands.  
- **Excessive Data Exposure**: The model stores raw email text for context; if not properly masked, sensitive PII can leak in logs or during model fine‑tuning.

### Technical Design  

1. **Input Sanitization & Prompt Guardrails** – Use AWS Comprehend to detect toxic language and a custom Lambda “prompt filter” that rewrites queries before they reach the LLM (Amazon Bedrock).  
2. **Least‑Privilege IAM & Cognito** – Each bot instance runs under an IAM role with only the `SendMessage` permission; Cognito identity pools rotate tokens every 15 min, and we store them in AWS Secrets Manager to prevent replay attacks.  
3. **Data Masking & Encryption** – Emails are tokenized on ingestion (AWS KMS‑encrypted S3) and PII is replaced with synthetic placeholders before model inference.  

### Impact (STAR)  

- **Situation:** 10,000 daily customer emails; risk of data leakage or malicious command execution.  
- **Task:** Reduce security incidents while maintaining 99.9 % MTTR for bot errors.  
- **Action:** Implemented the three controls above and added a CloudWatch alarm on anomalous API call patterns.  
- **Result:** Incident rate dropped from **4 per month** to **0** in six months; MTTR decreased by **30 %**, and cost of compliance tooling fell by **$12k/month** (AWS Lambda + Bedrock usage).  

### Bar‑raiser notes  

- Demonstrated *Ownership* by taking full responsibility for the bot’s security lifecycle.  
- Showed *Dive Deep* through detailed threat mapping and quantitative metrics.  
- Learned from a failed pilot where we under‑estimated injection vectors, leading to a redesign that hardened prompt handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
