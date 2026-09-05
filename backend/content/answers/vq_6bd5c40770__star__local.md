---
qid: vq_6bd5c40770__star__local
question: How do I change the printed value of a field at runtime?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:05-05:00'
sources: []
---

**Situation** – In my second internship I was tasked with generating a real‑time status report for an embedded sensor array. The firmware printed raw register values in hexadecimal, but the QA team needed human‑readable units (volts and degrees) to validate calibration.

**Task** – I had to change how the diagnostic output rendered each field without touching the low‑level driver code or recompiling the entire firmware bundle.

**Action** – I introduced a lightweight “print hook” table: an array of function pointers indexed by field ID. Each hook received the raw 16‑bit value and returned a formatted string via `snprintf`. In the main logging routine, I replaced the static `printf("%04X", reg)` with a call to `print_hooks[id](reg, buffer)`. This kept the driver untouched, allowed dynamic switching of formats (hex vs. float), and avoided global state by passing context through the hook’s second argument. I also added a compile‑time flag to enable or disable hooks for production builds.

**Result** – The diagnostic console now displays 12 sensor values in clear units at 10 Hz, reducing QA turnaround from days to minutes. The patch was accepted into the next firmware release and later adopted by two other teams. I learned how to decouple presentation logic from hardware access using function pointers and minimal runtime overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
