---
qid: ing_69ed4b2447__faang__local
question: 'Explain: A robotics customer asks for 50,000 hours of manipulation demonstrations
  across 12 tasks and three robot embodiments. Design the collection and data pipeline,
  and tell me what makes a single demonstration worth keeping.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 520
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:07-05:00'
sources: []
---

**Clarify**  
The client needs *50 k* labeled manipulation demos for **12 distinct tasks** (e.g., pick‑and‑place, screw tightening) on **three robot embodiments** (say ABB, KUKA, custom arm). I’ll assume:  
- Each demo is a single trial from start to finish.  
- The goal is to train robust policies that generalize across embodiments.  
- Data should be stored in a format that preserves kinematics, sensor streams, and task metadata.

**Approach**  
1. **Sampling strategy** – Randomly pair tasks with embodiments; use stratified sampling to hit 50 k evenly (≈4 k per task‑embodiment).  
2. **Data capture** – Use a unified ROS/ROS‑2 interface: log joint states, end‑effector pose, force/torque, camera frames, and task tags.  
3. **Storage & versioning** – Store raw streams in HDF5/Parquet on a distributed file system; maintain a metadata catalog (SQL or Elastic).  
4. **Pre‑processing pipeline** –  
   - Sync multi‑modal streams.  
   - Detect and discard failed trials (e.g., collision, timeout).  
   - Segment into meaningful primitives using change‑point detection.  
5. **Quality gate** – A demo is kept only if it:  
   - Completes the task within a time budget.  
   - Shows smooth kinematics (no abrupt jerks).  
   - Has no sensor anomalies (e.g., clipped force readings).  
   - Is labeled with correct success/failure tags.

**Depth**  
- **Complexity:** Capture is O(N) where N=50 k; preprocessing linear as well.  
- **Trade‑offs:** Storing raw data vs. compressed representations; we keep raw for future feature engineering but maintain a lightweight summary for quick QA.

**Edge Cases**  
- Ambiguous task boundaries → use explicit start/stop markers.  
- Embodiment drift (joint limits) → normalize joint space per robot.  
- Missing sensor data → flag and drop the demo.

**Optimize & Communicate**  
We’ll automate the pipeline with Airflow DAGs, enabling incremental ingestion and real‑time quality dashboards. By clearly documenting the “quality gate” rules, stakeholders understand why each demo is retained, ensuring reproducible, high‑value datasets for downstream learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
