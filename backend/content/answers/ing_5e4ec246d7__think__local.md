---
qid: ing_5e4ec246d7__think__local
question: The model is streaming a multi-file edit while the user keeps typing in
  one of those files. How do you apply the edits without corrupting the buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 556
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:14:06-05:00'
sources: []
---

**1. Clarify the scenario and assumptions**  
- *What* is being streamed? A patch (diff) that spans several files, arriving incrementally.  
- *Where* does user input occur? In one of those same files, possibly at any position.  
- *Goal*: Merge the stream into the file buffer without losing or corrupting either the user’s edits or the incoming changes.  
- Assume we can access the raw text and line numbers for both streams, and that the stream is well‑formed (no overlapping patches on the same line range).

**2. Adopt a diff‑merge mental model**  
Treat the buffer as a *source* document, the user’s edits as an *overlay*, and the incoming stream as another overlay. Think of each change as a set of *operations* (insert/delete/replace) with explicit positions. Use a three‑way merge algorithm: base = original file, ours = user edits, theirs = streamed patch.

**3. Reason step by step**  
1. **Record cursor position and selection** before applying any change so the UI can restore it later.  
2. For each incoming operation:  
   - Locate its target range in the current buffer.  
   - If that range is untouched by the user, apply it directly.  
   - If the user has edited within or around that range, compute a *conflict zone*: the union of both edits.  
3. Resolve conflicts:  
   - Prefer the streamed patch for non‑overlapping parts.  
   - For overlapping lines, either auto‑merge (e.g., concatenate) or flag for manual resolution.  
4. Update internal line/character offsets after each operation so subsequent patches refer to the correct positions.

**4. Common traps to avoid**  
- *Offset drift*: forgetting that applying a patch changes indices for later patches.  
- *Blind overwrite*: replacing user text without checking if it was modified.  
- *Infinite loops*: repeatedly re‑applying the same patch if not marked as consumed.  
- *UI lag*: blocking the main thread while merging large streams.

**5. Sanity checks & communication**  
- Log a diff of the buffer before and after each patch to verify no unintended deletions.  
- Show the user a visual indicator (e.g., gutter markers) for areas where streamed changes were applied or conflicted.  
- If a conflict occurs, present a quick‑action dialog: “Merge?” or “Discard stream.”  

By treating edits as merge operations and carefully tracking positions, you can safely apply multi‑file streaming patches while preserving the user’s live edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
