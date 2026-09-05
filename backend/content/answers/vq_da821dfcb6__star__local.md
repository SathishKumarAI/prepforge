---
qid: vq_da821dfcb6__star__local
question: When do you get a .PLL extension ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:47-05:00'
sources: []
---

**Situation:**  
During a firmware upgrade for our high‑speed data acquisition board, we had to double the sampling rate from 100 MHz to 200 MHz without changing the external crystal. The board’s FPGA (Intel Cyclone IV) already ran a 50 MHz reference clock, and the design required a new 200 MHz system clock for the ADC interface.

**Task:**  
I needed to create a stable 200 MHz clock source inside the FPGA while keeping jitter low enough for the analog front‑end. The project deadline was two weeks before the next test cycle, so any solution had to be verified quickly and integrated into the existing Quartus flow.

**Action:**  
I opened Quartus Prime and launched the PLL Wizard to generate a 200 MHz clock from the 50 MHz reference. The wizard produced a `system_pll.sv` file and an accompanying `.pll` configuration file that defined multiplication/division factors, phase offset, and output frequency. I added the generated module to our top‑level entity, wired the new clock into the ADC interface logic, and updated the synthesis constraints (`*.qsf`) to reference the new clock name. After running synthesis and implementation, I used Quartus’ timing analyzer to confirm that the PLL’s jitter met the 20 ps requirement.

**Result:**  
The board achieved a clean 200 MHz system clock with sub‑10 ps RMS jitter, enabling the ADC to capture data at double the rate without error. The .pll file was crucial for Quartus to generate the correct PLL primitive during compilation, and it allowed us to version‑control the exact clock configuration. This experience taught me how tightly coupled the wizard’s output is to the FPGA’s internal PLL primitives, and how a single `.pll` file can save hours of manual register programming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
