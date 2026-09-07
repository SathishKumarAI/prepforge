---
qid: ing_c5ccdc95fc__faang__local
question: 'Explain: GoRoutines and CPU Stats'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 477
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:20:55-05:00'
sources: []
---

**Clarify**  
You want to know how goroutines can be used to monitor CPU statistics on a system.  
Assumptions: we’re talking about Go (1.18+), running on a Linux/macOS/Windows host; the goal is to collect per‑process or per‑CPU usage in real time, and report it without blocking application logic.

**Approach**  
1. Spawn a lightweight monitoring goroutine that wakes every `T` ms.  
2. Inside, read `/proc/stat` (Linux) or use OS APIs (`syscall.Sysinfo`, `runtime/pprof`) to fetch CPU counters.  
3. Compute deltas between consecutive samples to get usage percentages.  
4. Push the computed metrics onto a channel consumed by any interested component.

**Depth**  
```go
type CPUMetric struct{ User, System, Idle float64 }

func monitorCPU(t time.Duration, out chan<- CPUMetric) {
    prev := readProcStat()
    for range time.Tick(t) {
        cur := readProcStat()
        delta := diff(prev, cur)
        out <- CPUMetric{
            User:   delta.user / delta.total * 100,
            System: delta.system / delta.total * 100,
            Idle:   delta.idle / delta.total * 100,
        }
        prev = cur
    }
}
```
Complexity is O(1) per tick; memory overhead negligible.  
We avoid blocking by using buffered channels and `select` to drop samples if consumer lags.

**Edge Cases**  
- System with many CPUs: ensure `/proc/stat` parsing scales.  
- High‑frequency sampling may miss CPU state changes → choose a reasonable interval (e.g., 500 ms).  
- On Windows, fallback to `GetSystemTimes`.  
- Goroutine leaks if channel closed unexpectedly.

**Optimize & Communicate**  
To reduce I/O, cache the last read and only reparse on file change notifications (`inotify`).  
Explain trade‑offs: higher precision vs. CPU load; use a configurable tick interval.  
When presenting, walk through the code snippet, highlight how goroutines keep monitoring non‑blocking, and summarize time/space complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
