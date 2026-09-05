---
qid: ing_0644d92ee4__star__local
question: 'Explain: How do you build streaming into a chat UI end-to-end? Walk me
  through the pieces and the gotchas.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 351
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:26-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with adding real‑time AI chat responses to our customer support portal. The existing UI sent a single request and waited for a full reply, causing a noticeable lag that hurt user satisfaction.

**Task:**  
I needed to refactor the flow so users could see partial answers as they were generated, while keeping latency under 300 ms per token and ensuring graceful degradation if the stream failed.

**Action:**  
1. **Backend changes:** I wrapped the OpenAI completion endpoint with a WebSocket gateway (using FastAPI + Uvicorn). The server streams tokens as they arrive, tagging each chunk with sequence numbers to handle reordering.  
2. **Front‑end integration:** On the React side I implemented a `useChatStream` hook that opens the socket, buffers incoming chunks, and updates state incrementally. I added a “typing” indicator based on token arrival timing.  
3. **Error handling & fallback:** If the socket closes unexpectedly, the hook falls back to an HTTP request with a timeout of 5 s, displaying an error message and retry option.  
4. **Performance tuning:** I throttled UI updates to max 10 fps to avoid re‑render storms, and used a Bloom filter to dedupe duplicate tokens that occasionally appear in the stream.

**Result:**  
User perceived latency dropped from ~1.8 s to <300 ms per token, increasing average session length by 18 % and reducing support tickets by 12%. I learned that careful buffer management and graceful degradation are key when turning a blocking API into an interactive stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
