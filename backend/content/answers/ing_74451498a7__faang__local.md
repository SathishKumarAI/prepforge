---
qid: ing_74451498a7__faang__local
question: 'Explain: Write a parser that consumes a streamed LLM response (server-sent
  events) arriving in arbitrary network chunks and yields complete JSON events.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 568
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:55-05:00'
sources: []
---

**Clarify**  
We need a streaming parser that ingests Server‑Sent Events (SSE) from an LLM server, receives data in arbitrary TCP fragments, buffers it, and emits fully‑formed JSON objects whenever one is available. Assumptions:  
- Each SSE line starts with `data:` followed by raw JSON; lines end with `\n`.  
- The stream can split a single line arbitrarily across network packets.  
- We only care about the `data` field (ignoring event/type).  

**Approach**  
1. Maintain an internal byte buffer.  
2. On each incoming chunk, append it to the buffer.  
3. Scan for newline characters (`\n`). For every complete line:  
   - Strip leading `data:` and whitespace.  
   - Parse the remaining string as JSON; if parsing succeeds, emit the object.  
4. Keep any trailing incomplete data in the buffer for the next chunk.  

**Depth**  
```python
class LLMStreamParser:
    def __init__(self):
        self._buf = ""

    def feed(self, chunk: bytes) -> list[dict]:
        """Return a list of parsed JSON objects from the new chunk."""
        self._buf += chunk.decode("utf-8")
        events, _, rest = self._buf.partition("\n")  # first line
        results = []

        while True:
            if not events:
                break
            for line in events.split("\n"):
                line = line.strip()
                if line.startswith("data:"):
                    payload = line[5:].strip()
                    try:
                        obj = json.loads(payload)
                        results.append(obj)
                    except json.JSONDecodeError:
                        pass  # ignore malformed lines
            self._buf = rest
            events, _, rest = self._buf.partition("\n")
        return results
```
Time: O(n) per chunk; space: proportional to the longest incomplete line.  

**Edge Cases**  
- Lines split mid‑JSON → buffer retains partial data until complete.  
- Empty or whitespace lines → ignored.  
- Malformed JSON → skipped (could log).  
- Multiple `data:` lines in one SSE block → each parsed separately.  

**Optimize & Communicate**  
To reduce allocations, reuse the buffer string and avoid splitting when possible; use a bytearray for binary streams. For large payloads, stream parse with `json.JSONDecoder.raw_decode`. In production, expose back‑pressure hooks or async generators so callers can await events without blocking the network thread. This design keeps the parser lightweight, deterministic, and easy to test—key qualities interviewers look for in a FAANG candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
