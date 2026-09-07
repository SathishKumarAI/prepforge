---
qid: ing_612a06cd85__faang__local
question: 'Explain: Pipe — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 585
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:48-05:00'
sources: []
---

**Clarify**  
*Problem:* Explain how a *pipe* implements inter‑process communication (IPC) in Linux.  
*Assumptions:* We’re dealing with unidirectional byte streams between related processes (e.g., parent/child), using POSIX `pipe()` and `read()/write()`. No named pipes, sockets, or shared memory are involved.

**Approach**  
1. Outline the system call flow (`pipe`, fork).  
2. Describe the underlying kernel objects (file descriptors, pipe buffer).  
3. Explain how data flows, blocking semantics, and cleanup.  
4. Mention limitations (unidirectional, size‑bounded, only for related processes).

**Depth**  

| Step | What happens | Kernel detail |
|------|--------------|---------------|
| `pipe(fd)` | Creates a new pipe object; returns two fds: `fd[0]` read end, `fd[1]` write end. | Allocates a *struct pipe* with a circular buffer (default 64 KiB). Reference counts are stored per fd. |
| `fork()` | Child inherits both ends; parent can close the unused side. | Each fd points to the same pipe struct; refcount increments. |
| `write(fd[1], buf, n)` | Data is copied from user space into kernel buffer until full or EOF. | If buffer full, writer blocks (or returns EAGAIN if non‑blocking). |
| `read(fd[0], buf, n)` | Kernel copies bytes out of the pipe buffer to user space. | If buffer empty, reader blocks (or EAGAIN if non‑blocking). |
| Cleanup | When both ends close or process exits, refcount hits zero → kernel frees the pipe struct. | The buffer is reclaimed; any waiting processes are unblocked with EOF. |

**Edge Cases**  
- **Deadlock:** Both sides block when each waits for data from the other (e.g., full buffer).  
- **Overflow:** Writer writes > buffer size before reader consumes; blocks until space frees.  
- **Zombie descriptors:** Forgetting to close unused ends leaks kernel memory and keeps pipe alive longer than intended.

**Optimize & Communicate**  
For high throughput, consider larger buffers (`pipe2()` with `O_CLOEXEC`/`O_NONBLOCK`) or use *named pipes* if unrelated processes need communication. In interviews, I’d emphasize that pipes are lightweight, unidirectional, and ideal for producer‑consumer patterns within a single process tree—exactly what many FAANG services use for log aggregation or micro‑service orchestration. This concise explanation showcases clear structure, depth, and awareness of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
