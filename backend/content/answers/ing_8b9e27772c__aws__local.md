---
qid: ing_8b9e27772c__aws__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 435
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:41:44-05:00'
sources: []
---

**Leadership Principles:** *Ownership* + *Dive Deep*

**Situation / Task**  
I led a project to build an AI‑driven web‑scraper that automatically compiles data and sends email summaries. The system was exposed to user‑supplied URLs, so I had to guard against indirect prompt injection (malicious content steered the LLM into unintended outputs).

**Action**  
1. **Input Sanitization & Whitelisting** – Parsed URLs with a strict regex; only allowed domains in an approved list (`example.com`, `trusted.org`).  
2. **Content Filtering Pipeline** – After fetching, run text through a custom NLU model (Amazon Comprehend + custom ML) to detect disallowed patterns (e.g., “stop”, “delete”).  
3. **Prompt Construction Guardrails** – Construct prompts in a *structured* format: `{"context":"<cleaned_text>","question":"Summarize"};` and embed the user’s email address as metadata, never in the prompt body.  
4. **AWS Services** – Lambda for orchestration, S3 for raw/filtered artifacts, SageMaker endpoint for NLU, SES for email dispatch.  
5. **Monitoring & Alerts** – CloudWatch metrics on “prompt‑sanitization failures”; trigger a PagerDuty alert if >2 in 10 min.

**Result**  
Reduced successful injection attempts to <0.01% (from an initial 3%) while maintaining 99.9 % availability and <$0.50/day cost. The system processed ~12,000 URLs/month with a 95 % accuracy on content classification.

**Bar‑raiser Takeaway**  
I showed *ownership* by defining the threat surface, *dive deep* into regex/ML filtering, quantified impact (error rate drop), and documented lessons: future iterations will auto‑update whitelist via IAM‑controlled S3 bucket.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
