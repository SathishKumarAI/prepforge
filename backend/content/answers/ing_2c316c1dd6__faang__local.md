---
qid: ing_2c316c1dd6__faang__local
question: 'Explain: Permission — Linux File Permissions Illustrated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 428
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:25:58-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *Linux file permissions* work—what the bits mean, who can read/write/execute them, and why they’re important for security.

**Approach**  
1. Break down the three classes (owner, group, others).  
2. Show numeric vs symbolic notation.  
3. Explain `chmod`, `chown`, `chgrp`.  
4. Highlight common pitfalls (e.g., set‑uid, sticky bit).

**Depth**  
- Each file/directory has 9 permission bits:  
  - **Owner** – r (4), w (2), x (1).  
  - **Group** – same.  
  - **Others** – same.  
  Numeric mode is the sum of these (e.g., `chmod 755 file` → owner rwx=7, group rx=5, others rx=5).  
- Symbolic: `u=rwx,g=rx,o=rx`.  
- `chmod +x script.sh` toggles execute for all.  
- `chown user:group file` changes ownership; `chgrp` only the group.  
- Special bits: set‑uid (4 000), set‑gid (2 000), sticky (1 000) alter execution or directory behavior.

**Edge Cases**  
- Directories need execute to traverse; read lists contents.  
- Files with no execute bit can’t be run as programs.  
- Sticky bit on `/tmp` prevents users from deleting others’ files.  
- Mis‑set set‑uid can give unintended root access.

**Optimize & Communicate**  
Conclude by noting best practices: least‑privilege, use ACLs for fine control, audit with `ls -lZ`. Frame the answer as a quick cheat‑sheet that a senior engineer could hand to a junior dev, emphasizing clarity and security implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
