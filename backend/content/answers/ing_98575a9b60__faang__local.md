---
qid: ing_98575a9b60__faang__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 516
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:01-05:00'
sources: []
---

**Clarify**  
We need the *task‑lifecycle* for an annotation platform that:  
1️⃣ creates a task,  
2️⃣ collects annotations until **k** annotators agree (consensus),  
3️⃣ may trigger a *priority re‑review*, and  
4️⃣ enforces *annotator cooldowns*.  
Assumptions to confirm: number of annotators per task, definition of consensus, max retries, cooldown duration, and how priority is determined.

---

### Approach
1. **Task Creation** – enqueue raw data with metadata (type, required k).  
2. **Annotation Collection** – assign tasks to available workers; store each annotation with worker ID and timestamp.  
3. **Consensus Check** – once `k` annotations arrive, compute agreement (e.g., majority vote or F1 threshold).  
4. **Re‑review Logic** – if consensus fails or confidence < threshold, flag task as *high priority* and reassign to a fresh pool.  
5. **Cooldown Enforcement** – after an annotation, mark worker with a timestamp; block reassignment until cooldown expires.

---

### Depth
- **Data Model**: `Task(id, payload, k, status, priority)`, `Annotation(task_id, user_id, label, ts)`.  
- **Consensus Algorithm**: simple majority or weighted voting; complexity O(k).  
- **Re‑review Queue**: a priority queue keyed by confidence score.  
- **Cooldown Check**: constant‑time lookup in a hash map (`user_id → next_available_ts`).  

All operations are event‑driven, yielding amortized O(1) assignment and O(k log n) for re‑reviews where *n* is queued tasks.

---

### Edge Cases
- Duplicate annotations from the same user.  
- Annotator leaves mid‑task.  
- System overload causing queue backlogs.  
- Cooldown expiration overlapping new task assignments.

Test with synthetic workloads: varying k, annotation speeds, and cooldown lengths.

---

### Optimize & Communicate
- Cache consensus state to avoid recomputation.  
- Use a sliding window for cooldowns to reduce memory.  
- Expose metrics (annotation latency, re‑review rate) via dashboards.  

Explain the design in clear steps, highlight trade‑offs (e.g., stricter cooldown → lower throughput), and iterate with stakeholders on priority thresholds and k values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
