---
qid: ing_5e4ec246d7__fp__local
question: The model is streaming a multi-file edit while the user keeps typing in
  one of those files. How do you apply the edits without corrupting the buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 510
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:11-05:00'
sources: []
---

When the AI streams edits into several files while you are still typing in one of them, the problem reduces to **merging two interleaved streams of text modifications** that may touch overlapping ranges.  
The core principle is *conflict‑free synchronization*—every change must be applied exactly once and must preserve both the user’s intent and the model’s intended edits.

1. **Treat each file as a versioned buffer**. Every modification (user keystroke or AI patch) is recorded with a monotonically increasing sequence number and a *vector clock* that captures its causal history.  
2. **Log‑based replay**: The AI streams patches as a log of “apply this diff to file X at position p”. Rather than inserting them directly, the system buffers them until it can map each patch onto the current version.  
3. **Operational transformation (OT) / CRDT mapping**: For each incoming patch, transform its offsets against all user edits that have occurred since the patch’s base version. If a user has inserted or deleted text before the patch’s target position, shift `p` accordingly. This is simply *additive offset correction* derived from the difference in line counts between the base and current versions.  
4. **Atomic application**: Once transformed, apply the patch in an atomic transaction that updates the buffer and increments the file’s version number. If a conflict remains (e.g., the user edited exactly the same range the AI intends to modify), fall back to *merge‑by‑content*: compute the longest common subsequence of the three versions (base, user, AI) and resolve ambiguities by preserving the user’s change when it differs from both base and AI.

**Non‑obvious insight**:  
The key to avoiding corruption is not just “apply in order”, but *maintaining a causal graph* between edits. By assigning vector clocks to every operation you can deterministically decide whether an incoming AI patch should be dropped, transformed, or merged without ever rewinding the buffer. This approach scales to arbitrary concurrency and guarantees that no user keystroke is overwritten unintentionally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
