---
qid: vq_60584eb692__faang__local
question: What is High Water Mark?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 452
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:45-05:00'
sources: []
---

**High Water Mark (HWM)**  
A *high water mark* is a running maximum of a value that monotonically increases over time, such as the highest balance in an account or the greatest memory used by a process. Once set, it only goes up; if the underlying metric later falls below it, the HWM stays unchanged until the metric exceeds it again.

---

### 1️⃣ Clarify  
- **What is being tracked?** (e.g., account balance, memory usage)  
- **When is the mark updated?** Immediately when a new maximum appears.  
- **Is resetting allowed?** Usually only on explicit reset events (account closure, system reboot).

### 2️⃣ Approach  
1. Store current value and HWM in variables.  
2. On each update: `if (newVal > hwm) hwm = newVal;`.  
3. Expose read operations for both current and HWM.

### 3️⃣ Depth  
- **Time complexity:** O(1) per update/read.  
- **Space complexity:** O(1).  
- In distributed systems, a single source of truth (e.g., atomic counter in Redis or a consensus log) ensures consistency.  
- If multiple writers exist, use compare‑and‑swap or transactional updates to avoid lost updates.

### 4️⃣ Edge Cases  
- **Negative values**: HWM starts at `-∞` so any value will set it.  
- **Concurrent writes**: race conditions can cause missed updates; test with high contention scenarios.  
- **Reset logic**: ensure reset does not accidentally lower the HWM when multiple resets occur.

### 5️⃣ Optimize & Communicate  
- Use lock‑free atomic primitives to avoid bottlenecks in high‑throughput services.  
- Log changes for auditability; provide a delta stream for real‑time dashboards.  
- Explain that HWM is useful for billing (e.g., cloud usage) or monitoring (peak memory), and highlight its O(1) nature as a key advantage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
