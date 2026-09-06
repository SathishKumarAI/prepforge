---
qid: ing_74451498a7__fp__local
question: 'Explain: Write a parser that consumes a streamed LLM response (server-sent
  events) arriving in arbitrary network chunks and yields complete JSON events.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 438
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:14-05:00'
sources: []
---

**Why we need a special parser**

A large‑language model (LLM) often streams its output via *Server‑Sent Events* (SSE). Each event is a JSON object sent over an unreliable TCP connection: the OS may split a single SSE line into many packets, or combine several lines into one. The fundamental problem is to reconstruct *whole* JSON objects without waiting for the entire response.

**Core principle – incremental stateful decoding**

Treat the incoming byte stream as a finite‑state machine (FSM):

| State | Condition | Action |
|-------|-----------|--------|
| **Idle** | Receive `data:` prefix | Start buffering |
| **Buffering** | Accumulate bytes until `\n\n` (SSE terminator) | Pass buffer to JSON decoder |
| **Decoding** | Call a streaming JSON parser that tolerates partial objects | Emit event or request more data |

The FSM guarantees that we never discard data and that each emitted object is syntactically complete.

**Why it must handle UTF‑8 boundaries**

Network packets can cut a multi‑byte Unicode code point in half. If the buffer ends mid‑character, naïve string conversion will raise `UnicodeDecodeError`. The trick: keep a *partial* byte slice; when more data arrives, prepend the remaining bytes before decoding.

**Non‑obvious insight**

Most implementations assume that an SSE line contains exactly one JSON object. In practice, LLMs often emit “chunks” of a single logical event (e.g., incremental token streams). By exposing a *chunked* API—yielding parsed fragments as they become available—we avoid blocking on the final terminator and enable downstream pipelines to start processing tokens immediately.

This combination of an FSM, UTF‑8 safety, and chunk‑aware yielding is what makes a robust streamed‑LLM parser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
