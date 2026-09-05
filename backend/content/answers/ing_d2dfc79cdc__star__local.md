---
qid: ing_d2dfc79cdc__star__local
question: TTFT matters more than total generation time. How do you design a chat UI
  around that, and what do you do when TTFT itself is slow?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 325
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:11-05:00'
sources: []
---

**Situation:**  
When launching our chatbot for the new e‑commerce platform, we discovered customers were leaving the conversation after an average of 4 seconds because the time-to-first-token (TTFT) was hovering around 1.8 s, even though total generation time was acceptable.

**Task:**  
I had to redesign the chat UI so that users perceived instant responsiveness and reduce drop‑off, while also identifying a strategy for cases where TTFT remained high due to model latency or server load.

**Action:**  
First, I introduced a lightweight “typing” animation that started immediately after the user sent a message, giving visual feedback before any tokens appeared. Simultaneously, I implemented a fallback pre‑generated “thinking” prompt that returned within 200 ms from our CDN edge cache. On the backend, I switched to a smaller, distilled model for initial tokens and then streamed the full response using WebSocket, ensuring subsequent tokens flowed without delay. For persistent TTFT spikes, I added a circuit‑breaker: if the first token took >500 ms, we showed an adaptive “Hang on…” message with a progress bar tied to estimated completion time.

**Result:**  
User drop‑off dropped from 35% to 12%, and average perceived response time fell below 300 ms. We also reduced server cost by 18% by offloading initial tokens to the CDN. I learned that UI cues combined with model tiering can dramatically mitigate TTFT pain points while keeping infrastructure efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
