---
qid: ing_69ed4b2447__think__local
question: 'Explain: A robotics customer asks for 50,000 hours of manipulation demonstrations
  across 12 tasks and three robot embodiments. Design the collection and data pipeline,
  and tell me what makes a single demonstration worth keeping.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 220
output_tokens: 689
total_tokens: 909
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:01:39-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**

- *Scope*: 50 k hours → roughly 6–7 M individual demonstrations (≈10 min each).  
- *Tasks*: 12 distinct manipulation goals (pick‑place, assembly, tool use…).  
- *Embodiments*: 3 robot variants (e.g., different arm lengths or grippers).  
- *Goal*: Build a reusable dataset that fuels learning and evaluation.  
- **Assumptions**: All robots share a common API; we can instrument them for logging; the customer wants high‑value, clean data.

---

**2️⃣ Mental model / framework**

1. **Data acquisition** → capture raw sensor streams (joint states, RGB/Depth, force).  
2. **Pre‑processing & labeling** → segment into task episodes, tag success/failure, annotate key frames.  
3. **Storage & indexing** → scalable object store + metadata catalog.  
4. **Quality control** → automated sanity checks + human review for edge cases.  
5. **Accessibility** → API/SDK for downstream training pipelines.

---

**3️⃣ Step‑by‑step reasoning**

1. *Instrumentation*: Equip each robot with a synchronized clock, event markers (start/end of task), and safety watchdogs.  
2. *Data capture*: Record joint trajectories at 100 Hz, RGB/D cameras at 30 fps, force/torque at 200 Hz. Store as compressed binary blobs plus timestamped metadata.  
3. *Segmentation*: Use event markers to split continuous streams into episodes; auto‑detect pauses >2 s as inter‑demo gaps.  
4. *Labeling*: Auto‑infer success from final state (e.g., object in target bin). Tag failure modes (collision, slip). Add human tags for ambiguous cases.  
5. *Storage*: Store raw blobs on an S3‑compatible bucket; maintain a PostgreSQL catalog with fields: demo_id, task_id, robot_type, duration, success_flag, hash.  
6. *QC pipeline*: Run sanity checks—trajectory continuity, sensor range limits, duplicate detection (hash). Flag outliers for manual review.  
7. *Retention policy*: Keep only demos that pass QC; archive or discard failed ones unless they provide valuable failure modes.  

---

**4️⃣ Common traps to avoid**

- **Over‑capturing**: Too many redundant trials inflate storage without adding learning value.  
- **Misaligned timestamps**: Unsynchronized sensors corrupt state estimation.  
- **Ignoring failures**: Dropping all failures removes critical edge‑case data for robust policies.  
- **Poor metadata**: Without rich tags, downstream models cannot differentiate tasks or embodiments.

---

**5️⃣ Sanity‑check & communicate**

- Verify total storage ≈ (50 k h × 10 min/demo) → ~6 M demos; estimate size (~1–2 TB).  
- Confirm each robot’s data rate matches expected throughput.  
- Present a sample demo: raw sensor logs + processed episode + success flag.  

By following this pipeline, every kept demonstration is **clean, well‑annotated, reproducible, and directly usable** for training high‑performance manipulation policies across the three embodiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
