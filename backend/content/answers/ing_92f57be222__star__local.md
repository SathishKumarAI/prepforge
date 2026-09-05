---
qid: ing_92f57be222__star__local
question: 'Explain: Layout, injection resistance, long context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 431
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:49-05:00'
sources: []
---

**Situation** – I was leading the analog front‑end design of a new AI accelerator’s on‑chip SRAM for a speech‑recognition module. The spec called for storing 32 kB of context data with a maximum read latency of 5 ns and an injection resistance of at least 200 MΩ to keep noise from digital logic low.

**Task** – My goal was to layout the memory array so that we met both the long‑context requirement (ensuring every word could be accessed within the timing budget) and the stringent injection‑resistance spec, while keeping area under the 0.18 µm process limits.

**Action** – I started by sizing each bitcell with a high‑aspect‑ratio capacitor to increase storage density. To boost injection resistance I wrapped every row in a deep‑N well guard ring, then added a thin silicon‑on‑insulator (SOI) isolation layer beneath the sense amplifiers. For long context, I organized the array into 256 rows of 128 words and implemented a two‑phase read/write clock that kept the bitlines precharged for only 1 ns before sensing, reducing leakage. I used Cadence Virtuoso to run LVS/RC extraction; the extracted resistance between digital blocks and SRAM nodes was 260 MΩ.

**Result** – The final layout met the 200 MΩ injection‑resistance target and allowed every word to be read within 4.3 ns, beating the spec by 0.7 ns. We saved 12 % of die area compared to the baseline design, and I learned that combining guard rings with SOI isolation is a highly effective strategy for long‑context memories in AI chips.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
