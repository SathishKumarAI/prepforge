---
qid: ing_87bb8ba082__star__local
question: 'Explain: Design the PII-handling pipeline for an LLM feature that processes
  customer support transcripts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 355
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:10-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new chatbot powered by GPT‑4 to triage customer support tickets. Early testing revealed the model was ingesting raw chat logs that contained names, account numbers and credit card details—PII that violated our compliance policy and risked GDPR fines.

**Task:**  
I was tasked with building a secure PII‑handling pipeline so the LLM could glean intent from transcripts without ever seeing or storing sensitive data. The goal was to preserve user privacy, meet regulatory standards, and keep latency under 200 ms per request.

**Action:**  
First, I implemented a pre‑processing microservice in Go that streamed each transcript through spaCy’s NER model tuned on our domain data. Detected entities were replaced with contextual placeholders (e.g., `<ACCOUNT_NUMBER>`). To guard against accidental leakage, the service wrote all PII to an encrypted KMS‑backed vault and logged a hashed audit trail. Next, I wrapped the LLM call in a stateless container that only received sanitized prompts, using OpenAI’s `logprobs` feature to ensure no hidden tokens were returned. Finally, I added a post‑processing hook that stripped any residual identifiers from model outputs before sending them back to support agents.

**Result:**  
The pipeline cut PII exposure risk by 100 % and reduced compliance audit time from days to hours. Agent satisfaction improved—ticket resolution time dropped from 12 min to 7 min—and we avoided a $1M GDPR penalty. I learned that combining lightweight NLP with strict token hygiene can make large models both powerful and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
