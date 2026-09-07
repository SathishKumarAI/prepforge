---
qid: ing_a9a0e712b1__aws__local
question: 'Explain: Avoiding the smoke - how to breath clean air'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 498
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:49-05:00'
sources: []
---

**Avoiding the Smoke – Breathing Clean Air with AI**

**Situation:** In my last role as Lead Cloud Architect for a smart‑building startup, we received complaints that occupants were still breathing polluted air even after installing high‑efficiency filters. The client’s KPI was to keep indoor CO₂ < 800 ppm and particulate matter < 35 µg/m³.

**Task:** I owned the end‑to‑end solution: detect “smoke” (excess pollutants), isolate its source, and automatically adjust HVAC settings in real time.

**Action:**  
1. **Data‑Driven Sensing** – Deployed AWS IoT Core to stream 100+ sensor readings per minute from CO₂, PM2.5, VOC, and temperature probes.  
2. **Modeling & Inference** – Trained a SageMaker model (Random Forest + LSTM) on historic data to predict pollutant spikes with 92 % accuracy. The model runs in real time via AWS Lambda, triggering an EventBridge rule.  
3. **Automated Response** – Lambda updates an Amazon DynamoDB “AirQuality” table and sends commands to the building’s HVAC API (via IoT Device Shadow).  
4. **Observability** – Integrated CloudWatch metrics & X-Ray traces; alerts sent to Slack with severity levels.

**Result:** After deployment, average indoor CO₂ dropped from 1,200 ppm to 650 ppm (46 % reduction) and PM2.5 fell by 68 %. Energy consumption rose only 3 %, and the system handled a 500 % sensor traffic spike during a summer heatwave without downtime.

**Reflection:** I practiced *Ownership* by owning every layer, *Dive Deep* through continuous profiling, and *Bias for Action* by iterating in two‑week sprints. The bar‑raiser will note my quantified impact, deep technical trade‑offs (Lambda cold starts vs. edge inference), and lessons learned from a false‑positive spike that led to refining the feature importance weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
