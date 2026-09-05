---
qid: ing_c6b4be0ecb__star__local
question: Why do output tokens cost more than input tokens, and how should that shape
  how you build?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 385
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:17-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with designing a conversational AI for a fintech app that needed to run on a tight budget while handling high user volume. The platform’s pricing model charged $0.0004 per input token and $0.0016 per output token, so any extra words in responses quickly ate into our cost cap.

**Task:**  
I had to architect the system so we could deliver useful, engaging replies without exceeding the monthly spend limit of $2,500 while still keeping latency under 300 ms for 5,000 concurrent users.

**Action:**  
First I profiled typical user interactions and found that many requests generated ~30 output tokens on average. I introduced a two‑stage pipeline: (1) a lightweight rule‑based prefix generator that produced a concise “summary” of the answer (≈10 tokens), and (2) a fine‑tuned GPT model that expanded only when the summary was flagged as incomplete. I also capped maximum output length to 60 tokens and used token‑budget alerts in the orchestration layer to throttle requests during peak hours. Finally, I implemented a cost‑aware prompt engineering strategy—shorter prompts reduced input tokens by ~15% without hurting accuracy.

**Result:**  
The new design cut total token usage by 38%, bringing monthly costs down to $1,800 while maintaining an average response quality score of 4.6/5. It also gave us a predictable cost model that scaled linearly with user growth. I learned that treating output tokens as the primary cost driver forces you to rethink prompt design and response generation strategies from the ground up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
