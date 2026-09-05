---
qid: ing_3f0e877d4d__fp__local
question: How do you implement "Stop generating," and what actually happens end-to-end
  when the user clicks it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 538
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:18:27-05:00'
sources: []
---

### From the fundamental problem

A language model generates text by repeatedly sampling from a probability distribution over the next token. The *generation loop* is a tight, CPU‑bound or GPU‑accelerated pipeline that consumes a prompt, produces one token at a time, and streams it back to the client.  
When a user clicks **Stop generating**, the system must interrupt this loop *without corrupting the model state* and without leaking partial tokens.

### Why it must work this way

1. **Deterministic cancellation** – The loop is governed by a single “cancellation token.” If the flag flips, the next iteration exits immediately, guaranteeing no further GPU kernels run and no extra memory is allocated.
2. **Graceful shutdown of I/O** – The streaming buffer (e.g., WebSocket or SSE) must flush any partially‑generated token so the user sees a clean truncation.  
3. **Resource reclamation** – GPUs are released promptly; otherwise, other requests would starve.

### End‑to‑end flow

| Step | What happens |
|------|--------------|
| 1. User clicks **Stop** | Front‑end sends an HTTP/WS message to the backend setting `cancellation_token = true`. |
| 2. Backend receives | The generation coroutine checks the token at every iteration; if set, it breaks out of the loop. |
| 3. Partial token flush | Any buffered bytes that have not yet been emitted are discarded or sent as a “partial” token with an EOS flag. |
| 4. Resource cleanup | GPU contexts and memory pools are freed; the model instance may be returned to a pool. |
| 5. Response terminates | The streaming connection is closed cleanly, sending a final status message (e.g., `{"status":"stopped"}`). |

### Non‑obvious insight

**Stopping is not just “kill the thread”; it is a *transactional rollback* of the generation state.**  
Because each token depends on all previous hidden states, an abrupt halt must also roll back any in‑flight weight updates (e.g., beam search buffers) to preserve model consistency for subsequent prompts. This subtlety keeps the system stateless between requests and avoids memory leaks that would otherwise accumulate with frequent stops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
