---
qid: vq_d373fc83be__star__local
question: What’s the hottest or coldest day you remember?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 277
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:12-05:00'
sources: []
---

**Situation:** During my final semester at university, we had a week‑long hackathon in August. The campus was sweltering—air‑conditioners were maxed out, and the humidity made every line of code feel like it was being written in syrup.

**Task:** My team needed to build an IoT weather dashboard that could predict microclimate changes for local farmers within 15 minutes, all while keeping power consumption below 50 mA on battery‑powered sensors.

**Action:** I led the sensor calibration effort. Using a low‑power STM32F4 and an INA219 current monitor, I tweaked the ADC reference voltage to reduce noise in the high‑temperature environment. I also implemented a dynamic sleep mode that throttled the MCU clock by 80 % when temperature readings stabilized. To validate accuracy, I set up a parallel Raspberry Pi logger for ground truth comparison.

**Result:** We delivered the dashboard on time, and our power budget stayed at 47 mA—below the target—while achieving ±0.5 °C accuracy during peak heat. The project won “Best IoT Solution,” and I learned how environmental stressors demand adaptive hardware design rather than just software fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
