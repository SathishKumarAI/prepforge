---
qid: ing_5e4ec246d7__faang__local
question: The model is streaming a multi-file edit while the user keeps typing in
  one of those files. How do you apply the edits without corrupting the buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 410
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:12-05:00'
sources: []
---

**Clarify**  
We’re asked to merge a *streamed* set of edits (multiple files, possibly overlapping) into an editor’s in‑memory buffer while the user is actively typing in one of those files. Key assumptions:  
- The stream delivers operations in order but may reference any file.  
- User edits are captured as cursor position + delta text.  
- We need to preserve consistency and avoid data loss or visual glitches.

**Approach**  
1. **Versioned Operational Transformation (OT) / CRDT** – treat each edit (streamed or local) as an operation with a unique timestamp/sequence number.  
2. Maintain a per‑file *edit queue* that buffers incoming stream ops until the file is idle.  
3. When the user types, generate a local OT operation and apply it immediately to the visible buffer.  
4. On receiving a streamed op for the active file, transform it against any pending local ops (using the OT algorithm) before applying.  
5. Commit transformed ops to the shared state and propagate back to other clients.

**Depth**  
- **Complexity:** Transforming an operation against *k* concurrent ops is O(k). In practice k stays small because we buffer until idle.  
- **Trade‑offs:** OT guarantees convergence but requires careful conflict resolution logic; CRDTs offer simpler merge semantics at the cost of larger state.

**Edge Cases**  
- Simultaneous edits to the same line from stream and user → ensure deterministic ordering via timestamps.  
- Network lag causing out‑of‑order ops – handled by sequence numbers.  
- File closure while edits pending – flush queue before discard.

**Optimize & Communicate**  
Start with a lightweight OT layer; profile for latency spikes, then consider batching or delta compression. Explain to interviewers that this guarantees linearizability of the buffer, preserves user experience, and scales across many files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
