---
qid: ing_951dea1f1e__faang__local
question: 'Explain: Program Termination — How Do Computer Programs Run?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:50-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how an OS actually runs code—from the moment you launch a program until it terminates. I’ll assume they’re looking for the low‑level steps (boot → process creation → execution loop → exit) and not just high‑level “run your IDE.”  

**Approach**  
1. Bootloader loads kernel into RAM.  
2. Kernel creates an *init* process, then user processes are spawned via `fork/exec`.  
3. The scheduler picks a ready process; the CPU switches context (registers, stack).  
4. The program’s binary is mapped into memory; code runs from the entry point (`_start`).  
5. When it reaches a return or calls `exit`, the kernel performs cleanup and frees resources.  

**Depth**  
- **Boot**: BIOS/UEFI → bootloader → kernel load, sets up paging, interrupts.  
- **Process creation**: `fork` copies address space; `execve` replaces it with new ELF image (Linux).  
- **Scheduling**: preemptive multitasking, time‑slice or priority queues.  
- **Execution**: CPU fetches instructions from mapped pages; memory protection prevents stray accesses.  
- **Termination**: System call `exit(status)` triggers kernel to release file descriptors, free stack/heap, send `SIGCHLD` to parent, and remove the task descriptor.  

**Edge cases**  
- Segmentation fault → kernel sends `SIGSEGV`, dumps core.  
- Zombie processes if parent doesn’t `wait`.  
- Detached threads (via `pthread_detach`).  

**Optimize & Communicate**  
I’d emphasize that most of this is invisible to the programmer; we interact via system calls and APIs. If asked for optimization, I’d mention lazy loading, page‑fault handling, and minimizing context switches. In a FAANG interview, I’d finish by summarizing: “The OS orchestrates memory, CPU time, and resources so that the program’s machine code runs predictably; termination is just the cleanup path of that orchestration.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
