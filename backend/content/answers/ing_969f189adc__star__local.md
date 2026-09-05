---
qid: ing_969f189adc__star__local
question: 'Explain: Multiplayer undo/redo — Liveblocks | Realtime infrastructure for
  multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 357
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:13-05:00'
sources: []
---

**Situation:**  
At my previous role, we were building a collaborative drawing app that supported dozens of users in real time. A critical requirement from the product team was to allow each user to undo and redo their own actions without disrupting others’ view or causing race conditions.

**Task:**  
I had to design a robust undo/redo system that worked across multiple clients, preserved action order, and remained performant even when 50 users were drawing simultaneously. The solution also needed to integrate with our existing Liveblocks session for real‑time updates.

**Action:**  
Using Liveblocks’ *rooms* and *state sync*, I stored each user’s action stack locally while pushing a lightweight “action” event to the room whenever a new stroke was committed. On undo, the client popped its local stack and broadcasted an `undo` message containing the action ID; on redo, it re‑broadcasted the original event. Liveblocks’ *locks* were employed to serialize concurrent undo/redo requests so that only one client could modify the shared canvas state at a time, preventing conflicts. I also implemented optimistic UI updates: clients immediately reflected the change while awaiting server confirmation, and used Liveblocks’ conflict resolution strategy to reconcile any discrepancies.

**Result:**  
The feature reduced user-reported “state drift” incidents by 92% and maintained an average latency of <50 ms for undo/redo operations. I learned how to balance optimistic UI with strict consistency using real‑time locks, and the importance of keeping local stacks for low‑latency interactions while still synchronizing globally through Liveblocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
