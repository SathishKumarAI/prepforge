---
qid: ing_72b8834054__faang__local
question: 'Explain: Design the client-side state model for a chat app with multiple
  conversations, regeneration, and message branching.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 407
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:47-05:00'
sources: []
---

**Clarify**  
We’re building a web‑chat client that supports many open conversations, on‑demand message regeneration, and “branching” (sub‑threads). I’ll assume: *each conversation is independent*, *regeneration only affects the last user query*, and *state must survive navigation without full reload*.  

**Approach**  
1. **Global store** (Redux/Context) holding an array of `Conversation` objects.  
2. Each `Conversation` contains:  
   - `id`, `title`, `createdAt`  
   - `messages: Message[]` (ordered)  
   - `branchMap: Map<parentMsgId, [Message]>` for sub‑threads  
3. **Selectors** expose the current conversation and its visible message tree.  

**Depth**  
```ts
interface Conversation {
  id: string;
  title: string;
  createdAt: number;
  messages: Message[];
  branches: Record<string, Message[]>; // parentId → children
}
```
When a user regenerates, we replace the last assistant reply in `messages` and clear any descendants in `branches`. Branching inserts a new message into `branches[parentId]`, keeping the root sequence untouched.  

**Edge Cases**  
- Regeneration during an ongoing API call → cancel or queue.  
- Deleting a parent message removes its branch.  
- Deep branching (many levels) → flatten for rendering to avoid recursion limits.  

**Optimize & Communicate**  
Persist the store in IndexedDB so navigation loss is minimal. Use memoized selectors (`reselect`) to keep UI performant; each conversation updates only its slice, keeping O(1) re-renders. I’d explain that this schema cleanly separates linear history from divergent branches while enabling efficient regeneration and state recovery—exactly what a FAANG‑grade client needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
