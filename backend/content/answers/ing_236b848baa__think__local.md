---
qid: ing_236b848baa__think__local
question: A generation fails halfway through the stream. What does good error and
  retry UX look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 509
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:00:28-05:00'
sources: []
---

**1. Clarify the scenario & assumptions**  
   - Identify what “generation” means (text, image, code) and where it occurs (client‑side rendering vs server‑side API).  
   - Assume the user is already in the middle of a session; we want to preserve context and avoid data loss.  
   - Assume network or model hiccups are intermittent, not catastrophic.

**2. Adopt an error‑handling framework**  
   - *Fail fast*: detect failure early (timeout, exception, low confidence).  
   - *Graceful degradation*: show a partial result if available; otherwise display an informative placeholder.  
   - *User‑centric recovery*: let the user decide whether to retry or cancel.

**3. Step‑by‑step reasoning toward UX design**  
   1. **Immediate feedback**: a subtle spinner or “Still working…” message appears, with an estimated wait time if possible.  
   2. **Error notification**: when failure is detected, replace the spinner with a concise error text (“We hit a snag”).  
   3. **Context preservation**: keep the user’s prompt and any partial output visible so they don’t have to re‑type.  
   4. **Retry options**: provide an inline “Try again” button that retries from the same state, and maybe a “Restart fresh” link for a clean slate.  
   5. **Progressive disclosure**: offer a small explanation (“We’re retrying because of a transient network glitch”) to build trust.  
   6. **Fallback**: if retries fail repeatedly, suggest alternative actions (e.g., download a log, contact support).

**4. Avoid common pitfalls**  
   - Don’t hide the error; vague “something went wrong” erodes confidence.  
   - Avoid infinite retry loops that lock the UI.  
   - Don’t require users to re‑enter data; it feels punitive and may lead to abandonment.

**5. Sanity‑check & verbalize**  
   - Ask: Does the user feel in control? Is the message clear?  
   - Run a quick mental test: “If I were the user, would I know what happened and how to fix it?”  
   - Iterate by speaking the flow aloud or sketching a quick storyboard before coding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
