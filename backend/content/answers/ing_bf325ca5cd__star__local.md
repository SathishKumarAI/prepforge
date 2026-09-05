---
qid: ing_bf325ca5cd__star__local
question: 'Explain: Integration with LangChain (Optional) — GitHub - NVIDIA-NeMo/Guardrails:
  NeMo Guardrails is an open-source toolkit for easily adding programmable guardrails
  to LLM-based conversational systems. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 333
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:11-05:00'
sources: []
---

**Situation**  
When my team was building a customer‑support chatbot for an e‑commerce platform, we hit a compliance snag: the LLM kept suggesting shipping to restricted countries and occasionally generated content that violated our brand guidelines. The client demanded instant moderation without sacrificing latency.

**Task**  
I had to embed programmable guardrails into our LangChain pipeline so that every user prompt and assistant response were automatically screened for policy violations, all while keeping round‑trip time under 400 ms.

**Action**  
First, I forked the NVIDIA‑NeMo Guardrails repo and configured a lightweight “Shipping” guardrail with a custom rule set (geo‑filtering + profanity list). Then I wrapped LangChain’s `LLMChain` inside NeMo’s `GuardRailExecutor`. Using FastAPI for deployment, I added an async middleware that streams each LLM token through the guardrail before returning it to the client. To keep latency low, I pre‑compiled the guardrail rules into a TorchScript module and cached the compiled graph in memory.

**Result**  
The bot’s compliance rate jumped from 68 % to 99.8 %, and average response time only increased by 12 ms (≈5 %). The client was impressed, and we subsequently added a second guardrail for GDPR‑compliant data handling. I learned that coupling LangChain with NeMo Guardrails is straightforward if you treat the guardrail as an asynchronous token filter—making it both safe and performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
