---
qid: ing_18a564ccee__faang__local
question: 'Explain: `bash` — Shell Execution — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:13-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how a Bash shell executes a command (e.g., `ls -la`). Confirm the scope: are we focusing on the interpreter, kernel interaction, or just the high‑level pipeline? Assume we’re describing the standard POSIX shell on Linux.

**Approach**  
1. Tokenize input → parse into an AST.  
2. Resolve builtins vs external commands.  
3. Fork a child process for each command (unless it’s a builtin).  
4. In the child, set up I/O redirection and pipes, then `execve()` the binary.  
5. Parent waits (`waitpid`) or continues if background.

**Depth**  
*Parsing*: The shell uses a recursive descent parser to handle quoting, escaping, and operators (`|`, `>`, `<`).  
*Builtins*: Commands like `cd` modify the parent’s state; they’re executed without fork.  
*Forking*: `fork()` creates a copy of the process space; only the child changes I/O descriptors before calling `execve()`.  
*Redirection*: File descriptors are duplicated (`dup2`) to point to opened files or pipe ends.  
*Pipes*: `pipe()` gives two fds; the shell connects stdout of one child to stdin of the next.  
*Execution*: `execve()` replaces the child’s image with the target binary, inheriting the prepared file descriptors.  
*Cleanup*: The parent waits on each child (unless `&`), collects exit status, and frees resources.

**Edge Cases**  
- Syntax errors → report to stderr without fork.  
- No such file → `execve()` fails; shell prints “command not found”.  
- Infinite loops or zombie processes if the parent forgets to wait.  
- Signal handling (Ctrl‑C) must propagate to foreground jobs.

**Optimize & Communicate**  
Highlight that most shells cache parsed commands (`hash` table) and reuse file descriptors for performance. Explain how modern shells use `posix_spawn()` to reduce fork overhead on BSD/macOS. Conclude by stressing the trade‑off between simplicity (full fork/exec) versus efficiency (spawn, builtins). This demonstrates structured reasoning, technical depth, and awareness of system nuances—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
