---
qid: ing_4ec32c8fdf__faang__local
question: 'Explain: Understand the Project Goals: — Parking Lot System Design | Notion'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 393
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:47:51-05:00'
sources: []
---

**Clarify**

The interviewer wants you to articulate how you would **understand and translate business objectives into a machine‑learning solution for a parking‑lot system**.  
Assumptions: we have sensor data (CCTV/IR), real‑time occupancy targets, revenue goals, and regulatory constraints (e.g., ADA compliance).  

**Approach**

1. **Stakeholder Interviews** – capture KPIs: occupancy rate, revenue per square foot, average wait time.  
2. **Data Inventory** – list available streams: video frames, RFID tags, payment logs, weather API.  
3. **Goal Decomposition** – map high‑level objectives to ML sub‑tasks: detection, counting, forecasting, dynamic pricing.  

**Depth**

- *Detection*: Convolutional neural net (e.g., YOLOv8) trained on annotated images → 90 % precision/recall.  
- *Counting*: Temporal aggregation of detections; use Kalman filter to smooth counts.  
- *Forecasting*: LSTM or Prophet model predicting hourly occupancy, feeding into dynamic pricing module.  
- *Evaluation*: MAPE for forecasts, AUC‑ROC for detection, revenue lift as business metric.  

**Edge Cases**

- Sensor outages → fallback to historical averages.  
- Nighttime low lighting → use infrared augmentation.  
- Sudden events (sports game) → retrain model on recent data within 1 h.  

**Optimize & Communicate**

Explain trade‑offs: larger CNNs give higher accuracy but slower inference—optimize with ONNX/TensorRT for edge deployment. Discuss monitoring dashboards, A/B testing pricing strategies, and continuous retraining pipeline. Conclude by highlighting how each ML component directly drives the defined business goals, ensuring alignment with stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
