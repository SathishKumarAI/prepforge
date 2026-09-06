---
qid: ing_a487ff38d3__fp__local
question: 'Explain: F3: STDIO MCP server compromised via filesystem race'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 394
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:18-05:00'
sources: []
---

**F3 – “STDIO MCP Server Compromised via Filesystem Race”**

At its core, the problem is a *timing‑based privilege escalation* that exploits how the MCP (Machine Control Protocol) server creates temporary files on disk. The server receives a request, writes the payload to a file in `/tmp`, then spawns `stdio` to process it. An attacker can perform a *race* between the moment the server opens the file for writing and when the kernel assigns the inode. If the attacker pre‑creates a symlink or hardlink with the same name that points to an arbitrary target, the server will unwittingly write over that target before `stdio` reads it.  

Why this must work:  
- **Atomicity of open(2)** guarantees that once the file is opened for writing, no other process can claim that inode until the file descriptor is closed.  
- The *race window* (the few microseconds between opening and closing) is sufficient on most filesystems to inject a malicious link because user processes can create symlinks in `/tmp` with the same name concurrently.  

Underlying principle: **Information‑flow control via resource ownership**. The server assumes that once it owns a file descriptor, it owns the underlying inode; this assumption breaks when the filesystem’s namespace is mutable during the race.  

Non‑obvious insight: The attack does *not* require kernel bugs or elevated privileges—only the fact that `stdio` inherits the same open file table entry. Thus, securing the server boils down to enforcing *atomic creation* (`O_CREAT|O_EXCL`) and using a dedicated, immutable directory (e.g., `/var/lib/mcp/tmp`) with strict permissions, rather than patching user‑land utilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
