---
qid: vq_df17a2608a__faang__local
question: reflects. An example is, what will the temperature be tomorrow?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 497
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:54-05:00'
sources: []
---

**Clarify**  
The interviewer wants us to explain how an AI system could predict tomorrow’s temperature for a specific location (e.g., New York City). I’d confirm: *Which forecast horizon?* *What data sources are available?* *Do we need real‑time or batch predictions?* *How accurate must the model be?*  

**Approach**  
1. **Data ingestion** – historical weather records, satellite imagery, sensor streams, and numerical weather prediction (NWP) outputs.  
2. **Feature engineering** – lagged temperatures, humidity, wind vectors, geopotential heights, and temporal markers (day‑of‑year, hour).  
3. **Model selection** – a hybrid of physics‑based NWP as a baseline with a deep learning residual layer (e.g., ConvLSTM or Transformer) that learns correction patterns.  
4. **Training & evaluation** – train on multi‑year data, validate via rolling origin cross‑validation, target RMSE < 1.5 °C.  
5. **Deployment** – serve as an API with daily updates; monitor drift and retrain monthly.

**Depth**  
- *Physics component*: run the WRF model to produce a 48‑hour forecast grid at 12 km resolution (≈ 3 h intervals).  
- *Learning component*: ConvLSTM ingests the last 24 h of NWP fields, outputs residuals; final prediction = NWP + residual.  
- Complexity: inference O(T·C) where T=sequence length, C=conv channels; acceptable for a single city (~0.1 s).  
- Trade‑offs: pure DL may overfit to local patterns but lacks long‑range physical consistency.

**Edge Cases**  
- Sudden fronts or tornadoes—model will lag due to data latency.  
- Missing sensor data—fallback to nearest neighbor interpolation.  
- Model drift during climate shifts—monitor bias and trigger retrain.

**Optimize & Communicate**  
Explain that adding ensemble averaging of multiple NWP runs reduces variance, and incorporating attention on weather regimes (e.g., jet‑stream position) further sharpens accuracy. Conclude with a brief demo of the API call and expected latency, highlighting how this pipeline balances physics fidelity with ML adaptability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
