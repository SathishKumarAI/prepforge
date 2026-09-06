---
qid: ing_74451498a7__think__local
question: 'Explain: Write a parser that consumes a streamed LLM response (server-sent
  events) arriving in arbitrary network chunks and yields complete JSON events.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 479
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:43:15-05:00'
sources: []
---

**1. Clarify the problem & state assumptions**  
   - *Input*: a byte stream (e.g., `fetch(...).body`) delivering Server‑Sent Events (SSE) from an LLM server.  
   - *Goal*: produce an iterator/generator that emits **complete JSON objects** once they are fully received.  
   - Assume each SSE line starts with `"data: "` and ends with a newline; the stream may break mid‑line or mid‑JSON.

**2. Mental model / framework**  
   - Treat the stream as a *finite state machine*: buffer → parse lines → accumulate JSON fragments → emit on full object.  
   - Use incremental parsing (e.g., `JSON.parse` only when we have a balanced brace pair).  

**3. Step‑by‑step reasoning**  
   1. Read incoming chunks into a string buffer.  
   2. Split the buffer on `\n`. Keep the last incomplete line for next chunk.  
   3. For each complete line, strip `"data: "` prefix.  
   4. Append to a *jsonBuffer* string.  
   5. Track opening `{` and closing `}` counts (or use a stack) to detect when braces are balanced → a full JSON object.  
   6. When balanced, slice that segment from *jsonBuffer*, `JSON.parse` it, yield the object, and remove it from the buffer.  

**4. Common traps & how to avoid them**  
   - **Chunk boundaries in middle of a line**: keep incomplete tail.  
   - **Nested braces or arrays**: maintain a counter or stack instead of simple string search.  
   - **Non‑JSON SSE data (e.g., comments, “event:” lines)**: filter by prefix or ignore.  

**5. Sanity‑check & communicate**  
   - Log the brace count after each chunk to ensure it never goes negative.  
   - Test with a mock SSE source that splits messages arbitrarily.  
   - Explain that this generator yields objects as soon as they’re ready, keeping memory usage minimal and handling arbitrary network fragmentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
