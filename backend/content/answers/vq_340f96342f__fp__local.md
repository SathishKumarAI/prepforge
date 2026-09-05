---
qid: vq_340f96342f__fp__local
question: What is PYTHONPATH?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 431
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:39-05:00'
sources: []
---

**PYTHONPATH: a dynamic module‑lookup path**

When Python starts, it must resolve `import foo` to an actual file or package. The interpreter does this by walking a list of directories – the *module search path*. By default this list contains only the directory of the script being executed and the standard library locations.  

**Why a separate variable?**  
In real projects you often have third‑party libraries, local packages, or multiple versions that aren’t installed into site‑packages. You need to tell Python “look here too”. A hard‑coded list would be brittle; an environment variable lets any user or build system inject arbitrary paths at runtime without touching code.

**How it works**  
`PYTHONPATH` is simply a colon‑separated (or semicolon on Windows) string of directories. On startup, Python prepends these to `sys.path`. Thus:

```
import sys
print(sys.path)
# ['<script dir>', '/usr/lib/python3.x', ...]
```

After setting `PYTHONPATH=/home/me/mypkg`, the list becomes:

```
['/home/me/mypkg', '<script dir>', ...]
```

Python then searches each directory in order until it finds a matching module name. If two directories contain the same module, the first wins—this is how you can shadow standard libraries for testing.

**Non‑obvious insight**  
`PYTHONPATH` is *not* a security feature; it’s a tool for **module resolution isolation**. By manipulating it, you can temporarily override global packages or inject mock implementations without modifying `site-packages`. This makes it invaluable for unit tests, CI pipelines, and experimental prototypes where you need to experiment with different versions of the same library without reinstalling them.

In short, PYTHONPATH is a runtime hook that lets developers control module discovery, embodying Python’s principle of “explicit is better than implicit” while keeping dependency management flexible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
