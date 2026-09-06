---
qid: ing_56d6d40faf__fp__local
question: What Happens to Old Log Files? — What Is Log Rotation and How Does It Work?
  | Mezmo
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 562
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:20-05:00'
sources: []
---

**Why we *must* rotate logs**

In a running system every event that matters is written to a file.  
That file grows linearly with time, so after a few weeks it will exceed the
available disk quota or become unwieldy for human inspection.  
The fundamental problem is **finite storage under continuous write traffic**.

---

### From constraint to policy

Let  

* \(D\) = available free space (bytes),  
* \(r(t)\) = write rate (bytes/s).  

If we let the log grow unbounded, the expected size after time \(T\) is  
\(S(T)=\int_0^T r(t)\,dt \approx r\,T\).  
We must keep \(S(T)\le D\); otherwise the system will crash.

The simplest policy that satisfies this inequality is to **archive** the
current file at a fixed interval and start fresh.  
Mathematically we enforce

\[
S_{\text{active}}(t)=r\,t \quad\text{for } 0\le t < \tau,
\]

where \(\tau = D/r\) is the *rotation period*.  
When \(t=\tau\), the active file is renamed (e.g., `app.log.1`), a new
`app.log` is opened, and the old file can be compressed or deleted.

---

### Implementation mechanics

* **Signal‑based**: send SIGHUP to the daemon; it closes the current file,
  reopens a fresh one, and optionally triggers compression.
* **Scheduled cron**: run `logrotate` with options like `daily`, `size`,
  `compress`, `maxage`.
* **Retention policy**: keep only the last *N* archives or those newer than
  *M* days.

---

### A non‑obvious insight

Most people treat rotation as a purely mechanical housekeeping task.
In fact, it is an **online compression problem**: by rotating early and
compressing immediately we reduce entropy that would otherwise be stored
in raw form.  
If the log contains many repeated patterns (e.g., timestamps), compressing
each archive *right after* creation can save up to 80 % of disk space,
which is critical for high‑volume services where the cost of a full
snapshot outweighs the compression time.

In short, log rotation turns an unbounded data stream into a bounded,
compressible dataset by enforcing a mathematically derived period that
keeps storage usage predictable and recoverable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
