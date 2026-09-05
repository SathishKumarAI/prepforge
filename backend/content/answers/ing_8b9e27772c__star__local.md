---
qid: ing_8b9e27772c__star__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 362
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:07-05:00'
sources: []
---

**Situation:**  
In a recent project I built an autonomous email‑reply agent that crawled company intranet pages to gather context and then drafted responses to client inquiries. A security audit revealed that malicious web content could embed hidden prompts in JavaScript or comments, potentially hijacking the model’s output (indirect prompt injection).

**Task:**  
I had to harden the agent so it would never act on injected prompts while still extracting useful data for legitimate replies.

**Action:**  
1. Implemented a strict HTML parser that strips all script tags and non‑text nodes before tokenizing input.  
2. Added a content‑sanitization layer: every extracted string is passed through a regex filter to detect suspicious prompt patterns (e.g., “You are an assistant…”) and flagged for manual review.  
3. Enforced a token budget on the prompt—only 200 tokens of user‑derived text were allowed, with any excess truncated automatically.  
4. Configured the LLM endpoint to use a “no‑injection” policy via OpenAI’s safety settings and wrapped calls in a sandboxed container that logs every request/response pair for audit.

**Result:**  
After deployment, we logged zero injection incidents over six months while maintaining an average email response time of 1.2 minutes and a client satisfaction score of 94%. I learned the importance of layered defenses—sanitization + token limits + runtime monitoring—to secure AI agents against subtle prompt attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
