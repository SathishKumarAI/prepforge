---
qid: vq_6355b8dd82__fp__local
question: On Unix, how do you make a Python script executable?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 392
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:51-05:00'
sources: []
---

On Unix the operating system decides whether a file is *executable* by looking at two things:  

1. **The permission bits** – only the *x* bit can trigger the kernel to run it as a program.  
2. **The shebang line (`#!`)** – this tells the kernel which interpreter should execute the script’s bytes.

Why do we need both? The permission bits are the Unix abstraction for “can I be run?”; they’re independent of content. Without them, the shell will refuse to start a file even if it contains a valid program. The shebang is an *execution directive* that bridges the gap between a generic executable bit and the specific interpreter required. It’s essentially a minimal bootstrap: the kernel hands off the file to `/usr/bin/python3` (or whatever path you give) with the script’s pathname as an argument, then the interpreter reads the file from standard input.

**Non‑obvious insight:** The shebang is *not* parsed by Python; it is handled entirely by the kernel. Therefore, if you change the interpreter path after making a script executable, you must also modify the line to keep it functional—unlike typical source code changes that are invisible to the OS.

### Practical steps

```bash
# 1. Add a shebang at the very top of your file
#!/usr/bin/env python3
print("Hello, world!")

# 2. Make it executable
chmod +x myscript.py

# 3. Run it directly
./myscript.py
```

`/usr/bin/env` is preferred because it finds `python3` in the user’s `$PATH`, making the script portable across environments where Python may live in different locations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
