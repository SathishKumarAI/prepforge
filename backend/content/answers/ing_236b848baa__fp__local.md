---
qid: ing_236b848baa__fp__local
question: A generation fails halfway through the stream. What does good error and
  retry UX look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 459
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:20:48-05:00'
sources: []
---

**Principle:**  
An interrupted AI stream is a *partial computation* whose state you must preserve. Treat it as a *checkpointed job* rather than a transient request.

---

### Why it must be that way
1. **Statistical continuity** – the model’s hidden state encodes context; losing it means a new generation starts from scratch, breaking coherence.
2. **User trust** – abrupt blanks signal failure; giving control restores confidence.
3. **Efficiency** – resuming from the last token re‑uses expensive forward passes instead of recomputing.

---

### UX design that follows the principle

| Step | What the user sees | Underlying mechanism |
|------|--------------------|---------------------|
| 1. **Graceful pause** | A thin “Loading… (paused)” overlay with a spinner and the current text already rendered. | The backend streams tokens; on client‑side abort, keep the buffer. |
| 2. **Retry button + context menu** | “Resume” (default) or “Restart” (clear). Optionally show *retry count* & *estimated time*. | A lightweight request re‑sends the last token index; server uses that as new prompt start. |
| 3. **Visual continuity cue** | The resumed text appears in a slightly lighter shade, then fades to normal once finished. | Front‑end overlays a “resumed” flag until generation completes. |
| 4. **Failure escalation** | If retries exceed N or latency spikes, offer “Download transcript” or “Export JSON”. | Back‑end logs the partial run and returns the buffer as downloadable content. |

---

### Non‑obvious insight  
*Give users a “token cursor” they can drag.*  
By exposing the exact token index where the stream stopped, you let power users jump to any point in the generation history (e.g., “continue from token 132”)—turning a failure into an interactive exploration tool. This leverages the model’s incremental nature and aligns with the underlying probability distribution over sequences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
