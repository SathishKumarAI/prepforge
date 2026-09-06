---
qid: ing_a92df60325__fp__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 520
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:09-05:00'
sources: []
---

### Why we stream at all  
When a model produces text one token at a time, the *entropy* of each next word depends on everything seen so far. Streaming lets the client begin consuming output before the whole sentence is finished, reducing latency and giving a natural “typing‑like” feel.  

### Core principle: incremental inference as a Markov chain  
The model’s probability distribution \(P(w_t \mid w_{<t})\) is evaluated on each step. We must therefore:

1. **Keep the hidden state** between steps (e.g., transformer cache).  
2. **Produce one token**, flush it, then request the next.

### Handling disconnections  
A client may drop mid‑stream; if we keep the whole generation alive, resources are wasted and other clients starve.  

- **Detect disconnect**: in many frameworks (`response.write` or `yield`) returns a promise that rejects on close.  
- **Graceful shutdown**: wrap the loop in `try/finally`; on rejection, cancel any pending model calls (e.g., via an abort controller).  
- **Cleanup**: release cache tensors and free GPU memory.

### Minimal handler sketch (Node‑JS style)

```ts
async function* streamCompletion(prompt: string) {
  const ctx = await initModel();          // loads weights & caches
  let state = ctx.initialState();
  try {
    for (;;) {
      const {token, newState} = await ctx.step(state, prompt);
      yield token;                       // send to client immediately
      if (token === EOS) break;
      state = newState;
    }
  } finally {
    ctx.release();                        // free GPU memory
  }
}

app.get('/chat', async (req, res) => {
  const stream = streamCompletion(req.query.prompt as string);
  for await (const tok of stream) {
    if (!res.write(tok)) break;           // client closed → stop sending
  }
  res.end();
});
```

### Non‑obvious insight  
The **cache reuse** not only speeds inference but also acts as a natural back‑pressure mechanism: if the client stops reading, we can pause the loop because `res.write` returns `false`. This ties I/O flow control directly to model computation, ensuring resources are used only when the user is still listening.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
