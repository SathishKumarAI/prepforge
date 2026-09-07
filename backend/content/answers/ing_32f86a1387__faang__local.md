---
qid: ing_32f86a1387__faang__local
question: 'Explain: Now look at the exit code of — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 556
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:43:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *exit codes* when running a Python script (e.g., “Python Full Course for Beginners”). We’ll assume the script is executed from a shell (`python script.py`) and that we’re interested in how to capture, interpret, and use the exit status.

---

### 1️⃣ Approach  
1. Define what an exit code is.  
2. Show how Python sets it by default (0 = success, non‑zero = error).  
3. Explain how to set a custom code with `sys.exit()`.  
4. Illustrate checking it in a shell or CI pipeline.

---

### 2️⃣ Depth  

| Concept | Detail |
|---------|--------|
| **Exit status** | Integer returned by the process; convention: `0` = success, `>0` signals error. |
| **Python default** | If script finishes normally → `0`. Uncaught exception → non‑zero (usually 1). |
| **Custom codes** | `import sys; sys.exit(2)` will terminate with code 2. |
| **Retrieving in shell** | `python script.py; echo $?` prints the status. In CI: `$?` or `${{ job.status }}`. |
| **Portability** | POSIX defines 0‑255 range. Python masks higher bits accordingly. |

*Complexity:* O(1) for setting/reading an exit code; no extra memory.

---

### 3️⃣ Edge Cases  
- **Multiple exits**: only the first `sys.exit()` is honored; later statements are skipped.  
- **Signals** (e.g., SIGINT): terminate with a non‑zero status (`130` on Unix).  
- **Windows vs POSIX**: Windows may return different codes for signals, but Python normalizes them.

---

### 4️⃣ Optimize & Communicate  

- **Best practice:** Use `sys.exit(0)` for success and distinct non‑zero values for known error types (e.g., `1` for validation errors).  
- **Testing**: Write unit tests that run the script via subprocess and assert on `$?`.  
- **Narrative tip:** “In production, exit codes let orchestrators decide whether to retry or flag failures; keeping them predictable is key.”

> *“So when you run the beginner’s Python course, you can immediately tell if it finished cleanly by checking `echo $?`— a zero means all went well, any other number signals something went wrong.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
